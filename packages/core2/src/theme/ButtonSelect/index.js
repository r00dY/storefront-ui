/** @jsx jsx */
import ButtonSelect$ from "@commerce-ui/core/ButtonSelect";
import { jsx, splitSx } from "@commerce-ui/core";
import formStyles from "../form-styles";

const ButtonSelect = props => {
  const [css, customSx] = splitSx(props.sx);

  return (
    <ButtonSelect$
      {...props}
      sx={{
        ...css,
        ...formStyles,
        $resetFocus: true
      }}
    />
  );
};

export default ButtonSelect;
