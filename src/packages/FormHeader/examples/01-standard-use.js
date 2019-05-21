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
      <p>Example of entire form</p>
      <br />
      <br />
      <br />

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
            <StatefulInput placeholder={"joe@gmail.com"} />
          </FormControl>
        </GridItem>
        <GridItem params={12}>
          <StatefulCheckbox>Sign up for newsletter</StatefulCheckbox>
        </GridItem>
      </Grid>

      <FormHeader title={"Address"} />

      <Grid
        gutter={8}
        colNumber={12}
        gutterVertical={8}
        css={css`
          margin-bottom: 48px;
        `}
      >
        <GridItem params={12}>
          <StatefulRadioGroup initialState={{ value: "company" }}>
            <Radio value="individual">Individual client</Radio>
            <Radio value="company">Company</Radio>
          </StatefulRadioGroup>
        </GridItem>

        <GridItem params={6}>
          <FormControl label="Company name">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={6}>
          <FormControl label="NIP">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={6}>
          <FormControl label="First name">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={6}>
          <FormControl label="Last name">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={12}>
          <FormControl label="Address">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={12}>
          <FormControl label="Apartment, suite, etc. (optional)">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={12}>
          <FormControl label="City">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={4}>
          <FormControl label="Country">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={4}>
          <FormControl label="State">
            <StatefulInput />
          </FormControl>
        </GridItem>

        <GridItem params={4}>
          <FormControl label="Zip code">
            <StatefulInput placeholder={"10-900"} />
          </FormControl>
        </GridItem>
      </Grid>

      <FormHeader title={"Shipping method"} />
    </div>
  );
};
