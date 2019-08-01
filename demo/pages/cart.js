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
import { Spacer } from "../theme/Spacer";

const Cart = () => {
  const router = useRouter();
  const noRoot = router.query.noRoot !== undefined;
  const theme = useTheme();

  return (
    <div>
      {noRoot && <NavBarMobile title={"Cart"} />}
      <Container>
        {!noRoot && (
          <>
            <div
              css={css`
                ${theme.fonts.h4.css}
                margin-top: 20px;
              `}
            >
              Your Bag
            </div>
            <div
              css={css`
              ${theme.fonts.body2.css}
              color: ${theme.colors.mono600.css};
              margin-bottom: 20px;
            `}
            >
              {data.products.length} items
            </div>
          </>
        )}
        <Grid>
          <GridItem params={{ xs: 24, sm: 12 }}>
            <div
              css={css`
                & > div:not(:first-of-type) {
                  margin-top: 40px;
                }
              `}
            >
              {data.products.map((product, index) => (
                <ProductRowTheme1
                  key={index}
                  product={product}
                  price={product.price}
                  quantity={"1"}
                  mode={"basket"}
                  layout={"full"}
                />
              ))}
            </div>
            <Spacer />
          </GridItem>
          <GridItem params={{ xs: 24, sm: 12, md: [10, 2] }}>
            <div
              css={css`${theme.fonts.h6.css} border-bottom: 1px solid ${
                theme.colors.mono400.css
              }; margin-bottom: 0.5em;`}
            >
              Summary
            </div>
            <Ledger
              rows={[
                { label: "Shipping", value: "free" },
                { label: "Total", value: "$399.00", isTotal: true }
              ]}
            />
          </GridItem>
        </Grid>
      </Container>
      <Spacer />
      <div
        css={css`
          position: fixed;
          ${noRoot ? "bottom: 0px;" : " bottom: 50px;"}
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
