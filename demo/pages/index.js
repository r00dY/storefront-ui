import React from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { useTheme } from "storefront-ui/Theme";
import Device from "storefront-ui/Device";
import { L } from "storefront-ui/Config";

import { rslin } from "responsive-helpers";

import { Input, StatefulInput } from "../theme/Input";

import Router from "next/router";

import Link from "next/link";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import MenuDesktop from "../theme/MenuDesktop";
import Footer from "../theme/Footer";
import { Banner, BannerInner } from "../theme/Banner";
import TwoBanners from "../theme/TwoBanners";

import data from "../data";
import ProductSlider from "../theme/ProductSlider/ProductSlider";
import { ProductCardTheme1 } from "../theme/ProductCard";
import SectionTitle from "../theme/SectionTitle";
import CategoryCard from "../theme/CategoryCard";

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
      image={data.products[1].images[0]}
      // imageMobile={new ImgixImage(DATA.home.image3_mobile)}
      element={<BannerInner text={"The Tonal Trend"} />}
      elementFlexAlign={"flex-end"}
      elementFullWidth
    />
  );
  const banner2 = (
    <Banner
      image={data.products[2].images[0]}
      // imageMobile={new ImgixImage(DATA.home.image4_mobile)}
      // video={DATA.home.video1}
      // videoMobile={DATA.home.video1}
      modeCover
      element={<BannerInner text={"Summer Must-Haves: Air Max Dia"} />}
      elementFlexAlign={"flex-end"}
      elementFullWidth
    />
  );

  return (
    <div>
      <Device desktop>
        <MenuDesktop
          data={[
            {
              label: "Men",
              href: "/category"
            },
            {
              label: "Women",
              href: "/category"
            },
            {
              label: "Kids",
              href: "/category"
            },
            {
              label: "Customize",
              href: "/category"
            },
            {
              label: "Gifts",
              href: "/category"
            }
          ]}
        />
      </Device>
      <Container
        css={css`
          ${rslin(theme.spacings.s80, theme.spacings.s100).css("margin-bottom")}
        `}
      >
        <div
          css={css`
            text-align: center;
            padding: 100px 0 60px;
            ${theme.fonts.h2.css}
          `}
        >
          SuperStore
        </div>
        <Grid>
          <GridItem params={{ xs: 24, md: [6, 9] }}>
            <StatefulInput
              placeholder={"What you're looking for?"}
              onFocus={() => {
                Router.push("/search");
              }}
            />
          </GridItem>
        </Grid>
      </Container>

      <div
        css={css`
          & > div:not(:first-of-type) {
            ${rslin(theme.spacings.s120, theme.spacings.s180).css("margin-top")}
          }
        `}
      >
        <Container>
          <SectionTitle>Big Thing</SectionTitle>
          <Banner
            image={data.images.landscape1}
            element={
              <BannerInner
                label={"Truly Transparent"}
                title={"Transparent Bottle"}
                text={"Don't bother about color anymore"}
                hideTextOnMobile
              />
            }
            elementFlexAlign={{ xs: "flex-end", md: "center" }}
          />
        </Container>

        <ProductSlider boxes={sliderItems} title={"Top Picks"} />

        <TwoBanners title={"Trending Now"} banners={[banner1, banner2]} />

        <div>
          <Container>
            <SectionTitle>Top Categories</SectionTitle>
            <Grid gutterVertical={L.gutter}>
              {categories.map((category, index) => (
                <GridItem key={index} params={{ xs: 24, sm: 12, lg: 6 }}>
                  <CategoryCard image={category.image} text={category.name} />
                </GridItem>
              ))}
            </Grid>
          </Container>
        </div>

        <Footer />
      </div>
    </div>
  );
};

Home.tabbar = 0;

export default Home;
