import React, { useState } from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { FiltersColumn } from "../theme/Filters";
import { Button } from "../theme/Button";
import { L, R } from "storefront-ui/Config";
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
import { StatefulPagination } from "../theme/Pagination";
import CategoryCard from "../theme/CategoryCard";
import Image from "storefront-ui/Image";
import Device from "storefront-ui/Device";

const NavBarCollection = props => {
  const direction = useScrollDirection();
  const segment = useScrollSegment({ 50: "not-top" });

  const theme = useTheme();

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
      <NavBarMobile title={"All Food"} />

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
            left={
              <div
                css={css`
                  ${theme.fonts.body2.css}
                `}
              >
                something
              </div>
            }
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

  const content = (
    <Container>
      <Grid
        gutterVertical={L.gutter}
        css={css`
          padding-top: ${theme.spacings.s140}px;
        `}
      >
        <GridItem params={{ xs: 24, md: 12 }}>
          <div
            css={css`
              ${theme.fonts.h2.css} margin-bottom: 0.5em;
            `}
          >
            Snacks
          </div>
          <div
            css={css`
              ${theme.fonts.body1.css}
            `}
          >
            Our snacks are all non GMO with lots of gluten free, vegan, and
            organic options. Our jerky comes in savory flavors and may be your
            new protein treat. Prefer sweet? How about Chocolate Quinoa Bites?
            Find your faves here.
          </div>
        </GridItem>
        <GridItem
          params={{ xs: 24, md: [8, 4] }}
          css={css`
            ${R.to("sm").css("display: none;")}
          `}
        >
          <Image image={data.images.landscape1} />
        </GridItem>
        {data.categories[0].subcats.map((category, index) => {
          if (index === 0) {
            return;
          }
          return (
            <GridItem key={index} params={{ xs: 12, sm: 8, lg: 4 }}>
              <CategoryCard
                image={
                  data.images["landscape" + (index > 3 ? index - 2 : index + 1)]
                }
                text={category.name}
                href={"/collection"}
              />
            </GridItem>
          );
        })}
      </Grid>

      <div
        css={css`
          padding-bottom: ${theme.spacings.s120}px;
          padding-top: ${theme.spacings.s140}px;
          ${theme.fonts.body2.css}
          text-align: center;
          color: ${theme.colors.mono500.css};
        `}
      >
        Found 35 items
      </div>
      <Grid>
        <GridItem params={{ xs: 0, md: 6 }}>
          <FiltersColumn data={filters} onChange={onChange} />
        </GridItem>
        <GridItem params={{ xs: 24, md: 18 }}>
          <Grid gutterVertical={16}>
            {[...data.products].map((product, index) => (
              <GridItem params={{ xs: 12, md: 8, lg: 8, xl: 6 }} key={index}>
                <ProductCardTheme1 product={product} />
              </GridItem>
            ))}
            <div
              css={css`
                display: flex;
                justify-content: center;
                width: 100%;
                margin-top: ${theme.spacings.s80}px;
              `}
            >
              <StatefulPagination
                count={20}
                initPage={5}
                onChange={page => console.log(page)}
              />
            </div>
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  );

  return (
    <div>
      <div>
        <Device mobile>
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
            {content}
          </div>
        </Device>

        <Device desktop>{content}</Device>
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
              padding: ${theme.spacings.s40}px;
              border-top: 1px solid ${theme.colors.mono300.css};
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
