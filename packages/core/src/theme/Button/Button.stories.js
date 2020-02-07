/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { buttonStories } from "@commerce-ui/core/Button/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import Button from "./Button";
import ButtonMinimal from "./ButtonMinimal";
import Button2 from "./Button2";
import Button3 from "./Button3";

import IconBuy from "../svg/add_shopping_cart.svg";
import IconPlus from "../svg/add.svg";

const Square = () => (
  <div
    sx={{ width: "16px", height: "16px", position: "relative", bg: "black" }}
  />
);

const LABEL_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const standard = () => (
  <div>
    <br />
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
        <Button leftIcon={<IconBuy />} rightIcon={<IconPlus />}>
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
        <Button leftIcon={<IconBuy />} rightIcon={<IconPlus />}>
          {LABEL_LONG}
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
        <Button sx={{ $size: "large" }}>{LABEL_LONG}</Button>,
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
      stories={buttonStories(<ButtonMinimal>{LABEL_LONG}</ButtonMinimal>, {
        disabled: true
      })}
    />
  </div>
);

export const button2 = () => (
  <div>
    <h2>Standard text</h2>
    <StoryWrapper
      stories={buttonStories(
        <Button2>
          {({ isLoading }) => {
            return isLoading ? "loading..." : "Label";
          }}
        </Button2>,
        {
          disabled: true,
          loading: true
        }
      )}
    />

    <h2>Long text</h2>
    <StoryWrapper
      stories={buttonStories(<Button2>{LABEL_LONG}</Button2>, {
        disabled: true
      })}
    />
  </div>
);

export const button3 = () => (
  <div>
    <h2>Standard text</h2>
    <StoryWrapper
      stories={buttonStories(<Button3>Test</Button3>, {
        disabled: true,
        loading: true
      })}
    />

    <h2>Long text</h2>
    <StoryWrapper
      stories={buttonStories(<Button3>{LABEL_LONG}</Button3>, {
        disabled: true
      })}
    />
  </div>
);

export default {
  title: "Button"
};
