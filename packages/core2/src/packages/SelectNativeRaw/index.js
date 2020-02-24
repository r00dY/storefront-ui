/** @jsx jsx */

import React from "react";
import { jsx, splitSx } from "..";

/**
 * SelectNative Raw
 */
const inputResetStyles = {
  outline: 0,
  margin: 0,
  padding: 0,
  border: 0,
  bg: "transparent",
  boxSizing: "border-box",
  appearance: "none"
};

function SelectNativeRaw_(props) {
  const { sx, inputRef, ...restProps } = props;

  const [css, customSx] = splitSx(sx);
  return <select sx={[inputResetStyles, css]} {...restProps} ref={inputRef} />;
}

const SelectNativeRaw = React.forwardRef((props, ref) => (
  <SelectNativeRaw_ inputRef={ref} {...props} />
));
export default SelectNativeRaw;
