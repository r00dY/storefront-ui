import React, {useState} from "react";
import { rs } from "responsive-helpers";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import Index, {getAppearance} from "../StorefrontUIContext/StorefrontUIContext";
import PopupComponent from "../Popup/Popup";

function DropdownMenuItem() {
    return <></>;
}

function DropdownMenu({ className, style, open, stateless, appearance, children /* children can't be modified in DropdownMenu */, ...appearanceProps}) {

    return <Index.Consumer>
        {({ DropdownMenu, ListItem, Popup }) => {
            let { trigger, size, spacing, styles, popup, body, item } = getAppearance(
                appearance,
                appearanceProps,
                DropdownMenu
            );

            let content = (closePopup) => {
                let items = [];

                children.forEach((child, index) => {
                    let element;

                    let key = child.key ? child.key : index;

                    /**
                     * DropdownMenuItem
                     */
                    if (child.type === DropdownMenuItem) {
                        let { onClick, href, appearance, selected, ...appearanceProps } = child.props;

                        if (!appearance) {
                            appearance = item;
                        }

                        let { children } = getAppearance(
                            appearance,
                            appearanceProps,
                            ListItem,
                        );

                        let content = typeof children === 'function' ? children({focused: false, selected: selected ? true : false }) : children;

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
                            element = <div key={key}><a href={href} css={css`
                                text-decoration: none;
                                &:visited, &:active, &:hover, &:link {
                                    color: black;
                                }
                            `}>{content}</a></div>;
                        }
                    } else {
                        element = child;
                    }

                    items.push(element);
                });

                body = body || ((x) => <>{x}</>);

                return body(items);
            };

            popup = popup || {};
            if (typeof popup === 'string') {
                popup = { appearance: popup }
            }

            popup = Object.assign({}, {
                className, style, open, stateless, appearance, trigger, size, spacing, styles
            }, popup);

            return <PopupComponent {...popup}>
                {content}
            </PopupComponent>
        }}
    </Index.Consumer>;

}

DropdownMenu.defaultProps = {
    stateless: false
};

export {
    DropdownMenu,
    DropdownMenuItem
};
