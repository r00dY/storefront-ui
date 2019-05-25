import React from "react";
import { getOverrides } from "../base/helpers/overrides";
import { RootStyled } from "./styled-components";

function ButtonRaw$(props) {
  const {
    overrides: { Root: RootOverride },
    appearance,
    ...restProps
  } = props;

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);

  return <Root {...restProps} {...rootProps} />;
}

ButtonRaw$.defaultProps = {
  overrides: {}
};

export { ButtonRaw$ };
