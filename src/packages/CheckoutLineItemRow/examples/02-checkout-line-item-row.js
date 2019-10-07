import React from "react";
import { CheckoutLineItemRowTheme1 } from "../../../../demo/components/CheckoutLineItemRow";
import { Grid, GridItem } from "storefront-ui/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import products from "../../../../data/products";
import checkout from "../../../../data/checkout";

export default () => {
  return (
    <div>
      <Grid gutter={20} gutterVertical={20}>
        {checkout.lineItems.map((item, index) => (
          <GridItem params={{ xs: 24, md: [24], lg: [24] }} key={index}>
            <CheckoutLineItemRowTheme1
              checkoutLineItem={item}
              layout={"full"}
              breakpoint={"lg"}
              mode={"wishlist"}
              onClick={() => console.log("click")}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
