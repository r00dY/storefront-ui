/** @jsx jsx */

import React from "react";
import { jsx } from "..";

/**
 * Button Raw
 */
const resetStyles = {
  color: "inherit",
  textDecoration: "none",
  boxSizing: "border-box"
};

function LinkRaw_(props) {
  const { css, innerRef, ...restProps } = props;

  return <a css={[resetStyles, css]} {...restProps} ref={innerRef} />;
}

const LinkRaw$ = React.forwardRef((props, ref) => (
  <LinkRaw_ {...props} innerRef={ref} />
));

export default LinkRaw$;
