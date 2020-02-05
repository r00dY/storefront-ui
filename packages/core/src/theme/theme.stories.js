/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import {
  fontStories,
  spaceStories,
  colorStories
} from "@commerce-ui/core/Theme/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

export const fonts = () => (
  <div>
    <h2>Fonts</h2>
    <StoryWrapper stories={fontStories()} />
  </div>
);

export const space = () => (
  <div>
    <h2>Space</h2>
    <StoryWrapper stories={spaceStories()} />
  </div>
);

export const color = () => (
  <div>
    <h2>Colors</h2>
    <StoryWrapper stories={colorStories()} />
  </div>
);

export default {
  title: "Theme"
};
