import { Button as Button_base } from "../base/button";
import { withTheme } from "../Theme";

const Button_base_primary = ({
  size,
  shape,
  kind,
  isSelected,
  ...restProps
}) => {
  return <Button_base {...restProps} kind={"primary"} />;
};

const Button_base_secondary = ({
  size,
  shape,
  kind,
  isSelected,
  ...restProps
}) => {
  return <Button_base {...restProps} kind={"secondary"} />;
};

const Button = withTheme(
  {
    default: "primary",
    primary: Button_base_primary,
    secondary: Button_base_secondary
  },
  "Button"
);

export { Button };
