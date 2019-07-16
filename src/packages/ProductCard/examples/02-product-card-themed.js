import React from "react";
import {
  ProductCard,
  ProductCardTheme1
} from "../../../../demo/theme/ProductCard";
import { Grid, GridItem } from "storefront-ui/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import products from "../../../../docs-utils/products";

export default () => {
  return (
    <div>
      <Grid gutter={20} gutterVertical={20}>
        {products.map((product, index) => (
          <GridItem params={{ xs: 12, md: 12, lg: 12 }} key={index}>
            <ProductCardTheme1
              product={product}
              onClick={() => console.log("click")}
              onSaveToFavourites={() => console.log("fav click")}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
