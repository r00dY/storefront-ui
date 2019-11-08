import React from "react";

import { useImageMosaic, ImageMosaic$ } from "@commerce-ui/core/ImageMosaic";
import { Image$ } from "@commerce-ui/core/Image";
import { Grid, GridItem } from "@commerce-ui/core/Grid";
import Dots from "@commerce-ui/core/Dots";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import images from "@commerce-ui/data-mock/images";

export const ImageMosaic = React.forwardRef((props, ref) => (
  <ImageMosaic$
    imageComponent={image => <Image$ image={image} />}
    {...props}
    ref={ref}
  />
));

let productImages = [
  images["Airless_Bottle_Mockup_1.jpg"],
  images["Amber_Mist_Bottle_Mockup_1.jpg"],
  images["Amber_Winchester_Bottle_Mockup_150ml_1-1.jpg"],
  images["Baby_Oil_Bottle_Mockup_Orange_1.jpg"],
  images["Baby_Oil_Bottle_Mockup_blue_1.jpg"],
  images["Boston_Bottle_Mockup_50ml_1-1.jpg"],
  images["Bottle_with_Handle_Mockup_Dark_1.jpg"],
  images["Bottle_with_Handle_Mockup_Light_1.jpg"]
];

export default () => {
  let { ref, active, setActive } = useImageMosaic();

  return (
    <div>
      <p>Simplest grid</p>
      <ImageMosaic
        css={css`
          max-width: 300px;
        `}
        images={productImages}
        mode={"grid"}
      />

      <p>2 in a row (custom gutters)</p>
      <ImageMosaic
        css={css`
          max-width: 600px;
        `}
        images={productImages}
        layout={2}
        gutter={[3, 10]}
      />
      <p>With hook</p>
      <Grid colNumber={4} gutter={20}>
        <GridItem params={3}>
          <ImageMosaic ref={ref} images={productImages} mode={"grid"} />
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
              amount={productImages.length}
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
      {/*images={productImages}*/}
      {/*layout={{ xs: 1, lg: 2 }}*/}
      {/*gutter={10}*/}
      {/*/>*/}

      {/*<p>Custom image component (custom hover effect)</p>*/}
      {/*<ImageMosaic*/}
      {/*css={css`*/}
      {/*max-width: 600px;*/}
      {/*`}*/}
      {/*images={productImages}*/}
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
