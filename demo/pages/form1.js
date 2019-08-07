import React, { useState } from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import { useTheme } from "storefront-ui/Theme";
import { Radio$ } from "storefront-ui/Radio";
import {
  SelectNative$,
  StatefulSelectNative$
} from "storefront-ui/SelectNative";
import Device from "storefront-ui/Device";

import { FormHeader } from "../theme/FormHeader";
import { FormControl } from "../theme/FormControl";
import { StatefulInput } from "../theme/Input";
import { Button } from "../theme/Button";
import { ProgressSteps } from "../theme/ProgressSteps";

import CheckoutPage from "../components/CheckoutPage";

import { R } from "storefront-ui/Config";

import routerPush from "../helpers/routerPush";

import { rslin } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import IconArrowBack from "../svg/arrow_back.svg";

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
              active={1}
              lastCompleted={1}
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
          <FormHeader
            title={"Contact"}
            description={
              <>
                Already have an account? <a href="#">Log in.</a>
              </>
            }
          />
        </GridItem>
        <GridItem>
          <FormControl label="E-mail">
            <StatefulInput />
          </FormControl>
        </GridItem>
        <GridItem
          css={css`
            ${spacer}
          `}
        >
          <FormHeader title={"Shipping Address"} />
        </GridItem>
        <GridItem params={"1/2"}>
          <FormControl label={"First name"}>
            <StatefulInput />
          </FormControl>
        </GridItem>
        <GridItem params={"1/2"}>
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
            ${R.to("sm").css("&>div{width: 100%;}")}
          `}
        >
          <Button
            size={"large"}
            kind={"minimal"}
            startEnhancer={<IconArrowBack />}
            onClick={() => {
              routerPush("/cart");
            }}
          >
            Return to cart
          </Button>

          <Button
            size={"large"}
            onClick={() => {
              routerPush("/form2");
            }}
          >
            Continue to shipping method
          </Button>
        </GridItem>
      </Grid>
    </CheckoutPage>
  );
};

Form1.hideDesktopMenu = true;

export default Form1;
