import React, { useRef } from "react";
import { storiesOf } from "@storybook/react";
import Index from "../Container/Container";
import ProductPhotos, { useProductPhotos } from "./ProductPhotos";
import Image from "../Image/Image";
import ImageZoomable from "../Image/ImageZoomable";
import { rslin } from "responsive-helpers";
import { Grid, GridItem } from "../Grid/Grid";
import Index from "../Dots/Dots";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const productPhotos = [
    [
        {
            url: "/static/COS/product/product_1.jpg",
            w: 1128,
            h: 1692
        }
    ],
    [
        {
            url: "/static/COS/product/product_2.jpg",
            w: 1128,
            h: 1692
        }
    ],
    [
        {
            url: "/static/COS/product/product_3.jpg",
            w: 1128,
            h: 1692
        }
    ],
    [
        {
            url: "/static/COS/product/product_4.jpg",
            w: 1128,
            h: 1692
        }
    ],
    [
        {
            url: "/static/COS/product/product_5.jpg",
            w: 1128,
            h: 1692
        }
    ],
    [
        {
            url: "/static/COS/product/product_6.jpg",
            w: 1128,
            h: 1692
        }
    ]
];

function StoryGrid() {
    const productPhotosRef = useRef(null);
    const { setActive, active } = useProductPhotos(productPhotosRef);

    return (
        <Index>
            <h1>
                <code>ProductPhotos</code>
            </h1>
            <p>
                <code>ProductPhotos</code> is responsible for showing product
                photos and managing active state and coordination between
                thumbnails, arrows controllers etc.
            </p>
            <p>
                It might be used in product page, product zoom overlay, product
                quick look overlay etc.
            </p>
            <h2>Standard grid mode</h2>

            <Grid>
                <GridItem params={{ xs: 12 }}>
                    <ProductPhotos
                        ref={productPhotosRef}
                        images={productPhotos}
                        mode={"grid"}
                        gridLayout={2}
                        imageComponent={(image, isActive, index) => (
                            <ImageZoomable
                                images={image}
                                load={true}
                                mode={"natural"}
                            />
                        )}
                        gutter={5}
                    />
                </GridItem>

                <GridItem params={{ xs: 1 }}>
                    <div
                        css={css`
                            position: sticky;
                            height: calc(100vh - 20px);
                            top: 10px;
                        `}
                    >
                        <Index
                            active={active}
                            onClick={setActive}
                            amount={productPhotos.length}
                            vertical={true}
                        />
                    </div>
                </GridItem>
            </Grid>
        </Index>
    );
}

function StorySlider() {
    const productPhotosRef = useRef(null);
    const { setActive, active } = useProductPhotos(productPhotosRef);

    return (
        <Index>
            <h1>
                <code>ProductPhotos</code> in a slider mode
            </h1>

            <Grid>
                <GridItem params={{ xs: 12 }}>
                    <ProductPhotos
                        ref={productPhotosRef}
                        images={productPhotos}
                        mode={"slider"}
                        imageComponent={(image, isActive, index) => (
                            <div
                                css={css`
                                    position: relative;
                                    padding-bottom: 80%;
                                `}
                            >
                                <div
                                    css={css`
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                        width: 100%;
                                        height: 100%;
                                        background-color: #eaeaea;
                                    `}
                                >
                                    <Image
                                        css={css`
                                            height: 100%;
                                        `}
                                        mode={"contain"}
                                        images={image}
                                        load={true}
                                    />
                                </div>
                            </div>
                        )}
                        gutter={10}
                    />

                    <Index
                        active={active}
                        onClick={n => {
                            setActive(n, false);
                        }}
                        amount={productPhotos.length}
                    />
                </GridItem>
            </Grid>
        </Index>
    );
}

storiesOf("ProductPhotos", module).add("grid mode", () => <StoryGrid />);
storiesOf("ProductPhotos", module).add("slider mode", () => <StorySlider />);
