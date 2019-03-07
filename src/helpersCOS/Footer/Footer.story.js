import React from "react";
import { storiesOf } from "@storybook/react";
import Footer from "./Footer";
import Unwrapper from "../../helpers/Unwrapper/Unwrapper";

const FooterStory = <Footer />;
storiesOf("Footer", module).add("default", () => (
    <div>
        <Unwrapper componentName={"Footer"} storyName={"default"} />
        {FooterStory}
    </div>
));

export default FooterStory;
