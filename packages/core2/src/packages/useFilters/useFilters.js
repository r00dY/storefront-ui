import React, { useState, useRef } from "react";

import { normalizeSelectValue } from "../useSelectState";

import { normalizeMultiSelectValue } from "../useMultiSelectState";

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
  } else if (filter.type === "multiselect") {
    return normalizeMultiSelectValue(filter.options, filter.value);
  } else {
    return null;
  }
};

// for now: enableReinitalize not available, we assume true.
function useFilters({ data, onChange }) {
  const [counter, setCounter] = useState(0);
  //
  // const [internalData_, setInternalData] = useState(data);
  // const [committedData_, setCommittedData] = useState(data);
  //
  // // internalData is normalized internalData_
  // const internalData = internalData_.map(item => normalizeData(item));
  // const committedData = committedData_.map(item => normalizeData(item));

  const localValues = useRef({});
  const commitedValues = useRef({});
  const previousValues = useRef({});

  const values = {}; // normalized values based on current data
  data.forEach(filter => {
    values[filter.id] = normalizeFilterValue(filter);
  });

  // UPDATE local values (makes sense if data changes and we have different filters structure)
  // Thanks to refs we can do this "right away", not on useEffect and cause re-render.

  for (let filterId in localValues.current) {
    let value = localValues.current[filterId];

    // If new value for this filter from props is different from previous value from props (like value from server changed)
    if (!areEqual(values[filterId], previousValues.current[filterId])) {
      delete localValues.current[filterId];
      delete commitedValues.current[filterId];
    }

    // If this filterId is not in the list anymore
    if (!values.hasOwnProperty(filterId)) {
      delete localValues.current[filterId];
      delete commitedValues.current[filterId];
    }
  }

  previousValues.current = { ...values };

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

  const filters = getDataWithCurrentValues().map((item, index) => {
    let isDirty = !areEqual(
      localValues.current[item.id],
      commitedValues.current[item.id]
    );

    if (isDirty) {
      isAnyDirty = true;
    }

    return {
      ...item,
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
