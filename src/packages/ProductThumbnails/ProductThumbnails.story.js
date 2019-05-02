import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Container from "../Container/Container";
import Image from "../Image/Image";
import { rslin } from "responsive-helpers";
import { Grid, GridItem } from "../Grid/Grid";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ProductThumbnails from "./ProductThumbnails";

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

let manyProductPhotos = [...productPhotos, ...productPhotos, ...productPhotos];

function Story() {
    const [active, setActive] = useState(0);

    return (
        <Container>
            <h1>
                <code>ProductThumbnails</code>
            </h1>
            <h2>Horizontal</h2>

            <Grid>
                <GridItem params={{ xs: 12 }}>
                    <p>Active: {active}</p>
                    <ProductThumbnails
                        images={manyProductPhotos}
                        mode={"horizontal"}
                        itemSize={100}
                        gutter={10}
                        thumbnailComponent={(image, isActive, index) => (
                            <div
                                css={css`
                                    opacity: ${isActive ? 0.5 : 1};
                                `}
                            >
                                <Image
                                    images={image}
                                    load={true}
                                    mode={"natural"}
                                />
                            </div>
                        )}
                        active={active}
                        onClick={setActive}
                    />
                </GridItem>
            </Grid>
            <h2>Vertical</h2>

            <div
                css={css`
                    width: 100px;
                `}
            >
                <p>Active: {active}</p>
                <ProductThumbnails
                    images={manyProductPhotos}
                    mode={"vertical-autoheight"}
                    itemSize={100}
                    gutter={10}
                    thumbnailComponent={(image, isActive, index) => (
                        <div
                            css={css`
                                opacity: ${isActive ? 0.5 : 1};
                            `}
                        >
                            <Image
                                images={image}
                                load={true}
                                mode={"natural"}
                            />
                        </div>
                    )}
                    active={active}
                    onClick={setActive}
                />
            </div>
            <h2>Vertical (scrollable)</h2>

            <div
                css={css`
                    width: 100px;
                    height: 800px;
                `}
            >
                <p>Active: {active}</p>
                <ProductThumbnails
                    images={manyProductPhotos}
                    mode={"vertical"}
                    itemSize={100}
                    gutter={10}
                    thumbnailComponent={(image, isActive, index) => (
                        <div
                            css={css`
                                opacity: ${isActive ? 0.5 : 1};
                            `}
                        >
                            <Image
                                images={image}
                                load={true}
                                mode={"natural"}
                            />
                        </div>
                    )}
                    active={active}
                    onClick={setActive}
                />
            </div>
        </Container>
    );
}

storiesOf("ProductThumbnails", module).add("default", () => <Story />);
