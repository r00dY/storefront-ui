import PropTypes from "prop-types";
import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../../base/helpers/overrides";

import { RootStyled, StepStyled, SeparatorStyled } from "./styled-components";

import { Button$ } from "storefront-ui/Button";

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

  let _lastCompleted = lastCompleted ? lastCompleted : data.length - 2;

  return (
    <Root {...rootProps}>
      {data.map((step, index) => (
        <React.Fragment key={index}>
          <div>
            <Step
              {...stepProps}
              label={step.label}
              href={step.href}
              completed={index <= _lastCompleted}
              active={index === active}
              activate={() => onClick(index)}
            />
          </div>
          {index < data.length - 1 && (
            <div>
              <Separator
                {...separatorProps}
                nextStepIsCompleted={index < _lastCompleted}
              />
            </div>
          )}
        </React.Fragment>
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
