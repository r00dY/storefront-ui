import React, { useState } from "react";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import { Button } from "../Button/Button";

const defaultItem = (data, { index, selected, focused }) => <div css={css`
    padding: 12px;
    &:hover {
        background-color: lightgrey;
    }
`}>{data.label}</div>;

function DropdownMenu(props) {
    const [open, setOpen] = useState(false);

    let trigger = React.cloneElement(props.trigger, {
        onClick: (e) => {
            setOpen(!open);

            if (props.trigger.props.onClick) { props.trigger.props.onClick(e); }
        },
        onBlur: (e) => {
            // setOpen(false);
            // if (props.trigger.props.onBlur) { props.trigger.props.onBlur(e); }
        },
        onFocus: (e) => {

        }
    });

    return <div className={props.className} style={props.style}>

        <div css={css`
            position: relative;
        `}>

            <div css={css`

            `}>
                {trigger}
            </div>

            { open && <div css={css`
                position: absolute;
                background-color: white;
                box-shadow: 0 0px 14px rgba(0, 0, 0, 0.15);
                width: 250px;
                max-height: 400px;
                top: calc(100% + 10px);
                left: 0;
                z-index: 1000;
            `}>
                { props.data.map((data, index) =>
                    <div
                        key={data.id}
                        css={css`
                            cursor: pointer;
                        `}
                        onClick={() => {
                            setOpen(false);
                            if (props.onClick) { props.onClick(data) }
                        }}
                    >
                        { defaultItem(data, { index, selected: false, focused: false }) }
                    </div>
                )}
            </div> }

        </div>
    </div>;
}

export default DropdownMenu;
