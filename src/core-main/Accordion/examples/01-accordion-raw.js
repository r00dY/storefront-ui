import React, { useState }from "react";
import {AccordionRaw} from "storefront-ui";

import { css } from "@emotion/core";

import LoremIpsum from "../../../../docs-utils/LoremIpsum";

export default () => {
    const [open, setOpen] = useState(true);

    return <div>
        <AccordionRaw css={`
            width: 300px;
        `} open={open}>
            <LoremIpsum />
        </AccordionRaw>
        <button onClick={() => setOpen(!open)}>{ open ? 'Hide' : 'Show' }</button>
    </div>
};
