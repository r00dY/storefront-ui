/** @jsx jsx */

import React from "react";
import { jsx } from "../index";

const buttonResetStyles = {
  border: "none",
  margin: 0,
  padding: 0,
  width: "auto",
  overflow: "visible",
  background: "transparent",
  color: "inherit",
  font: "inherit",
  lineHeight: "normal",
  fontSmooth: "inherit",
  appearance: "none",
  ":not(:disabled)": {
    cursor: "pointer"
  }
};

function ButtonRaw_(props) {
  const { css, ...restProps } = props;

  return <button css={[buttonResetStyles, css]} {...restProps} />;
}

const ButtonRaw = React.forwardRef(ButtonRaw_);

export { ButtonRaw };
