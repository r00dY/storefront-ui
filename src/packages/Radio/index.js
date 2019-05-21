import {
  StatefulRadioGroup as StatefulRadioGroup_orig,
  RadioGroup as RadioGroup_orig,
  Radio as Radio_orig
} from "../base/radio";

import { withTheme } from "../Theme";

const StatefulRadioGroup = withTheme(StatefulRadioGroup_orig, "RadioGroup");
const RadioGroup = withTheme(RadioGroup_orig, "RadioGroup");
const Radio = withTheme(Radio_orig, "Radio");

export { StatefulRadioGroup, RadioGroup, Radio };
