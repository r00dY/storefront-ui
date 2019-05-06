// import {Image, Grid, GridItem} from "storefront-ui";
import React from "react";

import Image from "storefront-ui/Image";
import { Grid, GridItem } from "storefront-ui/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { catLandscape } from "../../../../data/images";

export default () => (
  <div>
    <p>natural mode (default)</p>

    <Image
      css={css`
        max-width: 800px;
      `}
      image={catLandscape}
    />

    <p>cover mode</p>
    <Image
      css={css`
        max-width: 800px;
        height: 800px; // remember to set height in CSS, will be 0 otherwise!
      `}
      image={catLandscape}
      mode={"cover"}
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
    />
  </div>
);
