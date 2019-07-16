import { Grid, GridItem } from "storefront-ui/Grid";

import { FormHeader } from "../theme/FormHeader";
import { StatefulRadioGroup, Radio } from "../theme/Radio";
import { Button } from "../theme/Button";
import IconArrowBack from "../../data/svg/arrow_back.svg";

import { Radio$ } from "storefront-ui/Radio";
import RadioBorder from "../theme/RadioBorder";

import {
  SelectNative$,
  StatefulSelectNative$
} from "storefront-ui/SelectNative";

import { rslin } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useTheme } from "storefront-ui/Theme";
import React, { useState } from "react";
import OrderDetails from "../theme/OrderDetails";
import { ProgressSteps } from "../theme/ProgressSteps";
import CheckoutPage from "../components/CheckoutPage";

export default () => {
  const theme = useTheme();
  const spacer = rslin(theme.spacings.s100, theme.spacings.s140).css(
    "margin-top"
  );
  return (
    <CheckoutPage>
      <Grid gutterVertical={20}>
        <GridItem>
          <ProgressSteps
            data={[
              {
                label: "Consumer information",
                href: "#"
              },
              {
                label: "Shipping method",
                href: "#"
              },
              {
                label: "Payment method",
                href: "#"
              }
            ]}
            active={1}
            lastCompleted={1}
            onClick={stepIndex => {
              console.log("clicked step " + stepIndex);
            }}
          />
        </GridItem>
        <GridItem
          css={css`
            ${spacer}
          `}
        >
          <OrderDetails
            rows={[
              {
                label: "Contact",
                value: "john@mail.com"
              },
              {
                label: "Ship to",
                value: "Poland, Gdansk PA 16754, United States"
              }
            ]}
          />
        </GridItem>
        <GridItem
          css={css`
            ${spacer}
          `}
        >
          <FormHeader title={"Shipping method"} />
        </GridItem>
        <GridItem>
          <StatefulRadioGroup
            initialState={{ value: "shipment1" }}
            name={"shipment"}
          >
            <RadioBorder value="shipment1" rightLabel={"FREE"}>
              <strong>Free Shipping</strong> (next day delivery)
            </RadioBorder>
            <RadioBorder value="shipment2" rightLabel={"$12.00"}>
              <strong>2-Day Shipping</strong>
            </RadioBorder>
          </StatefulRadioGroup>
        </GridItem>
        <GridItem
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <div>
            <Button kind={"minimal"} startEnhancer={<IconArrowBack />}>
              Return to customer information
            </Button>
          </div>
          <div>
            <Button>Continue to payment method</Button>
          </div>
        </GridItem>
      </Grid>
    </CheckoutPage>
  );
};
