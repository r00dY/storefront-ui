/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import { useTheme } from "storefront-ui/Theme";

import { rslin } from "responsive-helpers";

import IconStar from "./star.svg";

const Star = props => {
  const { highlighted, fillCoverage, smaller, onMouseOver, onMouseOut } = props;
  const theme = useTheme();

  const size = smaller ? 12 : 16;

  return (
    <div
      css={css`
        position: relative;
        svg {
          width: ${size}px;
          height: ${size}px;
        }
      `}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <IconStar
        css={css`
          fill: ${highlighted
            ? theme.colors.mono500.css
            : theme.colors.mono300.css};
        `}
      />
      <div
        css={css`
          position: absolute;
          height: ${size}px;
          top: 0;
          width: ${size * fillCoverage}px;
          overflow: hidden;
        `}
      >
        <IconStar
          css={css`
            fill: ${theme.colors.mono900.css};
          `}
        />
      </div>
    </div>
  );
};

export default Star;
