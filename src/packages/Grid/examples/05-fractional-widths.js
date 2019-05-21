import React from "react";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";

import Rectangle from "../../../../docs-utils/Rectangle";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => (
  <Container>
    <Grid gutterVertical={10}>
      {/* Fixed width items */}

      <GridItem params={"1/2"}>
        <Rectangle color={"red"}>1/2</Rectangle>
      </GridItem>

      <GridItem params={"1/3"}>
        <Rectangle color={"red"}>1/3</Rectangle>
      </GridItem>

      <GridItem params={"1/6"}>
        <Rectangle color={"red"}>1/6</Rectangle>
      </GridItem>

      <GridItem params={"1/4"}>
        <Rectangle color={"red"}>always 6 cols</Rectangle>
      </GridItem>

      <GridItem params={"1/4"}>
        <Rectangle color={"red"}>always 6 cols</Rectangle>
      </GridItem>

      <GridItem params={"1/4"}>
        <Rectangle color={"red"}>always 6 cols</Rectangle>
      </GridItem>
    </Grid>
  </Container>
);
