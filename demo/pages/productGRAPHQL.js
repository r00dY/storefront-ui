import React, { useState } from "react";
import { ApolloConsumer, Query } from "react-apollo";
import { getProductQuery, productFragmentQuery } from "../graphql/queries";
import addVariantToCart from "../actions/addVariantToCart";
import { useTheme } from "storefront-ui/Theme";
import useScrollSegment from "storefront-ui/useScrollSegment";
import useAddToCartWithSize from "../helpers/useAddToCartWithSize";
import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import NavBarMobile from "../theme/NavBarMobile";
import { ButtonRaw } from "../theme/ButtonRaw";
import { css } from "@emotion/core";

import IconHeart from "../svg/heart.svg";
import IconHeartFill from "../svg/heart_fill.svg";

import { Select } from "../theme/Select";
import { Button } from "../theme/Button";
import { rslin } from "responsive-helpers";
import { ProgressStepsAsBreadcrumbs } from "../theme/ProgressSteps";
import { Spacer } from "../theme/Spacer";
import Device from "storefront-ui/Device";
import Container from "storefront-ui/Container";
import ProductHead from "../theme/ProductHead/ProductHead";
import ProductSlider from "../theme/ProductSlider/ProductSlider";
import data from "../data";
import mapProductToSingleVariant from "../helpers/mapProductToSingleVariant";
import Price from "../theme/Price";

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

const ProductComponent = () => {
  const theme = useTheme();
  const segment = useScrollSegment({ 400: "not-top" });

  const [isFav, setFav] = useState(false);

  // const { buttonProps, selectProps } = useAddToCartWithSize(product);

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

  const content = product => {
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
                <Select
                  onChange={val => {
                    console.log("val", val);
                  }}
                  fitContainer={true}
                  compact={true}
                />
              </div>

              <div>
                <Button fitContainer={true}>Add to cart</Button>
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
              ${rslin(theme.spacings.s40, theme.spacings.s100).css(
                "margin-top"
              )}
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
          selectProps={{
            value: product.selectedOptions.find(
              option => option.name === "Size"
            ).value,
            options: product.options.find(x => x.name === "Size").values,
            onChange: val => console.log("val", val),
            open: true
          }}
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

  const productId = "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQwODEzNjEzNTQ4MTY=";

  return (
    <ApolloConsumer>
      {client => {
        const cachedElement = client.readFragment({
          fragment: productFragmentQuery,
          id: `Product:${productId}`
        });

        return (
          <Query query={getProductQuery} variables={{ id: productId }}>
            {({ loading, error, data }) => {
              if (loading) {
                return cachedElement
                  ? content(
                      mapProductToSingleVariant(
                        cachedElement,
                        "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDAyMzk4MzIwMjM2OA=="
                      )
                    )
                  : "Loading...";
              }
              if (error) return `Error! ${error.message}`;

              console.log("==========", data);
              return content(
                mapProductToSingleVariant(
                  data,
                  "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMDAyMzk4MzIwMjM2OA=="
                )
              );
            }}
          </Query>
        );
      }}
    </ApolloConsumer>
  );
};

export default ProductComponent;
