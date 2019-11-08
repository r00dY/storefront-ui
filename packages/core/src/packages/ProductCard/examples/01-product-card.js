import React from "react";
import ProductCard$ from "@commerce-ui/core/ProductCard";
import { Grid, GridItem } from "@commerce-ui/core/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import products from "@commerce-ui/data-mock/products";

import { Image$ } from "@commerce-ui/core/Image";

export default () => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <Grid gutter={20} gutterVertical={20}>
        {products.map((product, index) => (
          <GridItem params={{ xs: 12, md: 12, lg: 12 }} key={index}>
            <ProductCard$
              product={product}
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
