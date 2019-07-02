import PropTypes from "prop-types";
import React from "react";
import { rslin } from "responsive-helpers";
import { RootStyled } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { getOverrides } from "../../base/helpers/overrides";

const Ledger$ = props => {
  const {
    children,
    overrides: { Root: RootOverride }
  } = props;

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);

  return (
    <Root children={children} {...rootProps}>
      {children}
    </Root>
  );
};
Ledger$.defaultProps = {
  overrides: {}
};

Ledger$.propTypes = {
  children: PropTypes.array,
  overrides: PropTypes.object
};

export default Ledger$;
