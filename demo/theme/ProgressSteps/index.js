import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { ProgressSteps$ } from "storefront-ui/ProgressSteps";

import { Button } from "../Button";

import IconArrow from "./outline-arrow_forward_ios-24px.svg";

const overrides = {
  Separator: ({ $theme, nextStepIsCompleted }) => (
    <IconArrow
      css={css`
        width: 16px;
        height: 16px;
        ${!nextStepIsCompleted ? "opacity: 0.4;" : ""}
      `}
    />
  ),
  Step: ({ $theme, active, label, href, completed, activate }) => (
    <Button
      href={href}
      disabled={!completed}
      kind={active ? "primary" : "secondary"}
      onClick={activate}
    >
      {label}
    </Button>
  )
};

const ProgressSteps = props => (
  <ProgressSteps$ overrides={overrides} {...props} />
);
export { ProgressSteps };
