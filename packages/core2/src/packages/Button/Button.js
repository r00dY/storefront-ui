import React, { useRef, useState } from "react";
import { createElement, getElementSpec, splitSx } from "..";
import useHover from "../useHover";
import ButtonRaw from "../ButtonRaw";
import Box from "../Box";

const commonResetStyles = {
  position: "relative",
  display: "inline-block",
  verticalAlign: "top"
};

const buttonResetStyles = {
  border: "none",
  margin: 0,
  padding: 0,
  width: "auto",
  overflow: "visible",
  background: "transparent",
  color: "inherit",
  font: "inherit",
  lineHeight: "normal",
  fontSmooth: "inherit",
  appearance: "none",
  ":not(:disabled)": {
    cursor: "pointer"
  },
  textAlign: "left"
};

const linkResetStyles = {
  color: "inherit",
  textDecoration: "none",
  boxSizing: "border-box"
};

const Button = React.forwardRef((props, ref) => {
  // look
  let {
    disabled,
    children,
    label,
    selected,
    buttonRef,
    isLoading,
    href,
    forceLink = false,
    sx,
    __minimalLinkStyling = false, // this is only for the purpose of Link component (which can't be button).
    ...restProps
  } = props;

  let buttonRefInternal = useRef(null);
  buttonRef = buttonRef || ref || buttonRefInternal;

  const isHovered = useHover(buttonRef);

  const state = {
    selected,
    disabled,
    isHovered,
    isLoading,
    loading: isLoading,
    hovered: isHovered
  };

  sx = typeof sx === "function" ? sx(state) : sx;

  const [css, customSx] = splitSx(sx);

  const mainProps = {
    ref: buttonRef
  };

  if (href || forceLink) {
    mainProps.sx = {
      ...(!__minimalLinkStyling && commonResetStyles),
      ...linkResetStyles,
      ...sx
    };
    mainProps.as = "a";
    mainProps.href = href;
  } else {
    mainProps.sx = { ...commonResetStyles, ...buttonResetStyles, ...sx };
    mainProps.as = "button";
  }

  return (
    <Box {...restProps} {...mainProps}>
      {typeof children === "function" ? children(state) : children}
    </Box>
  );
});

export default Button;
