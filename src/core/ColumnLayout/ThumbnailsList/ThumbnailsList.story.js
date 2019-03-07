import React from "react";
import { storiesOf } from "@storybook/react";
import ThumbnailsList from "./ThumbnailsList";

const _images = [
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
const _imagesNike = [
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/1-1.jpg",
        w: 1728,
        h: 2160,
        alt: ""
    },
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/2.jpg",
        w: 1728,
        h: 2160,
        alt: ""
    },
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/3.jpg",
        w: 1728,
        h: 2160,
        alt: ""
    },
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/4.jpg",
        w: 1728,
        h: 2160,
        alt: ""
    },
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/5.jpg",
        w: 1728,
        h: 2160,
        alt: ""
    },
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/6.jpg",
        w: 1728,
        h: 2160,
        alt: ""
    },
    {
        source: "imgix-ratio",
        path:
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/7.jpg",
        w: 1728,
        h: 2160,
        alt: ""
    }
];
const ThumbnailsListStory = <ThumbnailsList images={_images} />;
const ThumbnailsListStoryNike = <ThumbnailsList images={_imagesNike} />;

storiesOf("ThumbnailsList", module).add("default", () => ThumbnailsListStory);

export { ThumbnailsListStory, ThumbnailsListStoryNike };
