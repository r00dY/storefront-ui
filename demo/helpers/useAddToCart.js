import React, { useState } from "react";
import { showNotification } from "storefront-ui/Notifications";
import { ProductRowTheme1 } from "../theme/ProductRow";
import { useTheme } from "storefront-ui/Theme";

import { Button } from "../theme/Button";

import routerPush from "../helpers/routerPush";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

let timeout;

const Notification = ({ product, close }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        width: 100%;
        padding: 24px;
        background: white;
        color: black;
        box-shadow: ${theme.lighting.shadow500};
      `}
    >
      <div
        css={css`
          ${theme.fonts.body1.css}
          margin-bottom: 16px;
        `}
      >
        Just added
      </div>
      <ProductRowTheme1
        product={product}
        price={product.price}
        quantity={"1"}
        layout={"compact"}
        mode={"default"}
      />

      <div
        css={css`
          margin-top: 16px;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        `}
      >
        <Button
          kind={"secondary"}
          css={css`
            width: calc(50% - 4px);
          `}
          onClick={() => {
            close();
            routerPush("/cart");
          }}
        >
          View cart
        </Button>
        <Button
          css={css`
            width: calc(50% - 4px);
          `}
          onClick={() => {
            close();
            routerPush("/form1");
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

function useAddToCart(product) {
  const [isLoading, setLoading] = useState(false);

  const addToCart = () => {
    clearTimeout();

    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);

      showNotification(({ close }) => (
        <Notification product={product} close={close} />
      ));
    }, 500);
  };

  return [addToCart, isLoading];
}

export default useAddToCart;
