/** @jsx jsx */
import React from "react";
import { jsx } from "@commerce-ui/core";
import Selectable from "@commerce-ui/core/Selectable";
import Box from "@commerce-ui/core/Box";

import Check from "../../../svg/check.svg";

function ColorRow(props) {
  const { color, ...restProps } = props;

  return (
    <Selectable {...restProps}>
      {({ disabled, highlighted, selected }) => (
        <Box
          sx={{
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: 2,
            paddingBottom: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            bg: highlighted ? "mono100" : "transparent",
            color: "black"
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
              opacity: disabled ? 0.5 : 1,
              marginRight: 2,
              flex: "0 0 auto"
            }}
          />
          <Box
            sx={{
              font: "label",
              flexGrow: 1
            }}
          >
            {restProps.label}
          </Box>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
              lineHeight: 1,
              opacity: disabled ? 0.5 : 1,
              marginRight: 2,
              flex: "0 0 auto"
            }}
          >
            {selected && <Check />}
          </Box>
        </Box>
      )}
    </Selectable>
  );
}

export default ColorRow;
