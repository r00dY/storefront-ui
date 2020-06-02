import React, { useState, useRef } from "react";

import { normalizeSelectValue } from "../useSelectState";

import { normalizeMultiSelectValue } from "../useMultiSelectState";

import { normalizeRangePickerValue } from "../RangePicker";

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
  } else if (filter.type === "range") {
    return normalizeRangePickerValue(filter);
  } else {
    return null;
  }
};

/**
 * TODO: don't run onChange when nothing changed (even if commit was run)
 */

// for now: enableReinitalize not available, we assume true.
function useFilters({ data, onChange }) {
  const [counter, setCounter] = useState(0);

  const localValues = useRef({});
  const committedValues = useRef({});
  const previousValues = useRef({});

  const values = {}; // normalized values based on current data
  data.forEach(filter => {
    values[filter.id] = normalizeFilterValue(filter);
  });

  // UPDATE local values (makes sense if data changes and we have different filters structure)
  // Thanks to refs we can do this "right away", not on useEffect and cause re-render.

  for (let filterId in localValues.current) {
    // If new value for this filter from props is different from previous value from props (like value from server changed)
    if (!areEqual(values[filterId], previousValues.current[filterId])) {
      delete localValues.current[filterId];
      delete committedValues.current[filterId];
    }

    // If this filterId is not in the list anymore
    if (!values.hasOwnProperty(filterId)) {
      delete localValues.current[filterId];
      delete committedValues.current[filterId];
    }
  }

  previousValues.current = { ...values };

  const getDataWithCurrentValues = () => {
    return data.map(item => ({
      ...item,
      value: localValues.current[item.id] || values[item.id],
      committedValue: committedValues.current[item.id] || values[item.id]
    }));
  };

  const setValue = (id, newValue, isSoft = false) => {
    // normalize
    let filter = data.find(x => x.id === id);
    newValue = normalizeFilterValue({ ...filter, value: newValue });

    localValues.current[id] = newValue;

    if (!isSoft) {
      committedValues.current[id] = newValue;

      const newData = getDataWithCurrentValues();

      if (onChange) {
        onChange(newData);
      }
    }

    setCounter(counter + 1);
  };

  let isAnyDirty = false;

  const commit = () => {
    committedValues.current = { ...localValues.current };
    const newData = getDataWithCurrentValues();

    if (onChange) {
      onChange(newData);
    }
    setCounter(counter + 1);
  };

  const filters = getDataWithCurrentValues().map((item, index) => {
    let value = item.value;
    let committedValue = item.committedValue;

    const nullValue = normalizeFilterValue({
      ...item,
      value: null
    });

    let isDirty = !areEqual(value, committedValue);
    let isEmpty = areEqual(value, nullValue);
    let isCommittedEmpty = areEqual(committedValue, nullValue);

    value = isEmpty ? null : value;
    committedValue = isCommittedEmpty ? null : committedValue;

    if (isDirty) {
      isAnyDirty = true;
    }

    const selectProps = soft =>
      (item.type === "select" || item.type === "multiselect") && {
        options: item.options,
        allowEmpty: true,
        value: value,
        onChange: newVal => setValue(item.id, newVal, soft)
      };

    const rangePickerProps = soft =>
      item.type === "range" && {
        min: item.min,
        max: item.max,
        allowEmpty: item.allowEmpty,
        value: value,
        onChange: (newVal, isCommit) => {
          setValue(item.id, newVal, !isCommit || soft);
        }
      };

    const clearButtonProps = soft => ({
      onClick: () => {
        setValue(item.id, null, soft);
      }
    });

    const commitButtonProps = soft => ({
      onClick: () => {
        commit();
      },
      disabled: !isDirty
    });

    return {
      ...item,
      selectProps: selectProps(false),
      rangePickerProps: rangePickerProps(false),
      clearButtonProps: clearButtonProps(false),
      commitButtonProps,
      soft: {
        selectProps: selectProps(true),
        rangePickerProps: rangePickerProps(true),
        clearButtonProps: clearButtonProps(true)
      },
      isDirty,
      isEmpty,
      isCommittedEmpty,
      value,
      committedValue
    };
  });

  return {
    filters,
    setValue,
    clearAll: isSoft => {
      data.forEach(item => {
        setValue(item.id, null, isSoft);
      });
    },
    commit,
    isDirty: isAnyDirty
  };
}

export default useFilters;
