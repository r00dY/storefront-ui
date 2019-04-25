import React from "react";
import styled from '@emotion/styled'

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import StorefrontUIContext from "../StorefrontUIContext/StorefrontUIContext";

// naked button (with no styling!) to promote accessibility

const ButtonUnstyled = (props) => <button css={css`
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */

  overflow: visible;
  text-transform: none;

  appearance: none;

  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  &:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;

  display: block;

  text-align: left;

  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }

    position: relative;
    height: 100%;

`} {...props} />;

const LinkRaw = styled.a`
    background-color: transparent;
    text-decoration: none;
    &:hover, &:active, &:visited, &:
`;


const ButtonDefault = (props) => {
    return <div css={css`
        ${ props.disabled ? 'opacity: 0.66;' : ''}
        ${ props.selected ? 'background-color: grey;' : ''}
        ${ props.loading ? 'background-color: green;' : ''}

        padding: 12px 20px;
        background-color: black;
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

const ButtonDefaultContent = (props) => {

    // Button is in dropdown context
    let extraString = "";
    if (typeof props.dropdownOpened !== "undefined") {
        if (props.dropdownOpened) {
            extraString = " (opened)";
        }
        else {
            extraString = " (closed)";
        }
    }

    return <div css={css`
        ${ props.disabled ? 'opacity: 0.66;' : ''}
        ${ props.selected ? 'background-color: grey;' : ''}
        ${ props.loading ? 'background-color: green;' : ''}

        padding: 12px 20px;
        background-color: black;
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
    `}>{props.children} {extraString}</div>
};

const ButtonRawContent = (props) => {
    return <>{props.children}</>;
};

const map = {
    raw: ButtonRawContent,
    default: ButtonDefaultContent
};

function Button(props) {

    return <StorefrontUIContext.Consumer>
        {(context) => {

            let appearance = props.appearance || "default";

            let ButtonInnerContent;

            if (typeof appearance === 'function') {
                ButtonInnerContent = appearance;
            }
            else if (context.Button && context.Button[appearance]) {
                ButtonInnerContent = context.Button[appearance];
            }
            else if (appearance === "default" || appearance === "raw") {
                ButtonInnerContent = map[appearance];
            }
            else {
                throw new Error("Unknown appearance for Button: ", appearance);
            }

            let domButtonProps = {
                ...props
            };

            delete domButtonProps.dropdownOpened;
            delete domButtonProps.appearance;

            return <ButtonUnstyled {...domButtonProps}><ButtonInnerContent {...props} /></ButtonUnstyled>;

        }}
    </StorefrontUIContext.Consumer>;

}

export default Button;

