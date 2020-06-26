import SelectNative$ from "@commerce-ui/core/SelectNative";
import { createComponent } from "@commerce-ui/core";

import formStyles from "../form-styles";

const SelectNative = createComponent(SelectNative$, {
  ...formStyles,
  $control: state => ({
    ...formStyles.$control(state),
    pr: "28px"
  })
});

SelectNative.labelInside = true;

export default SelectNative;
