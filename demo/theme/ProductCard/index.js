import ProductCard$ from "storefront-ui/ProductCard";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import IconHeart from "../../svg/heart.svg";
import IconHeartFill from "../../svg/heart_fill.svg";

import { ButtonRaw$ } from "storefront-ui/ButtonRaw";
import Price from "../Price";
import { rslin } from "responsive-helpers";

import React, { useState, useEffect } from "react";

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
  Price: ({ price }) => <Price price={price} />
});

const overrides2 = props => ({
  Price: ({ price }) => <Price price={price} />,

  Description: {
    style: ({ $theme }) => `
      margin-bottom: ${$theme.spacings.s30}px;
      ${$theme.fonts.body2.css}
      `
  },
  Name: {
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
      overflow: hidden;
      border-radius: 4px;
    `
  },
  ImageOverlay: ({ badges, onSaveToFavourites }) => (
    <div
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        box-sizing: border-box;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <FavouriteButton product={props.product} />
      </div>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          div {
            margin-top: 4px;
            margin-right: 4px;
          }
        `}
      >
        {badges}
      </div>
    </div>
  ),
  Content: ({ name, description, price }) => (
    <>
      {description}
      {name}
      {price}
    </>
  )
});

const ProductCard = props => (
  <ProductCard$ {...props} overrides={overrides(props)} />
);
const ProductCardTheme1 = props => {
  return <ProductCard$ {...props} overrides={overrides2(props)} />;
};

export { ProductCard, ProductCardTheme1 };
