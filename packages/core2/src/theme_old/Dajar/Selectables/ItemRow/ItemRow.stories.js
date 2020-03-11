/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { selectableStories } from "@commerce-ui/core/Selectable/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import ItemRow from ".";

export const standard = () => (
  <div>
    <h2>Red color</h2>
    <StoryWrapper
      stories={selectableStories(<ItemRow color={"red"} label={"red"} />)}
    />
  </div>
);

export default {
  title: "Dajar.Selectable.ItemRow"
};
