import React, { useState } from "react";
import {
  ProgressSteps,
  ProgressStepsItem
} from "../../../../demo/theme/ProgressSteps";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  const currentStep = 1;

  return (
    <div
      css={css`
        width: 600px;
      `}
    >
      <ProgressSteps>
        <ProgressStepsItem
          label={"Consumer information"}
          href={"#"}
          current={currentStep === 0}
          completed={currentStep > 0}
        />
        <ProgressStepsItem
          label={"Shipping method"}
          href={"#"}
          current={currentStep === 1}
          completed={currentStep > 1}
        />
        <ProgressStepsItem
          label={"Payment method"}
          current={currentStep === 2}
          completed={currentStep > 2}
          href={"#"}
        />
      </ProgressSteps>
    </div>
  );
};
