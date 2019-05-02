import React from "react";
import { ImageZoomable } from "storefront-ui/Image";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { catPortrait} from "../../../../data/images";

export default () => (
    <div>
        <p>zoom 2 (default)</p>
        <ImageZoomable
            css={css`
                max-width: 800px;
            `}
            image={catPortrait}
        />
        <p>zoom 4</p>
        <ImageZoomable
            css={css`
                max-width: 800px;
            `}
            image={catPortrait}
            zoom={4}
        />
    </div>
);
