import React, { useState, useRef, useEffect } from "react";

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
  const { defaultValue } = props;

  const [value, setValue] = useState(
    normalizeRangePickerValue(props, defaultValue)
  );
  const [isEditing, setEditing] = useState(false);

  const inputFromProps = {
    value: typeof value.from === "number" ? value.from : "",
    onChange: val => {
      setValue({
        ...value,
        from: parseInt(val)
      });
    },
    onFocus: () => {
      setEditing(true);
    },
    onBlur: () => {
      setEditing(false);
      setValue(normalizeRangePickerValue(props, value));
    }
  };

  const inputToProps = {
    value: typeof value.to === "number" ? value.to : "",
    onChange: val => {
      setValue({
        ...value,
        to: parseInt(val)
      });
    },
    onFocus: () => {
      setEditing(true);
    },
    onBlur: () => {
      setEditing(false);
      setValue(normalizeRangePickerValue(props, value));
    }
  };

  return {
    inputFromProps,
    inputToProps,
    value // what should go here?
  };
}

function RangePicker(props) {}

export default RangePicker;
