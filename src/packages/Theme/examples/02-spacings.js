import React, { useState } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "storefront-ui/Theme";

const SpacingBox = ({ spacing }) => {
  const theme = useTheme();

  console.log(theme.spacings);

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
  let spacings = [];
  for (let i = 0; i <= 180; i += 10) {
    spacings.push(i);
  }

  return (
    <div>
      {spacings.map(spacing => (
        <div>
          <SpacingBox spacing={spacing} />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};
