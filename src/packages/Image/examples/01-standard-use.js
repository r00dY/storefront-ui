// import {Image, Grid, GridItem} from "storefront-ui";
import React from "react";

import { Image } from "../../../../demo/components/Image";
import { Grid, GridItem } from "@commerce-ui/core/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { catImage } from "../../../../data/images";

console.log(catImage);
export default () => (
  <div>
    <div
      css={css`
        max-width: 800px;
      `}
    >
      <p>
        Standard, variant <code>natural</code>
      </p>

      <Image image={catImage} />

      <p>Alternative variant</p>

      <Image image={catImage} variant={"portrait"} />

      <p>Responsive variant</p>

      <Image
        image={catImage}
        _responsiveProps={{
          xs: {
            variant: "portrait"
          },
          lg: {
            variant: "natural"
          }
        }}
      />

      {/*<p>*/}
      {/*<code>loadWhenInViewport=false</code>*/}
      {/*</p>*/}

      {/*<Image*/}
      {/*image={catImage}*/}
      {/*/>*/}

      {/*<p>natural mode (default)</p>*/}

      {/*<Image*/}
      {/*image={catImage}*/}
      {/*load={false}*/}
      {/*loadWhenInViewport={true}*/}
      {/*/>*/}

      {/*<p>cover mode</p>*/}
      {/*<Image*/}
      {/*css={css`*/}
      {/*height: 800px; // remember to set height in CSS, will be 0 otherwise!*/}
      {/*`}*/}
      {/*image={catImage}*/}
      {/*mode={"cover"}*/}
      {/*load={false}*/}
      {/*loadWhenInViewport={true}*/}
      {/*/>*/}

      {/*<p>contain mode</p>*/}
      {/*<Image*/}
      {/*css={css`*/}
      {/*height: 800px; // remember to set height in CSS, will be 0 otherwise!*/}
      {/*border: 1px solid lightgrey; // added border to show contain mode*/}
      {/*`}*/}
      {/*image={catImage}*/}
      {/*mode={"contain"}*/}
      {/*load={false}*/}
      {/*loadWhenInViewport={true}*/}
      {/*/>*/}

      {/*<p>contain mode with backgroundPosition (same as in CSS)</p>*/}
      {/*<Image*/}
      {/*css={css`*/}
      {/*height: 800px; // remember to set height in CSS, will be 0 otherwise!*/}
      {/*border: 1px solid lightgrey; // added border to show contain mode*/}
      {/*`}*/}
      {/*image={catImage}*/}
      {/*mode={"contain"}*/}
      {/*backgroundPosition={"left top"}*/}
      {/*load={false}*/}
      {/*loadWhenInViewport={true}*/}
      {/*/>*/}
    </div>
  </div>
);
