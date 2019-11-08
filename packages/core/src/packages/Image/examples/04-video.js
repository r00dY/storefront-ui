import React from "react";
import { Image$ } from "@commerce-ui/core/Image";
import { Grid, GridItem } from "@commerce-ui/core/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const hulaHop = {
  type: "video",
  src: [
    {
      url: "/static/videos/hugo_cos.mp4",
      w: 1280,
      h: 720,
      type: "video/mp4"
    }
  ],
  alt: "Hula hop ALEŻ KRĘCI"
};

export default () => (
  <div>
    <p>natural mode (default)</p>

    <Image$
      css={css`
        max-width: 800px;
      `}
      image={hulaHop}
    />

    <p>cover mode</p>
    <Image$
      css={css`
        max-width: 800px;
        height: 800px; // remember to set height in CSS, will be 0 otherwise!
      `}
      image={hulaHop}
      mode={"cover"}
    />

    <p>contain mode</p>
    <Image$
      css={css`
        max-width: 800px;
        height: 800px; // remember to set height in CSS, will be 0 otherwise!
        border: 1px solid lightgrey; // added border to show contain mode
      `}
      image={hulaHop}
      mode={"contain"}
    />

    <p>contain mode with backgroundPosition (same as in CSS)</p>
    <Image$
      css={css`
        max-width: 800px;
        height: 800px; // remember to set height in CSS, will be 0 otherwise!
        border: 1px solid lightgrey; // added border to show contain mode
      `}
      image={hulaHop}
      mode={"contain"}
      backgroundPosition={"left top"}
    />
  </div>
);
