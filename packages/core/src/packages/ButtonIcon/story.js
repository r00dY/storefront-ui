import React from "react";
import StoryWrapper from "../StoryWrapper";
import { storiesOfButton } from "../Button/story";

import IconAddToBasket from "../svg/add_shopping_cart.svg";

function stories(button, options) {
  return [
    ...storiesOfButton(
      React.cloneElement(button, {}, <IconAddToBasket />),
      options
    )
  ];
}

function storyOfButtonIcon(...args) {
  return () => <StoryWrapper stories={stories(...args)} />;
}

export default storyOfButtonIcon;
