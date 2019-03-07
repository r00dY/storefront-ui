import React from "react";
import { storiesOf } from "@storybook/react";
import EditorialHeadline from "./EditorialHeadline";
import fonts from "../../../fonts.config";

const _title = "Outline";
const _paragraph = `The open-air Kivik Art Centre in Sweden blurs the boundary between the man-made and the natural. It's the ideal context for this season's COS collection for men, revealed in a collaboration with the photographer and artist Viviane Sassen.`;

const _title2 = `WHAT IS NIKEZOOMX?`;
const _paragraph2 = `Nike ZoomX is lighter, softer and more responsive than any Nike foam, designed to maximize speed by delivering greater energy return. ZoomX was derived from a foam traditionally used in aerospace innovation, applied for the first time in performance footwear in the Nike Zoom Vaporfly Elite and 4%.`;
const _title3 = "LIGHTWEIGHT COMFORT";
const _paragraph3 = `Nike ZoomX is our lightest foam, giving you more cushioning without the weight.`;

const EditorialHeadline1 = (
    <EditorialHeadline
        title={_title}
        paragraph={_paragraph}
        titleFont={fonts.COS.heading1}
        paragraphFont={fonts.COS.text1}
        textColor={"black"}
    />
);
const EditorialHeadline2 = (
    <EditorialHeadline
        title={_title}
        paragraph={_paragraph}
        titleFont={fonts.COS.heading1}
        paragraphFont={fonts.COS.text1}
        textColor={"black"}
        textAlign={"center"}
    />
);
const EditorialHeadline3 = (
    <EditorialHeadline
        title={_title2}
        paragraph={_paragraph2}
        titleFont={fonts.NIKE.heading1}
        paragraphFont={fonts.NIKE.text1}
        textAlign={"center"}
    />
);
const EditorialHeadline4 = (
    <EditorialHeadline
        title={_title3}
        paragraph={_paragraph3}
        titleFont={fonts.NIKE.heading1}
        paragraphFont={fonts.NIKE.text1}
        textAlign={"center"}
    />
);

storiesOf("EditorialHeadline", module).add(
    "EditorialHeadline1",
    () => EditorialHeadline1
);
storiesOf("EditorialHeadline", module).add(
    "EditorialHeadline2",
    () => EditorialHeadline2
);
storiesOf("EditorialHeadline", module).add(
    "EditorialHeadline3",
    () => EditorialHeadline3
);
storiesOf("EditorialHeadline", module).add(
    "EditorialHeadline4",
    () => EditorialHeadline4
);

export {
    EditorialHeadline1,
    EditorialHeadline2,
    EditorialHeadline3,
    EditorialHeadline4
};
