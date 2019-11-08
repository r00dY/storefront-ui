import React from "react";

import { Root } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SYMBOL_MAP = {
  PLN: "zł",
  EUR: "€",
  USD: "$",
  GBP: "£"
};

const Price = props => {
  const { productVariant, alignRight } = props;

  return (
    <Root>
      {productVariant.compareAtPrice && (
        <div
          css={css`
            ${alignRight && "margin-left: 0.25em;"}
            ${!alignRight && "margin-right: 0.25em;"}
          `}
        >
          {SYMBOL_MAP[productVariant.compareAtPrice.currencyCode]}
          {productVariant.compareAtPrice.amount}
        </div>
      )}
      <div
        css={css`
          ${productVariant.compareAtPrice &&
            "text-decoration: line-through; opacity: 0.5;"}
          ${alignRight && "order: -1;"}
        `}
      >
        {SYMBOL_MAP[productVariant.price.currencyCode]}
        {productVariant.price.amount}
      </div>
    </Root>
  );
};

Price.defaultProps = {};

export default Price;
