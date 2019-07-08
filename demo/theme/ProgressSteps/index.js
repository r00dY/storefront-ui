import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import {
  ProgressSteps$,
  ProgressStepsItem$
} from "storefront-ui/ProgressSteps";

import IconArrow from "./outline-arrow_forward_ios-24px.svg";

const overrides = {
  Separator: ({ $theme, highlighted }) => (
    <IconArrow
      css={css`
        width: 16px;
        height: 16px;
        ${!highlighted ? "opacity: 0.4;" : ""}
      `}
    />
  )
};

const ProgressSteps = props => (
  <ProgressSteps$ overrides={overrides} {...props} />
);
const ProgressStepsItem = props => <ProgressStepsItem$ {...props} />;
export { ProgressSteps, ProgressStepsItem };
