import React, {useState} from "react";
import { rs } from "responsive-helpers";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import StorefrontUIContext, { getAppearance } from "../StorefrontUIContext/StorefrontUIContext";

const defaultPopupStyles = `
    background-color: white;
    box-shadow: 0 0px 14px rgba(0, 0, 0, 0.15);
    padding: 0;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

const popupSizeDefault = {
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

popupSizeDefault.default = popupSizeDefault.medium;

const appearanceDefault = () => ({
    size: "medium",
    spacing: 10,
    styles: `
        background-color: white;
        box-shadow: 0 0px 14px rgba(0, 0, 0, 0.15);
    `
});

function Popup({ open, children, size, appearance, stateless, ...props }) {
    const [open2, setOpen2] = useState(false);

    return <StorefrontUIContext.Consumer>
        {({ Popup, PopupSize }) => {

            appearance = getAppearance(appearance, "Popup", { default: appearanceDefault }, Popup)(props);
            size = getAppearance(size || appearance.size, "PopupSize", popupSizeDefault, PopupSize);

            let triggerProps;
            let isOpen;

            if (stateless) {
                triggerProps = {
                    popupOpened: props.open
                };
                isOpen = props.open;
            } else {
                triggerProps = {
                    popupOpened: open,
                    onClick: (e) => {
                        setOpen2(!open2);

                        if (props.trigger.props.onClick) {
                            props.trigger.props.onClick(e);
                        }
                    }
                };
                isOpen = open2;
            }
            let trigger = React.cloneElement(props.trigger, triggerProps);

            let content = typeof children === 'function' ? children(() => setOpen2(false)) : children;

            // let popupStyles = props.styles || defaultPopupStyles;
            // let size = typeof props.size === "object" ? props.size : popupSizes[props.size || "medium"] ;
            // let spacing = rs(props.spacing || 10); // TODO: make ResponsiveMap.map function return responsivesizes, not segments, and make it easy to return value only (calc(...))

            return <div className={props.className} style={props.style}>

                <div css={css`
                    position: relative;
                `}>

                    <div css={css`

            `}>
                        {trigger}
                    </div>

                    <div css={css`


                padding: 0;
                overflow-y: auto;

                ${appearance.styles}

                position: absolute;

                ${rs(size.width).css('width')}
                ${rs(size.maxHeight).css('max-height')}
                height: auto;

                top: calc(100% + 10px);
                left: 0;

                z-index: 1000;

                transition: all 100ms;
                opacity: ${isOpen ? 1 : 0};
                visibility: ${isOpen ? 'visible' : 'hidden'};
            `}>
                        {content}
                    </div>

                </div>
            </div>;
        }}
    </StorefrontUIContext.Consumer>;
}

Popup.defaultProps = {
    stateless: false
};

export default Popup;
