import React, { useState } from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { rslin } from "responsive-helpers";
import { useTheme } from "storefront-ui/Theme";
import useScrollSegment from "storefront-ui/useScrollSegment";
import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import { useSwipeableItemsContainer } from "storefront-ui/SwipeableItemsContainer";
import NavBarMobile from "../components/NavBarMobile";
import { Button } from "../components/Button";
import ProductHead from "../components/ProductHead/ProductHead";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import Price from "../components/Price";
import { Spacer } from "../components/Spacer";
import Device from "storefront-ui/Device";

import { ProgressStepsAsBreadcrumbs } from "../components/ProgressSteps";
import useAddToCartWithSize from "../helpers/useAddToCartWithSize";
import { Select } from "../components/Select";

import IconHeart from "../svg/heart.svg";
import IconHeartFill from "../svg/heart_fill.svg";

import { ButtonRaw } from "../components/ButtonRaw";
import data from "../data";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const sliderProducts1 = [
  data.products[1],
  data.products[2],
  data.products[3],
  data.products[4],
  data.products[5],
  data.products[6]
];

const sliderProducts2 = [
  data.products[6],
  data.products[5],
  data.products[4],
  data.products[3],
  data.products[2],
  data.products[1]
];

let product = data.products[0];

const Product = () => {
  const theme = useTheme();
  const segment = useScrollSegment({ 400: "not-top" });

  const [isFav, setFav] = useState(false);

  const { buttonProps, selectProps } = useAddToCartWithSize(product);

  const favButton = (
    <ButtonRaw
      css={css`
        svg {
          line-height: 1;
          display: block;
        }
        display: block;
      `}
      onClick={() => {
        setFav(!isFav);
      }}
    >
      {isFav ? <IconHeartFill /> : <IconHeart />}
    </ButtonRaw>
  );

  return (
    <div>
      <Device mobile>
        <div
          css={css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1;
            transition: transform 0.2s ease-out;
            ${theme.fonts.body1.css}
            ${segment === "not-top"
              ? "transform: none;"
              : "transform: translateY(-50px);"}
          `}
        >
          <NavBarMobile title={""} right={favButton} />
        </div>

        <div
          css={css`
              position: fixed;
              bottom: 0;
              left: 0;
              width: 100%;
              z-index: 1;
              background white;
              padding: 0 12px;
              border-top: 1px solid ${theme.colors.mono200.css};
          `}
        >
          <LayoutLeftCenterRight
            left={
              <>
                <div
                  css={css`
                    ${theme.fonts.body1.css}
                  `}
                >
                  {product.title}
                </div>
              </>
            }
            right={
              <Price
                price={product.price}
                priceDiscount={product.priceDiscount}
              />
            }
            height={50}
          />

          <div
            css={css`
              display: flex;
              flex-direction: row;
              > * {
                width: 48%;
              }
              justify-content: space-between;
              margin-bottom: 12px;
            `}
          >
            <div>
              <Select fitContainer={true} compact={true} {...selectProps} />
            </div>

            <div>
              <Button {...buttonProps} fitContainer={true}>
                Add to cart
              </Button>
            </div>
          </div>
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
          <NavBarMobile title={""} transparent={true} right={favButton} />
        </div>
      </Device>

      <Device desktop>
        <Container
          css={css`
            ${rslin(theme.spacings.s40, theme.spacings.s100).css("margin-top")}
            ${rslin(theme.spacings.s40, theme.spacings.s100).css(
              "margin-bottom"
            )}
          `}
        >
          <ProgressStepsAsBreadcrumbs
            data={[
              {
                label: "Beauty",
                href: "/collection"
              },
              {
                label: "Bath",
                href: "/category"
              },
              {
                label: "Transparent Bottle",
                href: "#"
              }
            ]}
          />
        </Container>
      </Device>

      <ProductHead product={product} />

      <Spacer />
      <Spacer />
      <ProductSlider products={sliderProducts1} title={"You may also like"} />
      <Spacer />
      <Spacer />
      <ProductSlider
        products={sliderProducts2}
        title={"Other Beauty products"}
      />
      <Spacer />

      <div
        css={css`
          margin-bottom: 160px;
        `}
      />
    </div>
  );
};

Product.navbar = true;

export default Product;
