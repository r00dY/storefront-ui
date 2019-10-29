// import {Image, Grid, GridItem} from "storefront-ui";
import React from "react";

import { Image } from "../../../../../../demo/components/Image";
import { Grid, GridItem } from "@commerce-ui/core/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { catLandscape } from "../../../../data/images";

export default () => (
  <div>
    <p>
      <code>loadWhenInViewport=false</code>
    </p>

    <Image
      css={css`
        max-width: 800px;
      `}
      image={catLandscape}
    />

    <p>natural mode (default)</p>

    <Image
      css={css`
        max-width: 800px;
      `}
      image={catLandscape}
      load={false}
      loadWhenInViewport={true}
    />

    <p>cover mode</p>
    <Image
      css={css`
        max-width: 800px;
        height: 800px; // remember to set height in CSS, will be 0 otherwise!
      `}
      image={catLandscape}
      mode={"cover"}
      load={false}
      loadWhenInViewport={true}
    />

    <p>contain mode</p>
    <Image
      css={css`
        max-width: 800px;
        height: 800px; // remember to set height in CSS, will be 0 otherwise!
        border: 1px solid lightgrey; // added border to show contain mode
      `}
      image={catLandscape}
      mode={"contain"}
      load={false}
      loadWhenInViewport={true}
    />

    <p>contain mode with backgroundPosition (same as in CSS)</p>
    <Image
      css={css`
        max-width: 800px;
        height: 800px; // remember to set height in CSS, will be 0 otherwise!
        border: 1px solid lightgrey; // added border to show contain mode
      `}
      image={catLandscape}
      mode={"contain"}
      backgroundPosition={"left top"}
      load={false}
      loadWhenInViewport={true}
    />
  </div>
);
