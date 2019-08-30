import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs, rslin } from "responsive-helpers";
import { R, F, C, L, Color } from "storefront-ui/Config";

import { Image, ImageZoomable } from "../Image";
import StickyColumn from "storefront-ui/StickyColumn";
import Container from "storefront-ui/Container";
import SwipeableItemsContainer, {
  useSwipeableItemsContainer
} from "storefront-ui/SwipeableItemsContainer";
import { Grid, GridItem } from "storefront-ui/Grid";
import { useTheme } from "storefront-ui/Theme";
import Device from "storefront-ui/Device";
import Dots from "storefront-ui/Dots";

import IconHeart from "../../svg/heart.svg";
import IconHeartFill from "../../svg/heart_fill.svg";

import { Button } from "../Button";
import Price from "../Price";

import { showNotification } from "storefront-ui/Notifications";

import { Select } from "../../theme/Select";
import useAddToCartWithSize from "../../helpers/useAddToCartWithSize";
import { Accordion } from "../Accordion";
import { Stars } from "../Stars";
import data from "../../data";
import ThemeLink from "../ThemeLink";
import Link from "next/link";

const MetaRow = styled.div`
  &:not(:first-of-type) {
    ${rslin(40, 50).css("margin-top")}
  }
`;

const InnerStyled = props => {
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: 10px;
        ${theme.fonts.body2.css}
      `}
    >
      {props.children}
    </div>
  );
};

function ProductHead(props) {
  const theme = useTheme();

  const [isFav, setFav] = useState(false);

  const { buttonProps, selectProps } = props;

  let swiper = useSwipeableItemsContainer(
    <SwipeableItemsContainer mode={"horizontal"}>
      {props.product.images.slice(1).map((image, index) => {
        return <Image mode={"natural"} image={image} />;
      })}
    </SwipeableItemsContainer>
  );

  const accordions = (
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

      <Accordion
        title={
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              padding-right: 1em;
            `}
          >
            <div
              css={css`
                margin-right: 1em;
              `}
            >
              Reviews (15)
            </div>{" "}
            <Stars rating={data.reviews.rating} />
          </div>
        }
        openAtInit={false}
      >
        <InnerStyled>
          <div
            css={css`
              display: flex;
              ${theme.fonts.body1.css} margin: 2em 0;
              justify-content: space-between;
            `}
          >
            <div>
              <Stars inline rating={data.reviews.rating} /> &nbsp;
              {data.reviews.rating} Stars
            </div>{" "}
            <Link href={"/write-review"}>
              <ThemeLink href={"/write-review"} kind={"inheritUnderline"}>
                Write a Review
              </ThemeLink>
            </Link>
          </div>
          <div>
            {[
              data.reviews.items[0],
              data.reviews.items[1],
              data.reviews.items[2],
              data.reviews.items[3]
            ].map((review, j) => {
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
                    <Stars rating={review.rating} smaller />
                    <div
                      css={css`
                        margin-left: 1em;
                      `}
                    >
                      {review.name} &mdash; {review.timestamp}
                    </div>
                  </div>
                  <div>{review.content}</div>
                </div>
              );
            })}
          </div>
          <Link href={"/reviews"}>
            <ThemeLink href={"/reviews"} kind={"inheritUnderline"}>
              More reviews
            </ThemeLink>
          </Link>
        </InnerStyled>
      </Accordion>
    </>
  );

  let titleElem = (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          flex-grow: 1;
          color: ${theme.colors.mono900.css};
          margin-right: 20px;
          ${theme.fonts.body1.css}
          font-weight: 700;
        `}
      >
        {props.product.title}
      </div>
      <div
        css={css`
          ${theme.fonts.body2.css}
          white-space: nowrap;
          span {
            text-decoration: line-through;
            color: ${theme.colors.mono200.css};
          }
        `}
      >
        <Price
          price={props.product.price}
          priceDiscount={props.product.priceDiscount}
          alignRight
        />
      </div>
    </div>
  );
  // let VARIANTS = (
  //   <div
  //     css={css`
  //       display: grid;
  //       grid-template-columns: repeat(5, 1fr);
  //       grid-column-gap: 5px;
  //     `}
  //   >
  //     {props.variants.map((variant, index) => {
  //       return (
  //         <a
  //           href={"#"}
  //           key={index}
  //           css={css`
  //             margin-top: 5px;
  //             transition: 100ms;
  //           `}
  //         >
  //           <div
  //             css={css`
  //               position: relative;
  //             `}
  //           >
  //             <Image mode={"natural"} image={variant} />
  //             <div
  //               css={css`
  //                 ${index === 0
  //                   ? `position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.15);`
  //                   : ""}
  //               `}
  //             />
  //           </div>
  //         </a>
  //       );
  //     })}
  //   </div>
  // );

  let VARIANTS = <div />;

  let metaElem = (
    <div>
      {titleElem}
      <MetaRow>{VARIANTS}</MetaRow>

      <MetaRow>
        <div
          css={css`
                ${theme.fonts.body2.css}
                margin-bottom: ${theme.spacings.s60}px;
            `}
        >
          Pick your size
        </div>
        <Device desktop>
          <Select fitContainer={true} {...selectProps} />
        </Device>
        <Device mobile>
          <Select fitContainer={true} compact={true} {...selectProps} />
        </Device>
      </MetaRow>

      <Device desktop>
        <MetaRow>
          <div
            css={css`
              padding: 1px;
            `}
          >
            <Button
              size={"large"}
              fitContainer={true}
              css={css`
                margin-bottom: 10px;
              `}
              {...buttonProps}
            >
              Add to Cart
            </Button>
            <Button
              size={"large"}
              kind={"secondary"}
              fitContainer={true}
              endEnhancer={() => {
                return isFav ? <IconHeartFill /> : <IconHeart />;
              }}
              onClick={() => {
                setFav(!isFav);
              }}
            >
              {isFav ? "Saved in wishlist" : "Add to wishlist"}
            </Button>
          </div>
        </MetaRow>
      </Device>

      <MetaRow>
        <div
          css={css`
            p {
              &:not(:first-of-type) {
                margin-top: 1em;
              }
            }
            ${theme.fonts.body2.css}
          `}
        >
          {props.product.description}
        </div>
      </MetaRow>
      <MetaRow>{accordions}</MetaRow>
    </div>
  );

  return (
    <div>
      <Device mobile>
        <div
          css={css`
            position: relative;
          `}
        >
          <div
            css={css`
              width: 100%;
              background-color: #f6f6f6;
              padding-bottom: 10px;
              margin-top: -100px;
            `}
          >
            {swiper.element}
            <Dots swipeableItemsContainer={swiper} />
          </div>
          <div
            css={css`
              padding: 20px 0;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
            `}
          />
        </div>

        <Container
          css={css`
            margin-top: ${theme.spacings.s80}px;
          `}
        >
          {metaElem}
        </Container>
      </Device>

      <Device desktop>
        <Container>
          <Grid>
            <GridItem params={{ xs: 24, 768: 14, lg: 16 }}>
              <Device desktop>
                <div
                  css={css`
                    display: grid;
                    grid-column-gap: 15px;
                    grid-row-gap: 15px;
                    ${R.from("md").css("grid-template-columns: 1fr 1fr;")}
                  `}
                >
                  {props.product.images.map((image, index) => (
                    <div key={index}>
                      <ImageZoomable image={image} />
                    </div>
                  ))}
                </div>
              </Device>
            </GridItem>
            <GridItem params={{ xs: 24, 768: 10, lg: [7, 1] }}>
              <StickyColumn
                css={css`
                  height: 100%;
                `}
                offset={[80, 80]}
              >
                {metaElem}
              </StickyColumn>
            </GridItem>
          </Grid>
        </Container>
      </Device>
      <div id={"overlaysContainer"} />
    </div>
  );
}

ProductHead.propTypes = {};

export default ProductHead;
