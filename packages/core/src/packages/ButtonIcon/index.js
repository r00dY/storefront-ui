/** @jsx jsx */
import React from "react";
import { jsx, createElement, getElementSpec, splitSx } from "..";
import Button$ from "../ButtonBase";
import Box from "../Box";

const defaultBody = ({ children, leftIcon, rightIcon }) => ({
  __children: [leftIcon, children, rightIcon]
});

export default props => {
  let { children, sx, ...restProps } = props;

  return (
    <Button$
      {...restProps}
      sx={state => {
        sx = typeof sx === "function" ? sx(state) : sx;
        const [css, customSx] = splitSx(sx);

        const { $icon, $body, ...restSx } = customSx;

        // TODO: wrapper should not be there, styles should be applied directly to icon. We should have `size` parameter for Icons and we can have fixed amount of icon sizes!

        const iconWrapper = children && (
          <Box sx={{ ...$icon }}>
            {React.cloneElement(children, {
              style: { width: "100%", height: "100%" }
            })}
          </Box>
        );

        const newState = {
          ...state,
          icon: iconWrapper,
          children
        };

        const bodySpec = getElementSpec($body, defaultBody, newState);

        return {
          ...css,
          $body: bodySpec,
          ...restSx
        };
      }}
    />
  );
};
