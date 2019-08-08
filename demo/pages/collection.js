import React, { useState } from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import { rslin } from "responsive-helpers";
import Container from "storefront-ui/Container";
import { FiltersColumn } from "../theme/Filters";
import { Button } from "../theme/Button";
import { L, R } from "storefront-ui/Config";
import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import Device from "storefront-ui/Device";

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
import { StatefulSelect } from "../theme/Select";
import CategoryCard from "../theme/CategoryCard";
import {
  ProgressSteps,
  ProgressStepsAsBreadcrumbs
} from "../theme/ProgressSteps";

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
                30 items
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

const stringOptions = [
  "Newest",
  "Price (high to low)",
  "Price (low to high)",
  "Most popular"
];

const FilterPills = ({ filters, onChange }) => {
  const theme = useTheme();

  return (
    <div>
      {filters.map(filter => {
        if (filter.type === "range") {
          let string;

          if (filter.value.from && filter.value.to) {
            string = `${filter.value.from}${filter.unit} - ${filter.value.to}${
              filter.unit
            }`;
          } else if (filter.value.from) {
            string = `> ${filter.value.from}${filter.unit}`;
          } else if (filter.value.to) {
            string = `< ${filter.value.to}${filter.unit}`;
          }

          if (string) {
            return (
              <div
                css={css`
                  box-sizing: content-box;
                  background-color: #f0f0f0;
                  color: black;
                  padding: 8px 12px;
                  ${theme.fonts.body2}
                  border-radius: 12px;
                `}
              >
                {string}
              </div>
            );
          }
        }
      })}
    </div>
  );
};

const Filters = props => {
  const [filters, onChange] = useFiltersData(data.filters);

  return (
    <FiltersColumn
      data={props.data.filters}
      onChange={(key, val) => {
        onChange(key, val);
        props.onChange();
      }}
    />
  );
};

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let timeout;

export default () => {
  const [filters, onFiltersChange] = useFiltersData(data.filters);
  const [filtersModalOpened, setFiltersModalOpened] = useState(false);
  const [select1, setSelect1] = useState(stringOptions[0]);
  const theme = useTheme();

  const [products, setProducts] = useState(data.products);
  const [isLoading, setLoading] = useState(false);

  const onChange = scrollTop => {
    setLoading(true);
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      setProducts([...shuffle(products)]);
      setLoading(false);

      if (scrollTop) {
        window.scrollTo({ top: 0 });
      }
    }, 500);
  };

  const content = (
    <Container>
      <Grid
        gutterVertical={L.gutter}
        css={css`
          ${rslin(theme.spacings.s100, theme.spacings.s140).css("padding-top")}
        `}
      >
        <GridItem>
          <Device desktop>
            <ProgressStepsAsBreadcrumbs
              data={[
                {
                  label: "Food",
                  href: "/collection"
                },
                {
                  label: "Snacks",
                  href: "/collection"
                }
              ]}
            />
          </Device>
          <div
            css={css`
              margin-top: 0.2em;
              margin-bottom: 0.4em;
              ${theme.fonts.h2.css}
            `}
          >
            Snacks
          </div>
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
      <Grid
        css={css`
          ${rslin(theme.spacings.s100, theme.spacings.s120).css("padding-top")}
        `}
      >
        <GridItem params={{ xs: 0, md: 6, lg: 5, xl: 4 }}>
          <FiltersColumn
            data={filters}
            onChange={(key, val) => {
              onFiltersChange(key, val);
              onChange();
            }}
          />
        </GridItem>

        <GridItem params={{ xs: 24, md: 18, lg: 19, xl: [20] }}>
          <div
            css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                ${rslin(theme.spacings.s70, theme.spacings.s70).css(
                  "margin-bottom"
                )}
                ${theme.fonts.body2.css}
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
            <FilterPills filters={filters} onChange={onChange} />

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
                options={stringOptions}
                onChange={val => {
                  setSelect1(val);
                  onChange();
                }}
                value={select1}
                initValue={stringOptions[0]}
              />
            </Device>
          </div>

          <Grid gutterVertical={theme.spacings.s120}>
            {[...products].map((product, index) => (
              <GridItem
                params={{ xs: 12, md: 8, lg: 8, xl: 6 }}
                key={product.id}
                css={css`
                  opacity: ${isLoading ? 0.3 : 1};
                  transition: opacity 0.15s;
                `}
              >
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
                onChange={page => {
                  onChange(true);
                }}
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
                <Button
                  fitContainer={true}
                  onClick={() => {
                    setFiltersModalOpened(false);
                    onChange(true);
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
            data={filters}
            onChange={(key, val) => {
              onFiltersChange(key, val);
            }}
            isMobile={true}
          />
        </div>
      </Modal>
    </div>
  );
};
