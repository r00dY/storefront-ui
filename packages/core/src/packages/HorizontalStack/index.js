/** @jsx jsx */
import React from "react";
import { jsx, splitSx } from "..";
import Box from "../Box";

import {
  responsiveValueMap,
  responsiveValueForEach,
  responsiveValueToRangeMap,
  responsiveValueToResponsiveSize
} from "..";
import { rs } from "responsive-helpers";

/**
 * Helper component placing components next to each other with gutter.
 *
 * Gutter can be responsive but items layout can not. So it's usable ONLY if on all resolutions items will be next to each other and won't wrap.
 */
function HorizontalStack({ sx, children, ...restProps }) {
  const [css, customSx] = splitSx(sx);

  const gap = customSx.$gap || 0;
  let align = customSx.$align || "left";
  const padding = customSx.$container || 0;

  let itemProps;

  if (customSx.$itemSize) {
    itemProps = { width: customSx.$itemSize };
  } else if (customSx.$itemsVisible) {
    // TODO: unify responsive values arithmetics

    responsiveValueForEach(align, val => {
      if (val !== "left") {
        console.warn(
          `Warning: HorizontalStack uses $itemsVisible + $align, this behaviour is not allowed. If you want to use $align, please use $itemSize property or go with natural item widths.`
        );
      }
    });
    align = "left";

    let itemsVisibleMap = responsiveValueToRangeMap(customSx.$itemsVisible);
    let paddingRs = responsiveValueToResponsiveSize(padding);
    let gapRs = responsiveValueToResponsiveSize(gap);

    let multiplier = {};
    itemsVisibleMap.forEach((itemsVisible, range) => {
      multiplier[range.from] = (itemsVisible - 1) / itemsVisible;
    });

    let base = rs("100%");
    // if (!props.itemsVisibleIncludeMargins) {
    base = base.subtract(paddingRs).subtract(paddingRs);
    // }

    let size = base
      .divide(itemsVisibleMap)
      .subtract(gapRs.multiply(multiplier));

    itemProps = size.cssObject("width");
  }

  /**
   * Inner container styles
   */
  // let innerContainerStyles = {
  //   width: "100%"
  // };

  let innerContainerStyles = {
    width: responsiveValueMap(align, x => (x === "left" ? "100%" : undefined)),
    ml: responsiveValueMap(align, x =>
      x === "center" || x === "right" ? "auto" : "initial"
    ),
    mr: responsiveValueMap(align, x =>
      x === "center" || x === "left" ? "auto" : "initial"
    )
  };

  const childrenArray = React.Children.toArray(children);

  return (
    <Box
      sx={[
        {
          position: "relative",
          display: "flex",
          overflowX: "auto",
          "::-webkit-scrollbar": {
            display: "none"
          },
          scrollbarWidth: "none"
        },
        css
      ]}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          ...innerContainerStyles
        }}
      >
        <Box
          sx={{
            position: "relative",
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: padding
          }}
        />
        {childrenArray.map((child, index) => {
          return (
            <Box
              sx={{
                marginRight: index === childrenArray.length - 1 ? 0 : gap,
                flexGrow: 0,
                flexShrink: 0,
                ...itemProps
              }}
              key={child.key}
            >
              {child}
            </Box>
          );
        })}
        <Box
          sx={{
            position: "relative",
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: padding
          }}
        />
      </Box>
    </Box>
  );
}

export default HorizontalStack;
