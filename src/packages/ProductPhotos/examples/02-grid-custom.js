import React from "react";
import { ProductPhotos, Image, Ease } from "storefront-ui";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { productPhotos } from "../../../../data/images";

export default () => (
  <div>
    <p>Standard image + custom hover effect + onClick action</p>
    <ProductPhotos
      css={css`
        max-width: 600px;
      `}
      images={productPhotos}
      mode={"grid"}
      gridLayout={2}
      gutter={2}
      imageComponent={(image, isActive, index) => (
        <div
          css={css`
            overflow: hidden;
            cursor: pointer;
          `}
          onClick={() => {
            console.log("you clicked on image number " + index);
          }}
        >
          <Image
            css={css`
              &:hover {
                transform: scale(1.1);
              }
              transition: transform 1s ${Ease.expoOut.css};
            `}
            image={image}
          />
        </div>
      )}
    />
  </div>
);
