import React from "react";
import { Button, StorefrontUIContext } from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const buttonCustomAppearance = ({ disabled, children, level}) => {

    const levels = {
        default: 'grey',
        success: 'green',
        warning: 'orange',
        error: 'red'
    };

    return <div css={css`
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
    </div>;}

export default () => (

    <div>
        <p>Default button (no styling, just focus and accessibility)</p>
        <Button onClick={() => alert('button clicked!')}>Default button</Button>

        <p>Raw button disabled</p>
        <Button onClick={() => alert('button clicked!')} disabled={true}>Disabled raw button</Button>

        <p>Raw button sized</p>
        <Button onClick={() => alert('button clicked!')} css={css`
            width: 250px;
        `}>Sized raw button</Button>

        <p>Default button as link</p>
        <Button href={"https://wikipedia.org"}>Raw link</Button>

        <p>Default button as a link can be disabled too</p>
        <Button href={"https://wikipedia.org"} disabled={true}>Raw link disabled</Button>

        <p>Custom <code>appearance</code> for button</p>
        <Button
            onClick={() => alert('custom button clicked')}
            appearance={buttonCustomAppearance}
            level={"warning"}
        >
            Custom appearance
        </Button>

        <p>Custom <code>appearance</code> for button, registered (recommended way)</p>
        <StorefrontUIContext.Provider value={{
             Button: {
                 custom: buttonCustomAppearance
             }
        }}>
            <Button appearance={"custom"} level={"error"}>Custom appearance registered</Button><br/>
            <Button appearance={"custom"} level={"success"}>Custom appearance with custom prop</Button><br/>
            <Button appearance={"custom"} level={"default"} href={"https://wikipedia.org"}>Custom appearance with custom prop as link</Button>
        </StorefrontUIContext.Provider>

        <p>Raw button</p>
        <Button appearance="raw" onClick={() => alert('button clicked!')}>Raw button</Button>

        <p>Raw button as link</p>
        <Button appearance="raw" target={"_blank"} href={"https://wikipedia.org"}>Raw button</Button>
    </div>
);
