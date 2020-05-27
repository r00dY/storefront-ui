import React, { useState, useRef, useEffect } from "react";
import Box from "../Box";

/**
 * Behaviour:
 * - RangePicker is a control, has value and onChange
 * - value is object in a form { from: [number], to: [number] }. from and to can be null if allowEmpty is true.
 * - min, max, allowEmpty - these are available behaviour flags
 * - if allowEmpty=true, then value from / to might be null.
 * - min and max are obvious, they set boundaries for range
 *
 * Incorrect values:
 * - if entire object is incorrect it's either {} or {from: [min], to:[max]} when allowEmpty is true or false respectively
 * - for "from" and "to" there are 2 types of incorrectness
 * - a) value not a number. This should be forbidden by input type=number but still. If allowEmpty=true => null, otherwise min/max
 * - b) value is a number but not in range <min;max>. Falls back always to min/max (no matter if allowEmpty=true/false).
 *
 */

function snapToMinMax(props, value) {
  const { min, max } = props;

  if (typeof min === "number") {
    value = Math.max(min, value);
  }
  if (typeof max === "number") {
    value = Math.min(max, value);
  }

  return value;
}

export function normalizeRangePickerValue(props, keepMin = true) {
  const { value, min, max, allowEmpty = false } = props;

  if (!allowEmpty && (typeof min !== "number" || typeof max !== "number")) {
    throw new Error(
      "[RangePicker] If allowEmpty=false, you must set min and max props"
    );
  }

  if (value === undefined || value === null) {
    return allowEmpty ? { from: null, to: null } : { from: min, to: max };
  }

  if (typeof value !== "object") {
    return allowEmpty ? { from: null, to: null } : { from: min, to: max };
  }

  const ret = {
    from: null,
    to: null
  };

  if (typeof value.from === "number" && !isNaN(value.from)) {
    ret.from = snapToMinMax(props, value.from);
  } else {
    if (!allowEmpty) {
      ret.from = min;
    }
  }

  if (typeof value.to === "number" && !isNaN(value.to)) {
    ret.to = snapToMinMax(props, value.to);
  } else {
    if (!allowEmpty) {
      ret.to = max;
    }
  }

  if (
    typeof ret.from === "number" &&
    typeof ret.to === "number" &&
    ret.from > ret.to
  ) {
    if (keepMin) {
      if (allowEmpty) {
        ret.to = null;
      } else {
        ret.to = max;
      }
    } else {
      if (allowEmpty) {
        ret.from = null;
      } else {
        ret.from = min;
      }
    }
  }

  return ret;
}

export function useRangePicker(props) {
  const isControlled = typeof props.value !== "undefined";

  const [internalValue, setInternalValue] = useState(props.defaultValue);

  let controller = useRangePicker_controlled(
    isControlled
      ? props
      : {
          ...props,
          value: internalValue,
          onChange: newVal => {
            setInternalValue(newVal);
            if (props.onChange) {
              props.onChange(newVal);
            }
          }
        }
  );

  return {
    ...controller,
    setValue: newVal => {
      if (!isControlled) {
        setInternalValue(newVal);
      }
    }
  };
}

export function useRangePicker_controlled(props) {
  let { value, onChange, onChangeTimeout = null } = props;
  value = normalizeRangePickerValue(props, value);

  const [inputValue, setInputValue] = useState({
    ...value,
    lastEdited: "from"
  }); // raw input data

  const timeout = useRef(null);

  // internal value is normalized value based on current inputValue (doesn't have to be commited value!)
  const internalValue = normalizeRangePickerValue(
    {
      ...props,
      value: { from: parseInt(inputValue.from), to: parseInt(inputValue.to) }
    },
    inputValue.lastEdited === "from"
  );

  /**
   * If value changes in props, we should update inputs. BUT, only if value REALLY changes, which means when normalized value changed compared to local state.
   */
  useEffect(
    () => {
      const newValueFromProps = normalizeRangePickerValue(
        props,
        inputValue.lastEdited
      );

      // This condition is very important. If value from props changes but after normalization it's same as current input values, we keep input values. Otherwise it would disrupt inputting UX.
      if (
        newValueFromProps.from === internalValue.from &&
        newValueFromProps.to === internalValue.to
      ) {
        return;
      }

      setInputValue({
        ...value,
        lastEdited: inputValue.lastEdited
      });
    },
    [value.from, value.to]
  );

  const onBlur = () => {
    setInputValue(internalValue);

    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      // if (value.from === internalValue.from && value.to === internalValue.to) {
      //   return;
      // }

      if (onChange) {
        onChange(internalValue, true);
      }
    }, 0);
  };

  const onFocus = () => {
    clearTimeout(timeout.current);
  };

  const change = (newVal, lastEdited) => {
    newVal = {
      ...inputValue,
      ...newVal,
      lastEdited
    };

    setInputValue(newVal);

    if (onChange) {
      onChange(
        normalizeRangePickerValue(
          {
            ...props,
            value: {
              from: parseInt(newVal.from),
              to: parseInt(newVal.to)
            }
          },
          lastEdited
        ),
        false
      );
    }
  };

  const inputFromProps = {
    value:
      inputValue.from === null || inputValue.from === undefined
        ? ""
        : inputValue.from,
    onChange: newVal => {
      change(
        {
          from: newVal
        },
        "from"
      );
    },
    onBlur,
    onFocus,
    label: "From",
    type: "number"
  };

  const inputToProps = {
    value:
      inputValue.to === null || inputValue.to === undefined
        ? ""
        : inputValue.to,
    onChange: newVal => {
      change(
        {
          to: newVal
        },
        "to"
      );
    },
    onBlur,
    onFocus,
    label: "To",
    type: "number"
  };

  return {
    inputFromProps,
    inputToProps,
    value: internalValue,
    commit: onBlur
  };
}

/**
 * NOTES:
 *
 * 1. We should work on accessibility, labels, fieldset, etc. We should think if there shouldn't be form.
 * 2. We should add clear button.
 * 3. Basic layout (input, separator, input, potentially clear button on the left / right handside) is just basic. We should allow for render props to do ANY layout out of those elements.
 * 4. Timeout / ENTER on submit.
 * 5. Think of mobile users. What happens when someone wants to hide the keyboard, or submits. Keyboard should hide and calculations should take place!
 * 6. We should have onChange and onCommit events. onCommit doesn't run when someone is editing the price (to prevent unnecessary reloads etc). onCommit can run after timeout of user being idle. OR on ENTER. OR on keyboard submit on mobile.
 */
function RangePicker({ controller, ...props }) {
  if (!controller) {
    controller = useRangePicker(props);
  }

  let { inputFrom, inputTo, separator } = props;

  if (React.isValidElement(separator)) {
  } else if (typeof separator === "object") {
    separator = <Box sx={{ ...separator }} />;
  }

  inputFrom = React.cloneElement(inputFrom, {
    ...controller.inputFromProps,
    label: inputFrom.props && inputFrom.props.label
  });
  inputTo = React.cloneElement(inputTo, {
    ...controller.inputToProps,
    label: inputTo.props && inputTo.props.label
  });

  return (
    <Box
      as={"form"}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center"
      }}
      onSubmit={e => {
        e.preventDefault();
        controller.commit();
      }}
    >
      <Box sx={{ flex: "1 1 auto" }}>{inputFrom}</Box>

      {separator && <Box sx={{ flex: "0 0 auto" }}>{separator}</Box>}

      <Box sx={{ flex: "1 1 auto" }}>{inputTo}</Box>

      <button type={"submit"} hidden />
    </Box>
  );
}

export default RangePicker;
