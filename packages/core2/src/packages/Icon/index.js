import React from "react";
import Box, { styledBox } from "../Box";

const Elem = styledBox({
  width: p => p.size,
  height: p => p.size,
  lineHeight: 1,
  display: "block"
});

function Icon({ color = "currentColor", size = 24, children, ...restProps }) {
  const svg = React.Children.only(children);

  return <Elem as={"svg"} {...svg.props} fill={color} size={size} />;
}

export default Icon;
