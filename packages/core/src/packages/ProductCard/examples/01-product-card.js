import React from "react";
import { ProductCard } from "../../../../../../demo/components/ProductCard";
import { Grid, GridItem } from "@commerce-ui/core/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import products from "../../../../data/products";

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
            <ProductCard
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
