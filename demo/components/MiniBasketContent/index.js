import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useTheme } from "storefront-ui/Theme";

import { CheckoutLineItemRowTheme1 } from "../CheckoutLineItemRow";

const MiniBasketContent = props => {
  const {} = props;
  const theme = useTheme();

  return (
    <div
      css={css`
        padding: ${theme.spacings.s50}px;
        * {
          box-sizing: border-box;
        }
        & > div:not(:first-of-type) {
          margin-top: ${theme.spacings.s80}px;
        }
      `}
    >
      {props.lineItems.map((lineItem, index) => (
        <div>
          <CheckoutLineItemRowTheme1
            checkoutLineItem={lineItem}
            layout={"compact"}
            mode={"basket"}
          />
        </div>
      ))}
    </div>
  );
};

MiniBasketContent.defaultProps = {};

export default MiniBasketContent;
