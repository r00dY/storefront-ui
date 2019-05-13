import React from "react";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";

import Rectangle from "../../../../docs-utils/Rectangle";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => (
  <Container>
    <Grid>
      <GridItem params={{ xs: 24, lg: 16 }}>
        <Grid colNumber={16}>
          <GridItem params={{ xs: 8, md: 4 }}>
            <Rectangle color={"red"}>always 6 cols</Rectangle>
          </GridItem>

          <GridItem params={{ xs: 8, md: 4 }}>
            <Rectangle color={"red"}>always 6 cols</Rectangle>
          </GridItem>

          <GridItem params={{ xs: 8, md: 4 }}>
            <Rectangle color={"red"}>always 6 cols</Rectangle>
          </GridItem>

          <GridItem params={{ xs: 8, md: 4 }}>
            <Rectangle color={"red"}>always 6 cols</Rectangle>
          </GridItem>

          <GridItem params={{ xs: 8, md: 4 }}>
            <Rectangle color={"red"}>always 6 cols</Rectangle>
          </GridItem>

          <GridItem params={{ xs: 8, md: 4 }}>
            <Rectangle color={"red"}>always 6 cols</Rectangle>
          </GridItem>

          <GridItem params={{ xs: 8, md: 4 }}>
            <Rectangle color={"red"}>always 6 cols</Rectangle>
          </GridItem>

          <GridItem params={{ xs: 8, md: 4 }}>
            <Rectangle color={"red"}>always 6 cols</Rectangle>
          </GridItem>

          <GridItem params={{ xs: 8, md: 4 }}>
            <Rectangle color={"red"}>always 6 cols</Rectangle>
          </GridItem>

          <GridItem params={{ xs: 8, md: 4 }}>
            <Rectangle color={"red"}>always 6 cols</Rectangle>
          </GridItem>

          <GridItem params={{ xs: 8, md: 4 }}>
            <Rectangle color={"red"}>always 6 cols</Rectangle>
          </GridItem>

          <GridItem params={{ xs: 8, md: 4 }}>
            <Rectangle color={"red"}>always 6 cols</Rectangle>
          </GridItem>
        </Grid>
      </GridItem>

      <GridItem params={{ xs: [24, 0, -1], lg: 8 }}>
        <Rectangle color={"blue"}>side info</Rectangle>
      </GridItem>
    </Grid>
  </Container>
);
