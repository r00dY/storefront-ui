import React from "react";
import Box from "../Box";
import { useTheme } from "../Theme";
import { responsiveValueMap } from "../index";

export default ({
  sx = {},
  cols = 12,
  gap,
  rowGap = 0,
  minItemWidth,
  ...restProps
}) => {
  const { gridGaps = {} } = useTheme();

  const columnGap =
    typeof gap !== "undefined"
      ? gridGaps[gap] || gap
      : gridGaps["default"] || "10px";

  let gridTemplateColumns = responsiveValueMap(cols, x =>
    typeof x === "number" ? `repeat(${x}, 1fr)` : x
  );

  if (minItemWidth) {
    gridTemplateColumns = responsiveValueMap(
      minItemWidth,
      x =>
        `repeat(auto-fit, minmax(${typeof x === "number" ? `${x}px` : x}, 1fr))`
    );
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridColumnGap: columnGap,
        gridRowGap: rowGap || columnGap,
        gridTemplateColumns,
        ...sx
      }}
      {...restProps}
    />
  );
};
