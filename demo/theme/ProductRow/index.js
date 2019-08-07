import React from "react";
import ProductRow$ from "storefront-ui/ProductRow";
import Price from "../Price";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { ButtonRaw$ } from "storefront-ui/ButtonRaw";

import IconClear from "./outline-delete-24px.svg";
import IconAdd from "./outline-add-24px.svg";
import IconRemove from "./outline-remove-24px.svg";
import { useTheme } from "storefront-ui/Theme";
import { Button } from "../Button";

import { rslin } from "responsive-helpers";

const overrides = {
  Price: ({ price }) => <Price price={price} alignRight />
};

const Quantity = ({ quantity, mode, isWishlistItem }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        width: 100%;
        align-items: center;
        ${theme.fonts.body1.css}
        svg {
          width: 18px;
          height: 18px;
        }
      `}
    >
      {mode === "basket" && (
        <ButtonRaw$>
          <IconRemove />
        </ButtonRaw$>
      )}
      {(mode === "basket" || mode === "default") && (
        <div
          css={css`
            width: 36px;
            ${mode === "basket" ? "text-align: center;" : ""}
          `}
        >
          {quantity}
        </div>
      )}
      {mode === "basket" && (
        <ButtonRaw$>
          <IconAdd />
        </ButtonRaw$>
      )}
      {mode === "wishlist" && <Button>Add to basket</Button>}
    </div>
  );
};

const overridesTheme1 = {
  Price: ({ price }) => <Price price={price} alignRight />,
  Name: {
    style: ({ $theme, mode }) => `
        margin-bottom: 0.5em;
        ${$theme.fonts.body1.css}
        margin-right: 8px;
      `
  },
  ImageContainer: {
    style: ({ $theme, mode }) => `
      ${rslin(80, 80).css("width")}
    `
  },
  Remove: ({ mode }) => (
    <>
      {(mode === "basket" || mode === "wishlist") && (
        <ButtonRaw$>
          <IconClear
            css={css`
              width: 18px;
              height: 18px;
            `}
          />
        </ButtonRaw$>
      )}
    </>
  ),
  Content: {
    style: ({ $theme, gutter }) => `padding: 0 ${gutter}px; background: red;`
  },
  Quantity: Quantity
};
const ProductRow = props => <ProductRow$ {...props} overrides={overrides} />;
const ProductRowTheme1 = props => (
  <ProductRow$ {...props} overrides={overridesTheme1} />
);

export { ProductRow, ProductRowTheme1 };
