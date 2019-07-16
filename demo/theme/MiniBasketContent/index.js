import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useTheme } from "storefront-ui/Theme";

import { Button } from "../Button";
import { ButtonGroup } from "../ButtonGroup";
import data from "../../data";
import { ProductRowTheme1 } from "../ProductRow";
import { Ledger } from "../Ledger";
import { Divider } from "../Divider";

const MiniBasketContent = props => {
  const {} = props;
  const theme = useTheme();

  return (
    <div
      css={css`width: 400px; padding: ${
        theme.spacings.s40
      }px; * {box-sizing: border-box;} & > { &:not(:first-of-type) {margin-top: ${
        theme.spacings.s40
      }px; }`}
    >
      {data.products.map((product, index) => (
        <div>
          <ProductRowTheme1
            product={product}
            price={product.price}
            quantity={"1"}
            mode={"compact"}
            editable
          />
        </div>
      ))}

      <div
        css={css`
          padding: ${theme.spacings.s20}px 0;
          border-top: 1px solid ${theme.colors.mono300.css};
          border-bottom: 1px solid ${theme.colors.mono300.css};
        `}
      >
        <Ledger
          rows={[
            {
              label: "Subtotal",
              value: "€399"
            },
            {
              label: "Tax",
              value: "€0"
            },
            {
              label: "Total",
              isTotal: true,
              value: "€399"
            }
          ]}
        />
      </div>

      <div
        css={css`
          display: flex;
          justify-content: space-between;
          width: 100%;
        `}
      >
        <Button kind={"secondary"}>View Basket (1)</Button>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

MiniBasketContent.defaultProps = {};

export default MiniBasketContent;
