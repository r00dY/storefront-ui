import React, { useState } from "react";
import { Popup, Button } from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

export default () => {

    const [open, setOpen] = useState(false);

    return <div>
        <p>Standard</p>
        <Popup trigger={<Button onClick={() => setOpen(!open)}>Open dropdown</Button>} open={open}><div css={css`padding: 10px`}>Hello world!</div></Popup>
    </div>
};
