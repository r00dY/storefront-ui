import { Button } from "../base/button";
import { withTheme } from "../Theme";

const Button$ = props => <Button {...props} />;

// const Button_base_primary = ({
//   size,
//   shape,
//   kind,
//   isSelected,
//   ...restProps
// }) => {
//   return <Button_base {...restProps} kind={"primary"} />;
// };
//
// const Button_base_secondary = ({
//   size,
//   shape,
//   kind,
//   isSelected,
//   ...restProps
// }) => {
//   return <Button_base {...restProps} kind={"secondary"} />;
// };
//
// const Button_base_minimal = ({
//   size,
//   shape,
//   kind,
//   isSelected,
//   ...restProps
// }) => {
//   return <Button_base {...restProps} kind={"minimal"} />;
// };
//
// const Button = withTheme(
//   {
//     default: "primary",
//     primary: Button_base_primary,
//     secondary: Button_base_secondary,
//     minimal: Button_base_minimal
//   },
//   "Button"
// );

export { Button$ };
