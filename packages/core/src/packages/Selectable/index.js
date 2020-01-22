/** @jsx jsx */
import React, { useRef, useState } from "react";
import { jsx, createElement, getElementSpec, splitSx } from "..";
import Box from "../Box";
import LinkRaw$ from "../LinkRaw";

function Selectable$(props) {
  const {
    disabled,
    focused,
    selected,
    label,
    sx,
    as,
    children,
    onFocus,
    onBlur,
    ...restProps
  } = props;

  const [internalFocused, setInternalFocused] = useState(false);

  const [css, customSx] = splitSx(sx);

  const state = {
    disabled,
    focused: as === "link" ? internalFocused : focused,
    selected
  };

  const content = children(state);

  if (!label) {
    console.error(
      "Warning: Selectable doesn't have 'label' parameter provided, this breaks accessibility."
    );
  }

  if (as === "link") {
    return (
      <LinkRaw$
        title={label}
        sx={{
          $resetFocus: true,
          display: "block",
          ...css
        }}
        onFocus={e => {
          setInternalFocused(true);
          if (onFocus) {
            onFocus(e);
          }
        }}
        onBlur={e => {
          setInternalFocused(false);
          if (onBlur) {
            onBlur(e);
          }
        }}
        {...restProps}
      >
        {content}
      </LinkRaw$>
    );
  }

  return (
    <Box
      sx={{
        display: "block"
      }}
    >
      {content}
    </Box>
  );
}

export default Selectable$;
