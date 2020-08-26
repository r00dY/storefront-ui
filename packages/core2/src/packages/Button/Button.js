import React, { useRef, useState, useEffect } from "react";
import { createElement, getElementSpec, splitSx } from "..";
import useHover from "../useHover";
import Box, { styledBox } from "../Box";

const commonResetStyles = {
  position: "relative",
  display: "inline-block",
  verticalAlign: "top"
};

const buttonResetStyles = {
  border: 0,
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

function styledButton(config) {
  let {
    sx,
    __minimalLinkStyling = false, // this is only for the purpose of Link component (which can't be button).
    children = p => p.children
  } = config;

  const ButtonRoot = styledBox("button", {
    ...commonResetStyles,
    ...buttonResetStyles,
    ...sx
  });

  const LinkRoot = styledBox("a", {
    ...(!__minimalLinkStyling && commonResetStyles),
    ...linkResetStyles,
    ...sx
  });

  return React.forwardRef((props, ref) => {
    // look
    let {
      disabled,
      label,
      selected,
      buttonRef,
      isLoading,
      href,
      forceLink = false,
      ...restProps
    } = props;

    ref = buttonRef || ref; // buttonRef is legacy, backward compatibility

    const hoverRef = useRef(null);

    const isHovered = useHover(hoverRef);

    const state = {
      selected,
      disabled,
      isHovered,
      isLoading,
      loading: isLoading,
      hovered: isHovered
    };

    const internalRef = element => {
      hoverRef.current = element;

      // We must remember that ref that is passed here can be function or object! However, for internal use (useHover) we need object.

      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    const mainProps = {
      ref: internalRef,
      __state__: state
    };

    let Component = ButtonRoot;
    if (href || forceLink) {
      Component = LinkRoot;
      mainProps.href = href;
    }

    return (
      <Component {...restProps} {...mainProps}>
        {children(props, state)}
      </Component>
    );
  });
}

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

  ref = buttonRef || ref; // buttonRef is legacy, backward compatibility

  const hoverRef = useRef(null);

  const isHovered = useHover(hoverRef);

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
    ref: element => {
      hoverRef.current = element;

      // We must remember that ref that is passed here can be function or object! However, for internal use (useHover) we need object.

      if (typeof ref === "function") {
        ref(element);
      } else if (buttonRef) {
        ref.current = element;
      }
    }
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
    mainProps.sx = [{ ...commonResetStyles, ...buttonResetStyles }, sx];
    mainProps.as = "button";
  }

  return (
    <Box {...restProps} {...mainProps}>
      {typeof children === "function" ? children(state) : children}
    </Box>
  );
});

Button.styled = styledButton;

export default Button;
