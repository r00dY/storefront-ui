/** @jsx jsx */
import React, { useState, useLayoutEffect } from "react";
import Box from "../Box";
import { jsx, createElement, getElementSpec, splitSx } from "..";

const inputResetStyles = {
  outline: 0,
  margin: 0,
  padding: 0,
  border: 0,
  bg: "transparent",
  boxSizing: "border-box",
  ":focus": {
    outline: 0,
    boxShadow: "none"
  },
  ":invalid": {
    boxShadow: "none",
    outline: "none"
  }
};

const defaults = {
  rootCss: ({ focused }) => ({
    position: "relative",
    display: "inline-block",
    verticalAlign: "top",
    overflow: "hidden"
  }),
  $input: ({}) => ({
    __type: "input",
    height: "100%",
    ...inputResetStyles
  })
};

function Input$(props) {
  let {
    sx,
    onFocus,
    onBlur,
    autoFocus,
    invalid,
    disabled,
    ...inputProps
  } = props;

  const [focused, setFocused] = useState(false);

  const state = {
    focused,
    invalid,
    disabled
  };

  sx = typeof sx === "function" ? sx(state) : sx;
  const [css, customSx] = splitSx(sx);

  const rootCss =
    typeof customSx.$root === "function"
      ? customSx.$root(state)
      : customSx.$root;

  const inputSpec = getElementSpec(customSx.$input, defaults.$input, state);

  return (
    <Box sx={[defaults.rootCss(state), rootCss, css]}>
      {createElement(inputSpec, {
        onFocus: e => {
          setFocused(true);
          if (onFocus) {
            onFocus(e);
          }
        },
        onBlur: e => {
          setFocused(false);
          if (onBlur) {
            onBlur(e);
          }
        },
        disabled,
        ...inputProps
      })}
    </Box>
  );
}

export default Input$;
