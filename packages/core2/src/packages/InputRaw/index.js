/** @jsx jsx */

import React from "react";
import { jsx, splitSx } from "..";
import Box from "../Box";

/**
 * Input Raw
 */
const inputResetStyles = {
  border: 0,
  bg: "transparent",
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
  return (
    <Box
      as={"input"}
      sx={[inputResetStyles, css]}
      {...restProps}
      ref={inputRef}
    />
  );
}

const InputRaw = React.forwardRef((props, ref) => (
  <InputRaw_ inputRef={ref} {...props} />
));
export default InputRaw;
