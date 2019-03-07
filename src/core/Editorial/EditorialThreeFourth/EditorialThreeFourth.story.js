import React from "react";
import { storiesOf } from "@storybook/react";
import EditorialThreeFourth from "./EditorialThreeFourth";

const _title = "Foundation";
const _paragraph = `The open-air Kivik Art Centre in Sweden blurs the boundary between the man-made and the natural. It's the ideal context for this season's COS collection for men, revealed in a collaboration with the photographer and artist Viviane Sassen.`;

const EditorialThreeFourthStory = (
    <EditorialThreeFourth
        title={_title}
        text={_paragraph}
        image={{
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_landscape_4.jpg",
            w: 3385,
            h: 2257,
            alt: "editorial_landscape_4"
        }}
    />
);

storiesOf("EditorialThreeFourth", module).add(
    "default",
    () => EditorialThreeFourthStory
);

export default EditorialThreeFourthStory;
