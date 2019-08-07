import React from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { useTheme } from "storefront-ui/Theme";
import Device from "storefront-ui/Device";
import { L } from "storefront-ui/Config";

import { rslin } from "responsive-helpers";

import { Input, StatefulInput } from "../theme/Input";

import routerPush from "../helpers/routerPush";

import Link from "next/link";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Banner, BannerInner } from "../theme/Banner";
import TwoBanners from "../theme/TwoBanners";

import data from "../data";
import ProductSlider from "../theme/ProductSlider/ProductSlider";
import { ProductCardTheme1 } from "../theme/ProductCard";
import SectionTitle from "../theme/SectionTitle";
import CategoryCard from "../theme/CategoryCard";
import { ProgressStepsAsBreadcrumbs } from "../theme/ProgressSteps";

import { ButtonRaw } from "../theme/ButtonRaw";

const Home = () => {
  const theme = useTheme();

  let sliderItems = [];

  data.products.map((product, index) => {
    sliderItems.push(<ProductCardTheme1 product={product} key={index} />);
  });

  const categories = [
    { name: "Home", image: data.images.products[4] },
    { name: "Beauty", image: data.images.products[8] },
    { name: "Food", image: data.images.products[10] },
    { name: "Health", image: data.images.products[11] }
  ];

  const banner1 = (
    <Banner
      image={data.images.boxes.half_box_10}
      imageMobile={data.images.boxes.mobile_box_10}
      element={<BannerInner text={"The Tonal Trend"} />}
      elementFlexAlign={"flex-end"}
      elementFullWidth
      href={"/collection"}
    />
  );
  const banner2 = (
    <Banner
      image={data.images.boxes.half_box_04}
      imageMobile={data.images.boxes.mobile_box_04}
      modeCover
      element={<BannerInner text={"Summer Must-Haves: Air Max Dia"} />}
      elementFlexAlign={"flex-end"}
      elementFullWidth
      href={"/collection"}
    />
  );

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
            {/*<div*/}
            {/*css={css`*/}
            {/*${theme.fonts.h4.css}*/}
            {/*margin-bottom: 32px;*/}
            {/*`}*/}
            {/*>*/}
            {/*Basic&nbsp;Store*/}
            {/*</div>*/}

            <StatefulInput
              placeholder={"Search"}
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
            element={
              <BannerInner
                label={"Truly Transparent"}
                title={"Transparent Bottle"}
                hideTextOnMobile
              />
            }
            elementFlexAlign={{ xs: "flex-end", md: "flex-end" }}
          />
        </Container>

        <ProductSlider boxes={sliderItems} title={"Top Picks"} />

        <TwoBanners title={"Trending Now"} banners={[banner1, banner2]} />

        <div>
          <Container>
            <SectionTitle>Top Categories</SectionTitle>
            <Grid gutterVertical={L.gutter}>
              {[
                "Bars",
                "Candy",
                "Chips & Pretzels",
                "Cookies",
                "Crackers & Crisps",
                "Fruit & Vegetable Snacks",
                "Jerky",
                "Popcorn & Puffs"
              ].map((category, index) => {
                return (
                  <GridItem key={index} params={{ xs: 24, sm: 12, lg: 6 }}>
                    <CategoryCard
                      image={data.images["landscape" + ((index % 4) + 2)]}
                      text={category}
                      href={"/collection"}
                    />
                  </GridItem>
                );
              })}
            </Grid>

            {/*<Grid gutterVertical={L.gutter}>*/}
            {/*{categories.map((category, index) => (*/}
            {/*<GridItem key={index} params={{ xs: 12, sm: 12, lg: 6 }}>*/}
            {/*<CategoryCard*/}
            {/*image={category.image}*/}
            {/*text={category.name}*/}
            {/*href={"/collection"}*/}
            {/*/>*/}
            {/*</GridItem>*/}
            {/*))}*/}
            {/*</Grid>*/}
          </Container>
        </div>
      </div>
    </div>
  );
};

Home.tabbar = 0;
Home.showFooterOnMobile = true;

export default Home;
