import React from "react";
import Selectable from "@commerce-ui/core/Selectable";
import Box from "@commerce-ui/core/Box";

function Color({ color, ...restProps }) {
  return (
    <Selectable {...restProps}>
      {({ disabled, highlighted, selected }) => (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            pb: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            borderColor: "black",
            borderStyle: "solid",
            outlineColor: "black",
            outlineStyle: "solid",
            outlineWidth: highlighted || selected ? "1px" : 0
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 1,
              left: 1,
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              lineHeight: 1,
              bg: color,
              font: "body",
              opacity: disabled ? 0.5 : 1
            }}
          />
        </Box>
      )}
    </Selectable>
  );
}

export default Color;
