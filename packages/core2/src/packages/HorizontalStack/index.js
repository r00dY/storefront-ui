/** @jsx jsx */
import React from "react";
import { jsx, splitSx } from "..";
import Box from "../Box";

/**
 * Helper component placing components next to each other with gutter.
 *
 * Gutter can be responsive but items layout can not. So it's usable ONLY if on all resolutions items will be next to each other and won't wrap.
 */
function HorizontalStack({ sx, gap, ...restProps }) {
  const [css, customSx] = splitSx(sx);

  const gutter = gap || (customSx.$gutter || 0);

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
