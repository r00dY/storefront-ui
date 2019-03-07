import React from "react";
import { storiesOf } from "@storybook/react";
import FooterNike from "./FooterNike";
import Unwrapper from "../../helpers/Unwrapper/Unwrapper";

const FooterNikeStory = <FooterNike />;
storiesOf("FooterNike", module).add("default", () => (
    <div>
        <Unwrapper componentName={"FooterNike"} storyName={"default"} />
        {FooterNikeStory}
    </div>
));

export default FooterNikeStory;
