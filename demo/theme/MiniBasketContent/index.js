import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useTheme } from "storefront-ui/Theme";

import { Button } from "../Button";
import { ProductRowTheme1 } from "../ProductRow";
import { Ledger } from "../Ledger";

import IconClose from "./outline-clear-24px.svg";
import { ButtonRaw } from "../ButtonRaw";

const MiniBasketContent = props => {
  const {} = props;
  const theme = useTheme();

  return (
    <div
      css={css`
        width: 400px;
        padding: ${theme.spacings.s50}px;
        * {
          box-sizing: border-box;
        }
        & > div:not(:first-of-type) {
          margin-top: ${theme.spacings.s80}px;
        }
      `}
    >
      <div
        css={css`
          margin-top: 10px;
          ${theme.fonts.h5.css} display: flex;
          justify-content: space-between;
        `}
      >
        Your Bag
        <ButtonRaw>
          <IconClose />
        </ButtonRaw>
      </div>
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
