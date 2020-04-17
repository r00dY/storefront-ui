import React from "react";
import Box from "../Box";

function MenuBar(props) {
  return <Box>{props.children}</Box>;
}

function MenuLayout(props) {
  let { offset = 0 } = props;

  let children = [];
  let fixedBars = [];

  React.Children.forEach(props.children, child => {
    if (child.type === MenuBar) {
      fixedBars.push(child);
    } else {
      children.push(child);
    }
  });

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 100 }}
      >
        {fixedBars}
      </Box>
      <Box sx={{ pt: offset, position: "relative", zIndex: 0 }}>{children}</Box>
    </Box>
  );
}

MenuLayout.MenuBar = MenuBar;

export default MenuLayout;
