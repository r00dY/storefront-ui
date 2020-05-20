import { useState, useEffect } from "react";

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

const normalizeSelectOptions = options =>
  options.map(option => {
    if (typeof option === "object") {
      if (option.id === undefined || option.id === null) {
        throw new Error(
          `[useSelectState] options must have id, this option doesn't: ${option}`
        );
      }

      if (typeof option.__originalOption !== "undefined") {
        // you can't normalize already normalized value
        return option;
      }

      if (!option.label) {
        return {
          ...option,
          label: option.id,
          __originalOption: option
        };
      }
      return option;
    }

    if (option === null || option === undefined) {
      throw new Error(`[useSelectState] options can't be null or undefined`);
    }

    // throw new Error("options must be objects with ID!!!");
    return {
      id: option,
      label: option,
      __originalOption: option
    };
  });

const originalValue = val => {
  return val === null
    ? null
    : typeof val.__originalOption !== "undefined"
    ? val.__originalOption
    : val;
};

const originalValueArray = arr => {
  return arr.map(originalValue);
};

export const normalizeSelectValue = (options, val, allowEmpty) => {
  options = normalizeSelectOptions(options);

  let valueId = typeof val === "object" && val !== null ? val.id : val;
  let valueObject = options.find(o => o.id === valueId);
  val = valueObject || (allowEmpty ? null : options[0]);
  return val;
};

const getValIndex = (options, val) => {
  if (val === null) {
    return null;
  }
  const index = options.findIndex(x => x.id === val.id);
  if (index === -1) {
    return null;
  }
  return index;
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

function useSelectState(props) {
  let {
    options,
    value, // can be object or id
    defaultValue, // can be object or id
    onChange,
    allowEmpty = true
  } = props;

  // UNCONTROLLED ONLY IF: value === "undefined"
  const isControlled = typeof value !== "undefined";

  let [internalValue, setInternalValue] = useState(
    normalizeSelectValue(options, defaultValue, allowEmpty)
  );

  const currentValue = isControlled ? value : internalValue;

  return useSelectState_controlled({
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

export function useSelectState_controlled(props) {
  let {
    options,
    value, // can be object or id
    // defaultValue, // can be object or id
    onChange,
    allowEmpty = true
  } = props;

  options = normalizeSelectOptions(options);

  // Let's see if value or defaultValue is one from the options list or not

  const currentValue = normalizeSelectValue(options, value, allowEmpty);

  const setValue = newVal => {
    newVal = normalizeSelectValue(options, newVal, allowEmpty);

    if (newVal === null && currentValue === null) {
      return;
    }
    if (newVal && currentValue && newVal.id === currentValue.id) {
      return;
    }

    if (onChange) {
      onChange(originalValue(newVal), getValIndex(options, newVal));
    }
  };

  return {
    value: originalValue(currentValue),
    valueObject: currentValue,
    empty: currentValue === null,
    selectedIndex: getValIndex(options, currentValue),
    options,
    reset: () => {
      setValue(null);
    },
    setValue
  };
}

useSelectState.filterProps = filterProps;

function are2ArraysOfValuesEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let ids = {};
  arr1.forEach(val => {
    ids[val.id] = true;
  });

  for (let i = 0; i < arr2.length; i++) {
    const id = arr2[i];

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

  return {
    value: originalValueArray(normalizedValue),
    valueObject: normalizedValue,
    selectedIndex: getValIndexArray(options, normalizedValue),
    options,
    reset: () => {
      setValue([]);
    },
    setValue
  };
}

const useMultiSelectState = useMultiSelectState_controlled;

export default useMultiSelectState;
