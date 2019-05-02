import React from "react";
import { ProductPhotos } from "storefront-ui";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { productPhotos } from "../../../../data/images";

export default () => (
  <div>
    <p>Simplest gallery (swipe with mouse or finger on touch devices)</p>
    <ProductPhotos
      css={css`
        max-width: 300px;
      `}
      images={productPhotos}
      mode={"slider"}
    />
  </div>
);
