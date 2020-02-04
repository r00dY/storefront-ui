/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { fontStories } from "@commerce-ui/core/Theme2/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

export const fonts = () => (
  <div>
    <h2>Fonts</h2>
    <StoryWrapper stories={fontStories()} />
  </div>
);

export default {
  title: "Theme"
};
