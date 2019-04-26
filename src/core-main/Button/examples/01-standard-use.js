import React from "react";
import { Button, ButtonRaw, StorefrontUIContext, createButton } from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const ButtonCustom = createButton(({ disabled, dropdownOpened, children, inverted}) =>
    <div css={css`
        padding: 12px;
        border: 1px solid black;
        border-radius: 6px;
        border-color: lightgrey;
        background-color: ${inverted ? 'black' : 'lightgrey'};
        color: ${inverted ? 'white' : 'black'};
        ${disabled ? 'color: grey;' : ''}

        &:hover {
            opacity: 0.8;
        }
        `}
    >
        {children}
    </div>,
    ['inverted']
);

export default () => (

    <div>
        <p>Raw button (no styling, just focus and accessibility)</p>
        <ButtonRaw onClick={() => alert('button clicked!')}><div css={css`border: 1px solid grey`}>Raw button</div></ButtonRaw>

        <p>Raw button disabled</p>
        <ButtonRaw onClick={() => alert('button clicked!')} disabled={true}><div css={css`border: 1px solid grey`}>Disabled raw button</div></ButtonRaw>

        <p>Raw button sized</p>
        <ButtonRaw onClick={() => alert('button clicked!')} css={css`
            width: 250px;
        `}><div css={css`border: 1px solid grey;`}>Sized raw button</div></ButtonRaw>

        <p>Raw button as link</p>
        <ButtonRaw href={"https://wikipedia.org"}><div css={css`border: 1px solid grey`}>Raw link</div></ButtonRaw>

        <p>Raw button as a link can be disabled too</p>
        <ButtonRaw href={"https://wikipedia.org"} disabled={true}><div css={css`border: 1px solid grey`}>Raw link disabled</div></ButtonRaw>

        <p>Custom Button</p>
        <ButtonCustom onClick={() => alert('custom button clicked')}>Custom button</ButtonCustom>

        <p>Custom Button inverted</p>
        <ButtonCustom onClick={() => alert('custom button clicked')} inverted={true}>Custom button inverted</ButtonCustom>

        <p>Custom Button disabled, inverted with type</p>
        <ButtonCustom onClick={() => alert('custom button clicked')} inverted={true} disabled={true} type={"submit"}>Custom button inverted</ButtonCustom>

        <p>Custom Button inverted as a link</p>
        <ButtonCustom href={"https://wikipedia.org"} inverted={true} target={"_blank"}>Link button</ButtonCustom>

    </div>
);
