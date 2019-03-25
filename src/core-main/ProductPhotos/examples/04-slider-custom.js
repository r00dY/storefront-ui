import React from "react";
import { ProductPhotos, Image } from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {productPhotos} from "../../../../data/images";

export default () => (
    <div>
        <p>Gallery with custom image component (contain mode) in an fixed aspect ratio container.</p>
        <div css={css`
                position: relative;
                max-width: 600px;
                padding-bottom: 65%;
                border: 1px solid lightgrey;
            `}>

            <ProductPhotos
                css={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                `}
                images={productPhotos}
                mode={"slider"}
                imageComponent={(image) => <Image css={css`
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    `} mode={"contain"} image={image} />}
            />

        </div>
    </div>
);
