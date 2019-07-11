import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";

import { FormHeader } from "../theme/FormHeader";
import { StatefulRadioGroup, Radio } from "../theme/Radio";
import { Button } from "../theme/Button";
import IconArrowBack from "../../data/svg/arrow_back.svg";

import RadioBorder from "../theme/RadioBorder";
import OrderDetails from "../theme/OrderDetails";

import {
  SelectNative$,
  StatefulSelectNative$
} from "storefront-ui/SelectNative";

import { rslin } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useTheme } from "storefront-ui/Theme";
import React, { useState } from "react";

export default () => {
  const theme = useTheme();

  return (
    <Page>
      <Container>
        <Grid>
          <GridItem
            params={{ xs: [24], md: [12, 6] }}
            css={css`
                      text-align: center; ${theme.fonts.h2.css}
                      ${rslin(theme.spacings.s120, theme.spacings.s140).css(
                        "padding-top"
                      )}
                      ${rslin(theme.spacings.s140, theme.spacings.s180).css(
                        "padding-bottom"
                      )}
                      `}
          >
            Outdoor Voices
          </GridItem>
        </Grid>
        <Grid>
          <GridItem params={{ xs: 24, md: [16] }}>
            <Grid gutterVertical={20}>
              <GridItem>ProgressSteps</GridItem>
              <GridItem>
                <OrderDetails
                  rows={[
                    {
                      label: "Contact",
                      value: "john@mail.com"
                    },
                    {
                      label: "Ship to",
                      value: "Poland, Gdansk PA 16754, United States"
                    },
                    {
                      label: "Method",
                      value: "Free Shipping - Free"
                    }
                  ]}
                />
              </GridItem>

              <GridItem>
                <FormHeader
                  title={"Payment method"}
                  description={"All transactions are secure and encrypted"}
                />
              </GridItem>
              <GridItem>
                <StatefulRadioGroup
                  initialState={{ value: "payment1" }}
                  name={"payment"}
                >
                  <RadioBorder value="payment1">Credit card</RadioBorder>
                  <RadioBorder value="payment2">PayPal</RadioBorder>
                  <RadioBorder value="payment3">Amazon Pay</RadioBorder>
                </StatefulRadioGroup>
              </GridItem>

              <GridItem>
                <FormHeader title={"Billing address"} />
              </GridItem>
              <GridItem>
                <StatefulRadioGroup
                  initialState={{ value: "billing1" }}
                  name={"billing"}
                >
                  <RadioBorder value="billing1">
                    Same as shipping address
                  </RadioBorder>
                  <RadioBorder value="billing2">
                    Use a different billing address
                  </RadioBorder>
                </StatefulRadioGroup>
              </GridItem>

              <GridItem>
                <FormHeader title={"Remember me"} />
              </GridItem>

              <GridItem
                css={css`
                  display: flex;
                  justify-content: space-between;
                `}
              >
                <div>
                  <Button kind={"minimal"} startEnhancer={<IconArrowBack />}>
                    Return to shipping method
                  </Button>
                </div>
                <div>
                  <Button>Complete order</Button>
                </div>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem params={{ xs: 24, md: [8] }}>Your Bag</GridItem>
        </Grid>
      </Container>
    </Page>
  );
};
