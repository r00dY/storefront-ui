import React, {useState} from "react";
import { rs } from "responsive-helpers";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import StorefrontUIContext from "../StorefrontUIContext/StorefrontUIContext";
import Popup from "../Popup/Popup";


// props.selected, props.focused
const DefaultItem = (props) => <div css={css`
    padding: 12px;
    &:hover {
        background-color: lightgrey;
    }
`}>{props.children} {props.selected ? "(checked)" : ""}</div>;


function DropdownMenuItem() {
    return <></>;
}

const defaultPopup = <Popup size={"medium"} />;

function DropdownMenu(props) {
    const [open, setOpen] = useState(false);

    let trigger = React.cloneElement(props.trigger, {
        onClick: (e) => {
            setOpen(!open);

            if (props.trigger.props.onClick) {
                props.trigger.props.onClick(e);
            }
        }
    });

    let popup = props.popup || defaultPopup;
    let size = props.size || popup.props.size;

    let items = [];

    props.children.forEach((child) => {
        let element;

        if (child.type === DropdownMenuItem) {

            let content;
            if (typeof child.props.children === 'function') {
                content = child.props.children(false) // focused should be passed here!
            }
            else {
                content = child.props.children;
            }

            element =
                <div css={css`
                cursor: pointer;
            `} onClick={() => {

                    if (child.props.onClick) {
                        child.props.onClick()
                    }
                    setOpen(false);

                }}
                     key={child.key}
                >
                    {content}
                </div>;

            if (child.props.href) {
                element = <div key={child.key}><a href={child.props.href}>content</a></div>;
            }
        } else {
            element = child;
        }

        items.push(element);
    });

    let body = props.body || ((x) => <>{x}</>);

    let Popup = React.cloneElement(popup, {
        size: size,
        trigger: trigger,
        open: open
    }, body(items));

    return <>{Popup}</>
}

export {
    DropdownMenu,
    DropdownMenuItem
};
