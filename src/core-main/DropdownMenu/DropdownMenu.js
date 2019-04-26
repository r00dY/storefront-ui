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


function DropdownMenuItem(props) {
    return <StorefrontUIContext.Consumer>
        {(context) => {
            let appearance = props.appearance || "default";

            let ListItem;

            if (typeof appearance === 'function') {
                ListItem = appearance;
            }
            else if (context.ListItem && context.ListItem[appearance]) {
                ListItem = context.ListItem[appearance];
            }
            else if (appearance === "default") {
                ListItem = DefaultItem;
            }
            else {
                throw new Error("Unknown appearance for ListItem: ", appearance);
            }

            return <ListItem {...props} />
        }}
    </StorefrontUIContext.Consumer>
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
            element =
                <div css={css`
                cursor: pointer;
            `} onClick={() => {

                    if (child.props.onClick) {
                        child.props.onClick()
                    }

                }}
                     key={child.key}
                >
                    {child}
                </div>;

            if (child.props.href) {
                element = <div key={child.key}><a href={child.props.href}>{child}</a></div>;
            }
        } else {
            element = child;
        }

        items.push(element);
    });

    let Popup = React.cloneElement(popup, {
        size: size,
        trigger: trigger,
        open: open
    }, <>{items}</>);

    return <>{Popup}</>
}

export {
    DropdownMenu,
    DropdownMenuItem
};
