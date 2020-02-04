import React from "react";
import { useTheme } from "@commerce-ui/core/Theme2";
import Box from "@commerce-ui/core/Box";

function fontStories(options = {}) {
  let stories = [];
  const theme = useTheme();

  for (let font in theme.fonts) {
    stories.push({
      name: font,
      component: (
        <Box sx={{ font: font, maxWidth: "600px", width: "100%" }}>
          Title or label
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      )
    });
  }

  return stories;
}

export { fontStories };
