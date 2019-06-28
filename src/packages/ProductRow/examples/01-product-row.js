import React from "react";
import { ProductRow } from "../../../../demo/theme/ProductRow";
import { Grid, GridItem } from "storefront-ui/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import products from "../../../../docs-utils/products";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sizes = ["XS", "S", "M", "L"];

export default () => {
  return (
    <div>
      <Grid gutter={20} gutterVertical={20}>
        {products.map((product, index) => (
          <GridItem params={{ xs: 24 }} key={index}>
            <ProductRow
              name={product.name}
              description={product.description}
              price={product.price}
              discountPrice={product.discountPrice}
              images={product.images}
              quantity={getRandomInt(1, 9)}
              variant={sizes[getRandomInt(0, 3)]}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
