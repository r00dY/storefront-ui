import React from "react";
import { storiesOf } from "@storybook/react";
import ProductBox2 from "./ProductBox2";

const ProductBox2Story = (
    <ProductBox2
        title={"Nike Zoom Pegasus Turbo"}
        // colors={["#e6d4c8", "#464c58", "#d5d1c6"]}
        label={"Men's Running Shoe"}
        link={"#"}
        price={"€79"}
        image={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/1-1.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }}
        imageOnHover={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/2.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }}
    />
);
const ProductBox2Story2 = (
    <ProductBox2
        title={"Nike Zoom Pegasus Turbo"}
        // colors={["#e6d4c8", "#464c58", "#d5d1c6"]}
        label={"Men's Running Shoe"}
        link={"#"}
        price={"€79"}
        image={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/1-2.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }}
        imageOnHover={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/2.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }}
    />
);
const ProductBox2Story3 = (
    <ProductBox2
        title={"Nike Zoom Pegasus Turbo"}
        // colors={["#e6d4c8", "#464c58", "#d5d1c6"]}
        label={"Men's Running Shoe"}
        link={"#"}
        price={"€79"}
        image={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/1-3.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }}
        imageOnHover={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/2.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }}
    />
);
const ProductBox2Story4 = (
    <ProductBox2
        title={"Nike Zoom Pegasus Turbo"}
        // colors={["#e6d4c8", "#464c58", "#d5d1c6"]}
        label={"Men's Running Shoe"}
        link={"#"}
        price={"€79"}
        image={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/1-4.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }}
        imageOnHover={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/2.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }}
    />
);
storiesOf("ProductBox2", module).add("default", () => ProductBox2Story);

export {
    ProductBox2Story,
    ProductBox2Story2,
    ProductBox2Story3,
    ProductBox2Story4
};
