/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { useTheme } from "storefront-ui/Theme";

import { rslin } from "responsive-helpers";

import Star from "../Star";

export const Stars = props => {
  const theme = useTheme();
  const { rating, smaller, inline } = props;

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    let coverage = i < rating ? 1 : rating - i > -1 ? rating % 1 : 0;
    stars.push(<Star fillCoverage={coverage} smaller={smaller} key={i} />);
  }

  return (
    <div
      css={css`
        position: relative;
        display: ${inline ? "inline-flex" : "flex"};
        & > div:not(:last-of-type) {
          margin-right: 4px;
        }
      `}
    >
      {stars}
    </div>
  );
};
