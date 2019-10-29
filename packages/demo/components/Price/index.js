import React from "react";

import { Root } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Money from "@commerce-ui/core/utils/Money";

const Price = props => {
  const { price, priceDiscount, alignRight } = props;

  return (
    <Root>
      {priceDiscount && (
        <div
          css={css`
            ${alignRight && "margin-left: 0.25em;"}
            ${!alignRight && "margin-right: 0.25em;"}
          `}
        >
          {Money.getCurrencySymbol(priceDiscount)}
          {Money.getAmountString(priceDiscount)}
        </div>
      )}
      <div
        css={css`
          ${priceDiscount && "text-decoration: line-through; opacity: 0.5;"}
          ${alignRight && "order: -1;"}
        `}
      >
        {Money.getCurrencySymbol(price)}
        {Money.getAmountString(price)}
      </div>
    </Root>
  );
};

Price.defaultProps = {};

export default Price;
