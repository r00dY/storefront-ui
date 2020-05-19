import React, { useState, useRef } from "react";

import {
  normalizeSelectValue,
  useSelectState_controlled
} from "../useSelectState";

const normalizeData = item => {
  const ret = {
    ...item
  };

  if (ret.type === "select") {
    ret.value = normalizeSelectValue(ret.options, ret.value, true);
  } else {
    ret.value = null; // TODO: do this
  }
  return ret;
};

const areEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

function getValuesObject(data) {
  let obj = {};
  data.forEach(item => {
    obj[item.id] = item.value;
  });

  return obj;
}

const normalizeFilterValue = filter => {
  if (filter.type === "select") {
    return normalizeSelectValue(filter.options, filter.value, true);
  } else {
    return null;
  }
};

// for now: enableReinitalize not available, we assume true.
function useFilters({ data, onChange }) {
  const [internalData_, setInternalData] = useState(data);
  const [committedData_, setCommittedData] = useState(data);

  // internalData is normalized internalData_
  const internalData = internalData_.map(item => normalizeData(item));
  const committedData = committedData_.map(item => normalizeData(item));

  const localValues = useRef({});
  const previousValues = useRef({});

  const values = {}; // normalized values based on current data
  data.forEach(filter => {
    values[filter.id] = normalizeFilterValue(filter);
  });

  const [counter, setCounter] = useState(0);

  const setValue = (id, newValue, isSoft = false) => {
    // normalize
    let filter = data.find(x => x.id === id);
    newValue = normalizeFilterValue({ ...filter, value: newValue });

    localValues.current[id] = newValue;
    setCounter(counter + 1);

    let newData = data.map(filter => ({
      ...filter,
      value: localValues.current[filter.id] || values[filter.id]
    }));

    onChange(newData);

    // setInternalData(newData);
    if (!isSoft) {
      // setCommittedData(newData);
      // onChange(internalData);
    }
  };

  let isAnyDirty = false;

  const filters = internalData.map((item, index) => {
    let isDirty = !areEqual(
      localValues.current[item.id] || null,
      values[item.id]
    );

    console.log("---", localValues.current[item.id] || null, values[item.id]);

    isDirty = false;
    if (isDirty) {
      isAnyDirty = true;
    }

    return {
      ...item,
      value: localValues.current[item.id] || values[item.id],
      selectProps: (item.type === "select" || item.type === "multiselect") && {
        options: item.options,
        allowEmpty: true,
        value: item.value === undefined ? null : item.value,
        onChange: newVal => setValue(item.id, newVal)
      },
      clearButtonProps: {
        onClick: () => {
          setValue(item.id, null);
        }
      },
      isDirty
    };
  });

  return {
    filters,
    setValue,
    commit: () => {
      setCommittedData(internalData_);
      onChange(internalData);
    },
    isDirty: isAnyDirty
  };
}

export default useFilters;
