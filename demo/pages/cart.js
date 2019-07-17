import React from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "storefront-ui/Theme";
import { useRouter } from "next/router";
import NavBarMobile from "../theme/NavBarMobile";

import data from "../data";
import { ProductRowTheme1 } from "../theme/ProductRow";
import NavBarMobileSearch from "./search";
import { Button } from "../theme/Button";
import { Ledger } from "../theme/Ledger";

const Cart = () => {
  const router = useRouter();
  const noRoot = router.query.noRoot !== undefined;
  const theme = useTheme();

  return (
    <div>
      {noRoot && <NavBarMobile title={"Cart"} />}
      <Container>
        <div
          css={css`
            ${theme.fonts.h4.css}
            margin-top: 20px;
            margin-bottom: 20px;
          `}
        >
          Your Bag
        </div>
        <div
          css={css`
            padding-bottom: 100px;
            & > div:not(:first-of-type) {
              margin-top: 10px;
            }
          `}
        >
          {data.products.map((product, index) => (
            <ProductRowTheme1
              product={product}
              price={product.price}
              quantity={1}
              mode={"compact"}
              editable
            />
          ))}
        </div>
      </Container>

      <div
        css={css`
          position: fixed;
          bottom: 50px;
          left: 0;
          width: 100%;
          z-index: 1;
          background: white;
          padding-bottom: 10px;
          box-sizing: border-box;
        `}
      >
        <Container>
          <Ledger rows={[{ label: "Total", value: "$399.00" }]} />
          <Button fitContainer>Checkout</Button>
        </Container>
      </div>
    </div>
  );
};

Cart.tabbar = 3;

export default Cart;
