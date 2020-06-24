import React from "react";
import Selectable from "@commerce-ui/core/Selectable";
import Box from "@commerce-ui/core/Box";
import Color from "../Color";

function ColorRow(props) {
  return (
    <Selectable {...props}>
      {({ disabled, highlighted, selected, label, invalid }) => (
        <Box
          sx={{
            width: "100%",
            minWidth: "250px",
            height: "44px",
            display: "flex",
            padding: "12px",
            alignItems: "center",
            lineHeight: 1,
            font: "body",
            ":hover": {
              bg: disabled ? "#fafafa" : "rgb(230,230,230)"
            },
            opacity: disabled ? 0.5 : 1
          }}
        >
          <Box sx={{ width: 24 }} fitW>
            <Color {...props} />
          </Box>
          &nbsp;&nbsp;{label}
        </Box>
      )}
    </Selectable>
  );
}

export default ColorRow;
