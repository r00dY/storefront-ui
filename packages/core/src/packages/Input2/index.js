/** @jsx jsx */
import React, { useState, useLayoutEffect, useRef } from "react";
import Box from "../Box";
import HorizontalStack from "../HorizontalStack";
import { jsx, createElement, getElementSpec, splitSx } from "..";
import InputRaw$ from "../InputRaw";

const defaults = {
  rootCss: ({ focused }) => ({
    position: "relative",
    display: "flex",
    verticalAlign: "top",
    overflow: "hidden",
    flexDirection: "row"
  }),
  $input: ({}) => ({
    __type: InputRaw$,
    height: "100%",
    width: "100%"
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
    pointerEvents: "none",
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
    onChange,
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
  let [empty, setEmpty] = useState(true);

  if (props.value) {
    empty = props.value === "";
  }

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
      if (onChange) {
        onChange(e);
      }
    },
    disabled,
    placeholder,
    ...inputProps,
    ref: inputRef
  });

  let inputContainer;
  let inputContainerState = {
    ...state,
    input
  };

  if (sx.$labelInside) {
    inputContainerState.label = createElement(
      getElementSpec(customSx.$label, defaults.$label, state)
    );
  }

  inputContainer = createElement(
    getElementSpec(
      customSx.$inputContainer,
      {
        ...defaults.$inputContainer(inputContainerState),
        __type: sx.$labelInside ? "label" : "div"
      },
      inputContainerState
    )
  );

  return (
    <Box
      sx={[defaults.rootCss(state), rootCss, css]}
      className={focused && !customSx.$resetFocus ? "__commui_focus" : ""}
    >
      {leftEnhancerContainer}
      {inputContainer}
      {rightEnhancerContainer}
    </Box>
  );
}

export default Input$;
