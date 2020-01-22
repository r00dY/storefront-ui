/** @jsx jsx */
import React from "react";
import { jsx } from "@commerce-ui/core";
import Selectable from "@commerce-ui/core/Selectable";

function Color(props) {
  const { color, ...restProps } = props;

  return (
    <Selectable {...restProps}>
      {({ disabled, focused, selected }) => (
        <div
          sx={{
            width: "32px",
            height: "32px",
            display: "flex",
            borderRadius: "12px",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            lineHeight: 1,
            bg: color,
            border: focused ? "2px solid black" : "none",
            font: "body",
            opacity: disabled ? 0.5 : 1
          }}
        >
          {selected ? "✔" : ""}
        </div>
      )}
    </Selectable>
  );
}

export default Color;
