/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { buttonStories } from "@commerce-ui/core/Button2/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import Button from "./Button";
import ButtonMinimal from "./ButtonMinimal";

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
      stories={buttonStories(
        <Button>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Button>,
        { disabled: true, loading: true }
      )}
    />
  </div>
);

export const standardLarge = () => (
  <div>
    <h2>Standard text</h2>
    <StoryWrapper
      stories={buttonStories(
        <Button sx={{ $size: "large" }}>Standard button</Button>,
        {
          disabled: true,
          loading: true
        }
      )}
    />

    <h2>Long text</h2>
    <StoryWrapper
      stories={buttonStories(
        <Button sx={{ $size: "large" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Button>,
        { disabled: true, loading: true }
      )}
    />
  </div>
);

export const minimal = () => (
  <div>
    <h2>Standard text</h2>
    <StoryWrapper
      stories={buttonStories(<ButtonMinimal>Standard button</ButtonMinimal>, {
        disabled: true
      })}
    />

    <h2>Long text</h2>
    <StoryWrapper
      stories={buttonStories(
        <ButtonMinimal>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ButtonMinimal>,
        { disabled: true }
      )}
    />
  </div>
);

export default {
  title: "Button"
};
