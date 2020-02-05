import React, { useState } from "react";
import { ProgressSteps } from "../../../../../../demo/components/ProgressSteps";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
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
        active={1}
        lastCompleted={1}
        onClick={stepIndex => {
          console.log("clicked step " + stepIndex);
        }}
      />
    </div>
  );
};
