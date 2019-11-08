/** @jsx jsx */

import React from "react";
import CheckoutLineItemRow$ from "@commerce-ui/core/CheckoutLineItemRow";
import { Grid, GridItem } from "@commerce-ui/core/Grid";
import { Image$ } from "@commerce-ui/core/Image";
import checkout from "@commerce-ui/data-mock/checkout";

import { css, jsx } from "@emotion/core";

export default () => {
  return (
    <div>
      <Grid gutter={20} gutterVertical={20}>
        {checkout.lineItems.map((item, index) => (
          <GridItem params={{ xs: 24 }} key={index}>
            <CheckoutLineItemRow$
              checkoutLineItem={item}
              layout={"full"}
              breakpoint={"lg"}
              mode={"wishlist"}
              onClick={() => console.log("click")}
              overrides={{
                Image: Image$
              }}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
