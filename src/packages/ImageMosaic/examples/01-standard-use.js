import React from "react";

import { useImageMosaic } from "storefront-ui/ImageMosaic";
import { ImageMosaic } from "../../../../demo/theme/ImageMosaic";
import { Grid, GridItem } from "storefront-ui/Grid";
import Dots from "storefront-ui/Dots";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { productPhotos } from "../../../../data/images";

export default () => {
  let { ref, active, setActive } = useImageMosaic();

  return (
    <div>
      <p>Simplest grid</p>
      <ImageMosaic
        css={css`
          max-width: 300px;
        `}
        images={productPhotos}
        mode={"grid"}
      />

      <p>2 in a row (custom gutters)</p>
      <ImageMosaic
        css={css`
          max-width: 600px;
        `}
        images={productPhotos}
        layout={2}
        gutter={[3, 10]}
      />
      <p>With hook</p>
      <Grid colNumber={4} gutter={20}>
        <GridItem params={3}>
          <ImageMosaic ref={ref} images={productPhotos} mode={"grid"} />
        </GridItem>
        <GridItem params={1}>
          <div
            css={css`
              position: sticky;
              top: 20px;
            `}
          >
            Active: {active}
            <br />
            <Dots
              css={css`
                width: 40px;
              `}
              active={active}
              onClick={n => setActive(n)}
              amount={productPhotos.length}
              vertical={true}
            />
          </div>
        </GridItem>
      </Grid>

      {/*<p>Responsive</p>*/}
      {/*<ImageMosaic*/}
      {/*css={css`*/}
      {/*max-width: 600px;*/}
      {/*`}*/}
      {/*images={productPhotos}*/}
      {/*layout={{ xs: 1, lg: 2 }}*/}
      {/*gutter={10}*/}
      {/*/>*/}

      {/*<p>Custom image component (custom hover effect)</p>*/}
      {/*<ImageMosaic*/}
      {/*css={css`*/}
      {/*max-width: 600px;*/}
      {/*`}*/}
      {/*images={productPhotos}*/}
      {/*imageComponent={(image, active, index) => (*/}
      {/*<div*/}
      {/*css={css`*/}
      {/*overflow: hidden;*/}
      {/*`}*/}
      {/*>*/}
      {/*<div*/}
      {/*css={css`*/}
      {/*&:hover {*/}
      {/*transform: scale(1.1);*/}
      {/*}*/}

      {/*transition: transform 0.8s ${Ease.expoOut.css};*/}
      {/*`}*/}
      {/*>*/}
      {/*<Image image={image} />*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*)}*/}
      {/*layout={2}*/}
      {/*gutter={10}*/}
      {/*/>*/}
    </div>
  );
};
