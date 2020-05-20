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

export const normalizeSelectOptions = options =>
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

export const originalValue = val => {
  return val === null
    ? null
    : typeof val.__originalOption !== "undefined"
    ? val.__originalOption
    : val;
};

export const normalizeSelectValue = (options, val, allowEmpty) => {
  options = normalizeSelectOptions(options);

  let valueId = typeof val === "object" && val !== null ? val.id : val;
  let valueObject = options.find(o => o.id === valueId);
  val = valueObject || (allowEmpty ? null : options[0]);
  return val;
};

export const getValIndex = (options, val) => {
  if (val === null) {
    return null;
  }
  const index = options.findIndex(x => x.id === val.id);
  if (index === -1) {
    return null;
  }
  return index;
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

export default useSelectState;
