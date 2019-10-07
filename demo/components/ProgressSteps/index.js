import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { ProgressSteps$ } from "storefront-ui/ProgressSteps";

import { Button } from "../Button";
import Link from "next/link";

import IconArrow from "../../svg/arrow_forward_ios.svg";
import { useTheme } from "storefront-ui/Theme";
import routerPush from "../../helpers/routerPush";

const overrides = {
  Separator: ({ $theme, nextStepIsCompleted }) => {
    const theme = useTheme();
    return (
      <IconArrow
        css={css`
          width: 16px;
          height: 16px;
          fill: ${theme.colors.mono300.css};
        `}
      />
    );
  },
  Step: ({ $theme, active, label, href, completed, activate }) => {
    const theme = useTheme();
    return (
      <div
        css={css`
      ${theme.fonts.body1.css}
      color: ${active ? theme.colors.mono900.css : theme.colors.mono400.css};
      a {
        color: ${theme.colors.primary.css}; text-decoration: none;
      }
    `}
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
