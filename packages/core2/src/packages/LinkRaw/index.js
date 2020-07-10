import React from "react";
import { splitSx } from "..";
import Box from "../Box";

const resetStyles = {
  color: "inherit",
  textDecoration: "none",
  boxSizing: "border-box"
};

function LinkRaw_(props) {
  const { sx, innerRef, ...restProps } = props;

  const [css, customSx] = splitSx(sx);

  return (
    <Box {...restProps} _ref={innerRef} as={"a"} sx={[resetStyles, css]} />
  );
}

const LinkRaw$ = React.forwardRef((props, ref) => (
  <LinkRaw_ {...props} innerRef={ref} />
));

export default LinkRaw$;
