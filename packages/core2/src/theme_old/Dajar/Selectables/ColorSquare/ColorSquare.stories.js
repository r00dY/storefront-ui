/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { selectableStories } from "@commerce-ui/core/Selectable/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import ColorSquare from ".";

export const standard = () => (
  <div>
    <h2>Red color</h2>
    <StoryWrapper
      stories={selectableStories(<ColorSquare color={"red"} label={"red"} />)}
    />

    <h2>Blue color</h2>
    <StoryWrapper
      stories={selectableStories(<ColorSquare color={"blue"} label={"red"} />)}
    />

    <br />
    <br />
    <ColorSquare as={"link"} href={"#"} color={"red"} label={"red"} />
    <ColorSquare
      as={"link"}
      href={"#"}
      color={"red"}
      label={"red"}
      selected={true}
    />
  </div>
);

export default {
  title: "Dajar.Selectable.ColorSquare"
};
