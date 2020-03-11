/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { selectableStories } from "@commerce-ui/core/Selectable/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import Pill from ".";

export const standard = () => (
  <div sx={{ maxWidth: "500px" }}>
    <h2>Short label</h2>
    <StoryWrapper stories={selectableStories(<Pill label={"20cm"} />)} />

    <h2>Long label</h2>
    <StoryWrapper
      stories={selectableStories(<Pill label={"30cm longer label"} />)}
    />
  </div>
);

export default {
  title: "Dajar.Selectable.Pill"
};
