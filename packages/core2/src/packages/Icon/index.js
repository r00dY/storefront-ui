import React from "react";
import Box from "../Box";

function Icon({ color = "currentColor", size = 24, children, ...restProps }) {
  const svg = React.Children.only(children);

  return (
    <Box
      as={"svg"}
      {...svg.props}
      fill={color}
      sx={{
        width: size,
        height: size,
        lineHeight: 1,
        display: "block"
      }}
    />
  );
}

export default Icon;
