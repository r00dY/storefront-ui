import React from "react";
import Box from "../Box";
import { useTheme } from "../Theme";
// import { responsiveValueTransformScales } from "../index";

export default ({ sx = {}, margin = "containerMargin", ...restProps }) => {
  const theme = useTheme();

  // margin =
  //   responsiveValueTransformScales(
  //     margin,
  //     theme,
  //     "containerMargins",
  //     "space"
  //   ) || "10vw";

  return (
    <Box
      sx={{
        ...sx,
        ml: margin,
        mr: margin
      }}
      {...restProps}
    />
  );
};
