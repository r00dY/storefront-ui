/** @jsx jsx */

import React from "react";
import { jsx, splitSx } from "..";

/**
 * Input Raw
 */
const resetStyles = {
  opacity: 0,
  width: 0,
  position: "absolute",
  overflow: "hidden",
  margin: 0,
  padding: 0
};

function RadioRaw_(props) {
  const { sx, inputRef, type, ...restProps } = props;

  const [css, customSx] = splitSx(sx);
  return (
    <input
      sx={[resetStyles, css]}
      {...restProps}
      type={"radio"}
      ref={inputRef}
    />
  );
}

export default RadioRaw_;
