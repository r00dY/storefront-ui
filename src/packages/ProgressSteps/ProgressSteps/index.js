import PropTypes from "prop-types";
import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../../base/helpers/overrides";

import { RootStyled, SeparatorStyled } from "./styled-components";

const ProgressSteps$ = props => {
  const {
    children,
    overrides: { Root: RootOverride, Separator: SeparatorOverride }
  } = props;
  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [Separator, separatorProps] = getOverrides(
    SeparatorOverride,
    SeparatorStyled
  );

  return (
    <Root {...rootProps}>
      {children.map((child, index) => (
        <>
          {child}
          {index < children.length - 1 && (
            <div>
              <Separator
                {...separatorProps}
                highlighted={child.props.completed}
              />
            </div>
          )}
        </>
      ))}
    </Root>
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
