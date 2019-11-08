import React from "react";

import { Root } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

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
          {productVariant.compareAtPrice.amount}{" "}
          {productVariant.compareAtPrice.currencyCode}
        </div>
      )}
      <div
        css={css`
          ${productVariant.compareAtPrice &&
            "text-decoration: line-through; opacity: 0.5;"}
          ${alignRight && "order: -1;"}
        `}
      >
        {productVariant.price.amount} {productVariant.price.currencyCode}
      </div>
    </Root>
  );
};

Price.defaultProps = {};

export default Price;
