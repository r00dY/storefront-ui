import React from "react";
import { storiesOf } from "@storybook/react";
import ColumnLayout from "./ColumnLayout";
import { ThumbnailsListStory } from "./ThumbnailsList/ThumbnailsList.story";
import {
    TwoColsStory,
    TwoColsStory2,
    TwoColsStory3,
    TwoColsStory4,
    TwoColsStory5,
    TwoColsStoryNike
} from "./TwoCols/TwoCols.story";
import {
    ProductMeta1,
    ProductMeta2
} from "../../helpers/ProductMeta/ProductMeta.story";

storiesOf("ColumnLayout", module).add("main 2 cols", () => (
    <ColumnLayout
        left={ThumbnailsListStory}
        main={TwoColsStory}
        right={ProductMeta1}
    />
));

storiesOf("ColumnLayout", module).add("main 2 cols with full width", () => (
    <ColumnLayout
        left={ThumbnailsListStory}
        main={TwoColsStory2}
        right={ProductMeta1}
    />
));
storiesOf("ColumnLayout", module).add("main all full width", () => (
    <ColumnLayout
        left={ThumbnailsListStory}
        main={TwoColsStory3}
        right={ProductMeta1}
    />
));
storiesOf("ColumnLayout", module).add("main with full width and text", () => (
    <ColumnLayout
        left={ThumbnailsListStory}
        main={TwoColsStory4}
        right={ProductMeta1}
    />
));
const ColumnLayoutStory = (
    <ColumnLayout
        left={ThumbnailsListStory}
        main={TwoColsStory5}
        right={ProductMeta1}
    />
);
storiesOf("ColumnLayout", module).add(
    "main mixed with video",
    () => ColumnLayoutStory
);
const ColumnLayoutStoryNike = (
    <ColumnLayout main={TwoColsStoryNike} right={ProductMeta2} isNike />
);
storiesOf("ColumnLayout", module).add("nike", () => ColumnLayoutStoryNike);

export { ColumnLayoutStory, ColumnLayoutStoryNike };
