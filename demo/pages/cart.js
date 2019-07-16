import React from "react";

import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import { R } from "storefront-ui/Config";
import Container from "storefront-ui/Container";
import { useTheme } from "storefront-ui/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import data from "../data";
import { ProductRowTheme1 } from "../theme/ProductRow";
import { Button } from "../theme/Button";

import IconBack from "../data/outline-chevron_left-24px.svg";
import IconForward from "../data/outline-chevron_right-24px.svg";
import { Divider } from "../theme/Divider";
import { Ledger } from "../theme/Ledger";

export default () => {
  const theme = useTheme();

  return (
    <Page>
      <Container>
        <Grid>
          <GridItem
            params={{ xs: [24], md: [16], lg: [12, 2], xl: [10, 4] }}
            css={css`
              padding-bottom: ${theme.spacings.s100}px;
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: space-between;
              `}
            >
              <Button kind={"minimal"} startEnhancer={() => <IconBack />}>
                Continue Shopping
              </Button>
              <Button
                endEnhancer={() => <IconForward />}
                css={css`
                  ${R.from("md").css("display: none;")}
                `}
              >
                Checkout
              </Button>
            </div>
          </GridItem>

          <GridItem params={{ xs: [24], md: [16], lg: [12, 2], xl: [10, 4] }}>
            <div
              css={css`${theme.fonts.h3.css} margin-bottom: ${
                theme.spacings.s40
              }px;`}
            >
              Your Bag
            </div>
            <div
              css={css`${theme.fonts.body1.css} margin-bottom: ${
                theme.spacings.s100
              }px`}
            >
              {data.products.length} items
            </div>

            {data.products.map((product, index) => (
              <div
                css={css`
                  &:not(:last-of-type) {
                    margin-bottom: ${theme.spacings.s40}px;
                  }
                `}
              >
                <ProductRowTheme1
                  product={product}
                  price={product.price}
                  quantity={"1"}
                  mode={"full"}
                  editable
                />
              </div>
            ))}
          </GridItem>

          <GridItem
            params={{ xs: 24, md: [8], lg: [7, 1], xl: [6, 1] }}
            css={css`
              ${R.to("sm").css(`margin-top: ${theme.spacings.s100}px`)}
            `}
          >
            <div
              css={css`
                ${theme.fonts.h5.css}
              `}
            >
              Summary
            </div>

            <Divider />

            <Ledger
              rows={[
                {
                  label: "Standard Shipping",
                  value: "Free"
                },
                {
                  label: "Bag subtotal",
                  isTotal: true,
                  value: "€399"
                }
              ]}
            />
            <Divider />
            <Button fitContainer endEnhancer={() => <IconForward />}>
              Continue to Checkout
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </Page>
  );
};
