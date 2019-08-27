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
import { Stars } from "../theme/Stars";
import ThemeLink from "../theme/ThemeLink";
import { Divider } from "../theme/Divider";
import { Spacer } from "../theme/Spacer";

const Reviews = () => {
  const theme = useTheme();

  const stringOptions = [
    "Newest",
    "Price (high to low)",
    "Price (low to high)",
    "Most popular"
  ];
  const [select1, setSelect1] = useState(stringOptions[0]);

  return (
    <div
      css={css`
        ${theme.fonts.body1.css}
      `}
    >
      <Container>
        <Grid>
          <GridItem params={{ xs: 24, sm: [12, 6] }}>
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
              <Stars inline rating={data.reviews.rating} />
              <h1>{data.reviews.items.length} Reviews</h1>
            </div>
            <Divider />
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <div
                css={css`
                  flex-grow: 1;
                `}
              />
              Sort by:&nbsp;
              <StatefulSelect
                compact
                options={stringOptions}
                onChange={val => {
                  setSelect1(val);
                  // onChange();
                }}
                value={select1}
                initValue={stringOptions[0]}
              />
            </div>
            <Spacer />
            {data.reviews.items.map((review, j) => {
              return (
                <div
                  css={css`
                    margin-bottom: ${theme.spacings.s120}px;
                  `}
                >
                  <div
                    css={css`
                      display: flex;
                      align-items: center;
                      color: ${theme.colors.mono500.css};
                      margin-bottom: 1em;
                    `}
                  >
                    <Stars rating={review.rating} />
                    <div
                      css={css`
                        margin-left: 1em;
                      `}
                    >
                      {review.name} &mdash; {review.timestamp}
                    </div>
                  </div>
                  <div>{review.content}</div>
                  <div>
                    +{review.ups} -{review.downs}
                  </div>
                </div>
              );
            })}
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

Reviews.navbar = true;

export default Reviews;
