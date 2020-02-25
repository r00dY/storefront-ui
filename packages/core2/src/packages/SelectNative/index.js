/** @jsx jsx */
import React, { useState, useLayoutEffect, useRef } from "react";
import Box from "../Box";
import { jsx, createElement, getElementSpec, splitSx } from "..";
import InputContainer from "../InputContainer";

import SelectNativeRaw from "../SelectNativeRaw";

const defaults = {
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
  })
};

function Input$(props) {
  let { onChange, value, options, placeholder, ...restProps } = props;

  let [empty, setEmpty] = useState(true);

  if (value) {
    empty = value === "";
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

  return (
    <InputContainer
      {...props}
      empty={empty}
      label={props.label || props.placeholder}
      showArrow={"inline"}
    >
      <SelectNativeRaw
        sx={{
          height: "100%",
          width: "100%"
        }}
        onChange={onChangeEvent}
      >
        {optionElems}
      </SelectNativeRaw>
    </InputContainer>
  );
}

export default Input$;

//
// function SelectNative$(props) {
//   let {
//     sx,
//     onFocus,
//     onBlur,
//     onChange,
//     autoFocus,
//     inputRef,
//     invalid,
//     disabled,
//     placeholder,
//     leftEnhancer,
//     rightEnhancer,
//     label,
//     value,
//     options,
//     ...inputProps
//   } = props;
//
//   label = label || placeholder;
//
//   const [focused, setFocused] = useState(false);
//   let [empty, setEmpty] = useState(true);
//
//   if (value) {
//     empty = value === "";
//   }
//
//   const state = {
//     focused,
//     invalid,
//     disabled,
//     empty,
//     placeholder
//   };
//
//   sx = typeof sx === "function" ? sx(state) : sx;
//   const [css, customSx] = splitSx(sx);
//
//   const rootCss =
//     typeof customSx.$root === "function"
//       ? customSx.$root(state)
//       : customSx.$root;
//
//   leftEnhancer =
//     typeof leftEnhancer === "function" ? leftEnhancer(state) : leftEnhancer;
//   const leftEnhancersContainerSpec = getElementSpec(
//     customSx.$leftEnhancersContainer,
//     defaults.$leftEnhancersContainer,
//     { ...state, leftEnhancer }
//   );
//   const leftEnhancerContainer =
//     leftEnhancer && createElement(leftEnhancersContainerSpec);
//
//   rightEnhancer =
//     typeof rightEnhancer === "function" ? rightEnhancer(state) : rightEnhancer;
//   const rightEnhancersContainerSpec = getElementSpec(
//     customSx.$rightEnhancersContainer,
//     defaults.$rightEnhancersContainer,
//     { ...state, rightEnhancer }
//   );
//   const rightEnhancerContainer =
//     rightEnhancer && createElement(rightEnhancersContainerSpec);
//
//   let optionElems = [];
//
//   if (placeholder) {
//     optionElems.push(
//       <option disabled value={""} key={"__default__"}>
//         {placeholder}
//       </option>
//     );
//   }
//
//   options.map(option => {
//     let value, label;
//     if (typeof option === "object") {
//       value = option.value;
//       label = option.label;
//     } else {
//       value = option;
//       label = option;
//     }
//     optionElems.push(
//       <option value={value} key={value}>
//         {label}
//       </option>
//     );
//   });
//
//   const inputSpec = getElementSpec(
//     customSx.$input,
//     { ...defaults.$input, __children: optionElems },
//     state
//   );
//
//   const input = createElement(inputSpec, {
//     onFocus: e => {
//       setFocused(true);
//       if (onFocus) {
//         onFocus(e);
//       }
//     },
//     onBlur: e => {
//       setFocused(false);
//       if (onBlur) {
//         onBlur(e);
//       }
//     },
//     onChange: e => {
//       if (!e.target.value || e.target.value === "") {
//         setEmpty(true);
//       } else {
//         setEmpty(false);
//       }
//       if (onChange) {
//         onChange(e.target.value, e);
//       }
//     },
//     disabled,
//     placeholder,
//     value,
//     ...inputProps,
//     // defaultValue: "",
//     ref: inputRef
//   });
//
//   const arrow = createElement(
//     getElementSpec(customSx.$arrow, defaults.$arrow, state)
//   );
//   const arrowContainer = createElement(
//     getElementSpec(customSx.$arrowContainer, defaults.$arrowContainer, {
//       ...state,
//       arrow
//     })
//   );
//
//   let inputContainer;
//   let inputContainerState = {
//     ...state,
//     input,
//     arrowContainer,
//     arrow
//   };
//
//   if (customSx.$labelInside) {
//     state.label = label;
//     inputContainerState.label = createElement(
//       getElementSpec(customSx.$label, defaults.$label, state)
//     );
//     console.log("create label inside");
//   }
//
//   inputContainer = createElement(
//     getElementSpec(
//       customSx.$inputContainer,
//       {
//         ...defaults.$inputContainer(inputContainerState),
//         __type: customSx.$labelInside ? "label" : "div"
//       },
//       inputContainerState
//     )
//   );
//
//   return (
//     <Box
//       sx={[defaults.rootCss(state), rootCss, css]}
//       className={focused ? "__commui_focus" : ""}
//     >
//       {leftEnhancerContainer}
//       {inputContainer}
//       {rightEnhancerContainer}
//     </Box>
//   );
// }
//
// export default SelectNative$;
