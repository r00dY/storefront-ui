/** @jsx jsx */

import React from "react";
import { jsx, splitSx } from "..";

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
  },
  textAlign: "left"
};

function ButtonRaw_(props) {
  const { sx, buttonRef, ...restProps } = props;

  const [css, customSx] = splitSx(sx);
  return (
    <button sx={[buttonResetStyles, css]} {...restProps} ref={buttonRef} />
  );
}

const ButtonRaw$ = React.forwardRef((props, ref) => (
  <ButtonRaw_ buttonRef={ref} {...props} />
));

export default ButtonRaw$;
