/** @jsx jsx */
import React, { useState, useLayoutEffect, useRef } from "react";
import Box from "../Box";
import HorizontalStackSimple from "../HorizontalStackSimple";
import { jsx, createElement, getElementSpec, splitSx } from "..";
import InputRaw$ from "../InputRaw";

const defaults = {
  rootCss: ({ focused }) => ({
    position: "relative",
    display: "flex",
    verticalAlign: "top",
    overflow: "hidden",
    flexDirection: "row",
    cursor: "text"
  }),
  $input: ({}) => ({
    __type: InputRaw$,
    height: "100%",
    width: "100%"
  }),
  $leftEnhancersContainer: ({ leftEnhancer }) => ({
    __type: HorizontalStackSimple,
    height: "100%",
    flexGrow: 0,
    flexShrink: 0,
    pointerEvents: "none",
    __children: leftEnhancer
  }),
  $rightEnhancersContainer: ({ rightEnhancer }) => ({
    __type: HorizontalStackSimple,
    height: "100%",
    flexGrow: 0,
    flexShrink: 0,
    pointerEvents: "none",
    __children: rightEnhancer
  }),
  $controlContainer: ({ control, label, arrow }) => ({
    position: "relative",
    boxSizing: "border-box",
    height: "100%",
    flexGrow: 1,
    flexShrink: 1,
    display: "flex",
    alignItems: "center",
    // pointerEvents: "none",
    __children: (
      <>
        {label}
        {control}
        {arrow}
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

function InputContainer$(props) {
  let {
    sx,
    onFocus,
    onBlur,
    onChange,
    onClick,
    autoFocus,
    controlRef,
    invalid,
    disabled,
    placeholder,
    leftEnhancer,
    rightEnhancer,
    label,
    children,
    empty = true,
    showArrow = false,
    ...inputProps
  } = props;

  const [focused, setFocused] = useState(false);
  // let [empty, setEmpty] = useState(true);
  //
  // if (props.value) {
  //     empty = props.value === "";
  // }

  const internalControlRef = useRef(null);
  controlRef = controlRef || internalControlRef;

  const state = {
    focused,
    invalid,
    disabled,
    empty,
    placeholder
  };

  sx = typeof sx === "function" ? sx(state) : sx;
  const [css, customSx] = splitSx(sx);

  if (customSx.$labelInside) {
    state.label = label;
  }

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

  const controlRaw = React.Children.only(children);

  const controlCss =
    typeof customSx.$control === "function"
      ? customSx.$control(state)
      : customSx.$control;

  const control = React.cloneElement(controlRaw, {
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
    placeholder,
    ...inputProps,
    sx: {
      ...controlCss,
      ...controlRaw.props.sx
    },
    ref: controlRef
  });

  let inputContainer;
  let inputContainerState = {
    ...state,
    control
  };

  if (showArrow) {
    const arrow = createElement(
      getElementSpec(customSx.$arrow, defaults.$arrow, state)
    );

    const arrowContainer = createElement(
      getElementSpec(
        customSx.$nativeSelectArrowContainer,
        defaults.$arrowContainer,
        {
          ...state,
          arrow
        }
      )
    );

    inputContainerState.arrow = arrowContainer;
  }

  if (sx.$labelInside) {
    inputContainerState.label = createElement(
      getElementSpec(customSx.$label, defaults.$label, state)
    );
  }

  inputContainer = createElement(
    getElementSpec(
      customSx.$controlContainer,
      {
        ...defaults.$controlContainer(inputContainerState),
        __type: sx.$labelInside ? "label" : "div"
      },
      inputContainerState
    )
  );

  return (
    <Box
      sx={[defaults.rootCss(state), rootCss, css]}
      onClick={(...args) => {
        if (onClick) {
          onClick(...args);
        }
        controlRef.current.focus();
      }}
    >
      {leftEnhancerContainer}
      {inputContainer}
      {rightEnhancerContainer}
    </Box>
  );
}

export default InputContainer$;
