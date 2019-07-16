import { rslin } from "responsive-helpers";
import React, { useState } from "react";
import Container from "storefront-ui/Container";
import { Grid, GridItem } from "storefront-ui/Grid";
import { useTheme } from "storefront-ui/Theme";
import { R } from "storefront-ui/Config";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const PageTitle = props => {
  const theme = useTheme();

  return (
    <Container>
      <Grid>
        <GridItem
          css={css`
                      text-align: center; ${theme.fonts.h2.css}
                      ${rslin(theme.spacings.s120, theme.spacings.s140).css(
                        "padding-top"
                      )}
                      ${rslin(theme.spacings.s140, theme.spacings.s180).css(
                        "padding-bottom"
                      )}
                      `}
        >
          {props.title}
        </GridItem>
      </Grid>
    </Container>
  );
};

export default PageTitle;
