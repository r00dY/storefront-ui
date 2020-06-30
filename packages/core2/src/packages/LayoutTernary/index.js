import React from "react";
import Box from "../Box";

function LayoutTernary(props) {
  const {
    left,
    center,
    right,
    alignItems = "center",
    layout = "ccc",
    sx,
    gap,
    ...restProps
  } = props;

  let leftItems = [];
  let centerItems = [];
  let rightItems = [];

  if (left) {
    if (layout[0] === "l") {
      leftItems.push(left);
    } else if (layout[0] === "c") {
      centerItems.push(left);
    } else {
      throw new Error("first item must be l or c");
    }
  }

  if (center) {
    if (layout[0] === "l") {
      leftItems.push(center);
    } else if (layout[0] === "c") {
      centerItems.push(center);
    } else if (layout[0] === "r") {
      rightItems.push(center);
    }
  }

  if (right) {
    if (layout[0] === "c") {
      centerItems.push(right);
    } else if (layout[0] === "r") {
      rightItems.push(right);
    }
  }

  return (
    <Box
      {...restProps}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems,
        justifyContent: "space-between"
      }}
    >
      <Box
        sx={{
          flex: "1 1 auto",
          mr: gap
        }}
      >
        <Box sx={{}} />
      </Box>

      <Box
        sx={{
          flex: "1 1 auto"
        }}
      />

      <Box
        sx={{
          flex: "1 1 auto",
          ml: gap
        }}
      />
    </Box>
  );
}

export default LayoutTernary;
