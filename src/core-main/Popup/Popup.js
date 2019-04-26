import React, {useState} from "react";
import { rs } from "responsive-helpers";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const defaultPopupStyles = `
        background-color: white;
        box-shadow: 0 0px 14px rgba(0, 0, 0, 0.15);
        padding: 0;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    `;

const popupSizes = {
    small: {
        width: 200,
        maxHeight: 350
    },
    medium: {
        width: 250,
        maxHeight: 400
    },
    large: {
        width: 300,
        maxHeight: 500
    }
};

function Popup(props) {

    let trigger = React.cloneElement(props.trigger, {
        popupOpened: props.open
    });

    let popupStyles = props.styles || defaultPopupStyles;
    let size = typeof props.size === "object" ? props.size : popupSizes[props.size || "medium"] ;
    let spacing = rs(props.spacing || 10); // TODO: make ResponsiveMap.map function return responsivesizes, not segments, and make it easy to return value only (calc(...))

    return <div className={props.className} style={props.style}>

        <div css={css`
            position: relative;
        `}>

            <div css={css`

            `}>
                {trigger}
            </div>

            <div css={css`
                ${popupStyles}

                position: absolute;

                ${rs(size.width).css('width')}
                ${rs(size.maxHeight).css('max-height')}
                height: auto;

                top: calc(100% + 10px);
                left: 0;

                z-index: 1000;

                transition: all 100ms;
                opacity: ${props.open ? 1 : 0};
                visibility: ${props.open ? 'visible' : 'hidden'};
            `}>
                {props.children}
            </div>

        </div>
    </div>;
}

export default Popup;
