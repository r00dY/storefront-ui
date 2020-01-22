/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { selectableStories } from "@commerce-ui/core/Selectable/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import Color from "./index";

export const standard = () => (
  <div>
    <h2>Red color</h2>
    <StoryWrapper stories={selectableStories(<Color color={"red"} />)} />

    <h2>Blue color</h2>
    <StoryWrapper stories={selectableStories(<Color color={"blue"} />)} />
  </div>
);

export default {
  title: "Selectable.Color"
};
