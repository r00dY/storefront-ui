import React from "react";
import { storiesOf } from "@storybook/react";
import MenuBarNike from "./MenuBarNike";
import Unwrapper from "../../helpers/Unwrapper/Unwrapper";

const MenuBarNikeStory = <MenuBarNike />;
storiesOf("MenuBarNike", module).add("default", () => (
    <div>
        <Unwrapper componentName={"MenuBarNike"} storyName={"default"} />
        {MenuBarNikeStory}
    </div>
));

export default MenuBarNikeStory;
