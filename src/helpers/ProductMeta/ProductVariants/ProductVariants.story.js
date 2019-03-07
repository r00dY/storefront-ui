import React from "react";
import { storiesOf } from "@storybook/react";
import ProductVariants from "./ProductVariants";

const ProductVariantsStory1 = [
    {
        isActive: false,
        image: [
            {
                url: "/static/COS/product/product2_1.jpg",
                w: 1128,
                h: 1692
            }
        ]
    },
    {
        isActive: false,
        image: [
            {
                url: "/static/COS/product/product3_1.jpg",
                w: 1128,
                h: 1692
            }
        ]
    },
    {
        isActive: true,
        image: [
            {
                url: "/static/COS/product/product_1.jpg",
                w: 1128,
                h: 1692
            }
        ]
    }
];

const ProductVariantsStory2 = [
    {
        isActive: false,
        image: {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/1-2.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }
    },
    {
        isActive: true,
        image: {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/1-1.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }
    },
    {
        isActive: false,
        image: {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/1-3.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }
    },
    {
        isActive: false,
        image: {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/1-4.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }
    }
];

const ProductVariants1 = <ProductVariants variants={ProductVariantsStory1} />;

// const ProductVariants2 = (
//     <ProductVariants variants={ProductVariantsStory2} itemsCrop={"square"} />
// );
//
// storiesOf("ProductVariants", module).add("default", () => (
//     <div>{ProductVariants1}</div>
// ));

export { ProductVariants1 };
