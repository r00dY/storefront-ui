import { Grid, GridItem } from "storefront-ui/Grid";

import { FormHeader } from "../theme/FormHeader";
import { StatefulRadioGroup, Radio } from "../theme/Radio";
import { Button } from "../theme/Button";
import IconArrowBack from "../svg/arrow_back.svg";
import { R } from "storefront-ui/Config";
import RadioBorder from "../theme/RadioBorder";
import OrderDetails from "../theme/OrderDetails";

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
import { ProgressSteps } from "../theme/ProgressSteps";
import CheckoutSidebar from "../components/CheckoutSidebar";
import { Checkbox } from "../theme/Checkbox";
import { ButtonRaw } from "../theme/ButtonRaw";
import CheckoutPage from "../components/CheckoutPage";
import routerPush from "../helpers/routerPush";

import IconVisa from "../svg/visa-payment.svg";
import IconMessenger from "../svg/messenger.svg";
const Form3 = () => {
  const theme = useTheme();
  const spacer = rslin(theme.spacings.s100, theme.spacings.s140).css(
    "margin-top"
  );
  const [checked, setChecked] = useState(false);

  const BorderContainer = props => (
    <div
      css={css`
        border: 1px solid ${theme.colors.mono300.css};
        padding: ${theme.spacings.s80}px;
      `}
    >
      {props.children}
    </div>
  );
  return (
    <CheckoutPage hideGiftCard>
      <Grid
        gutterVertical={20}
        css={css`
          p {
            ${theme.fonts.body2.css}
            margin-bottom: 2em;
          }
          h1 {
            ${theme.fonts.h3.css}
          }
          h2 {
            ${theme.fonts.h6.css}
          }
          h3 {
            ${theme.fonts.body1.css}
            margin-bottom: 0.1em;
          }
        `}
      >
        <GridItem>
          <h1>Order WEB3027</h1>
          <h2>Thank you Marcin!</h2>
        </GridItem>
        <GridItem>
          <BorderContainer>
            <h2>Your order is confirmed</h2>
            <p>We've accepted your order, and we're getting it ready.</p>
          </BorderContainer>
        </GridItem>
        <GridItem>
          <BorderContainer>
            <h2>Get Order Updates</h2>
            <p>Get your receipt and shipping updates on Messenger: </p>
            <ButtonRaw
              css={css`
                svg {
                  fill: currentColor;
                  width: 20px;
                  height: 20px;
                  fill: white;
                  margin-right: 0.5em;
                }
                display: flex;
                height: 40px;
                align-items: center;
                padding: 0 10px;
                background: #0084ff;
                color: white;
                border-radius: 5px;
                ${theme.fonts.body1.css}
              `}
            >
              <IconMessenger /> Send me updates
            </ButtonRaw>
          </BorderContainer>
        </GridItem>
        <GridItem>
          <BorderContainer>
            <h2>Customer information</h2>
            <h3>Contact information</h3>
            <p>marcin.nogal@gmail.com</p>
            <Grid colNumber={2}>
              <GridItem params={{ xs: 2, md: 1 }}>
                <h3>Shipping address</h3>
                <p>
                  Marcin Nogal
                  <br />
                  Aleja Zwyciestwa 96/98 C309
                  <br />
                  81-451 Gdynia
                  <br />
                  Poland
                  <br />
                  ​514 944 555
                </p>
              </GridItem>
              <GridItem params={{ xs: 2, md: 1 }}>
                <h3>Billing address</h3>
                <p>
                  Marcin Nogal
                  <br />
                  Aleja Zwyciestwa 96/98 C309
                  <br />
                  81-451 Gdynia
                  <br />
                  Poland
                </p>
              </GridItem>
              <GridItem params={{ xs: 2, md: 1 }}>
                <h3>Shipping method</h3>
                <p>Standard delivery</p>
              </GridItem>
              <GridItem params={{ xs: 2, md: 1 }}>
                <h3>Payment method</h3>
                <p>
                  <div
                    css={css`
                      display: flex;
                      align-items: center;
                      svg {
                        margin-right: 0.25em;
                      }
                    `}
                  >
                    <IconVisa /> ending with 5387
                  </div>
                </p>
              </GridItem>
            </Grid>
          </BorderContainer>
        </GridItem>
        <GridItem
          css={css`
            display: flex;
            flex-wrap: wrap;
            ${R.from("md").css("justify-content: space-between;")}
            ${R.to("sm").css("&>div{width: 100%;}")}
          `}
        >
          <div
            css={css`
              ${R.to("sm").css("order: 1; width: 100%;")}
            `}
          />
          <div>
            <Button
              size={"large"}
              fitContainer
              onClick={() => {
                routerPush("/");
              }}
            >
              Continue shopping
            </Button>
          </div>
        </GridItem>
      </Grid>
    </CheckoutPage>
  );
};

Form3.hideDesktopMenu = true;

export default Form3;
