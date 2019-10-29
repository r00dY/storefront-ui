import "../global-config";

import React, { useState } from "react";

import { Grid, GridItem } from "@commerce-ui/core/Grid";
import { useTheme } from "@commerce-ui/core/Theme";
import { Radio$ } from "@commerce-ui/core/Radio";
import {
  SelectNative$,
  StatefulSelectNative$
} from "@commerce-ui/core/SelectNative";
import Device from "@commerce-ui/core/Device";

import { FormHeader } from "../components/FormHeader";
import { FormControl } from "../components/FormControl";
import { StatefulInput } from "../components/Input";
import { Button } from "../components/Button";
import { ProgressSteps } from "../components/ProgressSteps";

import CheckoutPage from "../components/CheckoutPage";

import { R } from "../theme.js";

import routerPush from "../helpers/routerPush";

import { rslin } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import IconArrowBack from "../svg/arrow_back.svg";
import ThemeLink from "../components/ThemeLink";

const Form1 = () => {
  const theme = useTheme();

  const [select1, setSelect1] = useState(null);

  const stringOptions = [
    "New York",
    "Washington",
    "London",
    "Warsaw",
    "City with a very long name"
  ];

  const spacer = rslin(theme.spacings.s100, theme.spacings.s140).css(
    "margin-top"
  );
  return (
    <CheckoutPage>
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
          active={1}
          lastCompleted={1}
          onClick={stepIndex => {
            console.log("clicked step " + stepIndex);
          }}
        />
      </Device>

      <div
        css={css`
          ${spacer}
        `}
      />

      <FormHeader
        title={"Contact"}
        description={
          <>
            Already have an account?{" "}
            <ThemeLink href="#" secondary>
              Log in.
            </ThemeLink>
          </>
        }
      />

      <Grid gutterVertical={16}>
        <GridItem>
          <FormControl label="E-mail">
            <StatefulInput />
          </FormControl>
        </GridItem>
      </Grid>

      <div
        css={css`
          ${spacer}
        `}
      />
      <FormHeader title={"Shipping Address"} />

      <Grid gutterVertical={16}>
        <GridItem params={{ xs: "1/1", md: "1/2" }}>
          <FormControl label={"First name"}>
            <StatefulInput />
          </FormControl>
        </GridItem>
        <GridItem params={{ xs: "1/1", md: "1/2" }}>
          <FormControl label={"Last name"}>
            <StatefulInput />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl label={"Address"}>
            <StatefulInput />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl label={"Apartment, suite, etc. (optional)"}>
            <StatefulInput />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl label={"City"}>
            <StatefulInput />
          </FormControl>
        </GridItem>
        <GridItem params={{ xs: "1/1", md: "1/3" }}>
          <FormControl label={"State"}>
            <SelectNative$
              options={stringOptions}
              onChange={setSelect1}
              value={select1}
            />
          </FormControl>
        </GridItem>
        <GridItem params={{ xs: "1/1", md: "1/3" }}>
          <FormControl label={"Zip Code"}>
            <StatefulInput />
          </FormControl>
        </GridItem>
        <GridItem params={{ xs: "1/1", md: "1/3" }}>
          <FormControl label={"Phone"}>
            <StatefulInput />
          </FormControl>
        </GridItem>
        <GridItem />

        <GridItem
          css={css`
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
                routerPush("/cart");
              }}
            >
              Return to cart
            </Button>
          </div>

          <div css={css``}>
            <Button
              fitContainer={true}
              size={"large"}
              onClick={() => {
                routerPush("/form2");
              }}
            >
              Continue to shipping method
            </Button>
          </div>
        </GridItem>
      </Grid>
    </CheckoutPage>
  );
};

Form1.hideDesktopMenu = true;

export default Form1;
