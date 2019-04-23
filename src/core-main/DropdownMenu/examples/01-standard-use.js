import React from "react";
import {DropdownMenu, Button} from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const fruits = [
    {
        id: "apple",
        label: "Apple"
    },
    {
        id: "orange",
        label: "Orange",
    },
    {
        id: "peach",
        label: "Peach"
    }
];

export default () => (
    <div>
        <DropdownMenu
            data={fruits}
            trigger={<Button>Open dropdown</Button>}
            onClick={(item) => console.log('item clicked!', item)}
        />
    </div>
);
