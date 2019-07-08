import PropTypes from "prop-types";
import React from "react";

// import { ItemStyled } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../../base/helpers/overrides";
import { BodyStyled } from "../FiltersColumn/styled-components";
const ProgressSteps$ = props => {
  const {
    data,
    children,
    overrides: {
      Header: Header,

      Separator: SeparatorOverride,
      Item: ItemOverride,

      filterComponents: filterComponents
    },
    expand
  } = props;

  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      {children}
    </div>
  );
};

ProgressSteps$.defaultProps = {
  overrides: {}
};

ProgressSteps$.propTypes = {
  children: PropTypes.any.isRequired,
  overrides: PropTypes.object
};

export default ProgressSteps$;
