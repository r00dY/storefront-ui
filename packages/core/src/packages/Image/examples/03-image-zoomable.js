import React from "react";
import { ImageZoomable } from "../../../../demo/components/Image";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { catImage } from "../../../../data/images";

export default () => (
  <div>
    <p>zoom 2 (default)</p>
    <ImageZoomable
      css={css`
        max-width: 800px;
      `}
      image={catImage}
    />
    <p>zoom 4</p>
    <ImageZoomable
      css={css`
        max-width: 800px;
      `}
      image={catImage}
      zoom={4}
    />
  </div>
);
