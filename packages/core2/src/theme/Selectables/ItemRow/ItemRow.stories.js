/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { selectableStories } from "@commerce-ui/core/Selectable/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import ItemRow from "./index";

export const standard = () => (
  <div>
    <h2>Red color</h2>
    <StoryWrapper stories={selectableStories(<ItemRow>Lorem ipsum</ItemRow>)} />
  </div>
);

export default {
  title: "Selectable.ItemRow"
};
