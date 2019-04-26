import React, { useState } from "react";
import { DropdownMenu,DropdownMenuItem, Button, Popup } from "storefront-ui";

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

const CustomListItem = (props) => <div css={css`
    padding: 8px;
    background-color: grey;
    text-transform: uppercase;
    color: white;

    &:hover {
        background-color: red;
    }
`}>{props.children}</div>;

export default () => {

    const items = [
        <Header key={"fruits"}>Fruits</Header>,
        <DropdownMenuItem key={"apple"} onClick={() => console.log('apple clicked')}>Apple</DropdownMenuItem>,
        <DropdownMenuItem key={"orange"}>Orange</DropdownMenuItem>,
        <DropdownMenuItem key={"peach"}>Peach</DropdownMenuItem>,
        <Header key={"veggies"}>Veggies</Header>,
        <DropdownMenuItem key={"carrot"} onClick={() => console.log('carrot clicked')}>Apple</DropdownMenuItem>,
        <DropdownMenuItem key={"tomato"}>Tomato</DropdownMenuItem>,
        <DropdownMenuItem key={"cucumber"}>Cucumber</DropdownMenuItem>,
        <DropdownMenuItem key={"potato"}>Potato</DropdownMenuItem>,
        <DropdownMenuItem key={"salad"}>Salad</DropdownMenuItem>,
        <Separator key={"sep1"}/>,
        <DropdownMenuItem key={"wiki"} href={"https://www.wikipedia.org/"}>Link to Wikipedia</DropdownMenuItem>,
    ];

    const trigger = <Button>Open dropdown</Button>;

    return <div>
        <p>Standard</p>
        <DropdownMenu trigger={trigger}>
            {items}
        </DropdownMenu>

        <p><code>small</code> size</p>
        <DropdownMenu trigger={trigger} size={"small"}>
            {items}
        </DropdownMenu>

        <p><code>large</code> size</p>
        <DropdownMenu trigger={trigger} size={"large"}>
            {items}
        </DropdownMenu>

        <p>custom size</p>
        <DropdownMenu trigger={trigger} size={{width: 500, maxHeight: 500 }}>
            {items}
        </DropdownMenu>

        <p>custom <code>Popup</code></p>
        <DropdownMenu trigger={trigger} popup={<Popup styles={`border: 1px solid black; background-color: white;`} />}>
            {items}
        </DropdownMenu>

        <p>custom <code>body</code></p>
        <DropdownMenu trigger={trigger} body={(items) => <div css={css`padding: 10px; background-color: red; > * { margin-bottom: 10px; }`}>{items}</div>}>
            {items}
        </DropdownMenu>

        <p>Custom item look</p>
        <DropdownMenu trigger={trigger}>
            <DropdownMenuItem key={"apple"}>{ (focused) => <CustomListItem focused={focused}>Apple</CustomListItem> }</DropdownMenuItem>
            <DropdownMenuItem key={"orange"}>{ (focused) => <CustomListItem focused={focused}>Orange</CustomListItem> }</DropdownMenuItem>
            <DropdownMenuItem key={"peach"}>{ (focused) => <CustomListItem focused={focused}>Peach</CustomListItem> }</DropdownMenuItem>
        </DropdownMenu>

    </div>
};
