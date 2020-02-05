/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { buttonStories } from "@commerce-ui/core/Button/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import Button from "./Button";

const Square = () => (
  <div
    sx={{ width: "16px", height: "16px", position: "relative", bg: "white" }}
  />
);

const LABEL_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const standard = () => (
  <div>
    <h2>Standard text</h2>
    <StoryWrapper
      stories={buttonStories(<Button>Standard button</Button>, {
        disabled: true,
        loading: true
      })}
    />

    <h2>Long text</h2>
    <StoryWrapper
      stories={buttonStories(<Button>{LABEL_LONG}</Button>, {
        disabled: true,
        loading: true
      })}
    />

    <h2>Standard text with enhancers</h2>
    <StoryWrapper
      stories={buttonStories(
        <Button startEnhancer={<Square />} endEnhancer={<Square />}>
          Standard button
        </Button>,
        {
          disabled: true,
          loading: true
        }
      )}
    />

    <h2>Long text with enhancers</h2>
    <StoryWrapper
      stories={buttonStories(
        <Button startEnhancer={<Square />} endEnhancer={<Square />}>
          {LABEL_LONG}
        </Button>,
        { disabled: true, loading: true }
      )}
    />
  </div>
);

export default {
  title: "Dajar.Button"
};
