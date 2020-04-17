import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";
import { useTheme } from "@commerce-ui/core/Theme";
import MenuLayout from "@commerce-ui/core/MenuLayout";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const VeryLongContent = () => (
  <Box sx={{ m: [16, null, 50], maxWidth: 500 }}>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
    <Box as={"p"} sx={{ mb: 20 }}>
      {LOREM}
    </Box>
  </Box>
);

export const basic = () => (
  <MenuLayout offset={50}>
    <VeryLongContent />
    <MenuLayout.MenuBar>
      <Box sx={{ bg: "lightblue", height: 50 }} />
    </MenuLayout.MenuBar>
    <VeryLongContent />
    <MenuLayout.MenuBar>
      <Box sx={{ bg: "coral", height: 50 }} />
    </MenuLayout.MenuBar>
  </MenuLayout>
);

export default {
  title: "MenuLayout"
};
