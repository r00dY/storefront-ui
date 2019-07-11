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
import { ButtonGroup } from "../theme/ButtonGroup";
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

export default () => {
  const theme = useTheme();
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
              <GridItem>ProgressSteps</GridItem>
              <GridItem>
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
              <GridItem>
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
          </GridItem>
          <GridItem params={{ xs: 24, md: [8] }}>Your Bag</GridItem>
        </Grid>
      </Container>
    </Page>
  );
};
