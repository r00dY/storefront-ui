import React, { useState } from "react";
import { Popup, Button } from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import LoremIpsum from "../../../../docs-utils/LoremIpsum";

export default () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    return <div>
        <p>Standard</p>
        <Popup trigger={<Button onClick={() => setOpen(!open)}>Open dropdown</Button>} open={open}><div css={css`padding: 10px`}>Hello world!</div></Popup>

        <p>Custom, no shadow, custom size</p>
        <Popup
            trigger={<Button onClick={() => setOpen2(!open2)}>Open dropdown</Button>} open={open2}
            styles={`
                border: 1px solid black;
                background-color: white;
            `}
            size={{
                width: 600,
                maxHeight: 600
            }}
        >
            <div css={css`padding: 10px`}><LoremIpsum/><br/><LoremIpsum/><br/><LoremIpsum/></div>
        </Popup>

    </div>
};
