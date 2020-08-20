import storyOfSelectable from "@commerce-ui/core/Selectable/story";

import React from "react";

import Checkbox from "./index";

export const standard = storyOfSelectable(<Checkbox label={"Dupa"} />);

export const description = storyOfSelectable(
  <Checkbox
    label={"Dupa"}
    description={
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  />
);

export default {
  title: "Selectable.Checkbox"
};
