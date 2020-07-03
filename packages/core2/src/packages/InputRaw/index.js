import React from "react";
import { splitSx } from "..";
import Box from "../Box";

/**
 * Input Raw
 */
const inputResetStyles = {
  border: 0,
  bg: "transparent",
  ":invalid": {
    boxShadow: "none",
    outline: "none"
  },

  "::-webkit-outer-spin-button, ::-webkit-inner-spin-button": {
    WebkitAppearance: "none"
  },
  MozAppearance: "textfield"
};

function InputRaw_(props) {
  const { sx, inputRef, onChange, ...restProps } = props;

  const [css, customSx] = splitSx(sx);
  return (
    <Box
      as={"input"}
      sx={[inputResetStyles, css]}
      onChange={e => {
        if (onChange) {
          onChange(e.target.value, e);
        }
      }}
      {...restProps}
      ref={inputRef}
    />
  );
}

const InputRaw = React.forwardRef((props, ref) => (
  <InputRaw_ inputRef={ref} {...props} />
));
export default InputRaw;
