import React from "react";

import { Root } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Price = props => {
  const { price, alignRight } = props;

  return (
    <Root>
      {price.discount && (
        <div
          css={css`
            ${alignRight && "margin-left: 0.25em;"}
            ${!alignRight && "margin-right: 0.25em;"}
          `}
        >
          {price.currency.symbol}
          {price.discount}
        </div>
      )}
      <div
        css={css`
          ${price.discount && "text-decoration: line-through; opacity: 0.5;"}
          ${alignRight && "order: -1;"}
        `}
      >
        {price.currency.symbol}
        {price.regular}
      </div>
    </Root>
  );
};

Price.defaultProps = {};

export default Price;
