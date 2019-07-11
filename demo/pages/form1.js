import Page from "../components/Page";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";

import { FormHeader } from "../theme/FormHeader";
import { FormControl } from "../theme/FormControl";
import { StatefulCheckbox } from "../theme/Checkbox";
import { StatefulInput } from "../theme/Input";
import { StatefulTextarea } from "../theme/Textarea";
import { StatefulRadioGroup, Radio } from "../theme/Radio";
import { Button } from "../theme/Button";

import { Radio$ } from "storefront-ui/Radio";
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

export default () => {
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
                  active={0}
                  lastCompleted={0}
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
                  justify-content: space-between;
                `}
              >
                <div />
                <div>
                  <Button>Continue to shipping method</Button>
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
