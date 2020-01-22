/** @jsx jsx */

import React from "react";
import { jsx, splitSx } from "..";

const resetStyles = ({ resetFocus = false }) => {
  const ret = {
    color: "inherit",
    textDecoration: "none",
    boxSizing: "border-box"
  };

  if (resetFocus) {
    ret[":focus"] = {
      outline: "none"
    };
  }

  return ret;
};

function LinkRaw_(props) {
  const { sx, innerRef, ...restProps } = props;

  const [css, customSx] = splitSx(sx);

  return (
    <a
      sx={[resetStyles({ resetFocus: customSx.$resetFocus }), css]}
      {...restProps}
      ref={innerRef}
    />
  );
}

const LinkRaw$ = React.forwardRef((props, ref) => (
  <LinkRaw_ {...props} innerRef={ref} />
));

export default LinkRaw$;
