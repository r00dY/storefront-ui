/** @jsx jsx */
import React, { useRef, useState } from "react";
import { jsx, createElement, getElementSpec, splitSx } from "..";
import Box from "../Box";

function Selectable$(props) {
  const {
    disabled,
    focused,
    selected,
    label,
    as,
    children,
    ...restProps
  } = props;

  const state = {
    disabled,
    focused,
    selected
  };

  return (
    <Box
      sx={{
        display: "block"
      }}
    >
      {children(state)}
    </Box>
  );
}

export default Selectable$;
