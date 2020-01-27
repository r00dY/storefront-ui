/** @jsx jsx */
import React from "react";
import { jsx } from "@commerce-ui/core";
import Selectable from "@commerce-ui/core/Selectable";
import Box from "@commerce-ui/core/Box";

function Pill(props) {
  const { ...restProps } = props;

  return (
    <Selectable {...restProps}>
      {({ disabled, highlighted, selected }) => (
        <Box
          sx={{
            position: "relative",
            padding: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderColor: selected ? "black" : "mono300",
            borderStyle: "solid",
            borderWidth: "1px",
            ":hover": {
              borderColor: "black"
            },

            outlineColor: "black",
            outlineStyle: "solid",
            outlineWidth: highlighted ? "2px" : 0,
            transition: "all .1s",
            color: "black",
            font: "body"
          }}
        >
          {restProps.label}
        </Box>
      )}
    </Selectable>
  );
}

export default Pill;
