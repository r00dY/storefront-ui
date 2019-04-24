import React, {useState} from "react";
import { rs } from "responsive-helpers";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

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


const appearancesPopup = {
    default: (props, items) => { return {
        styles: `
            background-color: white;
            box-shadow: 0 0px 14px rgba(0, 0, 0, 0.15);
            padding: 0;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
        `,
        content: <>{items}</>
    }},
    crazy: (props, items) => { return {
        styles: `
            background-color: red;
            box-shadow: 0 0px 16px rgba(0, 255, 0, 0.4);
            padding: 20px;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            
            > * {
                margin: 10px 0;
            }
        `,
        content: <>{items}</>
    }}
};

const sizesPopup = {
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

    let items = [];

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

        items.push(element);
    });


    let appearance = appearancesPopup[props.appearance || "default"](props, items);
    let size = sizesPopup[props.size || "medium"];
    let spacing = rs(props.spacing || 10); // TODO: make ResponsiveMap.map function return responsivesizes, not segments, and make it easy to return value only (calc(...))

    // console.log(spacing.map.css((val) => { console.log(val);  }));

    return <div className={props.className} style={props.style}>

        <div css={css`
            position: relative;
        `}>

            <div css={css`

            `}>
                {trigger}
            </div>

            <div css={css`
                ${appearance.styles}

                position: absolute;

                ${rs(size.width).css('width')}
                ${rs(size.maxHeight).css('max-height')}
                height: auto;

                top: calc(100% + 10px);
                left: 0;

                z-index: 1000;

                transition: all 100ms;
                opacity: ${open ? 1 : 0};
                visibility: ${open ? 'visible' : 'hidden'};
            `}>
                { appearance.content }
            </div>

        </div>
    </div>;
}

export {
    DropdownMenu,
    DropdownMenuItem
};
