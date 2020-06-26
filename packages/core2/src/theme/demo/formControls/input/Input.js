import Input$ from "@commerce-ui/core/Input";
import { createComponent } from "@commerce-ui/core";

import formStyles from "../form-styles";

const Input = createComponent(Input$, {
  ...formStyles
});

Input.labelInside = true;

export default Input;
