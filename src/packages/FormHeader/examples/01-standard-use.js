import React, { useState } from "react";
import { FormControl } from "storefront-ui/FormControl";
import { FormHeader } from "storefront-ui/FormHeader";
import { StatefulCheckbox } from "storefront-ui/Checkbox";
import { StatefulInput } from "storefront-ui/Input";
import { StatefulTextarea } from "storefront-ui/Textarea";
import { StatefulRadioGroup, Radio } from "storefront-ui/Radio";

import { Grid, GridItem } from "storefront-ui/Grid";

import { ThemeProvider } from "storefront-ui/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  return (
    <div>
      <ThemeProvider
        theme={{
          Radio: {
            border: props => ({
              overrides: {
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
              }
            })
          }
        }}
      >
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
          <Radio value="shipment1" appearance={"border"} rightLabel={"FREE"}>
            <strong>Shipment 1</strong> (next day delivery)
          </Radio>
          <Radio value="shipment2" appearance={"border"} rightLabel={"$2.59"}>
            <strong>Shipment 2</strong>
          </Radio>
          <Radio value="shipment3" appearance={"border"} rightLabel={"FREE"}>
            <strong>Shipment 3</strong>
          </Radio>
        </StatefulRadioGroup>
      </ThemeProvider>
    </div>
  );
};
