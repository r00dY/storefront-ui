import React, { useState } from "react";
import { R } from "storefront-ui/Config";

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
import EditorialHalfImage from "../theme/Editorial/EditorialHalfImage/EditorialHalfImage";
import EditorialHeadline from "../theme/Editorial/EditorialHeadline/EditorialHeadline";
import SizePicker from "../theme/SizePicker/SizePicker";
import ProductSlider from "../theme/ProductSlider/ProductSlider";
import { ProductCardTheme1 } from "../theme/ProductCard";
import Price from "../theme/Price";
import Device from "storefront-ui/Device";

import data from "../data";
import { ProgressStepsAsBreadcrumbs } from "../theme/ProgressSteps";
import useAddToCart from "../helpers/useAddToCart";
import useAddToCartWithSize from "../helpers/useAddToCartWithSize";
import { Select, StatefulSelect } from "../theme/Select";

import IconHeart from "../svg/heart.svg";
import IconHeartFill from "../svg/heart_fill.svg";

import LayoutRow from "storefront-ui/LayoutRow";
import { ButtonRaw } from "../theme/ButtonRaw";
import { RadioStars } from "../theme/RadioStars";
import ThemeLink from "../theme/ThemeLink";
import { Divider } from "../theme/Divider";
import { Spacer } from "../theme/Spacer";

import { StatefulInput } from "../theme/Input";
import { FormControl } from "../theme/FormControl";
import routerPush from "../helpers/routerPush";
import { Radio } from "../theme/Radio";
import { StatefulTextarea } from "../theme/Textarea";

const WriteReview = () => {
  const theme = useTheme();
  const segment = useScrollSegment({ 400: "not-top" });

  return (
    <div
      css={css`
        ${theme.fonts.body1.css}
      `}
    >
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
          <NavBarMobile title={""} />
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
      </Device>
      <Container
        css={css`
          ${rslin(theme.spacings.s80, theme.spacings.s160).css("padding-top")}
        `}
      >
        <Grid>
          <GridItem
            params={{ xs: [16, 4], sm: 11, md: [9, 2] }}
            css={css`
              ${R.to("xs_plus").css("margin: 40px 0;")}
            `}
          >
            <Image mode={"natural"} image={data.products[1].images[0]} />
          </GridItem>
          <GridItem params={{ xs: 24, sm: [12, 1], md: [9, 1] }}>
            <div
              css={css`
                ${rslin(theme.spacings.s80, theme.spacings.s160).css(
                  "margin-bottom"
                )}
                h1 {
                  ${theme.fonts.h4.css}
                  margin-top: 0.5em;
                }
              `}
            >
              <p>Write a review for</p>
              <h1>Transparent Bottle</h1>
            </div>
            <Divider />

            <Grid gutterVertical={16}>
              <GridItem>
                <div
                  css={css`
                    ${theme.fonts.body2.css} margin-bottom: 1.5em;
                  `}
                >
                  Overall rating
                </div>
                <RadioStars />
              </GridItem>
              <GridItem params={{ xs: "1/1", md: "1/1" }}>
                <FormControl label={"First name"}>
                  <StatefulInput />
                </FormControl>
              </GridItem>
              <GridItem params={{ xs: "1/1", md: "1/1" }}>
                <FormControl label={"Review"}>
                  <StatefulTextarea />
                </FormControl>
              </GridItem>
              <GridItem />
              <GridItem>
                <div
                  css={css`
                    color: ${theme.colors.mono500.css};
                    ${theme.fonts.body2.css}
                  `}
                >
                  By clicking Submit, I agree to Privacy Policy, Terms of Use,
                  and Terms of Service.
                </div>
              </GridItem>
              <GridItem>
                <Button
                  size={"large"}
                  onClick={() => {
                    routerPush("/product");
                  }}
                >
                  Submit
                </Button>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

WriteReview.navbar = true;

export default WriteReview;
