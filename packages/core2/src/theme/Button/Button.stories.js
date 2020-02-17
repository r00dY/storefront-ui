/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import storyOfButtonBase from "@commerce-ui/core/ButtonBase/story";
import storyOfButtonText from "@commerce-ui/core/ButtonText/story";
import storyOfButtonIcon from "@commerce-ui/core/ButtonIcon/story";

import Button from "./Button";

import ButtonMinimal from "./ButtonMinimal";
import Button2 from "./Button2";
import Button3 from "./Button3";
import ButtonIcon from "./ButtonIcon";

export const primary = storyOfButtonText(<Button />);
export const minimal = storyOfButtonText(<ButtonMinimal />);
export const primaryIcon = storyOfButtonIcon(<ButtonIcon />);

export const test2 = storyOfButtonBase(<Button2>Test</Button2>);
export const test3 = storyOfButtonBase(<Button3>Test</Button3>);

export default {
  title: "Button"
};
