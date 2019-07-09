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
      <ProgressSteps
        data={[
          {
            label: "Consumer information",
            href: "#"
          },
          {
            label: "Shipping method",
            href: "#"
          },
          {
            label: "Payment method",
            href: "#"
          }
        ]}
        active={0}
        lastCompleted={1}
      />
    </div>
  );
};
