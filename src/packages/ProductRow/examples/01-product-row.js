import React from "react";
import { ProductRow } from "../../../../demo/theme/ProductRow";
import { Grid, GridItem } from "storefront-ui/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import products from "../../../../data/products";
import checkout from "../../../../data/checkout";

console.log(checkout);

export default () => {
  return (
    <div>
      <Grid gutter={20} gutterVertical={20}>
        {products.map((product, index) => (
          <GridItem params={{ xs: 24 }} key={index}>
            <ProductRow
              product={product}
              price={product.price}
              quantity={"1"}
              onClick={() => console.log("click")}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
