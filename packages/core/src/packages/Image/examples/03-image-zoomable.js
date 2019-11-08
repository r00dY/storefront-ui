import React from "react";
import { ImageZoomable$, Image$ } from "@commerce-ui/core/Image";
import images from "@commerce-ui/data-mock/images";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ImageZoomable = props => (
  <ImageZoomable$ overrides={{ Image: Image$ }} {...props} />
);

export default () => (
  <div>
    <p>zoom 2 (default)</p>
    <ImageZoomable
      css={css`
        max-width: 800px;
      `}
      image={images["landscape1.jpg"]}
    />
    <p>zoom 4</p>
    <ImageZoomable
      css={css`
        max-width: 800px;
      `}
      image={images["landscape1.jpg"]}
      zoom={4}
    />
  </div>
);
