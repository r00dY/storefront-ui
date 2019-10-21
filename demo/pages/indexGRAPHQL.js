import React from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { useTheme } from "storefront-ui/Theme";
import Device from "storefront-ui/Device";
import { L } from "storefront-ui/Config";

import { rslin } from "responsive-helpers";

import { StatefulInput } from "../theme/Input";
import Banner from "../components/Banner";
import TwoBanners from "../theme/TwoBanners";
import ProductSlider from "../theme/ProductSlider/ProductSlider";
import SectionTitle from "../theme/SectionTitle";
import CategoryCard from "../theme/CategoryCard";

import data from "../data";
import routerPush from "../helpers/routerPush";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import useProducts from "../graphql/hooks/useProducts";
import useGetCollections from "../graphql/hooks/useGetCollections";

// Categories displayed at the bottom
const categories = [
  "Bars",
  "Candy",
  "Chips & Pretzels",
  "Cookies",
  "Crackers & Crisps",
  "Fruit & Vegetable Snacks",
  "Jerky",
  "Popcorn & Puffs"
].map((category, index) => ({
  title: category,
  image: data.images["landscape" + ((index % 4) + 2)],
  href: "/collection"
}));

const Home = () => {
  const theme = useTheme();
  const [mappedProducts, isLoadingCollection] = useProducts("frontpage", 50);
  const [collections, collectionsLoading] = useGetCollections();

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
        <ProductSlider
          products={
            isLoadingCollection ? data.products.slice(0, 12) : mappedProducts
          }
          title={"Top Picks"}
        />
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
                    href={collection.href}
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

Home.tabbar = 0;
Home.showFooterOnMobile = true;

export default Home;
