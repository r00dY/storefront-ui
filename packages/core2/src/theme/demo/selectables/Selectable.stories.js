import React, { useEffect, useState } from "react";

import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import ItemRow from "./ItemRow";
import Pill from "./Pill";
import ProductSelectable from "./ProductSelectable";

import { selectableStories } from "@commerce-ui/core/Selectable/stories";

import { products } from "../products";

export const itemRow = () => (
  <Box sx={{ p: 20, maxWidth: 400 }}>
    <StoryWrapper
      stories={selectableStories(<ItemRow label={"Test item"} />)}
    />
  </Box>
);

export const pill = () => (
  <Box sx={{ p: 20, maxWidth: 400 }}>
    <StoryWrapper stories={selectableStories(<Pill label={"Test item"} />)} />
  </Box>
);

export const product = () => (
  <Box sx={{ p: 20, maxWidth: 400 }}>
    <StoryWrapper
      stories={selectableStories(<ProductSelectable product={products[0]} />)}
    />
  </Box>
);

export default {
  title: "demo.selectables"
};
