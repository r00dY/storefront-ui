import React, { useState } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "storefront-ui/Theme";

const SpacingBox = ({ spacing }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        position: relative;
        width: ${theme.spacings["s" + spacing]}px;
        height: ${theme.spacings["s" + spacing]}px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        background-color: ${theme.colors.primary.css};
      `}
    >
      s{spacing}
    </div>
  );
};

export default () => {
  const theme = useTheme();

  return (
    <div>
      {Object.keys(theme.fonts).map(key => {
        // console.log(theme.fonts[key], `${theme.fonts[key]}`);

        return (
          <p
            css={css`
                        ${theme.fonts[key]}
                        color: ${theme.colors.mono500};
                    `}
          >
            {key}
          </p>
        );
      })}
    </div>
  );
};
