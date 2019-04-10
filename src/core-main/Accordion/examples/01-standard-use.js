import React, { useState }from "react";
import {Accordion} from "storefront-ui";

import { css } from "@emotion/core";

import LoremIpsum from "../../../../docs-utils/LoremIpsum";

export default () => {
    const [open, setOpen] = useState(true);

    return <div>
        <Accordion css={`
            width: 300px;
        `} open={open}>
            <LoremIpsum />
        </Accordion>
        <button onClick={() => setOpen(!open)}>{ open ? 'Hide' : 'Show' }</button>
    </div>
};
