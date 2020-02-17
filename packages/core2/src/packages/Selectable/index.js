/** @jsx jsx */
import React, { useRef, useState } from "react";
import { jsx, createElement, getElementSpec, splitSx } from "..";
import Box from "../Box";
import LinkRaw$ from "../LinkRaw";
import RadioRaw$ from "../RadioRaw";

function Selectable$(props) {
  const {
    disabled,
    highlighted,
    selected,
    label,
    sx,
    as,
    children,
    onFocus,
    onBlur,
    onSelect,
    id,
    ...restProps
  } = props;

  const [focused, setFocused] = useState(false);

  const [css, customSx] = splitSx(sx);

  const state = {
    disabled,
    focused,
    highlighted,
    selected
  };

  const content = children(state);

  const radioRef = useRef(null);

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
          setFocused(true);
          if (onFocus) {
            onFocus(e);
          }
        }}
        onBlur={e => {
          setFocused(false);
          if (onBlur) {
            onBlur(e);
          }
        }}
        id={id}
        {...restProps}
      >
        {content}
      </LinkRaw$>
    );
  }

  if (as === "radio") {
    return (
      <Box
        sx={{ display: "block", cursor: "pointer", ...css }}
        onClick={() => {
          if (disabled) {
            return;
          }
          radioRef.current.focus();
          if (onSelect) {
            onSelect();
          }
        }}
        className={focused ? "__commui_focus" : ""}
      >
        <label htmlFor={id} sx={{ visibility: "hidden", position: "absolute" }}>
          {label}
        </label>
        <RadioRaw$
          {...restProps}
          id={id}
          onFocus={e => {
            setFocused(true);
            if (onFocus) {
              onFocus(e);
            }
          }}
          onBlur={e => {
            setFocused(false);
            if (onBlur) {
              onBlur(e);
            }
          }}
          checked={selected}
          disabled={disabled}
          onChange={() => {
            if (onSelect) {
              onSelect();
            }
          }}
          inputRef={radioRef}
        />
        {content}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "block",
        cursor: disabled ? "not-allowed" : "pointer"
      }}
      {...restProps}
    >
      {content}
    </Box>
  );
}

export default Selectable$;
