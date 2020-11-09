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
    return data.map(item => {
      let value =
        localValues.current[item.id] === undefined
          ? values[item.id]
          : localValues.current[item.id]; // null means that it was set by clear
      let committedValue =
        committedValues.current[item.id] === undefined
          ? values[item.id]
          : committedValues.current[item.id];

      const nullValue = normalizeFilterValue({
        ...item,
        value: null
      });

      let isDirty = !areEqual(value, committedValue);
      let isEmpty = areEqual(value, nullValue);
      let isCommittedEmpty = areEqual(committedValue, nullValue);

      value = isEmpty ? null : value;
      committedValue = isCommittedEmpty ? null : committedValue;

      return {
        ...item,
        value,
        committedValue,
        isDirty,
        isEmpty,
        isCommittedEmpty
      };
    });
  };

  const setValue = (id, newValue, isSoft = false, runOnChange = true) => {
    // normalize
    let filter = data.find(x => x.id === id);
    newValue = normalizeFilterValue({ ...filter, value: newValue });

    if (areEqual(newValue, localValues.current[id])) {
      // don't run onChange when requesting same change
      return;
    }

    localValues.current[id] = newValue;

    if (!isSoft) {
      committedValues.current[id] = newValue;

      const newData = getDataWithCurrentValues();

      if (onChange && runOnChange) {
        onChange(newData);
      }
    }

    setCounter(counter + 1);
  };

  let isAnyDirty = false;
  let areAllEmpty = true;

  const currentData = getDataWithCurrentValues();

  currentData.forEach(item => {
    if (item.isDirty) {
      isAnyDirty = true;
    }

    if (!item.isEmpty) {
      areAllEmpty = false;
    }
  });

  const commit = () => {
    committedValues.current = { ...localValues.current };
    const newData = getDataWithCurrentValues();

    if (onChange && isAnyDirty) {
      onChange(newData);
    }
    setCounter(counter + 1);
  };

  const filters = currentData.map((item, index) => {
    if (item.isDirty) {
      isAnyDirty = true;
    }

    if (!item.isEmpty) {
      areAllEmpty = false;
    }

    const selectProps = soft =>
      item.type === "select" || item.type === "multiselect"
        ? {
            options: item.options,
            allowEmpty: true,
            value: item.value,
            onChange: newVal => setValue(item.id, newVal, soft)
          }
        : undefined;

    const rangePickerProps = soft =>
      item.type === "range"
        ? {
            min: item.min,
            max: item.max,
            allowEmpty: item.allowEmpty,
            value: item.value,
            onChange: (newVal, isCommit) => {
              setValue(item.id, newVal, !isCommit || soft);
            },
            fractionDigits: item.fractionDigits
          }
        : undefined;

    const clearButtonProps = soft => ({
      onClick: () => {
        setValue(item.id, null, soft);
      }
    });

    const commitButtonProps = soft => ({
      onClick: () => {
        commit();
      },
      disabled: !item.isDirty
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
      }
    };
  });

  return {
    filters,
    setValue,
    clearAll: isSoft => {
      data.forEach((item, index) => {
        setValue(item.id, null, isSoft, false); // only last iteration should run onChange!
      });

      if (!isSoft && !areAllEmpty && onChange) {
        onChange(getDataWithCurrentValues());
      }
    },
    commit,
    isDirty: isAnyDirty,
    isEmpty: areAllEmpty
  };
}

export default useFilters;
