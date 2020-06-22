import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import Box from "@commerce-ui/core/Box";
import { useTheme } from "@commerce-ui/core/Theme";

import useScrollDirection from "@commerce-ui/core/useScrollDirection";
import useScrollSegment from "@commerce-ui/core/useScrollSegment";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const VeryLongContent = props => (
  <Box sx={{ p: [16, null, 32], maxWidth: 700 }}>
    {props.children}
    {[...Array(10)].map((e, i) => (
      <Box as={"p"} sx={{ mt: 20 }} key={i}>
        {LOREM}
      </Box>
    ))}
  </Box>
);

export const scrollDirection = () => {
  const scrollDirection = useScrollDirection();
  const isNotAtTop = useScrollSegment({
    from: 1
  });
  console.log("direction", scrollDirection);
  console.log("isNotAtTop", isNotAtTop);

  return (
    <Box>
      <VeryLongContent />
      <VeryLongContent />
      <VeryLongContent />
      <VeryLongContent />
      <VeryLongContent />
      <VeryLongContent />
      <VeryLongContent />
    </Box>
  );
};

export default {
  title: "ScrollHelpers"
};
