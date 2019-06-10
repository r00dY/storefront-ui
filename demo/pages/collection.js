import React, { useState } from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { FiltersColumn } from "../theme/Filters";
import { Button } from "../theme/Button";
import LayoutRow from "storefront-ui/LayoutRow";

import { Modal } from "../theme/Modal";

import useFiltersData from "storefront-ui/Filters/useFiltersData";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import data from "../data";

export default () => {
  const [filters, onChange] = useFiltersData(data.filters);

  const [filtersModalOpened, setFiltersModalOpened] = useState(false);

  return (
    <Page>
      <Container>
        <Button onClick={() => setFiltersModalOpened(true)}>
          Filters modal
        </Button>
        <br />
        <br />

        <Modal
          config={{
            mode: "bottom",
            height: "90%"
          }}
          isOpen={filtersModalOpened}
          onRequestClose={() => setFiltersModalOpened(false)}
          header={"Filters"}
          footer={() => (
            <div
              css={css`
                padding: 10px;
                background-color: lightgrey;
              `}
            >
              <Grid gutter={10}>
                <GridItem params={12}>
                  <Button kind={"secondary"} fitContainer={true}>
                    Clear all
                  </Button>
                </GridItem>
                <GridItem params={12}>
                  <Button fitContainer={true}>Apply (55)</Button>
                </GridItem>
              </Grid>
            </div>
          )}
        >
          <FiltersColumn data={filters} onChange={onChange} />
        </Modal>

        <Grid>
          <GridItem params={4}>
            <FiltersColumn data={filters.slice(1)} onChange={onChange} />
          </GridItem>

          <GridItem params={[19, 1]}>
            {[...Array(1000)].map((e, i) => (
              <div key={i}>Cześć</div>
            ))}
          </GridItem>
        </Grid>
      </Container>
    </Page>
  );
};
