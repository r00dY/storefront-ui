import React from "react";
import { useTheme } from "@commerce-ui/core/Theme2";
import Box from "@commerce-ui/core/Box";

function fontStories(options = {}) {
  let stories = [];
  const { fonts } = useTheme();

  for (let font in fonts) {
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

function spaceStories(options = {}) {
  let stories = [];
  const { space } = useTheme();

  const SpaceSquare = ({ space }) => (
    <Box
      sx={{
        position: "relative",
        bg: "black",
        width: space,
        height: space
      }}
    />
  );

  Object.keys(space).forEach(spaceKey => {
    const spaceKeyNormalized = isNaN(parseInt(spaceKey))
      ? spaceKey
      : parseInt(spaceKey);

    stories.push({
      name: spaceKeyNormalized,
      component: <SpaceSquare space={space[spaceKeyNormalized]} />
    });
  });

  return stories;
}

function colorStories(options = {}) {
  let stories = [];
  const { colors } = useTheme();

  const groups = {};

  Object.entries(colors).forEach(([name, value]) => {
    const res = name.match(/(.*?)([0-9]*)$/);
    const prefix = res[1];

    if (!groups[prefix]) {
      groups[prefix] = [];
    }

    groups[prefix].push({
      name,
      value
    });
  });

  const ColorSquare = ({ color, children }) => (
    <Box>
      <Box
        sx={{
          position: "relative",
          bg: color,
          width: "100px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          font: "body",
          marginBottom: "8px"
        }}
      />
      <Box sx={{ textAlign: "center", font: "body2" }}>{children}</Box>
    </Box>
  );

  for (const groupName in groups) {
    const colors = groups[groupName];

    stories.push({
      name: groupName,
      component: (
        <Box
          sx={{
            display: "flex",
            gap: 10,
            flexDirection: "row"
          }}
        >
          {colors.map(({ name, value }) => (
            <ColorSquare color={value}>{name}</ColorSquare>
          ))}
        </Box>
      )
    });
  }

  return stories;
}

export { fontStories, spaceStories, colorStories };
