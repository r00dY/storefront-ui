import React, { useState, useEffect } from "react";
import { getProductsQuery } from "../graphql/queries";
import addVariantToCart from "../actions/addVariantToCart";

/** @jsx jsx */
import { useQuery } from "react-apollo-hooks";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { FiltersColumn } from "../theme/Filters";
import { Button } from "../theme/Button";
import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";

import { Modal } from "../theme/Modal";

import useFiltersData from "storefront-ui/Filters/useFiltersData";

import useScrollDirection from "storefront-ui/useScrollDirection";
import useScrollSegment from "storefront-ui/useScrollSegment";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

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

export default props => {
  const theme = useTheme();
  const [filters, setFilters] = useState([]);
  const [selectedFilters, selectFilters] = useState({});
  const [filtersModalOpened, setFiltersModalOpened] = useState(false);
  const { data, error, loading } = useQuery(getProductsQuery(selectedFilters));

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

    selectFilters(prevFilters => ({ ...prevFilters, [filter]: value }));
  };

  useEffect(
    () => {
      if (!data || Object.keys(data).length === 0) {
        return;
      }

      setFilters([
        {
          id: "sort",
          name: "Sort",
          type: "select",
          multiple: false,
          items: [
            {
              id: "price-asc",
              name: "Price (high to low)"
            },
            {
              id: "price-desc",
              name: "Price (low to high)"
            },
            {
              id: "newest",
              name: "Newest"
            },
            {
              id: "most-popular",
              name: "Most popular"
            }
          ],
          forceExpand: true
        },
        {
          id: "productType",
          name: "Product type",
          type: "select",
          items: data.productTypes.edges.map(edge => ({
            id: edge.node,
            name: edge.node
          }))
        },
        {
          id: "productTags",
          name: "Tags",
          type: "select",
          items: data.productTags.edges.map(edge => ({
            id: edge.node,
            name: edge.node
          }))
        },
        {
          id: "price",
          name: "Price",
          type: "range",
          min: 0,
          max: 1999,
          unit: "zł"
        }
      ]);
    },
    [data]
  );

  if (error) return `Error! ${error.message}`;

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
              {loading
                ? "Loading..."
                : data.shop.products.edges.map((product, index) => (
                    <GridItem params={{ xs: 12, md: 6 }} key={index}>
                      {product.node.title}
                    </GridItem>

                    // <Product
                    //     addVariantToCart={(id, quantity) => {
                    //         addVariantToCart(
                    //             client,
                    //             id,
                    //             quantity,
                    //             props.checkoutId
                    //         ).then(data =>
                    //             alert("Product added to cart.")
                    //         );
                    //     }}
                    //     key={product.node.id.toString()}
                    //     product={product.node}
                    // />
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
        <FiltersColumn data={filters} onChange={updateFilters} />
      </Modal>
    </div>
  );
};
