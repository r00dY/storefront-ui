import React from "react";
import { storiesOf } from "@storybook/react";
import ImageContentBox from "./ImageContentBox";
import TitleTextLink from "./TitleTextLink/TitleTextLink";
import LazyAssetWrapper from "../../core/LazyAssetWrapper/LazyAssetWrapper";
import fonts from "../../fonts.config";

const ImageContentBoxStory = (
    <ImageContentBox>
        <LazyAssetWrapper
            className={"ImageContentBox__image"}
            mode={"natural"}
            crop={"portrait"}
            sizes={`400px`}
            image={{
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_portrait_1.jpg",
                w: 750,
                h: 975,
                alt: "editorial_portrait_1"
            }}
        />
        <TitleTextLink
            title={"Days outdoors"}
            text={
                "Offering protection against the elements, our hats, scarves and gloves are made for the coldest days"
            }
            titleFont={fonts.COS.label1}
            textFont={fonts.COS.text2}
            linkLabel={"shop hats, scarves & gloves"}
            linkHref={"#"}
        />
    </ImageContentBox>
);
const ImageContentBoxStory2 = (
    <ImageContentBox>
        <LazyAssetWrapper
            className={"ImageContentBox__image"}
            mode={"natural"}
            crop={"square"}
            sizes={`400px`}
            image={{
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_landscape_2.jpg",
                w: 1920,
                h: 1200,
                alt: "editorial_landscape_2"
            }}
        />
        <TitleTextLink
            title={"Torben Eskerod"}
            text={
                "Torben Eskerod’s meditative photographic series, Marselis, focuses on capturing the ambience of a woodland scene by dwelling on its details."
            }
            titleFont={fonts.COS.label1}
            textFont={fonts.COS.text2}
            linkLabel={"explore"}
            linkHref={"#"}
        />
    </ImageContentBox>
);
const ImageContentBoxStory3 = (
    <ImageContentBox>
        <LazyAssetWrapper
            className={"ImageContentBox__image"}
            mode={"natural"}
            crop={"square"}
            sizes={`400px`}
            image={{
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_landscape_1.jpg",
                w: 1920,
                h: 1200,
                alt: "editorial_landscape_1"
            }}
        />
        <TitleTextLink
            title={"New season boots"}
            text={
                "Classic shapes updated, our latest arrivals feature modern details, polished finishes and smooth leathers that last"
            }
            titleFont={fonts.COS.label1}
            textFont={fonts.COS.text2}
            linkLabel={"shop boots"}
            linkHref={"#"}
        />
    </ImageContentBox>
);
const ImageContentBoxStory4 = (
    <ImageContentBox>
        <LazyAssetWrapper
            className={"ImageContentBox__image"}
            mode={"natural"}
            crop={"portrait"}
            sizes={`400px`}
            image={{
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_portrait_2.jpg",
                w: 750,
                h: 887,
                alt: "editorial_portrait_2"
            }}
        />
        <TitleTextLink
            title={"The touch of cashmere"}
            text={
                "Add warmth to your seasonal wardrobe with our soft cashmere layers. Explore a new selection in timeless shades and a multitude of colours…"
            }
            titleFont={fonts.COS.label1}
            textFont={fonts.COS.text2}
            linkLabel={"shop the edit"}
            linkHref={"#"}
        />
    </ImageContentBox>
);
const ImageContentBoxStory5 = (
    <ImageContentBox>
        <LazyAssetWrapper
            className={"ImageContentBox__image"}
            mode={"natural"}
            crop={"portrait"}
            sizes={`400px`}
            image={{
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_portrait_2.jpg",
                w: 750,
                h: 887,
                alt: "editorial_portrait_2"
            }}
        />

        <TitleTextLink
            title={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores beatae minus possimus suscipit!"
            }
            text={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores beatae minus possimus suscipit! Assumenda et iure nam necessitatibus similique ullam, voluptates. Architecto fugiat minima natus nostrum quasi qui suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores beatae minus possimus suscipit! Assumenda et iure nam necessitatibus similique ullam, voluptates. Architecto fugiat minima natus nostrum quasi qui suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores beatae minus possimus suscipit! Assumenda et iure nam necessitatibus similique ullam, voluptates. Architecto fugiat minima natus nostrum quasi qui suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores beatae minus possimus suscipit! Assumenda et iure nam necessitatibus similique ullam, voluptates. Architecto fugiat minima natus nostrum quasi qui suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores beatae minus possimus suscipit! Assumenda et iure nam necessitatibus similique ullam, voluptates. Architecto fugiat minima natus nostrum quasi qui suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores beatae minus possimus suscipit! Assumenda et iure nam necessitatibus similique ullam, voluptates. Architecto fugiat minima natus nostrum quasi qui suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores beatae minus possimus suscipit! Assumenda et iure nam necessitatibus similique ullam, voluptates. Architecto fugiat minima natus nostrum quasi qui suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores beatae minus possimus suscipit! Assumenda et iure nam necessitatibus similique ullam, voluptates. Architecto fugiat minima natus nostrum quasi qui suscipit."
            }
            titleFont={fonts.COS.label1}
            textFont={fonts.COS.text2}
            linkLabel={"shop the edit"}
            linkHref={"#"}
        />
    </ImageContentBox>
);

const ImageContentBoxStoryFixed = (
    <ImageContentBox>
        <LazyAssetWrapper
            className={"ImageContentBox__image"}
            mode={"natural"}
            crop={"square"}
            sizes={`400px`}
            image={{
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_portrait_1.jpg",
                w: 750,
                h: 975,
                alt: "editorial_portrait_1"
            }}
        />
        <TitleTextLink
            fixedTextHeight
            title={"Days outdoors"}
            text={
                "Offering protection against the elements, our hats, scarves and gloves are made for the coldest days"
            }
            titleFont={fonts.COS.label1}
            textFont={fonts.COS.text2}
            linkLabel={"shop hats, scarves & gloves"}
            linkHref={"#"}
        />
    </ImageContentBox>
);
const ImageContentBoxStoryFixed2 = (
    <ImageContentBox>
        <LazyAssetWrapper
            className={"ImageContentBox__image"}
            mode={"natural"}
            crop={"portrait"}
            sizes={`400px`}
            image={{
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_landscape_2.jpg",
                w: 1920,
                h: 1200,
                alt: "editorial_landscape_2"
            }}
        />
        <TitleTextLink
            fixedTextHeight
            title={"Torben Eskerod"}
            text={
                "Torben Eskerod’s meditative photographic series, Marselis, focuses on capturing the ambience of a woodland scene by dwelling on its details."
            }
            titleFont={fonts.COS.label1}
            textFont={fonts.COS.text2}
            linkLabel={"explore"}
            linkHref={"#"}
        />
    </ImageContentBox>
);
const ImageContentBoxStoryFixed3 = (
    <ImageContentBox>
        <LazyAssetWrapper
            className={"ImageContentBox__image"}
            mode={"natural"}
            crop={"portrait"}
            sizes={`400px`}
            image={{
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_landscape_1.jpg",
                w: 1920,
                h: 1200,
                alt: "editorial_landscape_1"
            }}
        />
        <TitleTextLink
            fixedTextHeight
            title={"New season boots"}
            text={
                "Classic shapes updated, our latest arrivals feature modern details, polished finishes and smooth leathers that last"
            }
            titleFont={fonts.COS.label1}
            textFont={fonts.COS.text2}
            linkLabel={"shop boots"}
            linkHref={"#"}
        />
    </ImageContentBox>
);
const ImageContentBoxStoryFixed4 = (
    <ImageContentBox>
        <LazyAssetWrapper
            className={"ImageContentBox__image"}
            mode={"natural"}
            crop={"square"}
            sizes={`400px`}
            image={{
                source: "imgix-ratio",
                path:
                    "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_portrait_2.jpg",
                w: 750,
                h: 887,
                alt: "editorial_portrait_2"
            }}
        />
        <TitleTextLink
            fixedTextHeight
            title={"The touch of cashmere"}
            text={
                "Add warmth to your seasonal wardrobe with our soft cashmere layers. Explore a new selection in timeless shades and a multitude of colours…"
            }
            titleFont={fonts.COS.label1}
            textFont={fonts.COS.text2}
            linkLabel={"shop the edit"}
            linkHref={"#"}
        />
    </ImageContentBox>
);

storiesOf("ImageContentBox", module).add("default", () => ImageContentBoxStory);
storiesOf("ImageContentBox", module).add(
    "default2",
    () => ImageContentBoxStory2
);
storiesOf("ImageContentBox", module).add(
    "default3",
    () => ImageContentBoxStory3
);
storiesOf("ImageContentBox", module).add(
    "default4",
    () => ImageContentBoxStory4
);

export {
    ImageContentBoxStory,
    ImageContentBoxStory2,
    ImageContentBoxStory3,
    ImageContentBoxStory4,
    ImageContentBoxStory5,
    ImageContentBoxStoryFixed,
    ImageContentBoxStoryFixed2,
    ImageContentBoxStoryFixed3,
    ImageContentBoxStoryFixed4
};
