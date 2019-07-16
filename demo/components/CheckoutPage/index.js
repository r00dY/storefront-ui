import { rslin } from "responsive-helpers";
import React, { useState } from "react";
import Container from "storefront-ui/Container";
import { Grid, GridItem } from "storefront-ui/Grid";
import { useTheme } from "storefront-ui/Theme";
import { R } from "storefront-ui/Config";

import Page from "../Page";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { FormHeader } from "../../theme/FormHeader";
import data from "../../data";
import { ProductRowTheme1 } from "../../theme/ProductRow";
import { Divider } from "../../theme/Divider";
import { FormControl } from "../../theme/FormControl";
import { StatefulInput } from "../../theme/Input";
import { Button } from "../../theme/Button";
import { Ledger } from "../../theme/Ledger";
import { AccordionRaw } from "storefront-ui/Accordion";

import IconMore from "./outline-expand_more-24px.svg";
import IconLess from "./outline-expand_less-24px.svg";
import PageTitle from "../../theme/PageTitle";

const CheckoutPage = props => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const sidebarContent = (
    <div
      css={css`
        padding-bottom: ${theme.spacings.s40}px;
      `}
    >
      <FormHeader title={"Your Bag"} />
      <div>
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
              mode={"compact"}
              editable={false}
            />
          </div>
        ))}
      </div>
      <Divider />
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        `}
      >
        <div
          css={css`
            flex-grow: 1;
            margin-right: ${theme.spacings.s40}px;
          `}
        >
          <FormControl label={"Gift card"}>
            <StatefulInput />
          </FormControl>
        </div>
        <Button>Apply</Button>
      </div>
      <Divider />
      <Ledger
        rows={[
          {
            label: "Subtotal",
            value: "€399"
          },
          {
            label: "Shipping",
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
  );
  return (
    <Page>
      <PageTitle title={"Outdoor Voices"} />
      <Container>
        <Grid>
          <GridItem
            params={{ xs: [24, 0, 1], md: [16], lg: [12, 2], xl: [10, 4] }}
          >
            {props.children}
          </GridItem>

          <GridItem params={{ xs: 24, md: [8], lg: [7, 1], xl: [6, 1] }}>
            <div
              css={css`
                ${R.from("md").css("display: none;")}
              `}
            >
              <AccordionRaw open={open}>{sidebarContent}</AccordionRaw>
              <Button
                onClick={() => setOpen(!open)}
                endEnhancer={() => {
                  if (open) {
                    return <IconLess />;
                  } else {
                    return <IconMore />;
                  }
                }}
                kind={"secondary"}
                css={css`
                  svg {
                    fill: currentColor;
                  }
                `}
                fitContainer
              >
                <div>{open ? "Hide Order Summary" : "Show Order Summary"}</div>
              </Button>
            </div>
            <div
              css={css`
                ${R.to("sm").css("display: none;")}
              `}
            >
              {sidebarContent}
            </div>
          </GridItem>
        </Grid>
      </Container>
    </Page>
  );
};

export default CheckoutPage;
