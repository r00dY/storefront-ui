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

function Popup(props) {
    const { className, style, open, trigger, children, stateless, appearance, size, spacing, styles, ...extraProps } = props;
    const [open2, setOpen2] = useState(false);

    return <StorefrontUIContext.Consumer>
        {({ Popup, PopupSize }) => {

            // Get canonical traits
            let values = getAppearance(
                appearance,
                props,
                extraProps,
                {
                    size: "medium",
                    spacing: 10,
                    styles: `
                        background-color: white;
                        box-shadow: 0 0px 14px rgba(0, 0, 0, 0.15);
                    `
                },
                Popup
            );

            values.size = getAppearance(values.size, {}, {}, popupSizeDefault.medium, popupSizeDefault, PopupSize);

            console.log(values);

            let triggerProps;
            let isOpen;

            if (stateless) {
                triggerProps = {
                    popupOpened: open
                };
                isOpen = open;
            } else {
                triggerProps = {
                    popupOpened: open2,
                    onClick: (e) => {
                        setOpen2(!open2);

                        if (trigger.props.onClick) {
                            trigger.props.onClick(e);
                        }
                    }
                };
                isOpen = open2;
            }
            let triggerCloned = React.cloneElement(trigger, triggerProps);

            let content = typeof children === 'function' ? children(() => setOpen2(false)) : children;

            // let popupStyles = props.styles || defaultPopupStyles;
            // let size = typeof props.size === "object" ? props.size : popupSizes[props.size || "medium"] ;
            // let spacing = rs(props.spacing || 10); // TODO: make ResponsiveMap.map function return responsivesizes, not segments, and make it easy to return value only (calc(...))

            return <div className={className} style={style}>

                <div css={css`
                    position: relative;
                `}>

                    <div css={css`

                    `}>
                        {triggerCloned}
                    </div>

                    <div css={css`


                padding: 0;
                overflow-y: auto;

                ${values.styles}

                position: absolute;

                ${rs(values.size.width).css('width')}
                ${rs(values.size.maxHeight).css('max-height')}
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
