import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { ProgressSteps$ } from "storefront-ui/ProgressSteps";

import { Button } from "../Button";
import Link from "next/link";

import IconArrow from "./outline-arrow_forward_ios-24px.svg";
import { useTheme } from "storefront-ui/Theme";

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
const ProgressStepsAsBreadcrumbs = props => {
  const theme = useTheme();
  return (
    <ProgressSteps$
      overrides={{
        Separator: ({ $theme, nextStepIsCompleted }) => (
          <IconArrow
            css={css`
              width: 10px;
              height: 10px;
            `}
          />
        ),
        Step: ({ $theme, active, label, href, completed, activate }) => {
          return (
            <div
              css={css`${theme.fonts.body2.css} color: ${
                theme.colors.mono800.css
              }; a {text-decoration: none; color: ${
                theme.colors.primary.css
              }; }`}
            >
              {completed ? (
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              ) : (
                label
              )}
            </div>
          );
        }
      }}
      {...props}
    />
  );
};
export { ProgressSteps, ProgressStepsAsBreadcrumbs };
