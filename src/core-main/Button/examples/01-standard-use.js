import React from "react";
import { Button, StorefrontUIContext } from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const buttonAppearance = ({ disabled, children, level}) => {
    const levels = {
        default: 'grey',
        success: 'green',
        warning: 'orange',
        error: 'red'
    };

    return {
        children: <div css={css`
            padding: 12px;
            border-radius: 6px;
            background-color: ${ level ? levels[level] : levels.default };
            color: white;
            ${disabled ? 'color: grey;' : ''}

            &:hover {
                opacity: 0.8;
            }
            `}
        >
            {children}
        </div>
    }
};

export default () => (

    <div>
        <p>Raw button (no styling, just focus and accessibility)</p>
        <Button onClick={() => alert('button clicked!')}>Default button</Button>

        <p>Raw button disabled</p>
        <Button onClick={() => alert('button clicked!')} disabled={true}>Default button disabled</Button>

        <p>Raw button sized</p>
        <Button onClick={() => alert('button clicked!')} css={css`
            width: 250px;
        `}>Sized raw button</Button>

        <p>Raw button as link</p>
        <Button href={"https://wikipedia.org"}>Raw link</Button>

        <p>Raw button as a link can be disabled too</p>
        <Button href={"https://wikipedia.org"} disabled={true}>Default link disabled</Button>

        <p>Custom look for button</p>
        <Button onClick={() => alert('custom button clicked')}>
            {({disabled, popupOpened}) => <div css={css`
                padding: 12px;
                border-radius: 6px;
                background-color: red;
                color: white;
            `}>
                Custom appearance
            </div>}
        </Button>

        <p>Custom <code>appearance</code> for button, registered (recommended way)</p>
        <StorefrontUIContext.Provider value={{
             Button: {
                 custom: buttonAppearance
             }
        }}>
            <Button appearance={"custom"} level={"error"}>Custom appearance registered</Button><br/>
            <Button appearance={"custom"} level={"success"}>Custom appearance with custom prop</Button><br/>
            <Button appearance={"custom"} level={"default"} href={"https://wikipedia.org"}>Custom appearance with custom prop as link</Button>
        </StorefrontUIContext.Provider>

    </div>
);
