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

// for now only uncontrolled
export function useRangePicker(props) {
  const { defaultValue, onChange, onChangeTimeout = null } = props;

  const [value, setValue] = useState(
    normalizeRangePickerValue(props, defaultValue)
  );

  const normalizeRangePickerValueFromInputs = (value, keepMin) => {
    return normalizeRangePickerValue(
      {
        ...props,
        value: { from: parseInt(value.from), to: parseInt(value.to) }
      },
      keepMin
    );
  };

  const timeout = useRef(null);

  const onBlur = () => {
    const newVal = normalizeRangePickerValueFromInputs(value);
    setValue(newVal);

    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      if (onChange) {
        onChange(newVal);
      }
    }, 0);
  };

  const onFocus = () => {
    clearTimeout(timeout.current);
  };

  const change = newVal => {
    newVal = {
      ...value,
      ...newVal
    };

    setValue(newVal);
  };

  const inputFromProps = {
    value: value.from === null || value.from === undefined ? "" : value.from,
    onChange: val => {
      change({
        from: val
      });
    },
    onBlur,
    onFocus,
    label: "From",
    type: "number"
  };

  const inputToProps = {
    value: value.to === null || value.to === undefined ? "" : value.to,
    onChange: val => {
      change({
        to: val
      });
    },
    onBlur,
    onFocus,
    label: "To",
    type: "number"
  };

  return {
    inputFromProps,
    inputToProps,
    value: normalizeRangePickerValueFromInputs(value),
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
    label: inputFrom.props.label
  });
  inputTo = React.cloneElement(inputTo, {
    ...controller.inputToProps,
    label: inputTo.props.label
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
