/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { selectableStories } from "@commerce-ui/core/Selectable/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import ColorRow from "./index";

export const standard = () => (
  <div sx={{ maxWidth: "500px" }}>
    <h2>Red color</h2>
    <StoryWrapper
      stories={selectableStories(<ColorRow color={"red"} label={"Lava red"} />)}
    />

    <h2>Blue color</h2>
    <StoryWrapper
      stories={selectableStories(
        <ColorRow color={"blue"} label={"Aqua blue"} />
      )}
    />
  </div>
);

export default {
  title: "Dajar.Selectable.ColorRow"
};
