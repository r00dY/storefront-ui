import React from "react";
import { storiesOf } from "@storybook/react";
import NotificationBar from "./NotificationBar";
import Unwrapper from "../Unwrapper/Unwrapper";
import fonts from "../../fonts.config";

const NotificationBarStory = (
    <NotificationBar
        font={fonts.COS.text3}
        text={"Free shipping and returns on all orders"}
    />
);
storiesOf("NotificationBar", module).add("default", () => (
    <div>
        <Unwrapper componentName={"NotificationBar"} storyName={"default"} />
        {NotificationBarStory}
    </div>
));

export default NotificationBarStory;
