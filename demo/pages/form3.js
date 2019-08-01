import { Grid, GridItem } from "storefront-ui/Grid";

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
import { ProgressSteps } from "../theme/ProgressSteps";
import CheckoutSidebar from "../components/CheckoutSidebar";
import { Checkbox } from "../theme/Checkbox";
import CheckoutPage from "../components/CheckoutPage";

const Form3 = () => {
  const theme = useTheme();
  const spacer = rslin(theme.spacings.s100, theme.spacings.s140).css(
    "margin-top"
  );
  const [checked, setChecked] = useState(false);
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
            active={2}
            lastCompleted={2}
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
              },
              {
                label: "Method",
                value: "Free Shipping - Free"
              }
            ]}
          />
        </GridItem>

        <GridItem
          css={css`
            ${spacer}
          `}
        >
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

        <GridItem
          css={css`
            ${spacer}
          `}
        >
          <FormHeader title={"Billing address"} />
        </GridItem>
        <GridItem>
          <StatefulRadioGroup
            initialState={{ value: "billing1" }}
            name={"billing"}
          >
            <RadioBorder value="billing1">Same as shipping address</RadioBorder>
            <RadioBorder value="billing2">
              Use a different billing address
            </RadioBorder>
          </StatefulRadioGroup>
        </GridItem>

        <GridItem
          css={css`
            ${spacer}
          `}
        >
          <FormHeader title={"Remember me"} />
        </GridItem>
        <GridItem>
          <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
            Save my information for a faster checkout
          </Checkbox>
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
    </CheckoutPage>
  );
};

Form3.hideDesktopMenu = true;

export default Form3;
