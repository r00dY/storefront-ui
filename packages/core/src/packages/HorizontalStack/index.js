/** @jsx jsx */
import React from "react";
import { jsx, splitSx } from "..";
import Box from "../Box";

function HorizontalStack({ sx, ...restProps }) {
  const [css, customSx] = splitSx(sx);

  const gutter = customSx.$gutter || 0;

  return (
    <Box
      sx={[
        {
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",

          " > *": {
            marginRight: gutter,
            ":last-child": {
              marginRight: 0
            }
          }
        },
        css
      ]}
      {...restProps}
    />
  );
}

export default HorizontalStack;
