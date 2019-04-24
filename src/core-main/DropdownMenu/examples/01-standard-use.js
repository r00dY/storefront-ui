import React, { useState } from "react";
import {DropdownMenu,DropdownMenuItem, Button} from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const Separator = () => <div css={css`
    width: 100%;
    height: 1px;
    background-color: lightgrey;
`}></div>;

const Header = (props) => <div css={css`
    padding: 12px;
    text-transform: uppercase;
    color: lightgrey;
`}>{props.children}</div>;

export default () => {
    return <div>
        <DropdownMenu
            trigger={<Button>Open dropdown</Button>}
        >
            <Header>Fruits</Header>
            <DropdownMenuItem key={"apple"} onClick={() => console.log('apple clicked')}>Apple</DropdownMenuItem>
            <DropdownMenuItem key={"orange"}>Orange</DropdownMenuItem>
            <DropdownMenuItem key={"peach"}>Peach</DropdownMenuItem>
            <Header>Veggies</Header>
            <DropdownMenuItem key={"carrot"} onClick={() => console.log('carrot clicked')}>Apple</DropdownMenuItem>
            <DropdownMenuItem key={"tomato"}>Tomato</DropdownMenuItem>
            <Separator />
            <DropdownMenuItem key={"wiki"} href={"https://www.wikipedia.org/"}>Link to Wikipedia</DropdownMenuItem>
        </DropdownMenu>
    </div>
};

