import React from "react";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";

import Rectangle from "../../../../docs-utils/Rectangle";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => (
  <Container>
    <Grid colNumber={{ xs: 4, lg: 5 }}>
      <GridItem params={{ xs: 2, md: 1, lg: 1 }}>
        <Rectangle color={"red"}>always 6 cols</Rectangle>
      </GridItem>

      <GridItem params={{ xs: 2, md: 1, lg: 1 }}>
        <Rectangle color={"red"}>always 6 cols</Rectangle>
      </GridItem>

      <GridItem params={{ xs: 2, md: 1, lg: 1 }}>
        <Rectangle color={"red"}>always 6 cols</Rectangle>
      </GridItem>

      <GridItem params={{ xs: 2, md: 1, lg: 1 }}>
        <Rectangle color={"red"}>always 6 cols</Rectangle>
      </GridItem>

      <GridItem params={{ xs: 2, md: 1, lg: 1 }}>
        <Rectangle color={"red"}>always 6 cols</Rectangle>
      </GridItem>
    </Grid>
  </Container>
);
