import React from "react";
import { getOverrides } from "../base/helpers/overrides";
import { RootStyled } from "./styled-components";

import { rs } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function ButtonGroup$(props) {
  const {
    overrides: { Root: RootOverride },
    gutter
  } = props;

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);

  return (
    <Root {...rootProps}>
      {props.children.map((child, i) => (
        <div
          css={css`
            ${i > 0 && rs(gutter).css("margin-left")}
          `}
        >
          {child}
        </div>
      ))}
    </Root>
  );
}

ButtonGroup$.defaultProps = {
  overrides: {},
  gutter: 12
};

export { ButtonGroup$ };
