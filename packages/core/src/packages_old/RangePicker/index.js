import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { SeparatorStyled, RootStyled } from "./styled-components";
import { getOverrides } from "../../packages/base/helpers/overrides";

const RangePicker$ = props => {
  let { onChange, value, min, max, neverEmpty, snapToMinMax } = props;

  const {
    Root: RootOverride,
    InputFrom: InputFrom,
    InputTo: InputTo,
    Separator: SeparatorOverride,
    ClearButton: ClearButton
  } = props.overrides;

  if (neverEmpty && (typeof min !== "number" || typeof max !== "number")) {
    throw new Error(
      "[RangePicker$] If neverEmpty=true, you must set min and max props"
    );
  }

  const defaultValue = {
    from: neverEmpty ? min : "",
    to: neverEmpty ? max : ""
  };

  value = value || {};

  const isClearable =
    typeof value.from !== "undefined" || typeof value.to !== "undefined";

  value = {
    from: typeof value.from === "undefined" ? defaultValue.from : value.from,
    to: typeof value.to === "undefined" ? defaultValue.to : value.to
  };

  const [state, setState] = useState({
    from: undefined,
    to: undefined,
    isEditing: false
  });

  const timeout = useRef(null);

  // Function taking new state (after blur) and correcting it if invalid
  const stateReducer = (newState, input, nothingFocused) => {
    // set value to default if input was cleared, if neverEmpty, it will be minimum value.
    if (newState[input] === "") {
      newState = {
        ...state,
        [input]: defaultValue[input]
      };
    }

    // snap to min / max
    if (newState[input] !== "") {
      // always snap negative values to 0
      if (newState[input] < 0) {
        newState = {
          ...state,
          [input]: 0
        };
      }

      if (snapToMinMax) {
        if (typeof min === "number" && newState[input] < min) {
          newState = {
            ...state,
            [input]: min || 0
          };
        } else if (typeof max === "number" && newState[input] > max) {
          newState = {
            ...state,
            [input]: max
          };
        }
      }
    }

    // correct if from > to
    if (nothingFocused) {
      if (
        typeof newState.from === "number" &&
        typeof newState.to === "number" &&
        newState.from > newState.to
      ) {
        newState = {
          ...newState,
          [input]: input === "from" ? newState.to : newState.from
        };
      }
    }

    return newState;
  };

  const onBlur = input => {
    setState(stateReducer(state, input, false));

    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      const newState = stateReducer(state, input, true);
      setState({ ...newState, isEditing: false });

      if (onChange) {
        let newValue = {
          ...newState
        };

        delete newValue.isEditing;
        if (newValue.from === "" || newValue.from === min) {
          delete newValue.from;
        }
        if (newValue.to === "" || newValue.to === max) {
          delete newValue.to;
        }

        onChange(newValue);
      }
    }, 0);
  };

  const setValue = (val, input) => {
    val = parseFloat(val);
    if (isNaN(val)) {
      val = "";
    }

    setState({
      ...state,
      [input]: val
    });
  };

  const onFocus = () => {
    clearTimeout(timeout.current);

    if (!state.isEditing) {
      setState({
        from: value.from,
        to: value.to,
        isEditing: true
      });
    }
  };

  const inputValue = {
    from: state.isEditing ? state.from : value.from,
    to: state.isEditing ? state.to : value.to
  };

  const clear = () => {
    if (onChange) {
      onChange({});
    }
  };

  const sharedProps = {
    clear: clear
  };

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [Separator, separatorProps] = getOverrides(
    SeparatorOverride,
    SeparatorStyled
  );

  const inputProps = input => ({
    type: "number",
    onChange: event => {
      setValue(event.target.value, input);
    },
    value: inputValue[input],
    onBlur: () => onBlur(input),
    onFocus: onFocus
  });

  const inputFrom = InputFrom({
    inputProps: inputProps("from"),
    ...sharedProps
  });
  const inputTo = InputTo({ inputProps: inputProps("to"), ...sharedProps });

  const clearButton = ClearButton(sharedProps);

  const rangePicker = (
    <div
      css={css`
        position: relative;
        padding: 10px;
        display: flex;
        flex-direction: space-between;
        align-items: center;
      `}
    >
      {inputFrom}
      <Separator {...separatorProps} {...sharedProps} />
      {inputTo}
    </div>
  );

  return (
    <Root
      {...rootProps}
      {...sharedProps}
      rangePicker={rangePicker}
      clearButton={isClearable && clearButton}
    />
  );
};

RangePicker$.defaultProps = {
  neverEmpty: false,
  snapToMinMax: true,
  overrides: {}
};

RangePicker$.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  neverEmpty: PropTypes.bool,
  snapToMinMax: PropTypes.bool,
  overrides: PropTypes.object
};

export { RangePicker$ };
