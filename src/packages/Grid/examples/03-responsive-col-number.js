import React from "react";
import { Grid, GridItem } from "@commerce-ui/core/Grid";
import Container from "@commerce-ui/core/Container";

import Rectangle from "../../../../docs-utils/Rectangle";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { rs } from "responsive-helpers";

export default () => (
  <Container>
    <Grid colNumber={{ xs: 4, lg: 5 }} gutterVertical={rs(10, 20)}>
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
