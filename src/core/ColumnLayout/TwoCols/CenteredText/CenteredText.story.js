import React from "react";
import { storiesOf } from "@storybook/react";
import CenteredText from "./CenteredText";

const _title = "New arrival";
const _text =
    "Jumpsuit in velour with a V-neck front and back. Narrow, adjustable shoulder straps, wrapover front with concealed button, and elasticized seam at waist with tie belt. Straight, wide legs.";

const CenteredTextStory = <CenteredText title={_title} text={_text} />;

storiesOf("CenteredText", module).add("default", () => CenteredTextStory);

export default CenteredTextStory;
