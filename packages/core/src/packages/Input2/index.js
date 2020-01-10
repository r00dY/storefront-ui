/** @jsx jsx */
import React, { useState, useLayoutEffect } from "react";
import Box from "../Box";
import HorizontalStack from "../HorizontalStack";
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
    display: "flex",
    verticalAlign: "top",
    overflow: "hidden",
    flexDirection: "row"
  }),
  $input: ({}) => ({
    __type: "input",
    height: "100%",
    flexGrow: 1,
    flexShrink: 1,
    ...inputResetStyles
  }),
  $leftEnhancersContainer: ({ leftEnhancer }) => ({
    __type: HorizontalStack,
    height: "100%",
    flexGrow: 0,
    flexShrink: 0,
    __children: leftEnhancer
  }),
  $rightEnhancersContainer: ({ rightEnhancer }) => ({
    __type: HorizontalStack,
    height: "100%",
    flexGrow: 0,
    flexShrink: 0,
    __children: rightEnhancer
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
    leftEnhancer,
    rightEnhancer,
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

  leftEnhancer =
    typeof leftEnhancer === "function" ? leftEnhancer(state) : leftEnhancer;
  const leftEnhancersContainerSpec = getElementSpec(
    customSx.$leftEnhancersContainer,
    defaults.$leftEnhancersContainer,
    { ...state, leftEnhancer }
  );
  const leftEnhancerContainer =
    leftEnhancer && createElement(leftEnhancersContainerSpec);

  rightEnhancer =
    typeof rightEnhancer === "function" ? rightEnhancer(state) : rightEnhancer;
  const rightEnhancersContainerSpec = getElementSpec(
    customSx.$rightEnhancersContainer,
    defaults.$rightEnhancersContainer,
    { ...state, rightEnhancer }
  );
  const rightEnhancerContainer =
    rightEnhancer && createElement(rightEnhancersContainerSpec);

  return (
    <Box sx={[defaults.rootCss(state), rootCss, css]}>
      {leftEnhancerContainer}
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
      {rightEnhancerContainer}
    </Box>
  );
}

export default Input$;
