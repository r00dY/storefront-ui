import React from "react";
import { storiesOf } from "@storybook/react";
import ProductBox1 from "./ProductBox1";

const ProductBox11 = (
    <ProductBox1
        title={"Wrap-over lambswool jumper"}
        colors={["#e6d4c8", "#464c58", "#d5d1c6"]}
        label={"New Arrival"}
        link={"#"}
        price={"€79"}
        image={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/1_3_2.jpg",
            w: 1128,
            h: 1692,
            alt: "1_3_2"
        }}
        imageOnHover={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/1_3_1.jpg",
            w: 1128,
            h: 1692,
            alt: "1_3_1"
        }}
        variantsImages={[
            {
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/1_3_2.jpg",
                w: 1128,
                h: 1692,
                alt: "1_3_2"
            },
            {
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/1_2_2.jpg",
                w: 1128,
                h: 1692,
                alt: "1_2_2"
            },
            {
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/1_1_2.jpg",
                w: 1128,
                h: 1692,
                alt: "1_1_2"
            }
        ]}
    />
);
const ProductBox12 = (
    <ProductBox1
        title={"Ribbed jersey high-neck top"}
        colors={["#2f5548", "#e8d8c9"]}
        label={"Essentials"}
        link={"#"}
        price={"59€"}
        image={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/3_1_2.jpg",
            w: 1128,
            h: 1692,
            alt: "1_1_2"
        }}
        imageOnHover={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/3_1_1.jpg",
            w: 1128,
            h: 1692,
            alt: "1_1_1"
        }}
        variantsImages={[
            {
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/3_1_2.jpg",
                w: 1128,
                h: 1692,
                alt: "3_1_2"
            },
            {
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/3_2_2.jpg",
                w: 1128,
                h: 1692,
                alt: "3_2_2"
            }
        ]}
    />
);
const ProductBox13 = (
    <ProductBox1
        title={"Cashmere hooded top"}
        colors={["#4d4b4c"]}
        label={"Limited collection"}
        link={"#"}
        price={"59€"}
        priceBefore={"69€"}
        image={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/5_1_2.jpg",
            w: 1128,
            h: 1692,
            alt: "5_1_2"
        }}
        imageOnHover={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/5_1_1.jpg",
            w: 1128,
            h: 1692,
            alt: "5_1_1"
        }}
        variantsImages={[
            {
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/5_1_2.jpg",
                w: 1128,
                h: 1692,
                alt: "5_1_2"
            }
        ]}
    />
);
const ProductBox14 = (
    <ProductBox1
        title={"Chunky wool wrap cardigan"}
        colors={["#decebc", "#3d3d3b"]}
        label={"New Arrival"}
        link={"#"}
        price={"89€"}
        priceBefore={"99€"}
        image={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/2_2_2.jpg",
            w: 1128,
            h: 1692,
            alt: "1_2_2"
        }}
        imageOnHover={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/2_2_1.jpg",
            w: 1128,
            h: 1692,
            alt: "1_2_1"
        }}
        variantsImages={[
            {
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/2_2_2.jpg",
                w: 1128,
                h: 1692,
                alt: "2_2_2"
            },
            {
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product_box/2_1_2.jpg",
                w: 1128,
                h: 1692,
                alt: "2_1_2"
            }
        ]}
    />
);

storiesOf("ProductBox1", module).add("default", () => ProductBox11);

export { ProductBox11, ProductBox12, ProductBox13, ProductBox14 };
