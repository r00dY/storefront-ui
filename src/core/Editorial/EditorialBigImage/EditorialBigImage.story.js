import React from "react";
import { storiesOf } from "@storybook/react";
import EditorialBigImage from "./EditorialBigImage";
import RandomImage from "../../../helpers/RandomImage";
import {
    EditorialHeadline1,
    EditorialHeadline2,
    EditorialHeadline3,
    EditorialHeadline4
} from "../../../helpers/Editorial/EditorialHeadline/EditorialHeadline.story";

const EditorialBigImageStory = (
    <EditorialBigImage
        image={RandomImage.getLandscape()}
        element={EditorialHeadline1}
        elementPosition={["right", "bottom"]}
        modeCover
    />
);
const EditorialBigImageStoryNike = (
    <EditorialBigImage
        image={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/zoom/1.png",
            w: 1600,
            h: 700,
            alt: ""
        }}
    />
);
const EditorialBigImageStoryNike2 = (
    <EditorialBigImage
        image={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/zoom/2.png",
            w: 1600,
            h: 685,
            alt: ""
        }}
        element={EditorialHeadline3}
        elementPosition={["right", "center"]}
    />
);
const EditorialBigImageStoryNike3 = (
    <EditorialBigImage
        image={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/zoom/3.png",
            w: 1600,
            h: 967,
            alt: ""
        }}
        element={EditorialHeadline3}
        elementPosition={["left", "center"]}
    />
);
storiesOf(`EditorialBigImage`, module).add(
    "default",
    () => EditorialBigImageStory
);

EditorialBigImage.testOptions.elementPosition[0].forEach(val => {
    EditorialBigImage.testOptions.elementPosition[1].forEach(val2 => {
        storiesOf(`EditorialBigImage`, module).add(val + " " + val2, () => (
            <EditorialBigImage
                image={RandomImage.getLandscape()}
                element={EditorialHeadline1}
                elementPosition={[val, val2]}
                modeCover
            />
        ));
    });
});

storiesOf(`EditorialBigImage`, module).add("centered text", () => (
    <EditorialBigImage
        image={RandomImage.getLandscape()}
        element={EditorialHeadline2}
        elementPosition={["center", "center"]}
    />
));

export {
    EditorialBigImageStory,
    EditorialBigImageStoryNike,
    EditorialBigImageStoryNike2,
    EditorialBigImageStoryNike3
};
