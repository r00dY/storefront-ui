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

import { Container, Grid, GridItem } from "../../core/Layout/Components";
import FixedWidthItemsContainer from "../../core/FixedWidthItemsContainer/FixedWidthItemsContainer";
import { rslin, rssv, rs, Layout } from "responsive-helpers";
import LazyAssetWrapper from "../../core/LazyAssetWrapper/LazyAssetWrapper";
import LazyAssetWrapperZoomable from "../../core/LazyAssetWrapper/LazyAssetWrapperZoomable";
import StickyInTwoDirections from "../../core/StickyInTwoDirections/StickyInTwoDirections";

import MenuBarCOS from "../../helpersCOS/MenuBarCOS/MenuBarCOS";

import VisibilitySensor from "react-visibility-sensor";
// import styled from "styled-components";

import SwipeableItemsContainer from "../../core-main/SwipeableItemsContainer/SwipeableItemsContainer";

import {
    ProductMeta1,
    ProductMeta2
} from "../../helpers/ProductMeta/ProductMeta.story";

import Modal from "../../core-main/Modal/Overlay";

import MediaQuery from "react-responsive";

import { RangeSet } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

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
        url:
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
    topMargin: true,
    containerFluid: false,

    thumbnailsWidth: null,

    photos: {
        width: 12,
        offset: 1,

        // mode: "grid",
        // divide: 1

        mode: "slider",
        aspectRatio: "65%",
        is100vh: false
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
        this.onActiveChange = this.onActiveChange.bind(this);
    }

    onActiveChange(n) {
        if (this.props.onActiveChange) {
            this.props.onActiveChange(n);
        }
    }

    render() {
        let items = this.props.images.map((image, index) => (
            <div onClick={() => this.onActiveChange(index)}>
                {this.props.thumbnail(
                    image,
                    this.props.active === index,
                    index
                )}
            </div>
        ));

        if (this.props.mode === "vertical-autoheight") {
            return (
                <div style={{ position: "relative" }}>
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

const ThumbStyledWrapper = styled.div`
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    ${props => `opacity: ${props.isActive ? 0.5 : 1};`}
    &:hover {
        opacity: 0.5;
    }
`;

const Thumb = props => (
    <ThumbStyledWrapper {...props}>
        <LazyAssetWrapper
            mode={"natural"}
            crop={"natural"}
            sizes={`250px`}
            key={props.index}
            image={props.image}
            style={{
                width: "100%",
                height: "100%"
            }}
        />
    </ThumbStyledWrapper>
);

class Photos extends React.Component {
    constructor(props) {
        super(props);

        this.swiperRef = React.createRef();

        this._visibilityChange = this._visibilityChange.bind(this);

        this.intersectionEntries = [];
        this.visible = undefined;

        this.photoRefs = [];
        for (let i = 0; i < this.props.images.length; i++) {
            this.photoRefs[i] = React.createRef();
            this.intersectionEntries[i] = null;
        }
    }

    componentDidMount() {
        if (IntersectionObserver && this.props.mode === "grid") {
            this.observer = new IntersectionObserver(
                entries => {
                    this._visibilityChange(entries);
                },
                {
                    threshold: [
                        0,
                        0.1,
                        0.2,
                        0.3,
                        0.4,
                        0.5,
                        0.6,
                        0.7,
                        0.8,
                        0.9,
                        1
                    ]
                }
            );
            this.photoRefs.forEach(ref => {
                this.observer.observe(ref.current);
            });
        }
    }

    _visibilityChange(entries) {
        entries.forEach(entry => {
            this.intersectionEntries[entry.target.dataset.photoId] = entry;
        });

        let maxIntersectionRatio = 0;
        let activeIndex;
        this.intersectionEntries.forEach((entry, index) => {
            if (!entry) {
                return;
            }

            if (entry.intersectionRatio > maxIntersectionRatio) {
                maxIntersectionRatio = entry.intersectionRatio;
                activeIndex = index;
            }
        });

        if (activeIndex !== this.visible) {
            this.visible = activeIndex;

            if (this.props.onActiveChange) {
                this.props.onActiveChange(activeIndex);
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.shouldUpdate === 0 && this.props.shouldUpdate > 0) {
            if (this.props.mode === "grid") {
                let rect = this.photoRefs[
                    this.props.active
                ].current.getBoundingClientRect();

                window.scrollBy({
                    top: rect.top - 0,
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                let slider = this.swiperRef.current.slider; // TODO: TEMPORARY! -> we're taking inside implementation detail of SwipeableItemsContainer (slider prop)

                // if new active state is differnet from slider active state
                if (
                    slider &&
                    this.props.active !==
                        slider.state.slides.findIndex(x => x.active)
                ) {
                    slider.moveToSlide(
                        this.props.active,
                        this.props.shouldUpdate === 2
                    );
                }
            }

            if (this.props.onUpdate) {
                this.props.onUpdate();
            }
        }
    }

    render() {
        let items = this.props.images.map((image, index) =>
            this.props.photo(image, this.props.active === index, index)
        );

        if (this.props.mode === "grid") {
            // items = items.map((item, index) => (
            //     <VisibilitySensor
            //         onChange={isVisible =>
            //             this._visibilityChange(index, isVisible)
            //         }
            //         intervalCheck={false}
            //         scrollCheck={true}
            //         scrollThrottle={50}
            //     >
            //         <div ref={this.photoRefs[index]}>{item}</div>
            //     </VisibilitySensor>
            // ));

            items = items.map((item, index) => (
                <div
                    ref={this.photoRefs[index]}
                    key={index}
                    data-photo-id={index}
                >
                    {item}
                </div>
            ));

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
            <div style={{ position: "relative", height: "100%" }}>
                <SwipeableItemsContainer
                    ref={this.swiperRef}
                    items={items}
                    mode={this.props.mode}
                    gutter={this.props.spacer}
                    itemsInRow={1}
                    swiper={true}
                    onActiveChange={this.props.onActiveChange}
                />
                {this.props.children}
            </div>
        );
    }
}

let DotsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

let DotsItem = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: ${props => (props.active ? "black" : "grey")};
`;

let DotsBox = styled.div`
    position: relative;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover ${DotsItem} {
        background-color: black;
    }
    cursor: pointer;
`;

const Dots = props => {
    let items = [];
    for (let i = 0; i < props.amount; i++) {
        items.push(
            <DotsBox
                onClick={() => {
                    if (props.onClick) {
                        props.onClick(i);
                    }
                }}
            >
                <DotsItem active={i === props.active} />
            </DotsBox>
        );
    }

    return <DotsContainer>{items}</DotsContainer>;
};

// const ThumbsContainer = styled.div`
//
// `;

//
// function Thumbnails(props) {
//     // MODE
//     // --
//     // absolute-top (width: 100%, height: __)
//     // absolute-bottom (width: 100%, height: ___)
//     // absolute-left (width: ___, height: 100%)
//     // absolute-right (width: ___, height: 100%)
//     // vertical
//     // horizontal (width: 100%, height: ___)
//
//     // horizontal modes (no height, just itemsInRow)
//     // vertical modes (width)
//
//     let ThumbsContainer;
//     let thumbsSliderMode;
//
//     let itemsInRow = props.itemsInRow || 10;
//
//     if (props.mode === "absolute-bottom" || props.mode === "absolute-top") {
//         ThumbsContainer = styled.div`
//             position: absolute;
//             left: 0;
//             ${props.mode === "absolute-top" ? "top" : "bottom"}: 0;
//             width: 100%;
//             ${props.extraStyles}
//         `;
//         thumbsSliderMode = "slider-transform";
//     } else if (
//         props.mode === "absolute-left" ||
//         props.mode === "absolute-right"
//     ) {
//         ThumbsContainer = styled.div`
//             position: absolute;
//             ${props.mode === "absolute-left" ? "left" : "right"}: 0;
//             top: 0;
//             height: 100%;
//             width: ${props.width ? props.width : "100px"};
//         `;
//         thumbsSliderMode = "slider-vertical";
//     } else if (props.mode === "horizontal") {
//         ThumbsContainer = styled.div`
//             position: relative;
//             width: 100%;
//         `;
//         thumbsSliderMode = "slider-transform";
//     } else if (props.mode === "vertical") {
//         ThumbsContainer = styled.div`
//             position: relative;
//             width: ${props.width ? props.width : "100px"};
//             height: ${props.height ? props.height : "auto"};
//         `;
//         thumbsSliderMode = "slider-vertical";
//     }
//
//     ThumbsContainer = styled(ThumbsContainer)`
//         ${props.extraStyles}
//     `;
//
//     return (
//         <ThumbsContainer>
//             <FixedWidthItemsContainer
//                 style={{
//                     position: "relative",
//                     width: "100%",
//                     height: "100%"
//                 }}
//                 items={manyImages.map((image, index) => (
//                     <div
//                         style={{
//                             cursor: "pointer"
//                         }}
//                     >
//                         <LazyAssetWrapper
//                             mode={"natural"}
//                             crop={"natural"}
//                             sizes={`250px`}
//                             key={index}
//                             image={image}
//                             style={{
//                                 width: "100%"
//                             }}
//                         />
//                     </div>
//                 ))}
//                 config={{
//                     mode: thumbsSliderMode,
//                     itemsInRow: itemsInRow,
//                     gutter: 5
//                 }}
//             />
//         </ThumbsContainer>
//     );
// }

const ImageWrapperSlider = styled.div`
    position: relative;
    ${props =>
        props.is100vh
            ? "height: 100vh;"
            : `padding-bottom: ${props.aspectRatio}`}
`;

const ImageWrapperGrid = styled.div``;

const OverlayPhotosWrapper = styled.div`
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const OverlayPhotosWrapperSlider = styled.div`
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
`;

const OverlayImageWrapperSlider = styled.div`
    position: relative;
    flex-grow: 1;
`;

// const OverlayThumbnailsWrapperSlider = styled.div`
//     position: absolute;
//     top: 5%;
//     left: 5%;
//     width: 100px;
//     height: 90%;
// `;

const OverlayThumbnailsWrapperSlider = styled.div`
    position: relative;
    flex-grow: 0;
`;

const MobileTitleWrapper = styled.div`
    margin-bottom: 30px;
`;

const MobileContentWrapper = styled.div`
    margin-top: 30px;
`;

storiesOf("ProductWrapper", module).add("new components", () => (
    <div>
        {/*<MenuBarCOS layout={CONFIG.layout} />*/}
        <div
            style={{
                marginTop: CONFIG.topMargin ? "100px" : "0px",
                marginBottom: "1000px",
                width: "100%"
                // overflowX: "hidden"
            }}
        >
            {React.createElement(
                class extends React.Component {
                    constructor(props) {
                        super(props);

                        this.state = {
                            overlayOpened: false,
                            activePhoto: 0,
                            photosShouldUpdate: 0,

                            overlay_activePhoto: 0,
                            overlay_photosShouldUpdate: 0
                        };
                    }

                    render() {
                        /**
                         *
                         * Photos mode
                         *
                         */

                        let ImageWrapper;
                        let imageStyles;
                        let imageMode;
                        let galleryMode;

                        if (
                            CONFIG.photos.mode === "slider" &&
                            CONFIG.photos.aspectRatio
                        ) {
                            ImageWrapper = ImageWrapperSlider;

                            imageStyles = {
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                top: 0,
                                left: 0
                            };

                            imageMode = "contain";
                            galleryMode = "horizontal";
                        } else {
                            ImageWrapper = ImageWrapperGrid;

                            imageStyles = {
                                position: "relative",
                                width: "100%",
                                marginBottom: "5px"
                            };

                            imageMode = "natural";
                            galleryMode = "grid";
                        }

                        /**
                         *
                         * Thumbnails mode
                         *
                         */

                        let hasThumbsBelowGallery =
                            CONFIG.thumbnails.mode.startsWith("absolute-") ||
                            CONFIG.thumbnails.mode === "horizontal" ||
                            CONFIG.thumbnails.mode === "vertical";
                        let hasThumbsColumn =
                            CONFIG.thumbnails.mode === "column";

                        /**
                         *  Overlay modes
                         */
                        //
                        // let overlayPhotosContainerMode;
                        // let overlayPhotoMode;
                        // let overlayPhotoHeight;
                        // let OverlayPhotosWrapper;
                        //
                        // if (CONFIG.overlay.photos.mode === "slider") {
                        //     overlayPhotosContainerMode = "slider-transform";
                        //     overlayPhotoMode = "contain";
                        //     overlayPhotoHeight = "100vh";
                        //     OverlayPhotosWrapper = styled.div`
                        //         overflow-x: hidden;
                        //         display: flex;
                        //         flex-direction: column;
                        //     `;
                        // } else if (CONFIG.overlay.photos.mode === "grid") {
                        //     overlayPhotosContainerMode = "grid";
                        //     overlayPhotoMode = "natural";
                        //     overlayPhotoHeight = "auto";
                        //     OverlayPhotosWrapper = styled.div`
                        //         height: 100%;
                        //         overflow-y: scroll;
                        //         overflow-x: hidden;
                        //     `;
                        // }

                        const desktopMarkup = (
                            <Grid layout={CONFIG.layout}>
                                {CONFIG.thumbnails.mode === "column" && (
                                    <GridItem
                                        layout={CONFIG.layout}
                                        params={{
                                            md: CONFIG.thumbnails.width
                                        }}
                                    >
                                        <StickyInTwoDirections
                                            style={{ height: "100%" }}
                                            enabled={{
                                                xs: false,
                                                md: true
                                            }}
                                        >
                                            <Thumbs
                                                images={manyImages}
                                                mode={"vertical-autoheight"}
                                                spacer={5}
                                                itemSize={100}
                                                thumbnail={(
                                                    image,
                                                    isActive,
                                                    index
                                                ) => (
                                                    <Thumb
                                                        image={image}
                                                        isActive={isActive}
                                                        index={index}
                                                    />
                                                )}
                                                active={this.state.activePhoto}
                                                onActiveChange={n =>
                                                    this.setState({
                                                        activePhoto: n,
                                                        photosShouldUpdate: 1
                                                    })
                                                }
                                            />
                                        </StickyInTwoDirections>
                                    </GridItem>
                                )}

                                <GridItem
                                    params={{
                                        xs: 24,
                                        md: 12,
                                        lg: [
                                            CONFIG.photos.width,
                                            CONFIG.thumbnails.mode === "column"
                                                ? CONFIG.thumbnails.offset
                                                : 0
                                        ]
                                    }}
                                >
                                    <div style={{ position: "relative" }}>
                                        <Photos
                                            images={manyImages}
                                            mode={galleryMode}
                                            itemsInRow={CONFIG.photos.divide}
                                            spacer={5}
                                            active={this.state.activePhoto}
                                            shouldUpdate={
                                                this.state.photosShouldUpdate
                                            }
                                            onActiveChange={n => {
                                                this.setState({
                                                    activePhoto: n,
                                                    photosShouldUpdate: 0
                                                });
                                            }}
                                            onUpdate={() => {
                                                this.setState({
                                                    photosShouldUpdate: 0
                                                });
                                            }}
                                            photo={(image, isActive, index) => (
                                                <ImageWrapperSlider
                                                    onClick={() =>
                                                        this.setState({
                                                            overlayOpened: true
                                                        })
                                                    }
                                                    style={{
                                                        cursor: "pointer",
                                                        backgroundColor:
                                                            "#eaeaea"
                                                    }}
                                                    is100vh={
                                                        CONFIG.photos.is100vh
                                                    }
                                                    aspectRatio={
                                                        CONFIG.photos
                                                            .aspectRatio
                                                    }
                                                >
                                                    <LazyAssetWrapper
                                                        mode={imageMode}
                                                        crop={"natural"}
                                                        sizes={`450px`}
                                                        key={index}
                                                        image={image}
                                                        style={imageStyles}
                                                    />
                                                </ImageWrapperSlider>
                                            )}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    width: "100%",
                                                    left: 0,
                                                    bottom: "5px"
                                                }}
                                            >
                                                <Dots
                                                    amount={manyImages.length}
                                                    active={
                                                        this.state.activePhoto
                                                    }
                                                    onClick={n => {
                                                        this.setState({
                                                            activePhoto: n,
                                                            photosShouldUpdate: 1
                                                        });
                                                    }}
                                                />
                                            </div>

                                            <button
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    right: 0,
                                                    width: "100px",
                                                    height: "100%"
                                                }}
                                                onClick={() => {
                                                    this.setState({
                                                        activePhoto: Math.min(
                                                            this.state
                                                                .activePhoto +
                                                                1,
                                                            manyImages.length -
                                                                1
                                                        ),
                                                        photosShouldUpdate: 2
                                                    });
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        width: "100%",
                                                        height: "100%",
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center"
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position:
                                                                "relative",
                                                            width: "30px",
                                                            height: "30px",
                                                            backgroundColor:
                                                                "red"
                                                        }}
                                                    />
                                                </div>
                                            </button>

                                            <button
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100px",
                                                    height: "100%"
                                                }}
                                                onClick={() => {
                                                    this.setState({
                                                        activePhoto: Math.max(
                                                            this.state
                                                                .activePhoto -
                                                                1,
                                                            0
                                                        ),
                                                        photosShouldUpdate: 2
                                                    });
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        width: "100%",
                                                        height: "100%",
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center"
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position:
                                                                "relative",
                                                            width: "30px",
                                                            height: "30px",
                                                            backgroundColor:
                                                                "red"
                                                        }}
                                                    />
                                                </div>
                                            </button>
                                        </Photos>

                                        <Thumbs
                                            images={manyImages}
                                            mode={"horizontal"}
                                            active={this.state.activePhoto}
                                            spacer={5}
                                            itemSize={100}
                                            thumbnail={(
                                                image,
                                                isActive,
                                                index
                                            ) => (
                                                <Thumb
                                                    image={image}
                                                    isActive={isActive}
                                                    index={index}
                                                />
                                            )}
                                            onActiveChange={n =>
                                                this.setState({
                                                    activePhoto: n,
                                                    photosShouldUpdate: 1
                                                })
                                            }
                                        />

                                        <LazyAssetWrapperZoomable
                                            mode={"natural"}
                                            crop={"natural"}
                                            sizes={`450px`}
                                            image={manyImages[0]}
                                        />

                                        <div
                                            css={css`
                                                background-color: red;
                                                color: white;
                                                padding: 50px;
                                                @media screen and (min-width: 1400px) {
                                                    color: blue;
                                                }
                                                position: sticky;
                                                top: 0;
                                            `}
                                        >
                                            Cześć
                                        </div>
                                    </div>
                                </GridItem>

                                <GridItem
                                    layout={CONFIG.layout}
                                    params={{
                                        xs: 24,
                                        md: 10,
                                        lg: [
                                            CONFIG.detailsWidth,
                                            CONFIG.photos.offset
                                        ]
                                    }}
                                >
                                    <StickyInTwoDirections
                                        style={{ height: "100%" }}
                                        enabled={{
                                            xs: false,
                                            md: true
                                        }}
                                    >
                                        <ProductMeta1 />
                                    </StickyInTwoDirections>
                                </GridItem>
                            </Grid>
                        );

                        const mobileMarkup = (
                            <div>
                                <Container>
                                    <MobileTitleWrapper>
                                        <ProductMeta1 showDesc={false} />
                                    </MobileTitleWrapper>
                                </Container>

                                <Photos
                                    images={manyImages}
                                    mode={"horizontal"}
                                    itemsInRow={1}
                                    spacer={5}
                                    active={this.state.activePhoto}
                                    shouldUpdate={this.state.photosShouldUpdate}
                                    onActiveChange={n => {
                                        this.setState({
                                            activePhoto: n,
                                            photosShouldUpdate: 0
                                        });
                                    }}
                                    onUpdate={() => {
                                        this.setState({
                                            photosShouldUpdate: 0
                                        });
                                    }}
                                    photo={(image, isActive, index) => (
                                        <ImageWrapperSlider
                                            onClick={() =>
                                                this.setState({
                                                    overlayOpened: true
                                                })
                                            }
                                            style={{
                                                position: "relative",
                                                cursor: "pointer",
                                                backgroundColor: "#eaeaea"
                                            }}
                                        >
                                            <LazyAssetWrapper
                                                mode={"natural"}
                                                crop={"natural"}
                                                sizes={`450px`}
                                                key={index}
                                                image={image}
                                            />
                                        </ImageWrapperSlider>
                                    )}
                                />

                                <Container>
                                    <MobileContentWrapper>
                                        <ProductMeta1 showTitle={false} />
                                    </MobileContentWrapper>
                                </Container>
                            </div>
                        );

                        return (
                            <div>
                                <MediaQuery
                                    query={RangeSet.main.to("sm").mediaQuery}
                                >
                                    {mobileMarkup}
                                </MediaQuery>

                                <MediaQuery
                                    query={RangeSet.main.from("md").mediaQuery}
                                >
                                    {desktopMarkup}
                                </MediaQuery>

                                <Modal
                                    config={Modal.slideFromBottom({
                                        width: "100%",
                                        height: "100%"
                                    })}
                                    isOpen={this.state.overlayOpened}
                                    onRequestClose={() =>
                                        this.setState({ overlayOpened: false })
                                    }
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "white"
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "absolute",
                                                top: "2vw",
                                                right: "3vw",
                                                zIndex: 10
                                            }}
                                        >
                                            <button
                                                onClick={() =>
                                                    this.setState({
                                                        overlayOpened: false
                                                    })
                                                }
                                            >
                                                CLOSE
                                            </button>
                                        </div>

                                        <OverlayPhotosWrapperSlider>
                                            <OverlayImageWrapperSlider>
                                                <Photos
                                                    images={manyImages}
                                                    mode={"horizontal"}
                                                    itemsInRow={1}
                                                    spacer={5}
                                                    active={
                                                        this.state
                                                            .overlay_activePhoto
                                                    }
                                                    shouldUpdate={
                                                        this.state
                                                            .overlay_photosShouldUpdate
                                                    }
                                                    onActiveChange={n => {
                                                        this.setState({
                                                            overlay_activePhoto: n,
                                                            overlay_photosShouldUpdate: 0
                                                        });
                                                    }}
                                                    onUpdate={() => {
                                                        this.setState({
                                                            overlay_photosShouldUpdate: 0
                                                        });
                                                    }}
                                                    photo={(
                                                        image,
                                                        isActive,
                                                        index
                                                    ) => (
                                                        <LazyAssetWrapper
                                                            mode={"contain"}
                                                            crop={"natural"}
                                                            sizes={`450px`}
                                                            key={index}
                                                            image={image}
                                                            style={{
                                                                height: "100%",
                                                                width: "100%"
                                                            }}
                                                        />
                                                    )}
                                                />
                                            </OverlayImageWrapperSlider>
                                            <OverlayThumbnailsWrapperSlider>
                                                <Thumbs
                                                    images={manyImages}
                                                    mode={"horizontal"}
                                                    active={
                                                        this.state
                                                            .overlay_activePhoto
                                                    }
                                                    spacer={5}
                                                    itemSize={100}
                                                    thumbnail={(
                                                        image,
                                                        isActive,
                                                        index
                                                    ) => (
                                                        <Thumb
                                                            image={image}
                                                            isActive={isActive}
                                                            index={index}
                                                        />
                                                    )}
                                                    onActiveChange={n =>
                                                        this.setState({
                                                            overlay_activePhoto: n,
                                                            overlay_photosShouldUpdate: 1
                                                        })
                                                    }
                                                />
                                            </OverlayThumbnailsWrapperSlider>
                                        </OverlayPhotosWrapperSlider>

                                        {/*<OverlayPhotosWrapper>*/}
                                        {/*<Grid layout={CONFIG.overlay.layout}>*/}
                                        {/*<GridItem params={{ xs: 2}}>=*/}
                                        {/*<StickyInTwoDirections*/}
                                        {/*style={{height: "100%"}}*/}
                                        {/*enabled={{*/}
                                        {/*xs: true*/}
                                        {/*}}*/}
                                        {/*>*/}
                                        {/*<Thumbs*/}
                                        {/*images={manyImages}*/}
                                        {/*mode={"vertical-autoheight"}*/}
                                        {/*active={*/}
                                        {/*this.state.overlay_activePhoto*/}
                                        {/*}*/}
                                        {/*spacer={5}*/}
                                        {/*itemSize={100}*/}
                                        {/*thumbnail={(*/}
                                        {/*image,*/}
                                        {/*isActive,*/}
                                        {/*index*/}
                                        {/*) => (*/}
                                        {/*<Thumb*/}
                                        {/*image={image}*/}
                                        {/*isActive={isActive}*/}
                                        {/*index={index}*/}
                                        {/*/>*/}
                                        {/*)}*/}
                                        {/*onActiveChange={n =>*/}
                                        {/*this.setState({*/}
                                        {/*overlay_activePhoto: n,*/}
                                        {/*overlay_photosShouldUpdate: 1*/}
                                        {/*})*/}
                                        {/*}*/}
                                        {/*/>*/}
                                        {/*</StickyInTwoDirections>*/}
                                        {/*</GridItem>*/}
                                        {/*<GridItem params={{ xs: [20, 1]}}>*/}
                                        {/*<Photos*/}
                                        {/*images={manyImages}*/}
                                        {/*mode={"grid"}*/}
                                        {/*itemsInRow={2}*/}
                                        {/*spacer={5}*/}
                                        {/*active={this.state.overlay_activePhoto}*/}
                                        {/*onActiveChange={n => {*/}
                                        {/*this.setState({*/}
                                        {/*overlay_activePhoto: n,*/}
                                        {/*overlay_photosShouldUpdate: 0*/}
                                        {/*});*/}
                                        {/*}}*/}
                                        {/*onUpdate={() => {*/}
                                        {/*this.setState({*/}
                                        {/*overlay_photosShouldUpdate: 0*/}
                                        {/*});*/}
                                        {/*}}*/}
                                        {/*photo={(*/}
                                        {/*image,*/}
                                        {/*isActive,*/}
                                        {/*index*/}
                                        {/*) => (*/}
                                        {/*<ImageWrapperSlider*/}
                                        {/*onClick={() =>*/}
                                        {/*this.setState({*/}
                                        {/*overlayOpened: false*/}
                                        {/*})*/}
                                        {/*}*/}
                                        {/*style={{*/}
                                        {/*cursor: "pointer",*/}
                                        {/*backgroundColor:*/}
                                        {/*"#eaeaea"*/}
                                        {/*}}*/}
                                        {/*>*/}
                                        {/*<LazyAssetWrapper*/}
                                        {/*mode={imageMode}*/}
                                        {/*crop={"natural"}*/}
                                        {/*sizes={`450px`}*/}
                                        {/*key={index}*/}
                                        {/*image={image}*/}
                                        {/*style={imageStyles}*/}
                                        {/*/>*/}
                                        {/*</ImageWrapperSlider>*/}
                                        {/*)}*/}
                                        {/*/>*/}
                                        {/*</GridItem>*/}
                                        {/*</Grid>*/}
                                        {/*</OverlayPhotosWrapper>*/}
                                    </div>
                                </Modal>
                            </div>
                        );
                    }
                }
            )}
        </div>
    </div>
));
// export default ProductWrapperStory;
