/** @jsx jsx */
import React from "react";
import { jsx } from "@commerce-ui/core";
import Selectable from "@commerce-ui/core/Selectable";
import Box from "@commerce-ui/core/Box";

function Color(props) {
  const { color, ...restProps } = props;

  return (
    <Selectable {...restProps}>
      {({ disabled, focused, selected }) => (
        <Box
          sx={{
            position: "relative",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: selected ? "1px" : 0
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "46px",
              height: "46px",
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
