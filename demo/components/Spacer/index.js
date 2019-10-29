/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { useTheme } from "@commerce-ui/core/Theme";

import { rslin } from "responsive-helpers";

export const Spacer = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        ${rslin(theme.spacings.s70, theme.spacings.s120).css("height")};
      `}
    />
  );
};
