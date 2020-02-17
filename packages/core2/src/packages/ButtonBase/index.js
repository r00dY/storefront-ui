/** @jsx jsx */
import React, { useRef, useState } from "react";
import { jsx, createElement, getElementSpec, splitSx } from "..";

import Button from "../Button";

let defaults = {
  background: {
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  body: ({ children, isLoading }) => ({
    boxSizing: "border-box",
    position: "relative",
    pointerEvents: "none",
    height: "100%",
    minHeight: "inherit",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    visibility: isLoading ? "hidden" : "visible",
    overflow: "hidden",
    textAlign: "center",

    // lineHeight: "1 !important",
    // whiteSpace: "nowrap",
    // textOverflow: "ellipsis", display: block must be on to make this work!!!

    __children: children
  }),
  loader: {
    boxSizing: "border-box",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    __children: "LOAD"
  }
};

export default props => {
  let { sx, children, ...restProps } = props;

  return (
    <Button
      sx={state => {
        const [css, customSx] = splitSx(
          typeof sx === "function" ? sx(state) : sx
        );
        return css;
      }}
      {...restProps}
    >
      {state => {
        const newState = {
          ...state,
          children: typeof children === "function" ? children(state) : children
        };

        const [css, customSx] = splitSx(
          typeof sx === "function" ? sx(newState) : sx
        );

        const loaderSpec = getElementSpec(
          customSx.$loader,
          defaults.loader,
          newState
        );

        const backgroundSpec = getElementSpec(
          customSx.$background,
          defaults.background,
          newState
        );

        const bodySpec = getElementSpec(
          customSx.$body,
          defaults.body,
          newState
        );

        return (
          <>
            {createElement(backgroundSpec)}
            {createElement(bodySpec)}
            {newState.isLoading && createElement(loaderSpec)}
          </>
        );
      }}
    </Button>
  );
};
