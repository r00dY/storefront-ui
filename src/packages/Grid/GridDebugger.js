import Index from "../Container/Container";
import {Grid, GridItem} from "./Grid";
import Layout from "../Layout";
import React, { useEffect, useState } from "react";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const GridDebugger = () => {

    const [open, setOpen] = useState(false);

    const onKeyPress = (event) => {
        if (event.keyCode === 76 && event.ctrlKey) {
            setOpen(!open);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", onKeyPress, false);

        return () => {
            document.removeEventListener("keydown", onKeyPress, false);
        }
    });

    return <div css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 2147483647;
        pointer-events: none;
        display: ${ open ? "block" : "none"};
    `}>
        <Index>
            <Grid>
                {
                    [...Array(Layout.main.colNumber)].map((e, i) => <GridItem params={1} key={i}>
                        <div css={css`
                        height: 100vh;
                        background-color: coral;
                        opacity: 0.25;
                    `}/>
                    </GridItem>)
                }
            </Grid>
        </Index>
    </div>
};

export default GridDebugger;
