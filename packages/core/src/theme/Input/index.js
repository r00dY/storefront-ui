/** @jsx jsx */
import Input$ from "@commerce-ui/core/Input2";
import { jsx, splitSx } from "@commerce-ui/core";
import formStyles from "../form-styles";

const Input = props => {
  const [css, customSx] = splitSx(props.sx);

  return (
    <Input$
      {...props}
      sx={{
        ...css,
        ...formStyles,
        $resetFocus: true
      }}
    />
  );
};

export default Input;
