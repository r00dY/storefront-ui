import React from "react";
import { storiesOf } from "@storybook/react";
import TwoCols from "./TwoCols";
import CenteredTextStory from "./CenteredText/CenteredText.story";
import { VideoBox1, VideoBox2 } from "./VideoBox/VideoBox.story";

const _image_product_1 = {
    source: "imgix-ratio",
    path:
        "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_1.jpg",
    w: 1128,
    h: 1692,
    alt: "product_1"
};
const _image_product_2 = {
    source: "imgix-ratio",
    path:
        "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_2.jpg",
    w: 1128,
    h: 1692,
    alt: "product_2"
};
const _image_product_3 = {
    source: "imgix-ratio",
    path:
        "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_3.jpg",
    w: 1128,
    h: 1692,
    alt: "product_3"
};
const _image_product_4 = {
    source: "imgix-ratio",
    path:
        "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_4.jpg",
    w: 1128,
    h: 1692,
    alt: "product_4"
};
const _image_product_5 = {
    source: "imgix-ratio",
    path:
        "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_5.jpg",
    w: 1128,
    h: 1692,
    alt: "product_5"
};
const _image_product_6 = {
    source: "imgix-ratio",
    path:
        "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_6.jpg",
    w: 1128,
    h: 1692,
    alt: "product_6"
};
const _items = [
    {
        isFullWidth: false,
        image: _image_product_1
    },
    {
        isFullWidth: false,
        image: _image_product_2
    },
    {
        isFullWidth: false,
        image: _image_product_3
    },
    {
        isFullWidth: false,
        image: _image_product_4
    },
    {
        isFullWidth: false,
        image: _image_product_5
    },
    {
        isFullWidth: false,
        image: _image_product_6
    }
];

const _items2 = [
    {
        isFullWidth: false,
        image: _image_product_1
    },
    {
        isFullWidth: false,
        image: _image_product_2
    },
    {
        isFullWidth: true,
        image: _image_product_3
    },
    {
        isFullWidth: false,
        image: _image_product_4
    },
    {
        isFullWidth: false,
        image: _image_product_5
    },
    {
        isFullWidth: true,
        image: _image_product_6
    }
];

const _items3 = [
    {
        isFullWidth: true,
        image: _image_product_1
    },
    {
        isFullWidth: true,
        image: _image_product_2
    },
    {
        isFullWidth: true,
        image: _image_product_3
    },
    {
        isFullWidth: true,
        image: _image_product_4
    },
    {
        isFullWidth: true,
        image: _image_product_5
    },
    {
        isFullWidth: true,
        image: _image_product_6
    }
];

const _items4 = [
    {
        isFullWidth: false,
        image: _image_product_1
    },
    {
        isFullWidth: false,
        image: _image_product_2
    },
    {
        isFullWidth: true,
        image: _image_product_3
    },
    {
        isFullWidth: true,
        text: CenteredTextStory
    },
    {
        isFullWidth: true,
        image: _image_product_4
    },
    {
        isFullWidth: true,
        image: _image_product_5
    },
    {
        isFullWidth: true,
        image: _image_product_6
    }
];

const _items5 = [
    {
        isFullWidth: false,
        image: _image_product_1
    },
    {
        isFullWidth: false,
        image: _image_product_2
    },
    {
        isFullWidth: true,
        image: _image_product_3
    },
    {
        isFullWidth: false,
        image: _image_product_4
    },
    {
        isFullWidth: false,
        image: _image_product_5
    },
    {
        isFullWidth: true,
        video: VideoBox1
    }
];
const _items6 = [
    {
        isFullWidth: false,
        image: _image_product_1
    },
    {
        isFullWidth: false,
        video: VideoBox1
    },
    {
        isFullWidth: false,
        image: _image_product_2
    },
    {
        isFullWidth: false,
        image: _image_product_3
    }
];
const _itemsNike = [
    {
        isFullWidth: false,
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
        video: VideoBox2
    },
    {
        isFullWidth: false,
        image: {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/2.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }
    },
    {
        isFullWidth: false,
        image: {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/3.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }
    },
    {
        isFullWidth: false,
        image: {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/4.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }
    },
    {
        isFullWidth: false,
        image: {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/5.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }
    },
    {
        isFullWidth: false,
        image: {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/6.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }
    },
    {
        isFullWidth: false,
        image: {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/7.jpg",
            w: 1728,
            h: 2160,
            alt: ""
        }
    }
];
const TwoColsStory = <TwoCols items={_items} />;
const TwoColsStory2 = <TwoCols items={_items2} />;
const TwoColsStory3 = <TwoCols items={_items3} />;
const TwoColsStory4 = <TwoCols items={_items4} />;
const TwoColsStory5 = <TwoCols items={_items5} />;
const TwoColsStory6 = <TwoCols items={_items6} />;
const TwoColsStoryNike = <TwoCols items={_itemsNike} />;

storiesOf("TwoCols", module).add("default", () => TwoColsStory);
storiesOf("TwoCols", module).add("with full width", () => TwoColsStory2);
storiesOf("TwoCols", module).add("all full width", () => TwoColsStory3);
storiesOf("TwoCols", module).add(
    "with full width and text",
    () => TwoColsStory4
);
storiesOf("TwoCols", module).add("mixed with video", () => TwoColsStory5);
storiesOf("TwoCols", module).add("mixed items ratio", () => TwoColsStory6);

export {
    // without default
    TwoColsStory,
    TwoColsStory2,
    TwoColsStory3,
    TwoColsStory4,
    TwoColsStory5,
    TwoColsStoryNike
};
