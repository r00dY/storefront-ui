import React from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => (
  <Page>
    <Container>
      <Grid>
        <GridItem params={3}>Cześć</GridItem>

        <GridItem params={[19, 1]}>Cześć</GridItem>
      </Grid>
    </Container>
  </Page>
);
