import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useTheme } from "storefront-ui/Theme";

import { Button } from "../Button";
import { ProductRowTheme1 } from "../ProductRow";
import { Ledger } from "../Ledger";

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
      {props.products.map((product, index) => (
        <div>
          <ProductRowTheme1
            product={product}
            price={product.price}
            quantity={"1"}
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
