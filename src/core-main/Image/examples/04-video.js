import {Image, Grid, GridItem} from "storefront-ui";
import React from "react";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import {hulaHop} from "../../../../data/videos";

export default () => (
    <div>
        <p>natural mode (default)</p>

        <Image
            css={css`
                max-width: 800px;
            `}
            video={hulaHop}
        />

        <p>cover mode</p>
        <Image
            css={css`
                max-width: 800px;
                height: 800px; // remember to set height in CSS, will be 0 otherwise!
            `}
            video={hulaHop}
            mode={"cover"}
        />

        <p>contain mode</p>
        <Image
            css={css`
                max-width: 800px;
                height: 800px; // remember to set height in CSS, will be 0 otherwise!
                border: 1px solid lightgrey; // added border to show contain mode
            `}
            video={hulaHop}
            mode={"contain"}
        />

        <p>contain mode with backgroundPosition (same as in CSS)</p>
        <Image
            css={css`
                max-width: 800px;
                height: 800px; // remember to set height in CSS, will be 0 otherwise!
                border: 1px solid lightgrey; // added border to show contain mode
            `}
            video={hulaHop}
            mode={"contain"}
            backgroundPosition={"left top"}
        />
    </div>
);
