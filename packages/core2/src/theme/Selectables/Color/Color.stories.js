import React from "react";
import storyOfSelectable from "@commerce-ui/core/Selectable/story";

import Color from "./index";

export const standard = storyOfSelectable(
  <Color option={{ color: "#ff0000" }} sx={{ width: "44px" }}>
    Red
  </Color>
);

export default {
  title: "Selectable.Color"
};
