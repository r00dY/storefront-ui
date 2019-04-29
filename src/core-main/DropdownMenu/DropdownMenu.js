import React, {useState} from "react";
import { rs } from "responsive-helpers";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import StorefrontUIContext, {getAppearance} from "../StorefrontUIContext/StorefrontUIContext";
import PopupComponent from "../Popup/Popup";


// props.selected, props.focused
const defaultItemListAppearance = ({ children, focused }) => <div css={css`
        &:hover {
            background-color: lightgrey;
        }
    `}>{children}</div>


function DropdownMenuItem() {
    return <></>;
}

function DropdownMenu(props) {
    let { open, trigger, children, stateless, appearance, size, spacing, styles, popup, body, item, ...propsExtra} = props;

    return <StorefrontUIContext.Consumer>
        {({ DropdownMenu, ListItem, Popup }) => {
            let appearance = getAppearance(appearance, "DropdownMenu", { default: () => ({}) }, DropdownMenu)(propsExtra);

            let content = (closePopup) => {

                let items = [];

                children.forEach((child, index) => {
                    let element;

                    let key = child.key ? child.key : index;

                    if (child.type === DropdownMenuItem) {
                        let { onClick, href, appearance, ...props } = child.props;

                        appearance = getAppearance(appearance, "DropdownMenuItem", { default: appearance.item || defaultItemListAppearance }, ListItem);

                        let content = appearance({
                            ...props,
                            focused: false
                        });

                        element =
                            <div css={css`
                        cursor: pointer;
                    `} onClick={() => {
                                if (onClick) { onClick() }
                                closePopup();
                            }}
                                 key={key}
                            >
                                {content}
                            </div>;

                        if (href) {
                            element = <div key={key}><a href={href}>{content}</a></div>;
                        }
                    } else {
                        element = child;
                    }

                    items.push(element);
                });

                body = body || ((x) => <>{x}</>);

                return body(items)
            };


            // open, trigger, children, stateless, appearance, size, spacing, styles

            let popupChildren = {
                appearance: appearance.popup,
                open,
                trigger,
                stateless,
                size,
                spacing,
                styles,
                ...propsExtra
            };

            return <PopupComponent {...popupChildren}>
                {content}
            </PopupComponent>
        }}
    </StorefrontUIContext.Consumer>;

}

DropdownMenu.defaultProps = {
    stateless: false
};

export {
    DropdownMenu,
    DropdownMenuItem
};
