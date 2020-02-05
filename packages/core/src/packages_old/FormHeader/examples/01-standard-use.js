import React, { useState } from "react";
import { FormControl } from "../../../../../../demo/components/FormControl";
import { FormHeader } from "../../../../../../demo/components/FormHeader";
import { StatefulCheckbox } from "../../../../../../demo/components/Checkbox";
import { StatefulInput } from "../../../../../../demo/components/Input";
import { StatefulTextarea } from "../../../../../../demo/components/Textarea";
import {
  StatefulRadioGroup,
  Radio
} from "../../../../../../demo/components/Radio";

import { Radio$ } from "@commerce-ui/core/Radio";

import { Grid, GridItem } from "@commerce-ui/core/Grid";

import { Button } from "../../../../../../demo/components/Button";
import { ButtonGroup } from "../../../../../../demo/components/ButtonGroup";

import { ThemeProvider } from "@commerce-ui/core/Theme";

import IconArrowBack from "../../../../data/svg/arrow_back.svg";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  const RadioBorder = props => (
    <Radio$
      {...props}
      overrides={{
        Root: {
          style: ({ $theme, $isFocused }) => `
                                border: 1px solid ${$theme.colors.mono300};
                                border-bottom: 0;

                                &:last-child {
                                    border-bottom: 1px solid ${
                                      $theme.colors.mono300
                                    };
                                }
                                width: 100%;
                                padding: 16px;
                                margin: 0;
                                background-color: ${
                                  $isFocused
                                    ? $theme.colors.mono200
                                    : "transparent"
                                };
      `,
          children: ({ input, radioMarker, label }) => (
            <>
              {input}
              {radioMarker}
              <div
                css={css`
                  display: flex;
                  flex-direciton: row;
                  justify-content: space-between;
                  flex-grow: 1;
                `}
              >
                {label}
                <div>
                  <strong>{props.rightLabel}</strong>
                </div>
              </div>
            </>
          )
        },
        Label: {}
      }}
    />
  );

  return (
    <div>
      <FormHeader
        title={"Contact"}
        description={
          <>
            Already have an account? <a href="#">Log in.</a>
          </>
        }
      />

      <Grid
        colNumber={12}
        gutterVertical={8}
        css={css`
          margin-bottom: 48px;
        `}
      >
        <GridItem params={12}>
          <FormControl label="E-mail">
            <StatefulInput placeholder={"joe@gmail.com"} type={"email"} />
          </FormControl>
        </GridItem>
        <GridItem params={12}>
          <StatefulCheckbox>Sign up for newsletter</StatefulCheckbox>
        </GridItem>
      </Grid>

      <FormHeader title={"Address"} />

      <Grid
        gutter={8}
        gutterVertical={8}
        css={css`
          margin-bottom: 48px;
        `}
      >
        <GridItem>
          <StatefulRadioGroup
            initialState={{ value: "company" }}
            name={"test"}
            align={"horizontal"}
          >
            <Radio value="individual">Individual client</Radio>
            <Radio value="company">Company</Radio>
          </StatefulRadioGroup>
        </GridItem>

        <GridItem params={"1/2"}>
          <FormControl label="Company name">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={"1/2"}>
          <FormControl label="NIP">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={"1/2"}>
          <FormControl label="First name">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={"1/2"}>
          <FormControl label="Last name">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl
            label="Address"
            caption={"I'm sorry but this is invalid"}
          >
            <StatefulInput error={"Dupa"} />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl label="Apartment, suite, etc. (optional)">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl label="City">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={"1/3"}>
          <FormControl label="Country">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={"1/3"}>
          <FormControl label="State">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={"1/3"}>
          <FormControl label="Zip code">
            <StatefulInput placeholder={"10-900"} />
          </FormControl>
        </GridItem>
      </Grid>

      <FormHeader title={"Shipping method"} />

      <StatefulRadioGroup
        initialState={{ value: "shipment1" }}
        name={"shipment"}
      >
        <RadioBorder value="shipment1" rightLabel={"FREE"}>
          <strong>Shipment 1</strong> (next day delivery)
        </RadioBorder>
        <RadioBorder value="shipment2" rightLabel={"$2.59"}>
          <strong>Shipment 2</strong>
        </RadioBorder>
        <RadioBorder value="shipment3" rightLabel={"FREE"}>
          <strong>Shipment 3</strong>
        </RadioBorder>
      </StatefulRadioGroup>

      <div
        css={css`
          margin-top: 48px;
          display: flex;
          justify-content: space-between;
        `}
      >
        <Button
          kind={"minimal"}
          size={"large"}
          startEnhancer={<IconArrowBack />}
        >
          Return to Address
        </Button>
        <ButtonGroup>
          <Button kind={"secondary"} size={"large"}>
            Reset
          </Button>
          <Button size={"large"}>Continue to payment method</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};
