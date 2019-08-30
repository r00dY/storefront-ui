/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState } from "react";
import { useTheme } from "storefront-ui/Theme";

import { rslin } from "responsive-helpers";

import IconStar from "./star.svg";

const Star = props => {
  const { highlighted, fillCoverage, smaller, onMouseOver, onMouseOut } = props;
  const theme = useTheme();

  const size = smaller ? 13 : 24;

  return (
    <div
      css={css`
        position: relative;
        padding: ${smaller ? "1px" : "4px"};
        svg {
          width: ${size}px;
          height: ${size}px;
          overflow: visible;
        }
      `}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <IconStar
        css={css`
          transition: 150ms;
          fill: ${highlighted
            ? theme.colors.mono900.css
            : theme.colors.mono300.css};
        `}
      />
      <div
        css={css`
          position: absolute;
          height: ${size + (smaller ? 2 : 8)}px;
          top: ${smaller ? "1px" : "4px"};
          left: ${smaller ? "1px" : "4px"};
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
