import React, { useState, useEffect, useRef } from "react";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import { Overlay } from "storefront-ui";

export default () => {
    const [opened, setOpened] = useState(false);

    // This code doesn't have to be called every time. You just have to call it once in your app to tell Overlay where to place overlays.
    useEffect(() => {
        Overlay.setAppElement("#overlaysContainer");
    }, []);

    return <div>
        <p>Absolutely positioned overlay</p>

        <button onClick={() => setOpened(true)}>Open overlay</button>

        <Overlay
            config={Overlay.slideFromRight({ width: "30%" })}
            isOpen={opened}
            onRequestClose={() => setOpened(false)}
        >
            <div css={css`
                position: absolute;
                background-color: lightgoldenrodyellow;
                width: 100%;
                height: 100%;
                padding: 20px;
                box-sizing: border-box;
            `}>
                <p>Hello world</p>
                <button onClick={() => setOpened(false)}>Close overlay</button>
            </div>
        </Overlay>

    </div>
};

// mode
// width
// height (in case of centered: auto, minHeight, minWidth).
