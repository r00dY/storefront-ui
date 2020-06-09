/** @jsx jsx */
import React, { useRef, useState } from "react";
import { jsx, createElement, getElementSpec, splitSx } from "..";
import useHover from "../useHover";
import ButtonRaw$ from "../ButtonRaw";
import LinkRaw$ from "../LinkRaw";

export default props => {
  // look
  let {
    disabled,
    children,
    label,
    selected,
    buttonRef,
    isLoading,
    href,
    sx,
    onClick,
    ...restProps
  } = props;

  let buttonRefInternal = useRef(null);
  buttonRef = buttonRef || buttonRefInternal;

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

  const Component = href ? LinkRaw$ : ButtonRaw$;

  const componentProps = {
    ...restProps,
    sx: {
      $css: [
        {
          position: "relative",
          display: "inline-block",
          verticalAlign: "top"
        },
        css
      ]
    },
    ref: buttonRef
  };

  if (!href) {
    componentProps.disabled = disabled;
  } else {
    componentProps.href = href;
  }

  return (
    <Component
      {...componentProps}
      onClick={(...args) => {
        if (onClick) {
          onClick(...args);
        }
      }}
    >
      {typeof children === "function" ? children(state) : children}
    </Component>
  );
};
