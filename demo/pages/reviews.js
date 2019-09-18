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

import IconArrowUp from "../svg/arrow_up.svg";
import IconArrowDown from "../svg/arrow_down.svg";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import NavBarMobile from "../theme/NavBarMobile";

import { Button } from "../theme/Button";
import Device from "storefront-ui/Device";
import Link from "next/link";

import data from "../data";
import { Select, StatefulSelect } from "../theme/Select";

import { ButtonRaw } from "../theme/ButtonRaw";
import { Stars } from "../theme/Stars";
import ThemeLink from "../theme/ThemeLink";
import { Divider } from "../theme/Divider";
import { Spacer } from "../theme/Spacer";

import IconBack from "../svg/arrow_left.svg";
import routerPush from "../helpers/routerPush";

const VoteButton = props => {
  const theme = useTheme();
  return (
    <ButtonRaw
      css={css`
        &:not(:last-of-type) {
          margin-right: 10px;
        }
        ${theme.fonts.body2.css} display: flex;
        align-items: center;
        svg {
          width: 16px;
          height: 16px;
        }
      `}
    >
      {props.children}
    </ButtonRaw>
  );
};
const WriteAReviewButton = (
  <Button
    size={"compact"}
    onClick={() => routerPush("/write-review")}
    css={css`
      white-space: nowrap;
    `}
  >
    Write a Review
  </Button>
);
const Reviews = () => {
  const theme = useTheme();

  const stringOptions = [
    "Newest",
    "Price (high to low)",
    "Price (low to high)",
    "Most popular"
  ];
  const [select1, setSelect1] = useState(stringOptions[0]);
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
          <NavBarMobile title={""} right={WriteAReviewButton} />
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
          <NavBarMobile
            title={""}
            transparent={true}
            right={WriteAReviewButton}
          />
        </div>
      </Device>

      <Container>
        <Grid>
          <GridItem params={{ xs: 24, sm: [12, 6] }}>
            <Spacer />
            <Device desktop>
              <LayoutLeftCenterRight
                left={
                  <Button
                    size={"compact"}
                    kind={"minimal"}
                    onClick={() => {
                      routerPush("/product");
                    }}
                    startEnhancer={() => (
                      <IconBack
                        css={css`
                          fill: currentColor;
                          width: 20px;
                          height: 20px;
                        `}
                      />
                    )}
                  >
                    Product Details
                  </Button>
                }
                right={WriteAReviewButton}
              />
              <Divider />
            </Device>
            <div
              css={css`
                ${rslin(theme.spacings.s170, theme.spacings.s160).css(
                  "margin-top"
                )}
                ${rslin(theme.spacings.s150, theme.spacings.s160).css(
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
              <h1>
                <Link href={"/product"}>
                  <a>Transparent Bottle</a>
                </Link>
              </h1>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <div>{data.reviews.items.length} Reviews</div>
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
                }}
                value={select1}
                initValue={stringOptions[0]}
              />
            </div>
            <Divider />
            {data.reviews.items.map((review, j) => {
              return (
                <div
                  css={css`
                    margin-bottom: ${theme.spacings.s120}px;
                  `}
                  key={j}
                >
                  <div
                    css={css`
                      display: flex;
                      align-items: center;
                      color: ${theme.colors.mono500.css};
                      margin-bottom: 1em;
                    `}
                  >
                    <Stars rating={review.rating} smaller />
                    <div
                      css={css`
                        margin-left: 1em;
                      `}
                    >
                      {review.name}{" "}
                      <span
                        css={css`
                          white-space: nowrap;
                        `}
                      >
                        &mdash; {review.timestamp}
                      </span>
                    </div>
                  </div>
                  <div>{review.content}</div>
                  <div
                    css={css`
                      margin-top: ${theme.spacings.s80}px;
                      display: flex;
                    `}
                  >
                    <VoteButton>
                      <IconArrowUp />
                      {review.ups}
                    </VoteButton>
                    <VoteButton>
                      <IconArrowDown />
                      {review.downs}
                    </VoteButton>
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
