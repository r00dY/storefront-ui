import PropTypes from "prop-types";
import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../../base/helpers/overrides";

import { RootStyled } from "./styled-components";

const ProgressStepsItem$ = props => {
  const {
    label,
    href,
    current,
    completed,
    overrides: { Root: RootOverride }
  } = props;

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);

  return (
    <Root
      {...rootProps}
      label={label}
      href={href}
      completed={completed}
      current={current}
    >
      {href && <a href={href}>{label}</a>}
      {!href && <span>{label}</span>}
    </Root>
  );
};

ProgressStepsItem$.defaultProps = {
  overrides: {}
};

ProgressStepsItem$.propTypes = {
  overrides: PropTypes.object
};

export default ProgressStepsItem$;
