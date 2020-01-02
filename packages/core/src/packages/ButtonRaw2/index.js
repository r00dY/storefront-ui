/** @jsx jsx */

import React from "react";
import { jsx } from "..";

/**
 * Button Raw
 */
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
  const { css, innerRef, ...restProps } = props;

  return (
    <button css={[buttonResetStyles, css]} {...restProps} ref={innerRef} />
  );
}

const ButtonRaw$ = React.forwardRef((props, ref) => (
  <ButtonRaw_ {...props} innerRef={ref} />
));

export default ButtonRaw$;
