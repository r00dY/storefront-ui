import React from "react";
import Selectable from "../Selectable";
import Box from "../Box";
import { createElement, getElementSpec, splitSx } from "../index";

const defaults = {
  $root: ({ focused }) => ({
    width: 20,
    height: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  })
};

function Checkmark(props = {}) {
  return (
    <Selectable {...props}>
      {state => {
        let { sx } = props;

        if (typeof sx === "function") {
          sx = sx(state);
        }
        const [css, customSx] = splitSx(sx);

        let iconStyles = customSx.$icon || {};
        if (typeof iconStyles === "function") {
          iconStyles = iconStyles(state);
        }

        return (
          <Box sx={[defaults.$root(state), css]}>
            <Box
              as={"svg"}
              viewBox="0 0 14 14"
              focusable="false"
              role="presentation"
              sx={{
                display: "block",
                width: 12,
                height: 12,
                ...iconStyles
              }}
            >
              <g fill="currentColor">
                <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" />
              </g>
            </Box>
          </Box>
        );
      }}
    </Selectable>
  );
}

export default Checkmark;
