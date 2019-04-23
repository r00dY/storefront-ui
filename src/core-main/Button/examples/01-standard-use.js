import React from "react";
import { Button } from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

export default () => (
    <div>
        <p>Natural size</p>
        <Button onClick={() => { alert('button clicked!') }}>Cześć</Button>
        <p>CSS size</p>
        <Button css={css`
            width: 250px;
            height: 100px;
        `}>
            Cześć
        </Button>
        <p>Disabled</p>
        <Button disabled={true} onClick={() => alert('disabled button, this message will never show')}>I'm disabled</Button>
        <p>Raw</p>
        <Button mode="raw" onClick={() => alert('disabled button, this message will never show')}>I'm a raw button, totally unstyled, but focusable and clickable.</Button>
    </div>
);
