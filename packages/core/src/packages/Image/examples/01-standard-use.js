// import {Image, Grid, GridItem} from "storefront-ui";
import React from "react";

import { Image } from "../../../../demo/components/Image";
import { Grid, GridItem } from "@commerce-ui/core/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { catImage } from "../../../../data/images";

const imgBorderStyles = `
            height: 800px; // remember to set height in CSS, will be 0 otherwise!
            border: 1px solid lightgrey; // added border to show contain mode
            `;

export default () => (
  <div>
    <div
      css={css`
        max-width: 800px;
      `}
    >
      <h2>Variants and modes</h2>

      <p>
        Standard, variant <code>natural</code>
      </p>

      <Image image={catImage} />

      <p>
        Alternative variant <code>portrait</code>
      </p>

      <Image image={catImage} variant={"portrait"} />

      <p>
        CSS sized <code>Image</code> (<code>cover</code> by default)
      </p>
      <Image
        css={css`
          ${imgBorderStyles}
        `}
        image={catImage}
      />
      <br />

      <Image
        css={css`
          ${imgBorderStyles} height: 100px;
        `}
        image={catImage}
      />

      <p>contain mode</p>
      <Image
        css={css`
          ${imgBorderStyles}
        `}
        image={catImage}
        objectFit={"contain"}
      />

      <p>contain mode with objectPosition (same as in CSS)</p>
      <Image
        css={css`
          ${imgBorderStyles}
        `}
        image={catImage}
        objectFit={"contain"}
        objectPosition={"left top"}
      />

      <p>Responsive variant (portrait for xs, natural for lg)</p>

      <Image
        image={catImage}
        _responsiveProps={{
          xs: {
            variant: "portrait"
          },
          md: {
            variant: "natural"
          }
        }}
      />

      <p>Responsive variant, mode and objectPosition</p>

      <Image
        css={css`
          ${imgBorderStyles}
        `}
        image={catImage}
        _responsiveProps={{
          xs: {
            objectFit: "contain",
            objectPosition: "top"
          },
          md: {
            objectFit: "cover",
            objectPosition: "right"
          }
        }}
      />

      <p>Add some div on image</p>

      <Image image={catImage}>
        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 0, 0, 0.5);
          `}
        />
      </Image>

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

      {/*<p>contain mode with objectPosition (same as in CSS)</p>*/}
      {/*<Image*/}
      {/*css={css`*/}
      {/*height: 800px; // remember to set height in CSS, will be 0 otherwise!*/}
      {/*border: 1px solid lightgrey; // added border to show contain mode*/}
      {/*`}*/}
      {/*image={catImage}*/}
      {/*mode={"contain"}*/}
      {/*objectPosition={"left top"}*/}
      {/*load={false}*/}
      {/*loadWhenInViewport={true}*/}
      {/*/>*/}
    </div>
  </div>
);
