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
  appearance: "none"
  // ":focus": {
  //   outline: 0,
  //   boxShadow: "none"
  // },
  // ":invalid": {
  //   boxShadow: "none",
  //   outline: "none"
  // }
};

const defaults = {
  rootCss: ({ focused }) => ({
    position: "relative",
    display: "inline-flex",
    verticalAlign: "top",
    overflow: "hidden",
    flexDirection: "row"
  }),
  $input: {
    __type: "select",
    height: "100%",
    width: "100%",
    ...inputResetStyles,
    __children: [
      <option>One but longer a bit</option>,
      <option>Two</option>,
      <option>Three</option>
    ]
  },
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
  $inputContainer: ({ input, label, arrowContainer }) => ({
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
        {arrowContainer}
      </>
    )
  }),
  $label: ({ label, empty }) => ({
    __type: "span",
    position: "absolute",
    pointerEvents: "none",
    top: 0,
    left: 0,
    opacity: empty ? 0 : 1,
    __children: label
  }),
  $arrowContainer: ({ arrow }) => ({
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
    __children: arrow
  }),
  $arrow: {
    __children: <>⌄</>
  }
};

function SelectNative$(props) {
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
    value,
    options,
    ...inputProps
  } = props;

  label = label || placeholder;

  const [focused, setFocused] = useState(false);
  let [empty, setEmpty] = useState(true);

  if (value) {
    empty = value === "";
  }

  const state = {
    focused,
    invalid,
    disabled,
    empty,
    placeholder
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

  let optionElems = [];

  if (placeholder) {
    optionElems.push(
      <option disabled value={""} key={"__default__"}>
        {placeholder}
      </option>
    );
  }

  options.map(option => {
    let value, label;
    if (typeof option === "object") {
      value = option.value;
      label = option.label;
    } else {
      value = option;
      label = option;
    }
    optionElems.push(
      <option value={value} key={value}>
        {label}
      </option>
    );
  });

  const inputSpec = getElementSpec(
    customSx.$input,
    { ...defaults.$input, __children: optionElems },
    state
  );

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
        onChange(e.target.value, e);
      }
    },
    disabled,
    placeholder,
    value,
    ...inputProps,
    // defaultValue: "",
    ref: inputRef
  });

  const arrow = createElement(
    getElementSpec(customSx.$arrow, defaults.$arrow, state)
  );
  const arrowContainer = createElement(
    getElementSpec(customSx.$arrowContainer, defaults.$arrowContainer, {
      ...state,
      arrow
    })
  );

  let inputContainer;
  let inputContainerState = {
    ...state,
    input,
    arrowContainer,
    arrow
  };

  if (customSx.$labelInside) {
    state.label = label;
    inputContainerState.label = createElement(
      getElementSpec(customSx.$label, defaults.$label, state)
    );
    console.log("create label inside");
  }

  inputContainer = createElement(
    getElementSpec(
      customSx.$inputContainer,
      {
        ...defaults.$inputContainer(inputContainerState),
        __type: customSx.$labelInside ? "label" : "div"
      },
      inputContainerState
    )
  );

  return (
    <Box sx={[defaults.rootCss(state), rootCss, css]}>
      {leftEnhancerContainer}
      {inputContainer}
      {rightEnhancerContainer}
    </Box>
  );
}

export default SelectNative$;
