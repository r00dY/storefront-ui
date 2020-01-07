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
  },
  textAlign: "left"
};

function ButtonRaw_(props) {
  const { sx, innerRef, ...restProps } = props;

  return <button sx={[buttonResetStyles, sx]} {...restProps} ref={innerRef} />;
}

const ButtonRaw$ = React.forwardRef((props, ref) => (
  <ButtonRaw_ {...props} innerRef={ref} />
));

export default ButtonRaw$;
