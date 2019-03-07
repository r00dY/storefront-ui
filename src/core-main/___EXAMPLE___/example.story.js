import React, { useRef } from "react";
import { storiesOf } from "@storybook/react";
import Container from "../Container/Container";
import { Grid, GridItem } from "../Grid/Grid";
import { rs, rslin, rssv } from "responsive-helpers";
import Layout from "../Layout";
import styled from "@emotion/styled";
import ProductThumbnails from "../ProductThumbnails/ProductThumbnails";
import ProductPhotos, {
    useProductPhotos
} from "../ProductPhotos/ProductPhotos";
import Image from "../Image/Image";
import ImageZoomable from "../Image/ImageZoomable";
import StickyInTwoDirections from "../StickyInTwoDirections/StickyInTwoDirections";

import S from "./spacings";
import photos from "./photos";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// Example sections!
import MenuBarCOS1 from "../../helpersCOS/MenuBarCOS/MenuBarCOS";
import {
    ProductMeta1,
    ProductMeta2
} from "../../helpers/ProductMeta/ProductMeta.story";

function Story() {
    const productPhotosRef = useRef(null);
    const { setActive, active } = useProductPhotos(productPhotosRef);

    return (
        <div>
            <MenuBarCOS1 />

            <div
                css={css`
                    ${rslin(S.m4, S.d5).css("margin-top")}
                `}
            >
                <Container>
                    <Grid>
                        <GridItem params={{ xs: 0, md: 1 }}>
                            <StickyInTwoDirections
                                css={css`
                                    height: 100%;
                                `}
                                offset={10}
                            >
                                <ProductThumbnails
                                    images={photos}
                                    mode={"vertical-autoheight"}
                                    itemSize={100}
                                    gutter={10}
                                    thumbnailComponent={(
                                        image,
                                        isActive,
                                        index
                                    ) => (
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
                            </StickyInTwoDirections>
                        </GridItem>
                        <GridItem params={{ xs: 24, md: 12 }}>
                            <ProductPhotos
                                ref={productPhotosRef}
                                images={photos}
                                mode={"grid"}
                                gridLayout={1}
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
                        <GridItem params={{ xs: 24, md: [10, 1] }}>
                            <StickyInTwoDirections
                                css={css`
                                    height: 100%;
                                `}
                                offset={30}
                            >
                                <ProductMeta1 />
                            </StickyInTwoDirections>
                        </GridItem>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

storiesOf("___EXAMPLE___", module).add("default", () => <Story />);
