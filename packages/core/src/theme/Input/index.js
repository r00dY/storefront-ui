/** @jsx jsx */
import Input$ from "@commerce-ui/core/Input2";
import { jsx, splitSx } from "@commerce-ui/core";

const Input = props => {
  const [css, customSx] = splitSx(props.sx);

  return (
    <Input$
      {...props}
      sx={{
        ...css,
        $root: ({ focused, disabled, invalid }) => ({
          height: "60px",
          border: "1px solid",
          borderColor: invalid ? "red" : focused ? "black" : "transparent",
          borderRadius: "10px",
          bg: disabled ? "lightgrey" : "#f7f7f7"
        }),
        $input: ({ empty }) => ({
          pr: "10px",
          pl: "10px",
          font: "body2",
          pt: empty ? 0 : "14px"
        }),
        $leftEnhancersContainer: {
          $gutter: "8px",
          pl: "16px",
          font: "body2"
        },
        $rightEnhancersContainer: {
          $gutter: "8px",
          pr: "16px",
          font: "body2"
        },
        $label: {
          top: "8px",
          left: "10px",
          font: "body2",
          fontSize: "13px"
        }
      }}
    />
  );
};

export default Input;
