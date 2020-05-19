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
  const commitedValues = useRef({});
  const previousValues = useRef({});

  const values = {}; // normalized values based on current data
  data.forEach(filter => {
    values[filter.id] = normalizeFilterValue(filter);
  });

  const [counter, setCounter] = useState(0);

  const getDataWithCurrentValues = () => {
    return data.map(item => ({
      ...item,
      value: localValues.current[item.id] || values[item.id]
    }));
  };

  const setValue = (id, newValue, isSoft = false) => {
    // normalize
    let filter = data.find(x => x.id === id);
    newValue = normalizeFilterValue({ ...filter, value: newValue });

    localValues.current[id] = newValue;

    if (!isSoft) {
      commitedValues.current[id] = newValue;

      const newData = getDataWithCurrentValues();

      onChange(newData);
    }

    setCounter(counter + 1);
  };

  let isAnyDirty = false;

  const filters = internalData.map((item, index) => {
    let isDirty = !areEqual(
      localValues.current[item.id],
      commitedValues.current[item.id]
    );

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
      commitedValues.current = { ...localValues.current };
      const newData = getDataWithCurrentValues();
      onChange(newData);
      setCounter(counter + 1);
    },
    isDirty: isAnyDirty
  };
}

export default useFilters;
