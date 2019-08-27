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
import Image from "storefront-ui/Image";

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

  return (
    <div
      css={css`
        ${theme.fonts.body1.css}
      `}
    >
      <Container>
        <Grid>
          <GridItem params={{ xs: 24, md: [12, 6] }}>
            <div
              css={css`
                ${rslin(theme.spacings.s80, theme.spacings.s160).css(
                  "margin-top"
                )}
                ${rslin(theme.spacings.s80, theme.spacings.s160).css(
                  "margin-bottom"
                )}
            h1 {
                  ${theme.fonts.h4.css}
                  margin-top: 0.5em;
                }
                text-align: center;
              `}
            >
              <h1>Write a Review</h1>
              <p>Please share your experience.</p>
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
                  fitContainer={true}
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
