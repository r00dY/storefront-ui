import React from "react";

import { RootStyled } from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { getOverrides } from "../base/helpers/overrides";

const Price = props => {
  const {
    price,
    discountPrice,
    prefix,
    suffix,
    quantity,
    alignRight,
    overrides: { Root: RootOverride }
  } = props;

  let _quantity = quantity === undefined ? 1 : quantity;

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);

  return (
    <Root
      {...rootProps}
      price={price}
      discountPrice={discountPrice}
      quantity={quantity}
      prefix={prefix}
      suffix={suffix}
      alignRight={alignRight}
    >
      {discountPrice && (
        <div
          css={css`${alignRight && "margin-left: 0.25em;"}${!alignRight &&
            "margin-right: 0.25em;"}`}
        >
          {prefix && prefix}
          {_quantity * discountPrice}
          {suffix && suffix}
        </div>
      )}
      <div
        css={css`
          ${discountPrice && "text-decoration: line-through; opacity: 0.5;"}
          ${alignRight && "order: -1;"}
        `}
      >
        {prefix && prefix}
        {_quantity * price}
        {suffix && suffix}
      </div>
    </Root>
  );
};

Price.defaultProps = {
  overrides: {}
};

export default Price;
