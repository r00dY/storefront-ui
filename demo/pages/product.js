import React from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import SwipeableItemsContainer, {
  useSwipeableItemsContainer
} from "storefront-ui/SwipeableItemsContainer";
import Image from "storefront-ui/Image";
import Dots from "storefront-ui/Dots";

import data from "../data";

import { useTheme } from "storefront-ui/Theme";
import NavBarMobile from "../theme/NavBarMobile";

import useScrollDirection from "storefront-ui/useScrollDirection";
import useScrollSegment from "storefront-ui/useScrollSegment";

import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import { Button } from "../theme/Button";

const Product = () => {
  const theme = useTheme();
  const direction = useScrollDirection();
  const segment = useScrollSegment({ 400: "not-top" });

  let swiper = useSwipeableItemsContainer(
    <SwipeableItemsContainer
      mode={"horizontal"}
      css={css`
        height: 400px;
      `}
    >
      <Image image={data.products[0].images[0]} />
      <Image image={data.products[0].images[1]} />
      <Image image={data.products[0].images[2]} />
    </SwipeableItemsContainer>
  );

  return (
    <div>
      <div
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1;
          transition: transform 0.2s ease-out;
          ${segment === "not-top"
            ? "transform: none;"
            : "transform: translateY(-50px);"}
        `}
      >
        <NavBarMobile title={"Beautiful dress"} />
      </div>

      <div
        css={css`
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 1;
            background #fafafa;
            border-top: 1px solid lightgrey;
        `}
      >
        <Container>
          <LayoutLeftCenterRight
            left={
              <div>
                50 euro
                <br />
                taniej pan nie znajdziesz
              </div>
            }
            right={<Button>Add to cart</Button>}
            height={50}
          />
        </Container>
      </div>

      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1;
        `}
      >
        <NavBarMobile title={""} transparent={true} />
      </div>

      <div
        css={css`
          position: relative;
        `}
      >
        {swiper.element}

        <div
          css={css`
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            justify-content: center;
          `}
        >
          <Dots swipeableItemsContainer={swiper} />
        </div>
      </div>

      <Container>
        <div
          css={css`
            margin-top: 16px;
            ${theme.fonts.h5}
          `}
        >
          Beautiful dress
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
    </div>
  );
};

Product.navbar = true;

export default Product;
