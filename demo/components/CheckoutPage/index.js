import { rslin } from "responsive-helpers";
import React from "react";
import Container from "storefront-ui/Container";
import { Grid, GridItem } from "storefront-ui/Grid";
import { useTheme } from "storefront-ui/Theme";

import Page from "../Page";
import CheckoutSidebar from "../CheckoutSidebar";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const CheckoutPage = props => {
  const theme = useTheme();
  return (
    <Page>
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
            Outdoor Voices
          </GridItem>
        </Grid>
        <Grid>
          <GridItem params={{ xs: 24, md: [16], lg: [12, 2], xl: [10, 4] }}>
            {props.children}
          </GridItem>
          <GridItem params={{ xs: 24, md: [8], lg: [7, 1], xl: [6, 1] }}>
            <CheckoutSidebar />
          </GridItem>
        </Grid>
      </Container>
    </Page>
  );
};

export default CheckoutPage;
