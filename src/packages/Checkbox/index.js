// export { Checkbox } from "../base/checkbox";
// export { StatefulCheckbox } from "../base/checkbox";

import { withTheme } from "../Theme";

import {
  Checkbox as Checkbox_orig,
  StatefulCheckbox as StatefulCheckbox_orig
} from "../base/checkbox";

const Checkbox = withTheme(Checkbox_orig, "Checkbox");
const StatefulCheckbox = withTheme(StatefulCheckbox_orig, "Checkbox");

//
export { Checkbox, StatefulCheckbox };
