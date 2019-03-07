import React from "react";
import { storiesOf } from "@storybook/react";
import MenuBarCOS from "./MenuBarCOS";
import Unwrapper from "../../helpers/Unwrapper/Unwrapper";

const MenuBarCOS1 = <MenuBarCOS />;
storiesOf("MenuBar", module).add("default", () => (
    <div>
        <Unwrapper componentName={"MenuBar"} storyName={"default"} />
        {MenuBarCOS1}
    </div>
));

export default MenuBarCOS1;
