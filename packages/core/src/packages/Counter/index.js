/** @jsx jsx */
import React, { useState } from "react";
import { getElementSpec, jsx, createElement, splitSx } from "../index";

import ButtonRaw2 from "../ButtonRaw2";
import InputRaw$ from "../InputRaw";

const defaults = {
  $buttonDecrease: {
    __type: ButtonRaw2,
    __children: "-"
  },
  $buttonIncrease: {
    __type: ButtonRaw2,
    __children: "+"
  },
  $root: ({ focused }) => ({
    position: "relative",
    display: "flex",
    verticalAlign: "top",
    overflow: "hidden",
    flexDirection: "row"
  }),
  $input: ({}) => ({
    __type: InputRaw$,
    textAlign: "center"
  })
};

function Counter$(props) {
  let { sx = {} } = props;

  const [focused, setFocused] = useState(false);

  const state = {
    focused
  };

  sx = typeof sx === "function" ? sx(state) : sx;
  const [css, customSx] = splitSx(sx);

  const rootCss =
    typeof customSx.$root === "function"
      ? customSx.$root(state)
      : customSx.$root;

  const onFocus = e => {
    setFocused(true);
  };

  const onBlur = e => {
    setFocused(false);
  };

  const buttonDecrease = createElement(
    getElementSpec(customSx.$buttonDecrease, defaults.$buttonDecrease, state, {
      onFocus,
      onBlur
    })
  );
  const buttonIncrease = createElement(
    getElementSpec(customSx.$buttonIncrease, defaults.$buttonIncrease, state, {
      onFocus,
      onBlur
    })
  );
  const input = createElement(
    getElementSpec(customSx.$input, defaults.$input, state),
    {
      type: "number",
      onFocus,
      onBlur
    }
  );

  return (
    <div sx={[defaults.$root(state), rootCss, css]}>
      {buttonDecrease}
      {input}
      {buttonIncrease}
    </div>
  );
}

export default Counter$;
