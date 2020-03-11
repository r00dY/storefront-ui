import React from "react";
import Box from "../Box";
import { useTheme } from "../Theme";
import { responsiveValueMap, responsiveValueTransformScales } from "../index";

export default props => {
  let {
    sx = {},
    cols = 12,
    gap = "gridGap",
    rowGap,
    minItemWidth,
    ...restProps
  } = props;
  const theme = useTheme();

  if (typeof rowGap === "undefined" || rowGap === null) {
    rowGap = gap;
  }

  let gridTemplateColumns = responsiveValueMap(cols, x =>
    typeof x === "number" ? `repeat(${x}, 1fr)` : x
  );

  if (minItemWidth) {
    gridTemplateColumns = responsiveValueMap(
      minItemWidth,
      x =>
        `repeat(auto-fill, minmax(${
          typeof x === "number" ? `${x}px` : x
        }, 1fr))`
    );
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridColumnGap: gap,
        gridRowGap: rowGap,
        gridTemplateColumns,
        ...sx
      }}
      {...restProps}
    />
  );
};
