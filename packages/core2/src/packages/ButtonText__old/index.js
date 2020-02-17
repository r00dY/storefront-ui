/** @jsx jsx */
import React from "react";
import { jsx, createElement, getElementSpec, splitSx } from "..";
import Button$ from "../ButtonBase";

const defaultBody = ({ label, startEnhancer, endEnhancer }) => ({
  __children: (
    <>
      {startEnhancer}
      {label}
      {endEnhancer}
    </>
  )
});

export default props => {
  let { startEnhancer, endEnhancer, sx, ...restProps } = props;

  return (
    <Button$
      {...restProps}
      sx={state => {
        sx = typeof sx === "function" ? sx(state) : sx;
        const [css, customSx] = splitSx(sx);

        const {
          $startEnhancerContainer,
          $endEnhancerContainer,
          $body,
          $label,
          ...restSx
        } = customSx;

        startEnhancer =
          typeof startEnhancer === "function"
            ? startEnhancer(state)
            : startEnhancer;

        const startEnhancerContainer =
          startEnhancer &&
          createElement(
            getElementSpec(
              $startEnhancerContainer,
              { __children: startEnhancer },
              state
            )
          );

        endEnhancer =
          typeof endEnhancer === "function" ? endEnhancer(state) : endEnhancer;
        const endEnhancerContainer =
          endEnhancer &&
          createElement(
            getElementSpec(
              $endEnhancerContainer,
              { __children: endEnhancer },
              state
            )
          );

        const label = createElement(
          getElementSpec($label, { __children: state.children }, state)
        );

        const newState = {
          ...state,
          startEnhancer: startEnhancerContainer,
          endEnhancer: endEnhancerContainer,
          label: label
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
