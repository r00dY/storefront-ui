import React, { useState } from "react";

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
import ShopTheLookBanner from "../theme/ShopTheLookBanner";

import data from "../data";
import routerPush from "../helpers/routerPush";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import SocialSlider from "../theme/SocialSlider";

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

  const [modalOpenId, setModalOpenId] = useState(-1);

  const setModalOpen = param => {
    if (typeof param === "number") {
      setModalOpenId(param);
    }
    if (param === "next") {
      setModalOpenId(modalOpenId + 1);
    }
    if (param === "prev") {
      setModalOpenId(modalOpenId - 1);
    }
  };

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
          products={data.products.slice(0, 12)}
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
              {categories.map((category, index) => (
                <GridItem key={index} params={{ xs: 24, sm: 12, lg: 6 }}>
                  <CategoryCard
                    image={category.image}
                    text={category.title}
                    href={category.href}
                  />
                </GridItem>
              ))}
            </Grid>
          </Container>
        </div>

        <SocialSlider
          boxes={[
            <ShopTheLookBanner
              image={data.images.insta1}
              products={data.products.slice(0, 3)}
              modalOpen={modalOpenId === 0}
              setModalOpen={param => setModalOpen(param)}
              id={0}
              hasNotLeftArrow
            />,
            <ShopTheLookBanner
              image={data.images.insta2}
              products={data.products.slice(3, 4)}
              modalOpen={modalOpenId === 1}
              setModalOpen={param => setModalOpen(param)}
              id={1}
            />,
            <ShopTheLookBanner
              image={data.images.insta3}
              products={data.products.slice(6, 8)}
              modalOpen={modalOpenId === 2}
              setModalOpen={param => setModalOpen(param)}
              id={2}
            />,
            <ShopTheLookBanner
              image={data.images.insta4}
              products={data.products.slice(6, 8)}
              modalOpen={modalOpenId === 3}
              setModalOpen={param => setModalOpen(param)}
              id={3}
              hasNotRightArrow
            />
          ]}
          title={"Browse our looks"}
        />
      </div>
    </div>
  );
};

Home.tabbar = 0;
Home.showFooterOnMobile = true;

export default Home;
