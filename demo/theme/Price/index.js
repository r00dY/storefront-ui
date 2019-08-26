import React from "react";

import { Root } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Money from "storefront-ui/utils/Money";

const Price = props => {
  const { price, discountPrice, alignRight } = props;

  return (
    <Root>
      {discountPrice && (
        <div
          css={css`
            ${alignRight && "margin-left: 0.25em;"}
            ${!alignRight && "margin-right: 0.25em;"}
          `}
        >
          {Money.getCurrencySymbol(discountPrice)}
          {Money.getAmountString(discountPrice)}
        </div>
      )}
      <div
        css={css`
          ${discountPrice && "text-decoration: line-through; opacity: 0.5;"}
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
