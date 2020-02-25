/** @jsx jsx */

import React from "react";
import { jsx, splitSx } from "..";
import Box from "../Box";

/**
 * SelectNative Raw
 */
const inputResetStyles = {
  bg: "transparent",
  appearance: "none"
};

function SelectNativeRaw_(props) {
  const { sx, inputRef, ...restProps } = props;

  const [css, customSx] = splitSx(sx);
  return (
    <Box
      as={"select"}
      sx={[inputResetStyles, css]}
      {...restProps}
      ref={inputRef}
    />
  );
}

const SelectNativeRaw = React.forwardRef((props, ref) => (
  <SelectNativeRaw_ inputRef={ref} {...props} />
));
export default SelectNativeRaw;
