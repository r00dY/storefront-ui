import React from "react";
import ProductCard$ from "../../../src/packages/ProductCard";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import IconFav from "./outline-favorite_border-24px.svg";
import { ButtonRaw$ } from "../../../src/packages/ButtonRaw";

import { rslin } from "responsive-helpers";

const overrides = {};
const Price = ({ price, discountPrice, discountFirst }) => (
  <div
    css={css`
      display: flex;
      line-height: 1.5;
      font-weight: 300;
    `}
  >
    <div
      css={css`
        ${!(discountPrice === null || discountPrice === undefined)
          ? `text-decoration: line-through; opacity: 0.3;`
          : ``}
      `}
    >
      {price}
    </div>
    {discountPrice && (
      <div
        css={css`
          ${discountFirst
            ? "order: -1; margin-right: 5px;"
            : "margin-left: 5px;"}
        `}
      >
        {discountPrice}
      </div>
    )}
  </div>
);
const overridesTheme1 = {
  Price: ({ price, discountPrice }) => (
    <Price price={price} discountPrice={discountPrice} discountFirst />
  ),
  Badge: ({ label, type }) => (
    <div
      css={css`
        background: rgba(255, 255, 255, 0.8);
        padding: 3px 5px;
        font-size: 0.75em;
        border-radius: 2px;
        text-transform: uppercase;
        ${type === "feature"
          ? `background-color: DarkSeaGreen; color: white; `
          : ""}
      `}
    >
      {label}
    </div>
  ),
  Description: {
    style: ({ $theme }) => `
    font-size: 0.75em; 
    opacity: 0.5;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;`
  },
  Name: {
    style: ({ $theme }) =>
      `font-weight: 300; font-height: 16px; line-height: 1.2em; max-height: calc(2 * 1.2em); overflow: hidden;`
  },
  ImageOverlay: ({ badges }) => (
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
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <ButtonRaw$>
          <div
            css={css`
              background: rgba(255, 255, 255, 0.8);
              width: 34px;
              height: 34px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
              svg {
                width: 16px;
                height: 16px;
              }
            `}
          >
            <IconFav />
          </div>
        </ButtonRaw$>
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
};
const ProductCard = props => <ProductCard$ {...props} overrides={overrides} />;
const ProductCardTheme1 = props => (
  <ProductCard$ {...props} overrides={overridesTheme1} />
);

export { ProductCard, ProductCardTheme1 };
