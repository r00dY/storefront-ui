import React, { useState } from "react";
import { L, R } from "storefront-ui/Config";

import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { rslin } from "responsive-helpers";
import { useTheme } from "storefront-ui/Theme";
import useScrollSegment from "storefront-ui/useScrollSegment";
import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import { useSwipeableItemsContainer } from "storefront-ui/SwipeableItemsContainer";
import NavBarMobile from "../theme/NavBarMobile";
import { Button } from "../theme/Button";
import ProductHead from "../theme/ProductHead/ProductHead";
import ProductSlider from "../theme/ProductSlider/ProductSlider";
import Price from "../theme/Price";
import { Spacer } from "../theme/Spacer";
import Device from "storefront-ui/Device";

import { ProgressStepsAsBreadcrumbs } from "../theme/ProgressSteps";
import useAddToCartWithSize from "../helpers/useAddToCartWithSize";
import { Select } from "../theme/Select";

import IconHeart from "../svg/heart.svg";
import IconHeartFill from "../svg/heart_fill.svg";

import { ButtonRaw } from "../theme/ButtonRaw";
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
            //background: rgba(255,255,255,0.9);
            ${L.margin.css("padding-left")}
            ${L.margin.css("padding-right")}
              padding-bottom: 12px;
          `}
        >
          <div>
            {/*<div>*/}
            {/*<Select fitContainer={true} compact={true} {...selectProps} />*/}
            {/*</div>*/}

            <div>
              <Button
                {...buttonProps}
                fitContainer={true}
                css={css`
                  box-shadow: 0px 30px 15px 20px rgba(255, 255, 255, 0.9);
                `}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>

        <div
          css={css`
            position: absolute;
            top: 100px;
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

      <ProductHead
        product={product}
        buttonProps={buttonProps}
        selectProps={selectProps}
      />

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
