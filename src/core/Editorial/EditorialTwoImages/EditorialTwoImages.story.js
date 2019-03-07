import React from "react";
import { storiesOf } from "@storybook/react";
import EditorialTwoImages from "./EditorialTwoImages";
import RandomImage from "../../../helpers/RandomImage";

const EditorialTwoImagesStory = (
    <EditorialTwoImages
        imageA={{
            image: RandomImage.getPortrait(),
            size: "large",
            justify: "left",
            hasTopOffset: false
        }}
        imageB={{
            image: RandomImage.getPortrait(),
            size: "small",
            justify: "right",
            hasTopOffset: false
        }}
        imagesAlign={"bottom"}
    />
);
const EditorialTwoImagesStory2 = (
    <EditorialTwoImages
        imageA={{
            image: RandomImage.getPortrait(),
            size: "medium",
            justify: "right",
            hasTopOffset: false
        }}
        imageB={{
            image: RandomImage.getPortrait(),
            size: "medium",
            justify: "left",
            hasTopOffset: false
        }}
        imagesAlign={"top"}
    />
);
const EditorialTwoImagesStory3 = (
    <EditorialTwoImages
        imageA={{
            image: RandomImage.getPortrait(),
            size: "small",
            justify: "left",
            hasTopOffset: false
        }}
        imageB={{
            image: RandomImage.getPortrait(),
            size: "large",
            justify: "right",
            hasTopOffset: false
        }}
        imagesAlign={"top"}
    />
);
const EditorialTwoImagesStory4 = (
    <EditorialTwoImages
        imageA={{
            image: RandomImage.getPortrait(),
            size: "large",
            justify: "center",
            hasTopOffset: false
        }}
        imageB={{
            image: RandomImage.getPortrait(),
            size: "medium",
            justify: "center",
            hasTopOffset: false
        }}
        imagesAlign={"center"}
    />
);
const EditorialTwoImagesStory5 = (
    <EditorialTwoImages
        imageA={{
            image: RandomImage.getPortrait(),
            size: "large",
            justify: "left",
            hasTopOffset: false
        }}
        imageB={{
            image: RandomImage.getPortrait(),
            size: "small",
            justify: "right",
            hasTopOffset: false
        }}
        imagesAlign={"bottom"}
    />
);
const EditorialTwoImagesStory6 = (
    <EditorialTwoImages
        imageA={{
            image: RandomImage.getPortrait(),
            size: "large",
            justify: "right",
            hasTopOffset: false
        }}
        imageB={{
            image: RandomImage.getPortrait(),
            size: "small",
            justify: "center",
            hasTopOffset: false
        }}
        imagesAlign={"center"}
    />
);
const EditorialTwoImagesStory7 = (
    <EditorialTwoImages
        imageA={{
            image: RandomImage.getPortrait(),
            size: "small",
            justify: "left",
            hasTopOffset: false
        }}
        imageB={{
            image: RandomImage.getPortrait(),
            size: "large",
            justify: "right",
            hasTopOffset: false
        }}
        imagesAlign={"center"}
    />
);
const EditorialTwoImagesStory8 = (
    <EditorialTwoImages
        imageA={{
            image: RandomImage.getPortrait(),
            size: "small",
            justify: "right",
            hasTopOffset: false
        }}
        imageB={{
            image: RandomImage.getPortrait(),
            size: "large",
            justify: "left",
            hasTopOffset: false
        }}
        imagesAlign={"bottom"}
    />
);
storiesOf("EditorialTwoImages", module).add(
    "default",
    () => EditorialTwoImagesStory
);
storiesOf("EditorialTwoImages", module).add(
    "default2",
    () => EditorialTwoImagesStory2
);
storiesOf("EditorialTwoImages", module).add(
    "default3",
    () => EditorialTwoImagesStory3
);
storiesOf("EditorialTwoImages", module).add(
    "default4",
    () => EditorialTwoImagesStory4
);
storiesOf("EditorialTwoImages", module).add(
    "default5",
    () => EditorialTwoImagesStory5
);
storiesOf("EditorialTwoImages", module).add(
    "default6",
    () => EditorialTwoImagesStory6
);
storiesOf("EditorialTwoImages", module).add(
    "default7",
    () => EditorialTwoImagesStory7
);
storiesOf("EditorialTwoImages", module).add(
    "default8",
    () => EditorialTwoImagesStory8
);

export {
    EditorialTwoImagesStory,
    EditorialTwoImagesStory2,
    EditorialTwoImagesStory3,
    EditorialTwoImagesStory4,
    EditorialTwoImagesStory5,
    EditorialTwoImagesStory6,
    EditorialTwoImagesStory7,
    EditorialTwoImagesStory8
};
