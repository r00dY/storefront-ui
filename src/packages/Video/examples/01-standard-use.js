import React from "react";
import { Video$ } from "@commerce-ui/core/Video";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { hulaHop } from "../../../../data/videos";
import { catImage } from "../../../../data/images";

export default () => (
  <div>
    <p>standard mode (default)</p>

    <Video$ src={hulaHop} />
    <p>height / width set by CSS, objectFit by default cover</p>

    <Video$
      src={hulaHop}
      css={css`
        height: 800px;
      `}
    />

    <p>contain</p>

    <Video$
      src={hulaHop}
      css={css`
        height: 800px;
        border: 1px solid lightgrey;
      `}
      objectFit={"contain"}
    />

    <p>contain, objectPosition</p>

    <Video$
      src={hulaHop}
      css={css`
        height: 800px;
        border: 1px solid lightgrey;
      `}
      objectFit={"contain"}
      objectPosition={"top right"}
    />

    <p>responsive modes</p>

    <Video$
      src={hulaHop}
      css={css`
        height: 800px;
        border: 1px solid lightgrey;
      `}
      _responsiveProps={{
        xs: {
          objectFit: "cover",
          objectPosition: "bottom left"
        },
        lg: {
          objectFit: "contain",
          objectPosition: "top right"
        }
      }}
    />

    <p>
      poster image (will take closest width and will show up if autoplay is not
      supported by browser)
    </p>

    <Video$
      src={hulaHop}
      poster={{
        image: catImage,
        variant: "natural",
        w: 777 // will take closest width
      }}
    />
  </div>
);
