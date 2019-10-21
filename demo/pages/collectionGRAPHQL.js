import React, { useState, useEffect } from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import { rslin } from "responsive-helpers";
import Container from "storefront-ui/Container";
import { FiltersColumn } from "../theme/Filters";
import { Button } from "../theme/Button";
import { L, R } from "storefront-ui/Config";
import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import Device from "storefront-ui/Device";
import { Modal } from "../theme/Modal";
import useScrollSegment from "storefront-ui/useScrollSegment";
import { ProductCardTheme1 } from "../theme/ProductCard";
import NavBarMobile from "../theme/NavBarMobile";
import { useTheme } from "storefront-ui/Theme";
import { StatefulPagination } from "../theme/Pagination";
import { StatefulSelect } from "../theme/Select";
import CategoryCardCompact from "../theme/CategoryCardCompact";
import { ProgressStepsAsBreadcrumbs } from "../theme/ProgressSteps";

import data from "../data";
import useProducts from "../helpers/useProducts";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useQuery } from "@apollo/react-hooks";
import getCollection from "../graphql/queries/getCollection";
import mapProductsToMultipleVariants from "../helpers/mapProductsToMultipleVariants";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Menu,
  Configure
} from "react-instantsearch-dom";
import CustomHits from "../algolia/AlgoliaProductsHits";
import AlgoliaRefinementList from "../algolia/AlgoliaRefinementList";
import AlgoliaCategoryList from "../algolia/AlgoliaCategoryList";
import useGetCollections from "../graphql/hooks/useGetCollections";
import useProducts from "../graphql/hooks/useProducts";

// navigation bar for collection page (on mobile)
const NavBarCollection = ({ title, onFilterClick }) => {
  const segment = useScrollSegment({ 1: "not-top", 250: "far" });

  return (
    <div>
      <NavBarMobile title={""} noBorder={true} />

      <div
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1;
          transition: transform 0.2s ease-out;
          transform: ${segment !== "far" ? "translateY(-51px)" : "none"};
        `}
      >
        <NavBarMobile
          title={title}
          right={
            <Button size={"compact"} onClick={onFilterClick}>
              Filter
            </Button>
          }
        />
      </div>
    </div>
  );
};

const sortOptions = [
  "Newest",
  "Price (high to low)",
  "Price (low to high)",
  "Most popular"
];

const categories = ["Baby", "Bath", "Body", "Face", "Hair", "Oral"].map(
  (category, index) => ({
    title: category,
    image: data.images.categories[category.toLowerCase()],
    href: "/collection"
  })
);

const CollectionPage = props => {
  const theme = useTheme();

  const [filters, setFilters] = useState([]);

  const [filtersValue, setFiltersValue] = useState({});

  const [selectedFilters, selectFilters] = useState({});

  const [filtersModalOpened, setFiltersModalOpened] = useState(false);

  const { products, isLoading, query } = useProducts();

  const [collections, collectionsLoading] = useGetCollections();
  const [mappedProducts, isLoadingCollection] = useProducts(
    "test-collection-1",
    50
  );

  if (isLoadingCollection) {
    return "Loading...";
  }

  const updateFilters = (filter, value) => {
    setFilters(prevFilters => {
      const updatingItemIndex = prevFilters.findIndex(
        filterObject => filterObject.id === filter
      );

      const newFilters = prevFilters.slice();

      newFilters[updatingItemIndex] = {
        ...newFilters[updatingItemIndex],
        value
      };
      return newFilters;
    });

    const newFilters = {
      ...filtersValue,
      [filter]: value
    };

    setFiltersValue(newFilters);
    selectFilters(prevFilters => ({ ...prevFilters, [filter]: value }));
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  const content = (
    <Container>
      <Grid
        gutterVertical={L.gutter}
        css={css`
          ${rslin(theme.spacings.s50, theme.spacings.s140).css("padding-top")}
        `}
      >
        <GridItem>
          {props.isCategory && (
            <Device desktop>
              <ProgressStepsAsBreadcrumbs
                data={[
                  {
                    label: "Beauty",
                    href: "/collection"
                  },
                  {
                    label: "Bath",
                    href: "/category"
                  }
                ]}
              />
            </Device>
          )}
          <LayoutLeftCenterRight
            left={
              <div
                css={css`
                  margin-top: 0.2em;
                  margin-bottom: 0.4em;
                  ${theme.fonts.h2.css}
                `}
              >
                {!props.isCategory && "Beauty"}
                {props.isCategory && "Bath"}
              </div>
            }
            right={
              <Button
                size={"compact"}
                onClick={() => {
                  setFiltersModalOpened(true);
                }}
                css={css`
                  ${R.from("md").css("display: none;")}
                `}
              >
                Filter
              </Button>
            }
          />
        </GridItem>

        <AlgoliaCategoryList
          attribute="named_tags.collection"
          categoryData={collections}
          defaultRefinement={["Test collection"]}
        />
      </Grid>
      <Grid
        css={css`
          ${rslin(theme.spacings.s100, theme.spacings.s120).css("padding-top")}
        `}
      >
        <GridItem params={{ xs: 0, md: 6, lg: 5, xl: 4 }}>
          <AlgoliaRefinementList attribute="options.color" />
          <AlgoliaRefinementList attribute="product_type" />
          <AlgoliaRefinementList attribute="tags" />
          <AlgoliaRefinementList attribute="price_range" />
          <FiltersColumn
            value={filtersValue}
            data={filters}
            onChange={updateFilters}
          />
        </GridItem>
        <GridItem params={{ xs: 24, md: 18, lg: 19, xl: [20] }}>
          <div
            css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 50px;
                ${rslin(theme.spacings.s70, theme.spacings.s70).css(
                  "margin-bottom"
                )}
                ${theme.fonts.body1.css}
                ${R.to("sm").css("display: none;")}
              `}
          >
            <div
              css={css`
                flex-grow: 1;
                ${R.to("sm").css("text-align: center;")}
              `}
            >
              {data.products.length} items
            </div>

            <Device desktop>
              <div
                css={css`
                  margin-right: 1em;
                  white-space: nowrap;
                `}
              >
                Sort by:
              </div>
              <StatefulSelect
                compact
                options={sortOptions}
                onChange={() => {
                  query();
                }}
                initValue={sortOptions[0]}
              />
            </Device>
          </div>

          <Grid gutterVertical={theme.spacings.s120}>
            <CustomHits isLoading={isLoading} />
            {/*{mappedProducts.map((product, index) => (*/}
            {/*<GridItem*/}
            {/*params={{ xs: 12, md: 8, lg: 8, xl: 6 }}*/}
            {/*key={product.id}*/}
            {/*css={css`*/}
            {/*opacity: ${isLoading ? 0.3 : 1};*/}
            {/*transition: opacity 0.15s;*/}
            {/*`}*/}
            {/*>*/}
            {/*<ProductCardTheme1 product={product} />*/}
            {/*</GridItem>*/}
            {/*))}*/}
            <Device desktop>
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                  width: 100%;
                  margin-top: ${theme.spacings.s80}px;
                  margin-bottom: ${theme.spacings.s100}px;
                `}
              >
                <StatefulPagination
                  count={20}
                  initPage={5}
                  onChange={page => {
                    query(scrollTop);
                  }}
                />
              </div>
            </Device>
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  );

  return (
    <InstantSearch
      appId="61S35Z15ZT"
      apiKey="1d9d3da52e0d382ba1e17112eda64106"
      indexName="shopify_products"
    >
      <div>
        <div>
          <Device mobile>
            <NavBarCollection
              title={"Snacks"}
              onFilterClick={() => {
                setFiltersModalOpened(true);
              }}
            />
            {content}

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
                      <Button
                        fitContainer={true}
                        onClick={() => {
                          setFiltersModalOpened(false);
                          query(scrollTop);
                        }}
                      >
                        Apply (55)
                      </Button>
                    </GridItem>
                  </Grid>
                </div>
              )}
            >
              <div
                css={css`
                  padding: 0;
                `}
              >
                <FiltersColumn
                  data={data.filters}
                  value={filtersValue}
                  onChange={(key, val) => {
                    setFiltersValue({ ...filtersValue, [key]: val });
                    query();
                  }}
                  isMobile={true}
                />
              </div>
            </Modal>
          </Device>

          <Device desktop>{content}</Device>
        </div>
      </div>
    </InstantSearch>
  );
};

CollectionPage.defaultProps = {
  isCategory: false
};

CollectionPage.tabbar = 0;

export default CollectionPage;
