import React, { useState } from "react";

import { Grid, GridItem } from "@commerce-ui/core/Grid";
import Container from "@commerce-ui/core/Container";
import { rslin } from "responsive-helpers";
import { useTheme } from "@commerce-ui/core/Theme";
import useScrollDirection from "@commerce-ui/core/useScrollDirection";
import useScrollSegment from "@commerce-ui/core/useScrollSegment";
import LayoutLeftCenterRight from "@commerce-ui/core/LayoutLeftCenterRight";
import SwipeableItemsContainer, {
  useSwipeableItemsContainer
} from "@commerce-ui/core/SwipeableItemsContainer";
import Image from "@commerce-ui/core/Image";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import NavBarMobile from "../components/NavBarMobile";

import { Button } from "../components/Button";
import ProductHead from "../components/ProductHead/ProductHead";
import { Accordion } from "../components/Accordion";
import EditorialHalfImage from "../components/Editorial/EditorialHalfImage/EditorialHalfImage";
import EditorialHeadline from "../components/Editorial/EditorialHeadline/EditorialHeadline";
import SizePicker from "../components/SizePicker/SizePicker";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import { ProductCardTheme1 } from "../components/ProductCard";
import Price from "../components/Price";
import Device from "@commerce-ui/core/Device";

import data from "../data";
import { ProgressStepsAsBreadcrumbs } from "../components/ProgressSteps";
import useAddToCart from "../helpers/useAddToCart";
import useAddToCartWithSize from "../helpers/useAddToCartWithSize";
import { Select, StatefulSelect } from "../components/Select";

import IconHeart from "../svg/heart.svg";
import IconHeartFill from "../svg/heart_fill.svg";

import LayoutRow from "@commerce-ui/core/LayoutRow";
import { ButtonRaw } from "../components/ButtonRaw";
import { RadioStars } from "../components/RadioStars";
import ThemeLink from "../components/ThemeLink";
import { Divider } from "../components/Divider";
import { Spacer } from "../components/Spacer";

import { StatefulInput } from "../components/Input";
import { FormControl } from "../components/FormControl";
import routerPush from "../helpers/routerPush";
import { Radio } from "../components/Radio";
import { StatefulTextarea } from "../components/Textarea";

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
