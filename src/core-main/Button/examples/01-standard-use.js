import React from "react";
import { Button, StorefrontUIContext } from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const CustomButtonAppearance = (props) => {
    return <div css={css`
        ${ props.disabled ? 'opacity: 0.66;' : ''}

        padding: 12px 20px;
        background-color: red;
        color: white;
        border-radius: 6px;

        display: flex;
        justify-content: center;
        align-items: center;

        ${!props.disabled && `
            &:hover {
                opacity: 0.8;
            }
        `}

        position: relative;
        height: 100%;
    `}>{props.children}</div>
};

export default () => (
    <div>
        <p>Natural size</p>
        <Button onClick={() => { alert('button clicked!') }}>Cześć</Button>
        <p>CSS size</p>
        <Button css={css`
            width: 250px;
            height: 100px;
        `}>
            Cześć
        </Button>
        <p>Disabled</p>
        <Button disabled={true} onClick={() => alert('disabled button, this message will never show')}>I'm disabled</Button>
        <p>Raw</p>
        <Button appearance="raw" onClick={() => alert('disabled button, this message will never show')}>I'm a raw button, totally unstyled, but focusable and clickable.</Button>
        <p>Custom button appearance (styling only internals of <code>button</code>)</p>
        <Button appearance={CustomButtonAppearance} onClick={() => alert('red button')}>Custom red button</Button>
        <p>Custom button appearance registered in context</p>
        <StorefrontUIContext.Provider value={{ /* should be in some global config in the project */
            Button: {
                error: CustomButtonAppearance
            }
        }}>
            <Button appearance={"error"} onClick={() => alert('red button')}>Registered appearance button</Button>
        </StorefrontUIContext.Provider>
    </div>
);
