/** @jsx jsx */
import React, { useState } from "react";
import { getElementSpec, jsx, createElement, splitSx } from "../index";

import ButtonRaw2 from "../ButtonRaw2";

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
  }),
  $buttonDecrease: {
    __type: ButtonRaw2,
    __children: "-"
  },
  $buttonIncrease: {
    __type: ButtonRaw2,
    __children: "+"
  }
};

function Counter(props) {
  let { sx = {} } = props;

  sx = typeof sx === "function" ? sx(state) : sx;
  const [css, customSx] = splitSx(sx);

  const state = {};

  const buttonDecrease = createElement(
    getElementSpec(customSx.$buttonDecrease, defaults.$buttonDecrease, state)
  );
  const buttonIncrease = createElement(
    getElementSpec(customSx.$buttonIncrease, defaults.$buttonIncrease, state)
  );

  return (
    <div>
      {buttonDecrease}
      {buttonIncrease}
    </div>
  );
}

function useAddToCart(props) {
  const { productVariant, initialQuantity = 1 } = props;

  const [quantity, setQuantity] = useState(initialQuantity);
}

export default useAddToCart;
