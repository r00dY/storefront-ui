/** @jsx jsx */
import { jsx } from "@commerce-ui/core";

import { buttonStories } from "@commerce-ui/core/ButtonBase/stories";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import ButtonIcon from "./ButtonIcon";

import IconCart from "../../svg/add_shopping_cart.svg";

export const standard = () => (
  <div>
    <h2>Standard text</h2>
    <StoryWrapper
      stories={buttonStories(
        <ButtonIcon>
          <IconCart />
        </ButtonIcon>,
        {
          disabled: true
        }
      )}
    />
  </div>
);

export default {
  title: "Dajar.ButtonIcon"
};
