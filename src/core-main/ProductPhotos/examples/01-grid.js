import React from "react";
import { ProductPhotos } from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {productPhotos} from "../../../../data/images";

export default () => (
    <div>
        <p>Simplest grid</p>
        <ProductPhotos
            css={css`
                max-width: 300px;
            `}
            images={productPhotos}
            mode={"grid"}
        />

        <p>2 in a row (custom gutters)</p>
        <ProductPhotos
            css={css`
                max-width: 600px;
            `}
            images={productPhotos}
            mode={"grid"}
            gridLayout={2}
            gutter={[3, 10]}
        />
    </div>
);
