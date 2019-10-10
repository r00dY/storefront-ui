import React, { useState } from "react";
import { showNotification } from "storefront-ui/Notifications";
import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import NavBarMobile from "../../theme/NavBarMobile";
import { css } from "@emotion/core";
import { Select } from "../../theme/Select";
import Device from "storefront-ui/Device";
import Container from "storefront-ui/Container";
import ProductHead from "../../theme/ProductHead/ProductHead";
import ProductSlider from "../../theme/ProductSlider/ProductSlider";
import Price from "../../theme/Price";
import { Button } from "../../theme/Button";
import { rslin } from "responsive-helpers";
import { ProgressStepsAsBreadcrumbs } from "../../theme/ProgressSteps";
import { Spacer } from "../../theme/Spacer";
import useGetVariantPicker from "../../graphql/hooks/useGetVariantPicker";
import { ButtonRaw } from "../../theme/ButtonRaw";
import IconHeart from "../../svg/heart.svg";
import IconHeartFill from "../../svg/heart_fill.svg";
import { useTheme } from "storefront-ui/Theme";
import useScrollSegment from "storefront-ui/useScrollSegment";
import useAddToCartAndShowNotificatiion from "../../graphql/hooks/useAddToCartAndShowNotification";
import data from "../../data";

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

const content = ({ product, setCheckout, checkoutId }) => {
  const [variantPicker, currentVariant] = useGetVariantPicker(product);
  const [addToCart, loading] = useAddToCartAndShowNotificatiion(
    checkoutId,
    setCheckout
  );

  const theme = useTheme();
  const segment = useScrollSegment({ 400: "not-top" });
  const [isFav, setFav] = useState(false);

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
        loading={loading}
        product={product}
        variantPicker={variantPicker}
        buttonProps={{
          onClick: () => {
            addToCart([{ variantId: currentVariant.id, quantity: 1 }]);
          }
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

export default content;
