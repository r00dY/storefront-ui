import React from "react";
import { ProductRowTheme1 } from "../../../../demo/theme/ProductRow";
import { Grid, GridItem } from "storefront-ui/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import products from "../../../../docs-utils/products";

export default () => {
  return (
    <div>
      <Grid gutter={20} gutterVertical={20}>
        {products.map((product, index) => (
          <GridItem params={{ xs: 24, md: [24], lg: [24] }} key={index}>
            <ProductRowTheme1
              name={product.name}
              description={product.description}
              price={product.price}
              discountPrice={product.discountPrice}
              images={product.images}
              quantity={product.quantity}
              variant={product.variant}
              mode={"compact"}
            />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};
