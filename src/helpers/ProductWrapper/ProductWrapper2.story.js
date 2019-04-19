import React from "react";
import { storiesOf } from "@storybook/react";
import ProductWrapper from "./ProductWrapper";
import {
    ColumnLayoutStory,
    ColumnLayoutStoryNike
} from "../../core/ColumnLayout/ColumnLayout.story";
import {
    EditorialBigImageStory,
    EditorialBigImageStoryNike,
    EditorialBigImageStoryNike2,
    EditorialBigImageStoryNike3
} from "../../core/Editorial/EditorialBigImage/EditorialBigImage.story";
import {
    EditorialTwoImagesStory,
    EditorialTwoImagesStory2,
    EditorialTwoImagesStory3,
    EditorialTwoImagesStory4
} from "../../core/Editorial/EditorialTwoImages/EditorialTwoImages.story";
import EditorialHalfImageStory from "../../core/Editorial/EditorialHalfImage/EditorialHalfImage.story";
import {
    AgileGridStory,
    AgileGridStoryNike
} from "../../core/AgileGrid/AgileGrid.story";
import FooterStory from "../../helpersCOS/Footer/Footer.story";
import MenuBarCOS1 from "../../helpersCOS/MenuBarCOS/MenuBarCOS.story";
import NotificationBarStory from "../NotificationBar/NotificationBar.story";
import {
    EditorialIntro1,
    EditorialIntro2
} from "../Editorial/EditorialIntro/EditorialIntro.story";
import EditorialThreeFourthStory from "../../core/Editorial/EditorialThreeFourth/EditorialThreeFourth.story";
import Unwrapper from "../Unwrapper/Unwrapper";
import FooterNikeStory from "../../helpersNike/FooterNike/FooterNike.story";
import MenuBarNikeStory from "../../helpersNike/MenuBarNike/MenuBarNike.story";

import { Container, Grid } from "../../core/Layout/Components";
import FixedWidthItemsContainer from "../../core/FixedWidthItemsContainer/FixedWidthItemsContainer";
import { rslin, rssv, rs, Layout } from "responsive-helpers";
import LazyAssetWrapper from "../../core/LazyAssetWrapper/LazyAssetWrapper";
import StickyInTwoDirections from "../../core/StickyInTwoDirections/StickyInTwoDirections";
import styled from "styled-components";

import SwipeableItemsContainer from "../../core-main/SwipeableItemsContainer/SwipeableItemsContainer";

import Modal from "../../core-main/Modal/Overlay";

import { RangeSet } from "responsive-helpers";

storiesOf("ProductWrapper", module).add("default", () => (
    <ProductWrapper>
        <Unwrapper componentName={"ProductWrapper"} storyName={"default"} />
        {NotificationBarStory}
        {MenuBarCOS1}
        {ColumnLayoutStory}
        {EditorialBigImageStory}
        {EditorialThreeFourthStory}
        {EditorialIntro1}
        {EditorialTwoImagesStory3}
        {EditorialTwoImagesStory}
        {EditorialTwoImagesStory2}
        {EditorialTwoImagesStory4}
        {EditorialHalfImageStory}
        {AgileGridStory}
        {FooterStory}
    </ProductWrapper>
));
storiesOf("ProductWrapper", module).add("nike", () => (
    <ProductWrapper>
        <Unwrapper componentName={"ProductWrapper"} storyName={"nike"} />
        {MenuBarNikeStory}
        {ColumnLayoutStoryNike}

        {EditorialBigImageStoryNike}

        {EditorialIntro2}

        {EditorialBigImageStoryNike2}
        {EditorialBigImageStoryNike3}

        {AgileGridStoryNike}
        {FooterNikeStory}
    </ProductWrapper>
));
// export default ProductWrapperStory;

const images = [
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_1.jpg",
        w: 1128,
        h: 1692,
        alt: "product_1"
    },
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_2.jpg",
        w: 1128,
        h: 1692,
        alt: "product_2"
    },
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_3.jpg",
        w: 1128,
        h: 1692,
        alt: "product_3"
    },
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_4.jpg",
        w: 1128,
        h: 1692,
        alt: "product_4"
    },
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_5.jpg",
        w: 1128,
        h: 1692,
        alt: "product_5"
    },
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_6.jpg",
        w: 1128,
        h: 1692,
        alt: "product_6"
    }
];

let gutter = rs({
    xs: 10,
    sm: 20,
    md: 20,
    lg: 30,
    xl: 30
});

const containerWithMargins = rs({
    xs: rssv("100vw").subtract(40),
    sm: rssv("100vw").subtract(80),
    md: "90vw",
    lg: "90vw",
    xl: 1700
});

const containerFluid = rs("100%");

const CONFIG0 = {
    topMargin: false,
    containerFluid: true,

    thumbnailsWidth: null,

    photos: {
        width: 12,
        offset: 1,

        // mode: "grid",
        // divide: 2,

        mode: "slider",
        aspectRatio: "80%"
        // is100vh: true
    },
    thumbnails: {
        mode: "column",
        width: 1,
        offset: 1

        // mode: "horizontal",
        // extraStyles: 'margin-top: 5px;',
        //
        // mode: "absolute-left",
        // extraStyles: "padding: 15px;"

        // mode: "absolute-right",
        // extraStyles: 'padding: 15px;',

        // mode: "absolute-bottom",
        // extraStyles: 'padding: 15px;'
    },
    overlay: {
        photos: {
            // mode: "slider",
            mode: "grid",
            divide: 1
        },
        thumbnails: {
            mode: "column",
            width: 1,
            offset: 1,
            onRight: false

            // mode: "bottom",
            // margin: "5px"

            // mode: "absolute-bottom",
            // margin: "20px",
            //
            // mode: "absolute-left",
            // margin: "20px",

            // mode: "absolute-right",
            // margin: "20px",
        }
    }
};

const CONFIG = CONFIG0;

CONFIG.photos.offset = CONFIG.photos.offset || 0;
CONFIG.thumbnails = CONFIG.thumbnails || {};
CONFIG.thumbnails.width = CONFIG.thumbnails.width || 0;
CONFIG.thumbnails.offset = CONFIG.thumbnails.offset || 0;
CONFIG.thumbnails.margin = CONFIG.thumbnails.margin || 0;
CONFIG.detailsWidth =
    24 -
    CONFIG.photos.width -
    CONFIG.photos.offset -
    CONFIG.thumbnails.width -
    CONFIG.thumbnails.offset;

CONFIG.layout = {
    container: CONFIG.containerFluid ? containerFluid : containerWithMargins,
    gutter: gutter,
    colNumber: 24
};

CONFIG.overlay.layout = {
    container: containerFluid,
    gutter: gutter,
    colNumber: 24
};

const manyImages = [...images, ...images];

const ThumbsVerticalAutoheightItem = styled.div`
    &:not(:last-child) {
        ${props => rs(props.gutter).css("margin-bottom")}
    }
`;

class Thumbs extends React.Component {
    constructor(props) {
        super(props);

        this.swiperRef = React.createRef();
    }

    // componentDidUpdate(prevProps) {
    //     //     if (prevProps.active !== this.props.active) {
    //     //         // TODO: goto logic. Must be tricky because: (1) scrollable container must have this implemented, (2) snap position must be so that items are always centered as much as possible
    //     //     }
    //     // }

    render() {
        let items = this.props.images.map((image, index) => (
            <div style={{ cursor: "pointer" }}>
                {this.props.thumbnail(
                    image,
                    this.props.active === index,
                    index
                )}
            </div>
        ));

        if (this.props.mode === "vertical-autoheight") {
            return (
                <div>
                    {items.map((item, index) => (
                        <ThumbsVerticalAutoheightItem
                            gutter={this.props.spacer}
                        >
                            {item}
                        </ThumbsVerticalAutoheightItem>
                    ))}
                </div>
            );
        }

        return (
            <SwipeableItemsContainer
                ref={this.swiperRef}
                items={items}
                mode={this.props.mode}
                gutter={this.props.spacer}
                itemsInRow={this.props.itemsInRow}
                itemSize={this.props.itemSize}
                swiper={true}
            />
        );
    }
}

class Photos extends React.Component {
    constructor(props) {
        super(props);

        this.swiperRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        // if (prevProps.active !== this.props.active) {
        // TODO: goto logic. Must be tricky because: (1) scrollable container must have this implemented, (2) snap position must be so that items are always centered as much as possible
        // }
    }

    render() {
        let items = this.props.images.map((image, index) =>
            this.props.photo(image, this.props.active === index, index)
        );

        if (this.props.mode === "grid") {
            return (
                <FixedWidthItemsContainer
                    items={items}
                    config={{
                        mode: "grid",
                        itemsInRow: this.props.itemsInRow,
                        gutter: this.props.spacer
                    }}
                />
            );
        }

        return (
            <SwipeableItemsContainer
                ref={this.swiperRef}
                items={items}
                mode={this.props.mode}
                gutter={this.props.spacer}
                itemsInRow={1}
                swiper={true}
                onActiveChange={this.props.onActiveChange}
            />
        );
    }
}

// const ThumbsContainer = styled.div`
//
// `;

function Thumbnails(props) {
    // MODE
    // --
    // absolute-top (width: 100%, height: __)
    // absolute-bottom (width: 100%, height: ___)
    // absolute-left (width: ___, height: 100%)
    // absolute-right (width: ___, height: 100%)
    // vertical
    // horizontal (width: 100%, height: ___)

    // horizontal modes (no height, just itemsInRow)
    // vertical modes (width)

    let ThumbsContainer;
    let thumbsSliderMode;

    let itemsInRow = props.itemsInRow || 10;

    if (props.mode === "absolute-bottom" || props.mode === "absolute-top") {
        ThumbsContainer = styled.div`
            position: absolute;
            left: 0;
            ${props.mode === "absolute-top" ? "top" : "bottom"}: 0;
            width: 100%;
            ${props.extraStyles}
        `;
        thumbsSliderMode = "slider-transform";
    } else if (
        props.mode === "absolute-left" ||
        props.mode === "absolute-right"
    ) {
        ThumbsContainer = styled.div`
            position: absolute;
            ${props.mode === "absolute-left" ? "left" : "right"}: 0;
            top: 0;
            height: 100%;
            width: ${props.width ? props.width : "100px"};
        `;
        thumbsSliderMode = "slider-vertical";
    } else if (props.mode === "horizontal") {
        ThumbsContainer = styled.div`
            position: relative;
            width: 100%;
        `;
        thumbsSliderMode = "slider-transform";
    } else if (props.mode === "vertical") {
        ThumbsContainer = styled.div`
            position: relative;
            width: ${props.width ? props.width : "100px"};
            height: ${props.height ? props.height : "auto"};
        `;
        thumbsSliderMode = "slider-vertical";
    }

    ThumbsContainer = styled(ThumbsContainer)`
        ${props.extraStyles}
    `;

    return (
        <ThumbsContainer>
            <FixedWidthItemsContainer
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%"
                }}
                items={manyImages.map((image, index) => (
                    <div
                        style={{
                            cursor: "pointer"
                        }}
                    >
                        <LazyAssetWrapper
                            mode={"natural"}
                            crop={"natural"}
                            sizes={`250px`}
                            key={index}
                            image={image}
                            style={{
                                width: "100%"
                            }}
                        />
                    </div>
                ))}
                config={{
                    mode: thumbsSliderMode,
                    itemsInRow: itemsInRow,
                    gutter: 5
                }}
            />
        </ThumbsContainer>
    );
}

let ImageWrapper = styled.div`
    position: relative;
    padding-bottom: 80%;
    cursor: pointer;
    background-color: #eaeaea;
`;

let Wrapper = styled.div`
    position: relative;
    width: 40%;
`;

storiesOf("ProductWrapper", module).add("new components 2", () => (
    <div
        style={{
            marginTop: CONFIG.topMargin ? "100px" : "0px",
            marginBottom: "1000px",
            width: "100%",
            overflowX: "hidden"
        }}
    >
        {React.createElement(
            class extends React.Component {
                constructor(props) {
                    super(props);

                    this.state = {
                        overlayOpened: false,
                        activePhoto: 0
                    };
                }

                render() {
                    /**
                     *
                     * Photos mode
                     *
                     */

                    return (
                        <Wrapper>
                            <Photos
                                images={manyImages}
                                mode={"horizontal"}
                                itemsInRow={CONFIG.photos.divide}
                                spacer={5}
                                active={0}
                                onActiveChange={n => {
                                    console.log("new active", n);
                                    this.setState({ activePhoto: n });
                                }}
                                photo={(image, isActive, index) => (
                                    <ImageWrapper>
                                        <LazyAssetWrapper
                                            mode={"contain"}
                                            crop={"natural"}
                                            sizes={`450px`}
                                            key={index}
                                            image={image}
                                            style={{
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",
                                                top: 0,
                                                left: 0
                                            }}
                                        />
                                    </ImageWrapper>
                                )}
                            />
                            <h1>{this.state.activePhoto}</h1>
                        </Wrapper>
                    );
                }
            }
        )}
    </div>
));
// export default ProductWrapperStory;
