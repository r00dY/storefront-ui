import { Grid, GridItem } from "storefront-ui/Grid";

import { FormHeader } from "../components/FormHeader";
import { StatefulRadioGroup, Radio } from "../components/Radio";
import { Button } from "../components/Button";
import IconArrowBack from "../svg/arrow_back.svg";
import { R } from "storefront-ui/Config";
import RadioBorder from "../components/RadioBorder";
import OrderDetails from "../components/OrderDetails";

import {
  SelectNative$,
  StatefulSelectNative$
} from "storefront-ui/SelectNative";

import { rslin } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Device from "storefront-ui/Device";

import { useTheme } from "storefront-ui/Theme";
import React, { useState } from "react";
import { ProgressSteps } from "../components/ProgressSteps";
import CheckoutSidebar from "../components/CheckoutSidebar";
import { Checkbox } from "../components/Checkbox";
import CheckoutPage from "../components/CheckoutPage";
import routerPush from "../helpers/routerPush";

import IconAmex from "../svg/amex.svg";
import IconVisa from "../svg/visa.svg";
import IconMastercard from "../svg/mastercard.svg";
import IconPaypal from "../svg/paypal.svg";

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
          <Device desktop>
            <ProgressSteps
              data={[
                {
                  label: "Cart",
                  href: "/cart"
                },
                {
                  label: "Information",
                  href: "/form1"
                },
                {
                  label: "Shipping",
                  href: "/form2"
                },
                {
                  label: "Payment",
                  href: "/form3"
                }
              ]}
              active={3}
              lastCompleted={3}
              onClick={stepIndex => {
                console.log("clicked step " + stepIndex);
              }}
            />
          </Device>
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
                value: "john@mail.com",
                href: "/form1"
              },
              {
                label: "Ship to",
                value: "Poland, Gdansk PA 16754, United States",
                href: "/form1"
              },
              {
                label: "Method",
                value: "Free Shipping - Free",
                href: "/form2"
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
            <RadioBorder
              value="payment1"
              rightLabel={
                <div
                  css={css`
                    display: flex;
                    svg {
                      height: 24px;
                      width: auto;
                      margin-left: 8px;
                    }
                  `}
                >
                  <IconVisa />
                  <IconMastercard />
                  <IconAmex />
                </div>
              }
            >
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  height: 100%;
                `}
              >
                Credit card
              </div>
            </RadioBorder>
            <RadioBorder value="payment2">
              <div
                css={css`
                  display: flex;
                  align-items: center;
                `}
              >
                <IconPaypal
                  css={css`
                    width: auto;
                    height: 20px;
                  `}
                />
              </div>
            </RadioBorder>
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
            margin-top: 16px;
            display: flex;
            flex-wrap: wrap;
            ${R.from("md").css("justify-content: space-between;")}
            ${R.to("sm").css("&>div{margin-bottom: 16px; width: 100%;}")}
          `}
        >
          <div
            css={css`
              ${R.to("sm").css("order: 2;")}
              display: flex;
              align-items: center;
            `}
          >
            <Button
              size={"large"}
              kind={"minimal"}
              fitContainer={true}
              startEnhancer={<IconArrowBack />}
              onClick={() => {
                routerPush("/form2");
              }}
            >
              Return to shipping method
            </Button>
          </div>

          <div css={css``}>
            <Button
              fitContainer={true}
              size={"large"}
              onClick={() => {
                routerPush("/summary");
              }}
            >
              Complete order
            </Button>
          </div>
        </GridItem>
      </Grid>
    </CheckoutPage>
  );
};

Form3.hideDesktopMenu = true;

export default Form3;
