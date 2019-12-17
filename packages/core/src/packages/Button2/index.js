/** @jsx jsx */

import React from "react";
import { jsx } from "@emotion/core";
import css from "@styled-system/css";

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
  const { sx, ...restProps } = props;

  console.log(sx);

  return <button css={css({ ...buttonResetStyles, ...sx })} {...restProps} />;
}

const ButtonRaw = React.forwardRef(ButtonRaw_);

export { ButtonRaw };
