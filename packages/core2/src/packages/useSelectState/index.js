import { useState, useEffect } from "react";

/**
 * This hook deserves some explanation.
 *
 * It allows for standardization of format for options, value, defaultValue, allowEmpty in Select, SelectNative, RadioButtons, etc.
 *
 * So basically:
 * - if value is undefined, component is uncontrolled
 * - defaultValue is used only at initialization,
 * - options is array with objects with ID!!!
 * - value / defaultValue can be object with ID or string with ID
 * - allowEmpty allows for null value. If allowEmpty = false, then null value will result in first option selected!
 *
 * This behaviour is analogous to React native <select> behaviour.
 *
 * TODO: Warning when wrong option is selected.
 * TODO: Allow for array of strings?
 *
 */

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

  // Normalize options
  options = options.map(option => {
    if (typeof option === "object") {
      if (!option.label) {
        return {
          ...option,
          label: option.id,
          __originalOption: option
        };
      }
      return option;
    }
    // throw new Error("options must be objects with ID!!!");
    return {
      id: option,
      label: option,
      __originalOption: option
    };
  });

  // Let's see if value or defaultValue is one from the options list or not

  const normalizeValue = val => {
    let valueId = typeof val === "object" && val !== null ? val.id : val;
    let valueObject = options.find(o => o.id === valueId);
    val = valueObject || (allowEmpty ? null : options[0]);
    return val;
  };

  const originalValue = val => {
    return val === null
      ? null
      : typeof val.__originalOption === "object"
      ? val.__originalOption
      : val;
  };

  // let defaultValueId =
  //   typeof defaultValue === "object" && defaultValue !== null
  //     ? defaultValue.id
  //     : defaultValue;
  // let valueId = typeof value === "object" && value !== null ? value.id : value;
  //
  // let defaultValueObject = options.find(o => o.id === defaultValueId);
  // let valueObject = options.find(o => o.id === valueId);
  //
  // defaultValue = defaultValueObject || (allowEmpty ? null : options[0]);
  // value = valueObject || (allowEmpty ? null : options[0]);

  // This "local empty" will be used only if component is uncontrolled
  let [internalValue, setInternalValue] = useState(
    normalizeValue(defaultValue)
  );

  const currentValue = isControlled ? normalizeValue(value) : internalValue;

  const getValIndex = val => {
    if (val === null) {
      return null;
    }
    const index = options.findIndex(x => x.id === val.id);
    if (index === -1) {
      return null;
    }
    return index;
  };

  const setValue = newVal => {
    newVal = normalizeValue(newVal);

    if (newVal === null && currentValue === null) {
      return;
    }
    if (newVal && currentValue && newVal.id === currentValue.id) {
      return;
    }

    if (!isControlled) {
      setInternalValue(newVal);
    }

    if (onChange) {
      onChange(originalValue(newVal), getValIndex(newVal));
    }
  };

  return {
    value: originalValue(currentValue),
    valueObject: currentValue,
    empty: currentValue === null,
    selectedIndex: getValIndex(currentValue),
    options,
    reset: () => {
      setValue(null);
    },
    setValue
  };

  // Jaki output chcemy?
  // 1. value (as object), defaultValue (as object), both can be undefined
}

useSelectState.filterProps = filterProps;

export default useSelectState;
