import React from "react";
import ProductCard$ from "../../../src/packages/ProductCard";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import IconFav from "./outline-favorite_border-24px.svg";
import { ButtonRaw$ } from "../../../src/packages/ButtonRaw";

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
    <Price price={price} discountPrice={discountPrice} />
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
    style: ({ $theme }) => `font-size: 0.75em; opacity: 0.5;`
  },
  Name: {
    style: ({ $theme }) => `font-weight: 300;`
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
              background: rgba(255, 255, 255, 0.4);
              width: 44px;
              height: 44px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <IconFav />
          </div>
        </ButtonRaw$>
      </div>
      <div
        css={css`
          display: flex;
          div + div {
            margin-left: 4px;
          }
        `}
      >
        {badges}
      </div>
    </div>
  ),
  Content: ({ name, description, price }) => (
    <>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        {name} {price}
      </div>
      {description}
    </>
  )
};
const ProductCard = props => <ProductCard$ {...props} overrides={overrides} />;
const ProductCardTheme1 = props => (
  <ProductCard$ {...props} overrides={overridesTheme1} />
);

export { ProductCard, ProductCardTheme1 };
