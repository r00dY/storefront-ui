/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { useTheme } from "storefront-ui/Theme";

export const Spacer = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        height: ${theme.spacings.s170}px;
      `}
    />
  );
};
