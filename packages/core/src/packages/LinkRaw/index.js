/** @jsx jsx */

import React from "react";
import { jsx, splitSx } from "..";

/**
 * Button Raw
 */
const resetStyles = {
  color: "inherit",
  textDecoration: "none",
  boxSizing: "border-box"
};

function LinkRaw_(props) {
  const { sx, innerRef, ...restProps } = props;

  const [css, customSx] = splitSx(sx);

  return <a sx={[resetStyles, css]} {...restProps} ref={innerRef} />;
}

const LinkRaw$ = React.forwardRef((props, ref) => (
  <LinkRaw_ {...props} innerRef={ref} />
));

export default LinkRaw$;
