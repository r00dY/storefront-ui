import React from "react";
import storyOfSelectable from "@commerce-ui/core/Selectable/story";

import ItemRow from "./index";

export const standard = storyOfSelectable(<ItemRow label={"Lorem ipsum"} />);

export default {
  title: "Selectable.ItemRow"
};
