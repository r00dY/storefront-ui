import React from "react";
import StoryWrapper from "../StoryWrapper";
import { storiesOfButton } from "../Button/story";

import IconAddToBasket from "../svg/add_shopping_cart.svg";
import IconAdd from "../svg/add.svg";

const LABEL_LONG =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const LABEL_SHORT = "I'm a button";

function stories(button, options) {
  return [
    ...storiesOfButton(
      React.cloneElement(
        button,
        { leftIcon: <IconAddToBasket /> },
        LABEL_SHORT
      ),
      options
    ),
    ...storiesOfButton(
      React.cloneElement(button, { rightIcon: <IconAdd /> }, LABEL_SHORT),
      options
    ),
    ...storiesOfButton(
      React.cloneElement(
        button,
        { leftIcon: <IconAddToBasket />, rightIcon: <IconAdd /> },
        LABEL_SHORT
      ),
      options
    ),

    ...storiesOfButton(
      React.cloneElement(button, { leftIcon: <IconAddToBasket /> }, LABEL_LONG),
      options
    ),
    ...storiesOfButton(
      React.cloneElement(button, { rightIcon: <IconAdd /> }, LABEL_LONG),
      options
    ),
    ...storiesOfButton(
      React.cloneElement(
        button,
        { leftIcon: <IconAddToBasket />, rightIcon: <IconAdd /> },
        LABEL_LONG
      ),
      options
    )
  ];
}

function storyOfButtonText(...args) {
  return () => <StoryWrapper stories={stories(...args)} />;
}

export default storyOfButtonText;
