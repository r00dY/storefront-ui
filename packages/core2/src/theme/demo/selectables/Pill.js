import React from "react";
import Selectable from "@commerce-ui/core/Selectable";
import Box from "@commerce-ui/core/Box";

function Pill(props) {
  return (
    <Selectable {...props}>
      {({ disabled, highlighted, selected, label, invalid }) => (
        <Box
          sx={{
            position: "relative",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: disabled
              ? "neutral"
              : invalid && selected
              ? "negative"
              : highlighted || selected
              ? "main"
              : "neutral",
            font: "body2",
            color: disabled ? "neutral" : "main",
            bg: disabled ? "neutral100" : "white",
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: "10px",
            textAlign: "center"
          }}
        >
          {label}
        </Box>
      )}
    </Selectable>
  );
}

export default Pill;
