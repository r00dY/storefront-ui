import { withTheme } from "../Theme";

import Input_orig from "./input";
import { StatefulInput as StatefulInput_orig } from "../base/input";

const Input = withTheme(Input_orig, "Input");
const StatefulInput = withTheme(StatefulInput_orig, "Input");

export { StatefulInput, Input };
