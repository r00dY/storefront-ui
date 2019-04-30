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
    `}>{children}</div>;


function DropdownMenuItem() {
    return <></>;
}

function DropdownMenu(props) {
    let { open, trigger, children, stateless, appearance, size, spacing, styles, popup, body, item, ...propsExtra} = props;

    return <StorefrontUIContext.Consumer>
        {({ DropdownMenu, ListItem, Popup }) => {
            let values = getAppearance(
                appearance,
                {
                    ...propsExtra
                },
                {
                    trigger, size, spacing, styles, popup, body, item
                },
                DropdownMenu
            );

            let dropdownMenuValues = values;

            let content = (closePopup) => {
                let items = [];

                children.forEach((child, index) => {
                    let element;

                    let key = child.key ? child.key : index;

                    if (child.type === DropdownMenuItem) {
                        let { onClick, href, appearance, children, ...extraProps } = child.props;

                        let values = getAppearance(
                            appearance,
                            { ...extraProps, children, focused: false },
                            { children },
                            { default: dropdownMenuValues.item || defaultItemListAppearance },
                            ListItem
                        );

                        let content = typeof values.children === 'function' ? values.children({focused: false}) : values.children;

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

                values.body = values.body || ((x) => <>{x}</>);

                return values.body(items)
            };

            // open, trigger, children, stateless, appearance, size, spacing, styles
            let popupChildren = {
                appearance: values.popup,
                open,
                stateless,
                trigger: values.trigger,
                size: values.size,
                spacing: values.spacing,
                styles: values.styles,
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
