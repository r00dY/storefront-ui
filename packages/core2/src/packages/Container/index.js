import React from "react";
import Box from "../Box";
import { useTheme } from "../Theme";

export default ({ sx = {}, variant, ...restProps }) => {
  const { containers = {} } = useTheme();

  const margin = variant
    ? containers[variant] || variant
    : containers["main"] || "10vw";

  // console.log('-----');
  // console.log(superResponsive(margin));

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
