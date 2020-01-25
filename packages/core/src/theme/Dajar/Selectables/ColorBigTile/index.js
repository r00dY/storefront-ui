/** @jsx jsx */
import React from "react";
import { jsx } from "@commerce-ui/core";
import Selectable from "@commerce-ui/core/Selectable";
import Box from "@commerce-ui/core/Box";

import { splitSx } from "@commerce-ui/core";

function ColorBigTile(props) {
  const { sx, color, ...restProps } = props;

  const [css, customSx] = splitSx(props.sx);

  return (
    <Selectable {...restProps}>
      {({ disabled, focused, selected }) => (
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: selected ? "1px" : 0,
            ...css
          }}
        >
          <Box
            sx={{
              paddingBottom: "63%",
              position: "relative",
              pointerEvents: "none",
              lineHeight: 1,
              font: "body",
              opacity: disabled ? 0.5 : 1
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "calc(100% - 2px)",
                height: "calc(100% - 2px)",
                bg: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Box
                sx={{
                  bg: "white",
                  padding: "8px 12px",
                  color: "black",
                  font: "label"
                }}
              >
                {restProps.label}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Selectable>
  );
}

export default ColorBigTile;
