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
        $input: {
          padding: "10px",
          font: "body2"
        },
        $leftEnhancersContainer: {
          $gutter: "8px",
          pl: "16px",
          font: "body2"
        }
      }}
    />
  );
};

export default Input;
