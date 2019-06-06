import React from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { FiltersColumn } from "../theme/Filters";

import useFiltersData from "storefront-ui/Filters/useFiltersData";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import data from "../data";

export default () => {
  const [filters, onChange] = useFiltersData(data.filters);

  return (
    <Page>
      <Container>
        <Grid>
          <GridItem params={3}>
            <FiltersColumn data={filters} onChange={onChange} />
          </GridItem>

          <GridItem params={[19, 1]}>
            {[...Array(1000)].map(() => (
              <div>Cześć</div>
            ))}
          </GridItem>
        </Grid>
      </Container>
    </Page>
  );
};
