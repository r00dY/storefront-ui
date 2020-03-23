import React, { useState } from "react";

// Toggle state is select state with 2 assumptions
// - options is [false, true]
// - allowEmpty doesn't make sense, it's always false

function filterProps(props) {
  const {
    value, // can be object or id
    defaultValue, // can be object or id
    onChange,

    ...restProps
  } = props;

  return restProps;
}

function useToggleState(props) {
  let {
    value, // can be object or id
    defaultValue, // can be object or id
    onChange
  } = props;

  // UNCONTROLLED ONLY IF: value === "undefined"
  const isControlled = typeof value !== "undefined";

  let [internalValue, setInternalValue] = useState(!!defaultValue);

  const currentValue = isControlled ? !!value : internalValue;

  const setValue = newVal => {
    newVal = !!newVal;

    if (newVal === currentValue) {
      return;
    }

    if (!isControlled) {
      setInternalValue(newVal);
    }

    if (onChange) {
      onChange(newVal);
    }
  };

  return {
    value: currentValue,
    setValue,
    reset: () => {
      setValue(false);
    }
  };
}

useToggleState.filterProps = filterProps;

export default useToggleState;
