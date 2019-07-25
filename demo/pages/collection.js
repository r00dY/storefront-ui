import React, { useState } from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { FiltersColumn } from "../theme/Filters";
import { Button } from "../theme/Button";
import LayoutRow from "storefront-ui/LayoutRow";
import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";

import { StatefulPopover } from "../theme/Popover";

import { Modal } from "../theme/Modal";

import useFiltersData from "storefront-ui/Filters/useFiltersData";

import useScrollDirection from "storefront-ui/useScrollDirection";
import useScrollSegment from "storefront-ui/useScrollSegment";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import data from "../data";
import { ProductCardTheme1 } from "../theme/ProductCard";
import NavBarMobile from "../theme/NavBarMobile";
import { useTheme } from "storefront-ui/Theme";

const NavBarCollection = props => {
  const direction = useScrollDirection();
  const segment = useScrollSegment({ 50: "not-top" });

  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        transition: transform 0.2s ease-out;
        transform: ${direction === true && segment === "not-top"
          ? "translateY(-51px)"
          : "none"};
      `}
    >
      <NavBarMobile title={"Spring dresses"} />

      <div
        css={css`
          position: relative;
          width: 100%;
          height: 50px;
          background: #fafafa;
          border-bottom: 1px solid lightgrey;
        `}
      >
        <Container>
          <LayoutLeftCenterRight
            left={<div>coś tam po lewej</div>}
            right={<Button onClick={props.onFilterOpen}>Filter</Button>}
            height={50}
          />
        </Container>
      </div>
    </div>
  );
};

export default () => {
  const [filters, onChange] = useFiltersData(data.filters);
  const [filtersModalOpened, setFiltersModalOpened] = useState(false);
  const theme = useTheme();

  return (
    <div>
      <div>
        <NavBarCollection
          onFilterOpen={() => {
            setFiltersModalOpened(true);
          }}
        />

        <div
          css={css`
            margin-top: 100px;
          `}
        >
          <Container
            css={css`
              padding-top: 24px;
              padding-bottom: 24px;
            `}
          >
            <div
              css={css`
                padding-bottom: 24px;
                ${theme.fonts.body2}
                text-align: center;
                color: ${theme.colors.mono500.css};
              `}
            >
              Found 35 items
            </div>
            <Grid gutterVertical={16}>
              {[...data.products].map((product, index) => (
                <GridItem params={{ xs: 12, md: 8, lg: 6, xl: 4 }} key={index}>
                  <ProductCardTheme1 product={product} />
                </GridItem>
              ))}
            </Grid>
          </Container>
        </div>
      </div>

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
    </div>
  );
};
