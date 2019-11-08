import ProductCard$ from "@commerce-ui/core/ProductCard";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import IconHeart from "../../svg/heart.svg";
import IconHeartFill from "../../svg/heart_fill.svg";

import { ButtonRaw$ } from "@commerce-ui/core/ButtonRaw";
import Price from "../Price";
import { rslin } from "responsive-helpers";

import React, { useState } from "react";

import { Image } from "../Image";

// Temporary Favourite button mocking state management (saving to favs).
const FavouriteButton = ({ product }) => {
  const [isFav, setFav] = useState(false);

  return (
    <ButtonRaw$
      onClick={() => {
        setFav(!isFav);
      }}
      css={css`
        pointer-events: all;
      `}
    >
      <div
        css={css`
          background: rgba(255, 255, 255, 0.8);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          /*box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);*/
          svg {
            width: 16px;
            height: 16px;
          }
        `}
      >
        {isFav && <IconHeartFill />}
        {!isFav && <IconHeart />}
      </div>
    </ButtonRaw$>
  );
};

const overrides = props => ({
  Image: Image
});

const overrides2 = props => ({
  Image: Image,

  Description: {
    style: ({ $theme }) => `
      margin-bottom: ${$theme.spacings.s30}px;
      ${$theme.fonts.body2.css}
      `
  },
  Title: {
    style: ({ $theme }) => `
      margin-bottom: ${$theme.spacings.s30}px;
      ${$theme.fonts.body1.css}
      `
  },
  Badge: {
    style: ({ $theme, type }) =>
      `padding: ${$theme.spacings.s20}px ${
        $theme.spacings.s30
      }px; border-radius: ${$theme.borders.radius200}; 
        background: white;
        color: ${type === "discount" ? $theme.colors.negative : "black"};
             
      `
  },
  ImageContainer: {
    style: `
    `
  },
  ImageOverlay: ({ badgesElem }) => (
    <div
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        box-sizing: border-box;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          justify-content: flex-end;
        `}
      >
        {/*<FavouriteButton product={props.product} />*/}
      </div>
      <div
        css={css`
          position: absolute;
          top: 10px;
          left: 10px;
          display: flex;
          flex-wrap: wrap;
          div {
            margin-top: 4px;
            margin-right: 4px;
          }
        `}
      >
        {badgesElem}
      </div>
    </div>
  ),
  Content: ({ titleElem, descriptionElem, priceElem }) => (
    <>
      {descriptionElem}
      {titleElem}
      {priceElem}
    </>
  )
});

const ProductCard = props => (
  <ProductCard$ {...props} overrides={{ Image: Image }} />
);
const ProductCardTheme1 = props => {
  return <ProductCard$ {...props} overrides={overrides2(props)} />;
};

export { ProductCard, ProductCardTheme1 };
