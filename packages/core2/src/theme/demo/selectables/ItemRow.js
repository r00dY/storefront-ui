import React from "react";
import Selectable from "@commerce-ui/core/Selectable";
import Box from "@commerce-ui/core/Box";
import IconTick from "../icons/IconTick";

function ItemRow(props) {
  return (
    <Selectable {...props}>
      {({ disabled, highlighted, selected, label }) => (
        <Box
          sx={{
            width: "100%",
            minWidth: "250px",
            height: "44px",
            display: "flex",
            padding: "12px",
            alignItems: "center",
            // pointerEvents: "none",
            lineHeight: 1,
            font: "body2",
            bg: highlighted || selected ? "neutral100" : "white",
            opacity: disabled ? 0.5 : 1,
            justifyContent: "space-between"
          }}
        >
          <Box>{label}</Box>
          {selected && <IconTick />}
        </Box>
      )}
    </Selectable>
  );
}

export default ItemRow;
