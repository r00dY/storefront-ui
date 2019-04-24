import React, { useState } from "react";
import {DropdownMenu,DropdownMenuItem, Button} from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

export default () => {
    return <div>
        <DropdownMenu
            trigger={<Button>Open dropdown</Button>}
        >
            <DropdownMenuItem key={"apple"} onClick={() => console.log('apple clicked')}>Apple</DropdownMenuItem>
            <DropdownMenuItem key={"orange"}>Orange</DropdownMenuItem>
            <DropdownMenuItem key={"peach"}>Peach</DropdownMenuItem>
            <DropdownMenuItem key={"wiki"} href={"https://www.wikipedia.org/"}>Link to Wikipedia</DropdownMenuItem>
        </DropdownMenu>
    </div>
};

