/** @jsx jsx */
import React, { useState, useLayoutEffect, useRef } from "react";
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
    width: "100%",
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
  }),
  $inputContainer: ({ input, label }) => ({
    __type: "label",
    position: "relative",
    boxSizing: "border-box",
    height: "100%",
    flexGrow: 1,
    flexShrink: 1,
    __children: (
      <>
        {label}
        {input}
      </>
    )
  }),
  $label: ({ placeholder, empty }) => ({
    __type: "span",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: empty ? 0 : 1,
    __children: placeholder
  })
};

function Input$(props) {
  let {
    sx,
    onFocus,
    onBlur,
    autoFocus,
    inputRef,
    invalid,
    disabled,
    placeholder,
    leftEnhancer,
    rightEnhancer,
    label,
    ...inputProps
  } = props;

  const [focused, setFocused] = useState(false);
  const [empty, setEmpty] = useState(true);

  const state = {
    focused,
    invalid,
    disabled,
    empty,
    placeholder,
    label
  };

  sx = typeof sx === "function" ? sx(state) : sx;
  const [css, customSx] = splitSx(sx);

  const rootCss =
    typeof customSx.$root === "function"
      ? customSx.$root(state)
      : customSx.$root;

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

  const inputSpec = getElementSpec(customSx.$input, defaults.$input, state);
  const input = createElement(inputSpec, {
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
    onChange: e => {
      if (!e.target.value || e.target.value === "") {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    },
    disabled,
    placeholder,
    ...inputProps,
    ref: inputRef
  });

  let labelElem;
  let inputContainer;

  if (sx.$labelInside) {
    labelElem = createElement(
      getElementSpec(customSx.$label, defaults.$label, state)
    );

    inputContainer = createElement(
      getElementSpec(customSx.$inputContainer, defaults.$inputContainer, {
        ...state,
        input,
        label: labelElem
      })
    );
  }

  return (
    <Box sx={[defaults.rootCss(state), rootCss, css]}>
      {leftEnhancerContainer}
      {sx.$labelInside ? inputContainer : input}
      {rightEnhancerContainer}
    </Box>
  );
}

export default Input$;
