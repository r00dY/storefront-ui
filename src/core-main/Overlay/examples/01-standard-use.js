import React, { useState, useEffect, useRef } from "react";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import { Overlay, Color, Ease } from "storefront-ui";

export default () => {
    // This code doesn't have to be called every time. You just have to call it once in your app to tell Overlay where to place overlays.
    useEffect(() => {
        Overlay.setAppElement("#overlaysContainer");
    }, []);

    const configs = [
        // center
        {
            mode: "center",
            width: {
                xs: "90%",
                lg: "50%"
            },
            height: {
                xs: "90%",
                lg: "50%"
            }
        },
        // from right
        {
            mode: "right",
            width: {
                xs: "90vw",
                md: "50vw",
                lg: "33vw"
            }
        },
        // from left
        {
            mode: "right",
            width: "80%",
            animationTime: 0.8,
            animationEase: Ease.expoInOut
        },
        // from bottom, custom background color
        {
            mode: "bottom",
            height: "30%",
            backgroundColor: new Color("rgba(255, 0, 0, 0.2)")
        },
        // responsive

        // from bottom, custom background color
        {
            xs: {
                mode: "bottom",
                height: "90%"
            },
            md: {
                mode: "right",
                width: "50%"
            }
        }
    ];

    const [opened, setOpened] = useState(false);
    const [config, setConfig] = useState(null);

    return <div>
        <p>Click to open overlay in different configurations</p>

        <button onClick={() => { setConfig(configs[0]); setOpened(true)}}>mode: center, responsive size</button><br/><br/>
        <button onClick={() => { setConfig(configs[1]); setOpened(true)}}>mode: right, responsive size</button><br/><br/>
        <button onClick={() => { setConfig(configs[2]); setOpened(true)}}>mode: left, custom animation</button><br/><br/>
        <button onClick={() => { setConfig(configs[3]); setOpened(true)}}>mode: bottom, red background</button><br/><br/>
        <button onClick={() => { setConfig(configs[4]); setOpened(true)}}>mode: bottom on mobile, mode: right on desktop</button><br/><br/>

        <Overlay
            config={config}
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
