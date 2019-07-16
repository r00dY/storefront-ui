import React from "react";
import ProductRow$ from "storefront-ui/ProductRow";
import Price from "../Price";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { ButtonRaw$ } from "storefront-ui/ButtonRaw";

import IconClear from "./outline-clear-24px.svg";
import IconAdd from "./outline-add-24px.svg";
import IconRemove from "./outline-remove-24px.svg";
import { useTheme } from "storefront-ui/Theme";

const overrides = {
  Price: ({ price }) => <Price price={price} alignRight />
};

const Quantity = ({ quantity, editable }) => {
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
      {editable && (
        <ButtonRaw$>
          <IconRemove />
        </ButtonRaw$>
      )}
      <div
        css={css`
          width: 36px;
          ${editable ? "text-align: center;" : ""}
        `}
      >
        {quantity}
      </div>
      {editable && (
        <ButtonRaw$>
          <IconAdd />
        </ButtonRaw$>
      )}
    </div>
  );
};

const overridesTheme1 = {
  Price: ({ price }) => <Price price={price} alignRight />,
  Name: {
    style: ({ $theme, mode }) =>
      `margin-bottom: 0.5em; ${
        mode === "compact" ? $theme.fonts.body1.css : ""
      }`
  },
  Remove: ({ editable }) => (
    <>
      {editable && (
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
  Quantity: Quantity
};
const ProductRow = props => <ProductRow$ {...props} overrides={overrides} />;
const ProductRowTheme1 = props => (
  <ProductRow$ {...props} overrides={overridesTheme1} />
);

export { ProductRow, ProductRowTheme1 };
