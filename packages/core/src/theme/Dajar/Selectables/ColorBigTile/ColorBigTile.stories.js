/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { selectableStories } from "@commerce-ui/core/Selectable/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import ColorBigTile from "./index";

export const standard = () => (
  <div sx={{ maxWidth: "300px" }}>
    <h2>Red color</h2>
    <StoryWrapper
      stories={selectableStories(<ColorBigTile color={"red"} label={"red"} />)}
    />

    <h2>Blue color</h2>
    <StoryWrapper
      stories={selectableStories(<ColorBigTile color={"blue"} label={"red"} />)}
    />

    <br />
    <br />
    <ColorBigTile as={"link"} href={"#"} color={"red"} label={"red"} />
    <ColorBigTile
      as={"link"}
      href={"#"}
      color={"red"}
      label={"red"}
      selected={true}
    />
  </div>
);

export default {
  title: "Dajar.Selectable.ColorBigTile"
};
