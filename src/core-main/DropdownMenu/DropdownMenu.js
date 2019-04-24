import React, {useState} from "react";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import {Button} from "../Button/Button";

// props.selected, props.focused
const DefaultItem = (props) => <div css={css`
    padding: 12px;
    &:hover {
        background-color: lightgrey;
    }
`}>{props.children} {props.selected ? "(checked)" : ""}</div>;

const map = {
    default: DefaultItem
};

function DropdownMenuItem(props) {
    let appearance = props.appearance || "default";
    let ItemInternals = map[appearance];

    return <ItemInternals {...props} />
}

const defaultLinkTransform = (content, href, props) => <a css={css`
        &:visited, &:hover, &:active, &:link {
            color: inherit;
        }

        text-decoration: none;

    `} href={href}>{content}</a>;

function DropdownMenu(props) {
    const [open, setOpen] = useState(false);

    let trigger = React.cloneElement(props.trigger, {
        onClick: (e) => {
            setOpen(!open);

            if (props.trigger.props.onClick) {
                props.trigger.props.onClick(e);
            }
        },
        dropdownOpened: open
    });

    let linkTransform = props.linkTransform || defaultLinkTransform;

    let children = [];

    props.children.forEach((child) => {

        let element;

        if (child.type === DropdownMenuItem) {
            element =
                <div css={css`
                cursor: pointer;
            `} onClick={() => {

                    setOpen(false);
                    if (child.props.onClick) {
                        child.props.onClick()
                    }

                }}
                     key={child.key}
                >
                    {child}
                </div>;

            if (child.props.href) {
                element = <div key={child.key}>{linkTransform(element, child.props.href, child.props)}</div>;
            }
        }
        else {
            element = child;
        }

        children.push(element);
    });

    return <div className={props.className} style={props.style}>

        <div css={css`
            position: relative;
        `}>

            <div css={css`

            `}>
                {trigger}
            </div>

            <div css={css`
                position: absolute;
                background-color: white;
                box-shadow: 0 0px 14px rgba(0, 0, 0, 0.15);
                width: 250px;
                max-height: 400px;
                top: calc(100% + 10px);
                left: 0;
                z-index: 1000;
                display: flex;
                flex-direction: column;
                display: ${open ? 'block' : 'none'};
            `}>
                {children}
            </div>

        </div>
    </div>;
}

export {
    DropdownMenu,
    DropdownMenuItem
};
