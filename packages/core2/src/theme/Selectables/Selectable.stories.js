import React, { useEffect, useState } from "react";

import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import Color from "./Color";
import ItemRow from "./ItemRow";
import ColorRow from "./ColorRow";
import Pill from "./Pill";

import { selectableStories } from "@commerce-ui/core/Selectable/stories";

export const example1ColorBox = () => (
  <Box sx={{ p: 20 }}>
    <StoryWrapper
      stories={selectableStories(props => (
        <Box sx={{ width: 60 }}>
          <Color color={"red"} {...props} />
        </Box>
      ))}
    />
  </Box>
);

export const example2ItemRow = () => (
  <Box sx={{ p: 20, maxWidth: 400 }}>
    <StoryWrapper
      stories={selectableStories(<ItemRow label={"Test item"} />)}
    />
  </Box>
);

export const example3ColorRow = () => (
  <Box sx={{ p: 20, maxWidth: 400 }}>
    <StoryWrapper
      stories={selectableStories(
        <ColorRow label={"Test item"} color={"royalblue"} />
      )}
    />
  </Box>
);

export const example4Pill = () => (
  <Box sx={{ p: 20, maxWidth: 400 }}>
    <StoryWrapper stories={selectableStories(<Pill label={"Test item"} />)} />
  </Box>
);

export default {
  title: "approved.Selectable"
};
