import { useState, useEffect } from "react";
import {
  getValIndex,
  normalizeSelectOptions,
  normalizeSelectValue,
  originalValue,
  useSelectState_controlled
} from "../useSelectState";

function filterProps(props) {
  const {
    options,
    value, // can be object or id
    defaultValue, // can be object or id
    onChange,
    allowEmpty,

    ...restProps
  } = props;

  return restProps;
}

const originalValueArray = arr => {
  return arr.map(originalValue);
};

const getValIndexArray = (options, arr) => {
  return arr.map(val => getValIndex(options, val));
};

export const normalizeMultiSelectValue = (options, val) => {
  options = normalizeSelectOptions(options);

  if (val === null || val === undefined) {
    return [];
  }

  if (!Array.isArray(val)) {
    return [];
  }

  let newVal = [];

  for (let i = 0; i < val.length; i++) {
    let v = val[i];

    if (v === null || v === undefined) {
      continue;
    }

    let valueObject = v;
    if (typeof v !== "object") {
      // if value is not object, then we treat it as id
      valueObject = options.find(o => o.id === v);
    }

    if (
      !valueObject ||
      valueObject.id === null ||
      valueObject.id === undefined
    ) {
      continue;
    }

    newVal.push(valueObject);
  }

  return newVal;
};

function are2ArraysOfValuesEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let ids = {};
  arr1.forEach(val => {
    ids[val.id] = true;
  });

  for (let i = 0; i < arr2.length; i++) {
    const id = arr2[i].id;

    if (ids[id] !== true) {
      return false;
    }
  }

  return true;
}

export function useMultiSelectState_controlled(props) {
  let {
    options,
    value, // must be array
    onChange
  } = props;

  options = normalizeSelectOptions(options);

  const normalizedValue = normalizeMultiSelectValue(options, value);

  const setValue = newVal => {
    newVal = normalizeMultiSelectValue(options, newVal);

    if (are2ArraysOfValuesEqual(newVal, normalizedValue)) {
      return;
    }

    if (onChange) {
      onChange(originalValueArray(newVal), getValIndexArray(options, newVal));
    }
  };

  const isSelected = val => {
    if (val === undefined || val === null) {
      return false;
    }

    let id = typeof val === "object" ? val.id : val;

    if (normalizedValue.find(x => x.id === id)) {
      return true;
    }
    return false;
  };

  return {
    value: originalValueArray(normalizedValue),
    valueObject: normalizedValue,
    selectedIndex: getValIndexArray(options, normalizedValue),
    options,
    reset: () => {
      setValue([]);
    },
    setValue,
    isSelected,
    selectValue: val => {
      if (isSelected(val)) {
        return;
      } else {
        setValue([...normalizedValue, val]);
      }
    },
    unselectValue: val => {
      if (!isSelected(val)) {
        return;
      } else {
        setValue(
          normalizedValue.filter(x => !(x.id === val.id || x.id === val))
        );
      }
    }
  };
}

function useMultiSelectState(props) {
  let {
    options,
    value, // can be object or id
    defaultValue, // can be object or id
    onChange
  } = props;

  // UNCONTROLLED ONLY IF: value === "undefined"
  const isControlled = typeof value !== "undefined";

  let [internalValue, setInternalValue] = useState(
    normalizeMultiSelectValue(options, defaultValue)
  );

  const currentValue = isControlled ? value : internalValue;

  return useMultiSelectState_controlled({
    ...props,
    value: currentValue,
    onChange: (newVal, index) => {
      if (!isControlled) {
        setInternalValue(newVal);
      }

      if (onChange) {
        onChange(newVal, index);
      }
    }
  });
}

export default useMultiSelectState;
