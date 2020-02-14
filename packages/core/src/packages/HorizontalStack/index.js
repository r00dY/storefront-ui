/** @jsx jsx */
import React from "react";
import { jsx, splitSx } from "..";
import Box from "../Box";

import { responsiveValueMap } from "..";

/**
 * Helper component placing components next to each other with gutter.
 *
 * Gutter can be responsive but items layout can not. So it's usable ONLY if on all resolutions items will be next to each other and won't wrap.
 */
function HorizontalStack({ sx, children, ...restProps }) {
  const [css, customSx] = splitSx(sx);

  const gap = customSx.$gap || 0;
  const align = customSx.$align || "left";

  let itemSize;

  if (customSx.$itemSize) {
    itemSize = customSx.$itemSize;
  } else if (customSx.$itemsVisible) {
    itemSize = `calc(calc(100% - ${gap * (customSx.$itemsVisible - 1)}px) / ${
      customSx.$itemsVisible
    })`;
  }

  console.log("item size", itemSize);

  return (
    <Box
      sx={[
        {
          position: "relative",
          display: "flex",
          overflowX: "auto"
        },
        css
      ]}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%"
          // ml: responsiveValueMap(align, x => x === "center" || x === "right" ? "auto" : "initial"),
          // mr: responsiveValueMap(align, x => x === "center" || x === "left" ? "auto" : "initial"),
        }}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <Box
              sx={{
                marginRight:
                  index === React.Children.count(children) - 1 ? 0 : "20px",
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: itemSize
              }}
            >
              {child}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default HorizontalStack;
