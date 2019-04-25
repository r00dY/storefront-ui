import React, { useState } from "react";
import {DropdownMenu,DropdownMenuItem, Button, StorefrontUIContext } from "storefront-ui";

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

const CustomListItemAppearance = (props) => <div css={css`
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

        <p><code>crazy</code> appearance</p>
        <DropdownMenu trigger={trigger} size={"large"} appearance={"crazy"}>
            {items}
        </DropdownMenu>

        <p>Custom <code>appearance</code></p>
        <DropdownMenu trigger={trigger}>
            <DropdownMenuItem key={"apple"} appearance={CustomListItemAppearance}>Apple</DropdownMenuItem>
            <DropdownMenuItem key={"orange"} appearance={CustomListItemAppearance}>Orange</DropdownMenuItem>
            <DropdownMenuItem key={"peach"} appearance={CustomListItemAppearance}>Peach</DropdownMenuItem>
        </DropdownMenu>

        <p>Custom <code>appearance</code> registered</p>
        <StorefrontUIContext.Provider value={{ /* should be in some global config in the project */
            ListItem: {
                custom: CustomListItemAppearance
            }
        }}>
            <DropdownMenu trigger={trigger}>
                <DropdownMenuItem key={"apple"} appearance={"custom"}>Apple</DropdownMenuItem>
                <DropdownMenuItem key={"orange"} appearance={"custom"}>Orange</DropdownMenuItem>
                <DropdownMenuItem key={"peach"} appearance={"custom"}>Peach</DropdownMenuItem>
            </DropdownMenu>
        </StorefrontUIContext.Provider>

    </div>
};

