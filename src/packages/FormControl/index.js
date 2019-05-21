import { FormControl as FormControl_orig } from "../base/form-control";
import { withTheme } from "../Theme";

const FormControl = withTheme(FormControl_orig, "FormControl");

export { FormControl };
