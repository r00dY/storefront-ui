import PropTypes from "prop-types";
import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../../base/helpers/overrides";

import { RootStyled, StepStyled, SeparatorStyled } from "./styled-components";

const ProgressSteps$ = props => {
  const {
    data,
    onClick,
    active,
    lastCompleted,
    overrides: {
      Root: RootOverride,
      Step: StepOverride,
      Separator: SeparatorOverride
    }
  } = props;
  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [Step, stepProps] = getOverrides(StepOverride, StepStyled);
  const [Separator, separatorProps] = getOverrides(
    SeparatorOverride,
    SeparatorStyled
  );

  return (
    <Root {...rootProps}>
      {data.map((step, index) => (
        <>
          <Step
            {...stepProps}
            href={step.href}
            completed={index <= lastCompleted}
            active={active}
          />
          {index < data.length - 1 && (
            <Separator
              {...separatorProps}
              nextStepIsCompleted={index < lastCompleted}
            />
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
  overrides: PropTypes.object
};

export default ProgressSteps$;
