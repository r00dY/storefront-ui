import React from "react";
import { CheckoutLineItemRow } from "../../../../demo/components/CheckoutLineItemRow";
import { Grid, GridItem } from "storefront-ui/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import products from "../../../../data/products";
import checkout from "../../../../data/checkout";

// console.log(products);
console.log(checkout);

export default () => {
  return (
    <div>
      <Grid gutter={20} gutterVertical={20}>
        {checkout.lineItems.map((item, index) => (
          <GridItem params={{ xs: 24 }} key={index}>
            <CheckoutLineItemRow
              checkoutLineItem={item}
              onClick={() => console.log("click")}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
