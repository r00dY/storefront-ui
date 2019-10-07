import React, { useState } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "@commerce-ui/core/Theme";

const ColorPalette = ({ colors }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
      `}
    >
      {colors.map(color => (
        <div
          css={css`
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            background-color: ${theme.colors[color].css};
          `}
        >
          {color}
        </div>
      ))}
    </div>
  );
};

export default () => {
  return (
    <div>
      <p>Primary</p>
      <ColorPalette
        colors={[
          "primary50",
          "primary100",
          "primary200",
          "primary300",
          "primary400",
          "primary500",
          "primary600",
          "primary700"
        ]}
      />

      <p>Positive</p>
      <ColorPalette
        colors={[
          "positive50",
          "positive100",
          "positive200",
          "positive300",
          "positive400",
          "positive500",
          "positive600",
          "positive700"
        ]}
      />

      <p>Negative</p>
      <ColorPalette
        colors={[
          "negative50",
          "negative100",
          "negative200",
          "negative300",
          "negative400",
          "negative500",
          "negative600",
          "negative700"
        ]}
      />

      <p>Greys / monochromatic</p>
      <ColorPalette
        colors={[
          "white",
          "mono100",
          "mono200",
          "mono300",
          "mono400",
          "mono500",
          "mono600",
          "mono700",
          "mono800",
          "mono900",
          "black"
        ]}
      />
    </div>
  );
};
