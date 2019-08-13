import React from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import Device from "storefront-ui/Device";

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
import PageTitle from "../theme/PageTitle";
import routerPush from "../helpers/routerPush";

const cartGridContainerParams = {
  xs: 24,
  sm: 14,
  md: 15,
  lg: [12, 2],
  xl: [10, 3]
};

const Cart = () => {
  const router = useRouter();
  const noRoot = router.query.noRoot !== undefined;
  const theme = useTheme();

  return (
    <div>
      {noRoot && <NavBarMobile title={"Cart"} />}
      <Container>
        {!noRoot && (
          <PageTitle
            title={"Your Bag"}
            subtitle={`${data.products.length} items`}
          />
        )}
        <Grid>
          <GridItem params={cartGridContainerParams}>
            <div
              css={css`
                & > div:not(:first-of-type) {
                  margin-top: 40px;
                }
              `}
            >
              {data.products.slice(0, 5).map((product, index) => (
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
          <GridItem
            params={{ xs: 24, sm: 10, md: [8, 1], lg: [7, 1], xl: [6, 2] }}
          >
            <div
              css={css`
                position: sticky;
                top: 80px;
              `}
            >
              <div
                css={css`${theme.fonts.h6.css} border-bottom: 1px solid ${
                  theme.colors.mono400.css
                }; margin-bottom: 0.5em;`}
              >
                Summary
              </div>
              <Ledger
                rows={[
                  { label: "Subtotal", value: "$399.0" },
                  { label: "Shipping", value: "free" },
                  { label: "Total", value: "$399.00", isTotal: true }
                ]}
              />
              <Device desktop>
                <Spacer />
                <Button
                  fitContainer
                  size={"large"}
                  onClick={() => {
                    routerPush("/form1");
                  }}
                >
                  Checkout
                </Button>
              </Device>
            </div>
          </GridItem>
        </Grid>
      </Container>
      <Spacer />

      <Device mobile>
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
            <Button
              fitContainer
              onClick={() => {
                routerPush("/form1");
              }}
            >
              Checkout
            </Button>
          </Container>
        </div>
      </Device>
    </div>
  );
};

Cart.tabbar = 3;

export default Cart;
