import React from "react";
import Selectable from "@commerce-ui/core/Selectable";
import Box from "@commerce-ui/core/Box";

function ItemRow(props) {
  return (
    <Selectable {...props}>
      {({ disabled, highlighted, selected, label, invalid }) => (
        <Box
          sx={{
            height: "44px",
            display: "flex",
            padding: "12px",
            alignItems: "center",
            lineHeight: 1,
            font: "body",
            border: invalid && selected ? "1px solid red" : "none",
            bg: highlighted ? "rgb(230,230,230)" : "#fafafa",
            ":hover": {
              bg: disabled ? "#fafafa" : "rgb(230,230,230)"
            },
            opacity: disabled ? 0.5 : 1
          }}
        >
          {label} {selected ? "✔" : ""}
        </Box>
      )}
    </Selectable>
  );
}

export default ItemRow;
