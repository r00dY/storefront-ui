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
    invalid,
    sx,
    as,
    children,
    onFocus,
    onBlur,
    onSelect,
    ignoreLabel = false,
    id,
    ...restProps
  } = props;

  const [focused, setFocused] = useState(false);

  const [css, customSx] = splitSx(sx);

  if (!label && ignoreLabel === false) {
    console.warn(
      "You didn't pass label prop to the Selectable. This will affect accessibility negatively."
    );
  }

  const state = {
    ...props
  };

  const content = children(state);

  const radioRef = useRef(null);

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
        sx={{
          display: "block",
          position: "relative",
          cursor: "pointer",
          ...css
        }}
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
        position: "relative",
        cursor: disabled ? "not-allowed" : "pointer",
        ...css
      }}
      {...restProps}
    >
      {content}
    </Box>
  );
}

export default Selectable$;
