/** @jsx jsx */
import SelectNative$ from "@commerce-ui/core/SelectNative2";
import { jsx, splitSx } from "@commerce-ui/core";

import formStyles from "../form-styles";

const SelectNative = props => {
  const [css, customSx] = splitSx(props.sx);

  return (
    <SelectNative$
      {...props}
      sx={{
        ...css,
        ...formStyles,
        $arrow: {
          pr: "10px"
        },
        $input: state => ({
          ...formStyles.$input(state),
          pr: "28px"
        })
      }}
    />
  );
};

export default SelectNative;
