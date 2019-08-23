import React, { useState } from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { rslin } from "responsive-helpers";
import { useTheme } from "storefront-ui/Theme";
import useScrollDirection from "storefront-ui/useScrollDirection";
import useScrollSegment from "storefront-ui/useScrollSegment";
import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import SwipeableItemsContainer, {
  useSwipeableItemsContainer
} from "storefront-ui/SwipeableItemsContainer";
import { Image } from "../theme/Image";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import NavBarMobile from "../theme/NavBarMobile";

import { Button } from "../theme/Button";
import ProductHead from "../theme/ProductHead/ProductHead";
import { Accordion } from "../theme/Accordion";
import SizePicker from "../theme/SizePicker/SizePicker";
import ProductSlider from "../theme/ProductSlider/ProductSlider";
import { ProductCardTheme1 } from "../theme/ProductCard";
import Price from "../theme/Price";
import { Spacer } from "../theme/Spacer";
import Device from "storefront-ui/Device";

import data from "../data";
import { ProgressStepsAsBreadcrumbs } from "../theme/ProgressSteps";
import useAddToCartWithSize from "../helpers/useAddToCartWithSize";
import { Select } from "../theme/Select";

import IconHeart from "../svg/heart.svg";
import IconHeartFill from "../svg/heart_fill.svg";

import { ButtonRaw } from "../theme/ButtonRaw";

const Product = () => {
  const theme = useTheme();
  const direction = useScrollDirection();
  const segment = useScrollSegment({ 400: "not-top" });

  const [isFav, setFav] = useState(false);

  let boxes = [];

  let product = data.products[0];

  /**
   * Select + Add to Cart button
   **/
  const { buttonProps, selectProps } = useAddToCartWithSize(product);

  let products = [
    data.products[1],
    data.products[2],
    data.products[3],
    data.products[4],
    data.products[5],
    data.products[6]
  ];

  products.map((product, index) => {
    boxes.push(
      <ProductCardTheme1
        product={product}
        onClick={() => console.log("click")}
        onSaveToFavourites={() => console.log("fav click")}
      />
    );
  });

  const InnerStyled = props => (
    <div
      css={css`
        padding: 10px;
        ${theme.fonts.body2.css}
      `}
    >
      {props.children}
    </div>
  );

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

  let accordions = (
    <>
      <Accordion title={"Details"} openAtInit={false}>
        <InnerStyled>
          <p>98% Cotton / 2% Elastane / Dry clean</p>
          <p>
            Make sure that your favourite items remain long-loved pieces for
            years to come; read our product care guide and explore our selection
            of carefully chosen garment care products.
          </p>
          <p>Product No: 0708645002</p>
        </InnerStyled>
      </Accordion>
      <Accordion title={"Delivery"} openAtInit={false}>
        <InnerStyled>
          <p>Shipping to: Poland</p>
          <p>
            Standard Home Delivery €9 / Free over €125 / Delivery in 3-5 working
            days
            <br />
            Standard Pickup Location €9 / Free over €125 / Delivery in 3-5
            working days
          </p>
          <p>
            Express Home Delivery €15 / Orders placed before 3pm Monday to
            Friday and before 10:30am on Saturday will be delivered the next
            working day
          </p>
          <p>Free returns on all orders</p>
          <p>We accept MasterCard, VISA and PayPal</p>
          <p>Minimum order value is €5</p>
        </InnerStyled>
      </Accordion>
      <Accordion title={"Reviews"} openAtInit={false}>
        <InnerStyled>
          <p>Reviews content goes here</p>
        </InnerStyled>
      </Accordion>
    </>
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
                  {product.name}
                </div>
              </>
            }
            right={<Price price={product.price} />}
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
                label: "Food",
                href: "/collection"
              },
              {
                label: "Snacks",
                href: "/collection"
              },
              {
                label: "Bottle",
                href: "#"
              }
            ]}
          />
        </Container>
      </Device>

      <ProductHead
        mosaicImages={product.images}
        product={product}
        title={product.name}
        price={product.price}
        variants={product.images}
        product={product}
        sizes={
          <SizePicker
            sizes={[
              {
                value: "size-xs",
                label: "XS",
                available: true,
                tooltip: "XS"
              },
              {
                value: "size-s",
                label: "S",
                available: true,
                tooltip: "S"
              },
              {
                value: "size-m",
                label: "M",
                available: false,
                tooltip: "M out of stock"
              },
              {
                value: "size-l",
                label: "L",
                available: false,
                tooltip: "L out of stock"
              },
              {
                value: "size-xl",
                label: "XL",
                available: true,
                tooltip: "XL"
              },
              {
                value: "size-xxl",
                label: "XXL",
                available: true,
                tooltip: "XXL"
              }
            ]}
            name={"SizePicker1"}
          />
        }
        accordion={accordions}
      />

      {/*<Spacer />*/}
      {/*<EditorialHalfImage*/}
      {/*imageFirst*/}
      {/*image={product.images[0]}*/}
      {/*element={*/}
      {/*<EditorialHeadline*/}
      {/*titleFont={theme.fonts.h3}*/}
      {/*textalign={"center"}*/}
      {/*paragraphFont={theme.fonts.body1}*/}
      {/*title={"WHAT IS NIKEZOOMX?"}*/}
      {/*paragraph={*/}
      {/*"Nike ZoomX is lighter, softer and more responsive than any Nike foam, designed to maximize speed by delivering greater energy return. ZoomX was derived from a foam traditionally used in aerospace innovation, applied for the first time in performance footwear in the Nike Zoom Vaporfly Elite and 4%."*/}
      {/*}*/}
      {/*/>*/}
      {/*}*/}
      {/*elementPosition={"center"}*/}
      {/*/>*/}
      <Spacer />
      <Spacer />

      <ProductSlider boxes={boxes} title={"You may also like"} />
      <Spacer />

      <Spacer />

      <ProductSlider
        boxes={boxes.slice().reverse()}
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
