import React from "react";
import Selectable from "../Selectable";
import Box from "../Box";
import { createElement, getElementSpec, splitSx } from "../index";

const defaults = {
  $root: ({ focused }) => ({
    display: "flex",
    flexDirection: "row"
  })
};

function Checkbox(props = {}) {
  const { description, ...restProps } = props;
  return (
    <Selectable {...restProps}>
      {state => {
        let { sx } = props;

        if (typeof sx === "function") {
          sx = sx(state);
        }
        const [css, customSx] = splitSx(sx);

        let labelStyles = customSx.$label || {};
        if (typeof labelStyles === "function") {
          labelStyles = labelStyles(state);
        }

        let labelContainerStyles = customSx.$labelContainer || {};
        if (typeof labelContainerStyles === "function") {
          labelContainerStyles = labelContainerStyles(state);
        }

        let descriptionStyles = customSx.$description || {};
        if (typeof descriptionStyles === "function") {
          descriptionStyles = descriptionStyles(state);
        }

        return (
          <Box sx={[defaults.$root(state), css]}>
            <Box
              sx={{
                flex: "0 0 auto"
              }}
            >
              {React.cloneElement({ ...customSx.$checkmark }, restProps)}
            </Box>
            <Box
              sx={{
                ...labelContainerStyles
              }}
            >
              <Box
                sx={{
                  ...labelStyles
                }}
              >
                {props.label}
              </Box>

              {props.description && (
                <Box
                  sx={{
                    ...descriptionStyles
                  }}
                >
                  {props.description}
                </Box>
              )}
            </Box>
          </Box>
        );
      }}
    </Selectable>
  );
}

export default Checkbox;
