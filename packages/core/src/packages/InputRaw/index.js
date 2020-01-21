/** @jsx jsx */

import React from "react";
import { jsx, splitSx } from "..";

/**
 * Input Raw
 */
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
  },

  "::-webkit-outer-spin-button, ::-webkit-inner-spin-button": {
    WebkitAppearance: "none"
  },
  MozAppearance: "textfield"
};

function InputRaw_(props) {
  const { sx, inputRef, ...restProps } = props;

  const [css, customSx] = splitSx(sx);
  return <input sx={[inputResetStyles, css]} {...restProps} ref={inputRef} />;
}

export default InputRaw_;
