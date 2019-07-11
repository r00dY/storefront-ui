import React from "react";
import ProductRow$ from "../../../src/packages/ProductRow";
import Price from "../Price";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { ButtonRaw$ } from "../../../src/packages/ButtonRaw";

import IconClear from "./outline-clear-24px.svg";
import IconAdd from "./outline-add-24px.svg";
import IconRemove from "./outline-remove-24px.svg";

const overrides = {
  Price: ({ price, discountPrice, quantity }) => (
    <Price price={price} alignRight />
  )
};
const overridesTheme1 = {
  Price: ({ price, discountPrice, quantity }) => (
    <Price price={price} alignRight />
  ),
  Data: ({ name, description, variant }) => (
    <div>
      {description}
      {name}
      {variant}
    </div>
  ),
  Name: {
    style: ({ $theme }) => `margin-bottom: 0.5em;`
  },
  Remove: () => (
    <ButtonRaw$>
      <IconClear
        css={css`
          width: 18px;
          height: 18px;
        `}
      />
    </ButtonRaw$>
  ),
  Quantity: ({ quantity }) => (
    <div
      css={css`
        display: flex;
        width: 100%;
        align-items: center;
        svg {
          width: 18px;
          height: 18px;
        }
      `}
    >
      <ButtonRaw$>
        <IconRemove />
      </ButtonRaw$>
      <div
        css={css`
          width: 36px;
          text-align: center;
        `}
      >
        {quantity}
      </div>
      <ButtonRaw$>
        <IconAdd />
      </ButtonRaw$>
    </div>
  )
};
const ProductRow = props => <ProductRow$ {...props} overrides={overrides} />;
const ProductRowTheme1 = props => (
  <ProductRow$ {...props} overrides={overridesTheme1} />
);

export { ProductRow, ProductRowTheme1 };
