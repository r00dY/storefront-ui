import React from "react";
import StorefrontUIContext, { getAppearance } from "../StorefrontUIContext/StorefrontUIContext";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const rawButtonStyles = css`
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
    cursor: default;
    color: black;
  }

    position: relative;
    height: 100%;
`;

const rawLinkStyles = (disabled) => css`
    text-decoration: none;
    &:visited, &:active, &:hover, &:link {
        color: black;
    }
    
    ${disabled ? `
        pointer-events: none;
        cursor: default;
    ` : ''}
`;


const ButtonDefaultContent = (props) => {

    // Button is in dropdown context
    let extraString = "";
    if (typeof props.popupOpened !== "undefined") {
        if (props.popupOpened) {
            extraString = " (opened)";
        }
        else {
            extraString = " (closed)";
        }
    }

    return <div css={css`
        ${ props.disabled ? 'opacity: 0.66;' : ''}
        ${ props.selected ? 'background-color: grey;' : ''}

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

const appearanceTest = ({children}) => ({
    children: ({ disabled, popupOpened}) => <ButtonDefaultContent disabled={disabled} popupOpened={popupOpened}>{children}</ButtonDefaultContent>
});

const appearanceRaw = ({children}) => ({
});

const Button = React.forwardRef(
    (
        props, // here we divide custom properties of properties that DOM <button> should have (the rest of them)
        ref,
    ) => {
        const { type, href, disabled, className, style, popupOpened, appearance, ...appearanceProps } = props;
        const { children, ...extraProps } = appearanceProps;

        return <StorefrontUIContext.Consumer>
            {({ Button }) => {

                let { children } = getAppearance(
                    appearance,
                    appearanceProps,
                    { raw: appearanceRaw, default: appearanceRaw, test: appearanceTest },
                    Button
                );

                let content = typeof children === 'function' ? children({ disabled, popupOpened }) : children;

                if (href) {
                    return <a css={rawLinkStyles(disabled)} style={style} className={className} {...extraProps} href={href} ref={ref} tabIndex={disabled ? '-1' : 0}>{ content }</a>;
                }

                return <button css={rawButtonStyles} style={style} className={className} disabled={disabled} type={type} {...extraProps} ref={ref}>{ content }</button>;
            }}
        </StorefrontUIContext.Consumer>;
    },
);

export default Button;
