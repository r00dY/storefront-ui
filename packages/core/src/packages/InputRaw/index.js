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
  }
};

function InputRaw_(props) {
  const { sx, innerRef, ...restProps } = props;

  const [css, customSx] = splitSx(sx);
  return <input sx={[inputResetStyles, css]} {...restProps} ref={innerRef} />;
}

const InputRaw$ = React.forwardRef((props, ref) => (
  <InputRaw_ {...props} innerRef={ref} />
));

export default InputRaw$;
