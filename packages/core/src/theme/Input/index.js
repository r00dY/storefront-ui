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
        $root: ({ focused }) => ({
          height: "60px",
          border: focused ? "1px solid black" : "none",
          borderRadius: "10px",
          backgroundColor: "yellow"
        }),
        $input: {
          padding: "10px"
        }
      }}
    />
  );
};

export default Input;
