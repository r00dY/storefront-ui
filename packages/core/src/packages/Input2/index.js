/** @jsx jsx */
import React from "react";
import { jsx, createElement, getElementSpec, splitSx } from "..";

const inputResetStyles = {
  outline: 0,
  margin: 0,
  padding: 0,
  border: 0,
  ":focus": {
    outline: 0,
    boxShadow: 0
  },
  ":invalid": {
    boxShadow: "none",
    outline: "none"
  }
};

function Input$(props) {
  let { sx, ...restProps } = props;

  sx = typeof sx === "function" ? sx(state) : sx;
  const [css, customSx] = splitSx(sx);

  return (
    <div
      sx={[
        {
          display: "inline-block"
          // border: "1px solid black"
        },
        css
      ]}
    >
      <input sx={inputResetStyles} {...restProps} />
    </div>
  );
}

export default Input$;
