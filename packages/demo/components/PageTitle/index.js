import React from "react";

import { Grid, GridItem } from "@commerce-ui/core/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "@commerce-ui/core/Theme";
import { rslin } from "responsive-helpers";

const PageTitle = props => {
  const theme = useTheme();

  const { title, subtitle } = props;

  return (
    <Grid>
      <GridItem params={{ xs: 24, sm: 14, md: 15, lg: [12, 2], xl: [10, 3] }}>
        <div
          css={css`
            ${theme.fonts.h3.css}
            ${rslin(theme.spacings.s80, theme.spacings.s120).css("padding-top")}
          `}
        >
          {title}
        </div>
        <div
          css={css`
              ${theme.fonts.body2.css}
              color: ${theme.colors.mono600.css};
              ${rslin(theme.spacings.s120, theme.spacings.s120).css(
                "padding-bottom"
              )}
            `}
        >
          {subtitle}
        </div>
      </GridItem>
    </Grid>
  );
};

export default PageTitle;
