import "../global-config";

import React from "react";

import { Grid, GridItem } from "@commerce-ui/core/Grid";
import Container from "@commerce-ui/core/Container";
import { useTheme } from "@commerce-ui/core/Theme";
import Device from "@commerce-ui/core/Device";
import { L } from "../theme.js";

import { rslin } from "responsive-helpers";

import { StatefulInput } from "../components/Input";
import Banner from "../components/Banner";
import TwoBanners from "../components/TwoBanners";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import SectionTitle from "../components/SectionTitle";
import CategoryCard from "../components/CategoryCard";

import data from "../data";
import routerPush from "../helpers/routerPush";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { getProducts, useProducts } from "data/useProducts";
import useCollections from "data/useCollections";

const Home = ({ productsSliderQueryBundle }) => {
  const theme = useTheme();

  const { isFetching, products } = useProducts(productsSliderQueryBundle);

  console.log(
    "useProducts render. isFetching",
    isFetching,
    "products",
    products
  );

  const { collections } = useCollections();

  return (
    <div>
      <Device mobile>
        <Container
          css={css`
            ${rslin(theme.spacings.s80, theme.spacings.s100).css(
              "margin-bottom"
            )}

            ${rslin(theme.spacings.s100, theme.spacings.s100).css("margin-top")}
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <div
              css={css`
                ${theme.fonts.h4.css}
                margin-bottom: 32px;
              `}
            >
              Basic&nbsp;Store
            </div>

            <StatefulInput
              placeholder={"What you're looking for?"}
              onFocus={() => {
                routerPush("/search");
              }}
              search
            />
          </div>
        </Container>
      </Device>

      <div
        css={css`
          & > div:not(:first-of-type) {
            ${rslin(theme.spacings.s120, theme.spacings.s160).css("margin-top")}
          }
        `}
      >
        <Container>
          <Banner
            image={data.images.boxes.full_box_01}
            imageMobile={data.images.boxes.mobile_box_01}
            href={"/collection"}
            label={"Truly Transparent"}
            title={"Transparent Bottle"}
          />
        </Container>

        {!isFetching ? (
          <ProductSlider products={products} title={"Top Picks"} />
        ) : (
          "Loading"
        )}

        <TwoBanners
          title={"Trending Now"}
          banners={[
            <Banner
              image={data.images.boxes.half_box_10}
              imageMobile={data.images.boxes.mobile_box_10}
              label={"The Tonal Trend"}
              href={"/collection"}
            />,
            <Banner
              image={data.images.boxes.half_box_04}
              imageMobile={data.images.boxes.mobile_box_04}
              label={"Summer Must-Haves: Air Max Dia"}
              href={"/collection"}
            />
          ]}
        />

        <div>
          <Container>
            <SectionTitle>Top Categories</SectionTitle>
            <Grid gutterVertical={L.gutter}>
              {collections.map((collection, index) => (
                <GridItem key={index} params={{ xs: 24, sm: 12, lg: 6 }}>
                  <CategoryCard
                    image={collection.image}
                    text={collection.title}
                    href={"/collection"}
                  />
                </GridItem>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const productsSliderQueryBundle = await getProducts(
    {
      query: [
        {
          key: "collection",
          value: "homepage-slider"
        }
      ]
    },
    true
  );

  return { productsSliderQueryBundle };
};

Home.tabbar = 0;
Home.showFooterOnMobile = true;

export default Home;
