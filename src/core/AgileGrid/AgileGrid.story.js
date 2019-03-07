import React from "react";
import { storiesOf } from "@storybook/react";
import AgileGrid from "./AgileGrid";
import {
    ImageContentBoxStory,
    ImageContentBoxStory2,
    ImageContentBoxStory3,
    ImageContentBoxStory4,
    ImageContentBoxStory5,
    ImageContentBoxStoryFixed,
    ImageContentBoxStoryFixed2,
    ImageContentBoxStoryFixed3,
    ImageContentBoxStoryFixed4
} from "../../helpers/ImageContentBox/ImageContentBox.story";
import Unwrapper from "../../helpers/Unwrapper/Unwrapper";
import { RangeSet } from "responsive-helpers";

import {
    ProductBox11,
    ProductBox12,
    ProductBox13,
    ProductBox14
} from "../../helpers/ProductBox1/ProductBox1.story";
import {
    ProductBox2Story,
    ProductBox2Story2,
    ProductBox2Story3,
    ProductBox2Story4
} from "../../helpers/ProductBox2/ProductBox2.story";

const _breakpoints = [
    {
        min: 0,
        mode: "slider",
        gridStyle: {
            gridAutoColumns: "90%", // slide width
            alignItems: "start"
        }
    },
    {
        min: RangeSet.main.get("md").from,
        mode: "slider",
        gridStyle: {
            gridAutoColumns: "calc(50% - 10px)", // slide width
            alignItems: "start"
        }
    },
    {
        min: RangeSet.main.get("lg").from,
        mode: "grid",
        gridStyle: {
            gridTemplateColumns: `repeat(4 ,1fr)`,
            alignItems: "start"
        }
    }
];
const _breakpoints2 = [
    {
        min: 0,
        mode: "slider",
        gridStyle: {
            gridAutoColumns: "100%", // slide width
            alignItems: "end"
        }
    },
    {
        min: RangeSet.main.get("md").from,
        mode: "slider",
        gridStyle: {
            gridAutoColumns: "calc(50% - 10px)", // slide width
            alignItems: "end"
        }
    },
    {
        min: RangeSet.main.get("lg").from,
        mode: "grid",
        gridStyle: {
            gridTemplateColumns: `repeat(6 ,1fr)`,
            alignItems: "end"
        }
    }
];
const _breakpoints3 = [
    {
        min: 0,
        mode: "grid",
        visibleItems: 4,
        gridStyle: {
            gridTemplateColumns: `repeat(2 ,1fr)`
        }
    },
    {
        min: RangeSet.main.get("md").from,
        mode: "grid",
        visibleItems: 4,
        gridStyle: {
            gridTemplateColumns: `repeat(4 ,1fr)`
        }
    },
    {
        min: RangeSet.main.get("lg").from,
        mode: "grid",
        gridStyle: {
            gridTemplateColumns: `repeat(4 ,1fr)`,
            alignItems: "end"
        }
    }
];

const _breakpoints4 = [
    {
        min: 0,
        mode: "slider",
        snap: "center",
        gridStyle: {
            gridAutoColumns: "90%" // slide width
        }
    },
    {
        min: RangeSet.main.get("md").from,
        mode: "slider",
        snap: "center",
        gridStyle: {
            gridAutoColumns: "90%" // slide width
        }
    },
    {
        min: RangeSet.main.get("lg").from,
        mode: "slider",
        includeGridMargins: true,
        snap: "start",
        gridStyle: {
            gridAutoColumns: `calc((100% - 3 * 36px) / 4)` // slide width
        }
    }
];
const _breakpoints5 = [
    {
        min: 0,
        mode: "grid",
        gridStyle: {
            gridTemplateColumns: `repeat(2 ,1fr)`
        }
    },
    {
        min: RangeSet.main.get("md").from,
        mode: "grid",
        gridStyle: {
            gridTemplateColumns: `repeat(4 ,1fr)`
        }
    },
    {
        min: RangeSet.main.get("lg").from,
        mode: "grid",
        gridStyle: {
            gridTemplateColumns: `repeat(4 ,1fr)`
        }
    }
];
storiesOf("AgileGrid", module).add("default", () => (
    <div>
        <Unwrapper componentName={"AgileGrid"} storyName={"default"} />
        <AgileGrid breakpoints={_breakpoints}>
            {ImageContentBoxStory}
            {ImageContentBoxStory2}
            {ImageContentBoxStory3}
            {ImageContentBoxStory4}
            {ImageContentBoxStory}
            {ImageContentBoxStory4}
            {ImageContentBoxStory3}
            {ImageContentBoxStory2}
            {ImageContentBoxStory3}
            {ImageContentBoxStory4}
            {ImageContentBoxStory5}
            {ImageContentBoxStory}
            {ImageContentBoxStory4}
            {ImageContentBoxStory}
            {ImageContentBoxStory4}
            {ImageContentBoxStory3}
            {ImageContentBoxStory2}
            {ImageContentBoxStory3}
            {ImageContentBoxStory4}
            {ImageContentBoxStory}
            {ImageContentBoxStory4}
        </AgileGrid>
    </div>
));
storiesOf("AgileGrid", module).add("equal items content height", () => (
    <div>
        <Unwrapper
            componentName={"AgileGrid"}
            storyName={"equal%20items%20content%20height"}
        />
        <AgileGrid breakpoints={_breakpoints2}>
            {ImageContentBoxStoryFixed}
            {ImageContentBoxStoryFixed2}
            {ImageContentBoxStoryFixed3}
            {ImageContentBoxStoryFixed4}

            {ImageContentBoxStoryFixed4}
            {ImageContentBoxStoryFixed2}
            {ImageContentBoxStoryFixed}
            {ImageContentBoxStoryFixed3}

            {ImageContentBoxStoryFixed}
            {ImageContentBoxStoryFixed2}
            {ImageContentBoxStoryFixed3}
            {ImageContentBoxStoryFixed4}
            {ImageContentBoxStoryFixed3}
            {ImageContentBoxStoryFixed4}
            {ImageContentBoxStoryFixed2}
            {ImageContentBoxStoryFixed}
        </AgileGrid>
    </div>
));
storiesOf("AgileGrid", module).add("visibleItems", () => (
    <div>
        <Unwrapper componentName={"AgileGrid"} storyName={"visibleItems"} />
        <AgileGrid breakpoints={_breakpoints3}>
            {ImageContentBoxStoryFixed}
            {ImageContentBoxStoryFixed2}
            {ImageContentBoxStoryFixed3}
            {ImageContentBoxStoryFixed4}

            {ImageContentBoxStoryFixed4}
            {ImageContentBoxStoryFixed2}
            {ImageContentBoxStoryFixed}
            {ImageContentBoxStoryFixed3}

            {ImageContentBoxStoryFixed}
            {ImageContentBoxStoryFixed2}
            {ImageContentBoxStoryFixed3}
            {ImageContentBoxStoryFixed4}
        </AgileGrid>
    </div>
));
storiesOf("AgileGrid", module).add("sliders", () => (
    <div>
        <Unwrapper componentName={"AgileGrid"} storyName={"sliders"} />
        <AgileGrid breakpoints={_breakpoints4}>
            {ImageContentBoxStoryFixed}
            {ImageContentBoxStoryFixed2}
            {ImageContentBoxStoryFixed3}
            {ImageContentBoxStoryFixed4}

            {ImageContentBoxStoryFixed4}
            {ImageContentBoxStoryFixed2}
            {ImageContentBoxStoryFixed}
            {ImageContentBoxStoryFixed3}

            {ImageContentBoxStoryFixed}
            {ImageContentBoxStoryFixed2}
            {ImageContentBoxStoryFixed3}
            {ImageContentBoxStoryFixed4}
        </AgileGrid>
    </div>
));
const AgileGridStoryNike = (
    <AgileGrid breakpoints={_breakpoints}>
        {ProductBox2Story}
        {ProductBox2Story2}
        {ProductBox2Story3}
        {ProductBox2Story4}
    </AgileGrid>
);
storiesOf("AgileGrid", module).add("nike", () => (
    <div>
        <Unwrapper componentName={"AgileGrid"} storyName={"nike"} />
        {AgileGridStoryNike}
    </div>
));
const AgileGridStory = (
    <div>
        <div className={"AgileGrid__title"}>You may also like</div>
        <AgileGrid breakpoints={_breakpoints5}>
            {ProductBox11}
            {ProductBox12}
            {ProductBox13}
            {ProductBox14}
        </AgileGrid>
    </div>
);
storiesOf("AgileGrid", module).add("products", () => AgileGridStory);

export { AgileGridStory, AgileGridStoryNike };
