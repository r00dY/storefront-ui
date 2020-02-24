/** @jsx jsx */
import React, { useState, useLayoutEffect, useRef } from "react";
import Box from "../Box";
import { jsx, createElement, getElementSpec, splitSx } from "..";
import InputRaw$ from "../InputRaw";
import InputContainer from "../InputContainer";

const defaults = {
  $input: ({}) => ({
    __type: InputRaw$,
    height: "100%",
    width: "100%"
  })
};

function Input$(props) {
  let { onChange, ...restProps } = props;
  //
  // const [focused, setFocused] = useState(false);
  let [empty, setEmpty] = useState(true);

  if (props.value) {
    empty = props.value === "";
  }

  const onChangeEvent = e => {
    if (!e.target.value || e.target.value === "") {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    if (onChange) {
      onChange(e);
    }
  };

  // const internalInputRef = useRef(null);
  // inputRef = inputRef || internalInputRef;
  //
  // const state = {
  //   focused,
  //   invalid,
  //   disabled,
  //   empty,
  //   placeholder,
  //   label
  // };
  //
  // sx = typeof sx === "function" ? sx(state) : sx;
  // const [css, customSx] = splitSx(sx);
  //
  // const rootCss =
  //   typeof customSx.$root === "function"
  //     ? customSx.$root(state)
  //     : customSx.$root;
  //
  // leftEnhancer =
  //   typeof leftEnhancer === "function" ? leftEnhancer(state) : leftEnhancer;
  // const leftEnhancersContainerSpec = getElementSpec(
  //   customSx.$leftEnhancersContainer,
  //   defaults.$leftEnhancersContainer,
  //   { ...state, leftEnhancer }
  // );
  // const leftEnhancerContainer =
  //   leftEnhancer && createElement(leftEnhancersContainerSpec);
  //
  // rightEnhancer =
  //   typeof rightEnhancer === "function" ? rightEnhancer(state) : rightEnhancer;
  // const rightEnhancersContainerSpec = getElementSpec(
  //   customSx.$rightEnhancersContainer,
  //   defaults.$rightEnhancersContainer,
  //   { ...state, rightEnhancer }
  // );
  // const rightEnhancerContainer =
  //   rightEnhancer && createElement(rightEnhancersContainerSpec);
  //
  // const inputSpec = getElementSpec(customSx.$input, defaults.$input, state);
  // const input = createElement(inputSpec, {
  //   onFocus: e => {
  //     setFocused(true);
  //     if (onFocus) {
  //       onFocus(e);
  //     }
  //   },
  //   onBlur: e => {
  //     setFocused(false);
  //     if (onBlur) {
  //       onBlur(e);
  //     }
  //   },
  //   onChange: e => {
  //     if (!e.target.value || e.target.value === "") {
  //       setEmpty(true);
  //     } else {
  //       setEmpty(false);
  //     }
  //     if (onChange) {
  //       onChange(e);
  //     }
  //   },
  //   disabled,
  //   placeholder,
  //   ...inputProps,
  //   inputRef
  // });
  //
  // let inputContainer;
  // let inputContainerState = {
  //   ...state,
  //   input
  // };
  //
  // if (sx.$labelInside) {
  //   inputContainerState.label = createElement(
  //     getElementSpec(customSx.$label, defaults.$label, state)
  //   );
  // }
  //
  // inputContainer = createElement(
  //   getElementSpec(
  //     customSx.$inputContainer,
  //     {
  //       ...defaults.$inputContainer(inputContainerState),
  //       __type: sx.$labelInside ? "label" : "div"
  //     },
  //     inputContainerState
  //   )
  // );

  return (
    <InputContainer
      {...props}
      empty={empty}
      label={props.label || props.placeholder}
    >
      <InputRaw$
        sx={{ width: "100%", height: "100%" }}
        onChange={onChangeEvent}
      />
    </InputContainer>
  );
}

export default Input$;
