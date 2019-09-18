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
import useScrollSegment from "storefront-ui/useScrollSegment";
import { ProductCardTheme1 } from "../theme/ProductCard";
import NavBarMobile from "../theme/NavBarMobile";
import { useTheme } from "storefront-ui/Theme";
import { StatefulPagination } from "../theme/Pagination";
import { StatefulSelect } from "../theme/Select";
import CategoryCardCompact from "../theme/CategoryCardCompact";
import FilterResultPills from "../theme/FilterResultPills";
import { ProgressStepsAsBreadcrumbs } from "../theme/ProgressSteps";
import { ButtonRaw } from "../theme/ButtonRaw";

import data from "../data";
import useProducts from "../helpers/useProducts";

import IconClose from "../svg/close.svg";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

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

  const [filtersValue, setFiltersValue] = useState({});
  const [filtersModalOpened, setFiltersModalOpened] = useState(false);

  const { products, isLoading, query } = useProducts();

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

        {!props.isCategory &&
          categories.map((category, index) => {
            return (
              <GridItem key={index} params={{ xs: 12, sm: 8, lg: 4 }}>
                <CategoryCardCompact
                  image={category.image}
                  text={category.title}
                  href={category.href}
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
        <GridItem
          params={{ xs: 0, md: 6, lg: 5, xl: 4 }}
          css={css`
            ${L.gutter.multiply(3).css("padding-right")}
          `}
        >
          <FiltersColumn
            data={data.filters}
            value={filtersValue}
            onChange={(key, val) => {
              setFiltersValue({ ...filtersValue, [key]: val });
              query();
            }}
          />
        </GridItem>

        <GridItem params={{ xs: 24, md: 18, lg: 19, xl: [20] }}>
          <div
            css={css`
              display: flex;
              position: relative;
              justify-content: space-between;
              ${rslin(theme.spacings.s70, theme.spacings.s70).css(
                "margin-bottom"
              )}
              ${theme.fonts.body1.css}
            `}
          >
            <div>
              <FilterResultPills
                filters={[
                  {
                    type: "text",
                    params: { label: "Certified Organic" }
                  },
                  {
                    type: "text",
                    params: { label: "Sulfate Free" }
                  },
                  {
                    type: "color",
                    params: { label: "Orange", color: "#e45d46" }
                  },
                  {
                    type: "text",
                    params: { label: `Price: $1.50 \u2014 $3.00 ` }
                  },
                  {
                    type: "text",
                    params: { label: "Mineral Oil Free" }
                  },
                  {
                    type: "text",
                    params: { label: "Non GMO" }
                  }
                ]}
              />
            </div>
            <Device desktop>
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  height: 50px;
                `}
              >
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
              </div>
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
    <div>
      <div>
        <Device mobile>
          <NavBarCollection
            title={props.isCategory ? "Bath" : "Beauty"}
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
            header={() => (
              <div
                css={css`${theme.fonts.body1.css} border-bottom: 1px solid ${
                  theme.colors.mono200.css
                };`}
              >
                <LayoutLeftCenterRight
                  left={
                    <ButtonRaw
                      css={css`
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        ${L.margin.css("padding-right")}
                        ${L.margin.css("padding-left")}
                      `}
                      onClick={() => setFiltersModalOpened(false)}
                    >
                      <IconClose />
                    </ButtonRaw>
                  }
                  center={"Filters"}
                  height={50}
                  right={
                    <Button
                      kind={"minimal"}
                      css={css`
                        ${L.margin.css("padding-right")}
                        ${L.margin.css("padding-left")}
                      `}
                    >
                      Clear all
                    </Button>
                  }
                />
              </div>
            )}
            footer={() => (
              <div
                css={css`
                  padding: ${theme.spacings.s40}px;
                  border-top: 1px solid ${theme.colors.mono200.css};
                `}
              >
                <Button
                  fitContainer={true}
                  onClick={() => {
                    setFiltersModalOpened(false);
                    query(scrollTop);
                  }}
                >
                  Apply (55)
                </Button>
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
  );
};

CollectionPage.defaultProps = {
  isCategory: false
};

CollectionPage.tabbar = 0;

export default CollectionPage;
