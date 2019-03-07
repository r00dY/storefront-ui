import React from "react";
import { storiesOf } from "@storybook/react";
import EditorialHalfImage from "./EditorialHalfImage";
import RandomImage from "../../../helpers/RandomImage";
import { EditorialHeadline1 } from "../../../helpers/Editorial/EditorialHeadline/EditorialHeadline.story";

const EditorialHalfImageStory = (
    <EditorialHalfImage
        image={RandomImage.getPortrait()}
        imageFirst
        element={EditorialHeadline1}
        elementPosition={"bottom"}
    />
);

storiesOf("EditorialHalfImage", module).add(
    "default",
    () => EditorialHalfImageStory
);

EditorialHalfImage.testOptions.elementPosition.forEach(val => {
    EditorialHalfImage.testOptions.imageFirst.forEach(val2 => {
        storiesOf("EditorialHalfImage", module).add(
            `${val}${val2 ? ", imageFirst" : ""}`,
            () => (
                <EditorialHalfImage
                    image={RandomImage.getPortrait()}
                    element={EditorialHeadline1}
                    elementPosition={val}
                    imageFirst={val2}
                />
            )
        );
    });
});

export default EditorialHalfImageStory;
