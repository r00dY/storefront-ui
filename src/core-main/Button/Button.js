import React from "react";
import styled from '@emotion/styled'

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


const ButtonDefault = (props) => {
    return <div css={css`
        ${ props.disabled ? 'opacity: 0.66;' : ''}

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


const ButtonRaw = React.forwardRef(
    (
        { type, href, disabled, className, style, popupOpened, children, ...props }, // here we divide custom properties of properties that DOM <button> should have (the rest of them)
        ref,
    ) => {

        // let inner;
        //
        // if (typeof children === 'function') {
        //     inner = children({ disabled, popupOpened});
        // }
        //
        // if (props.href) {
        //     return (
        //         <SafeAnchor
        //             {...props}
        //             as={as}
        //             innerRef={ref}
        //             className={classNames(classes, props.disabled && 'disabled')}
        //         />
        //     );
        // }

        // const Component = as || 'button';
        // if (ref) props.ref = ref;

        if (href) {
            return <a css={rawLinkStyles(disabled)} style={style} className={className} {...props} href={href} ref={ref} tabIndex={disabled ? '-1' : 0}>{ children }</a>;
        }

        return <button css={rawButtonStyles} style={style} className={className} disabled={disabled} type={type} {...props} ref={ref}>{ children }</button>;

        // return <Component {...props} type={type} className={classes} ref={ref}/>;
    },
);

const createButton = (appearance, customProps) => {
    customProps = customProps || [];

    return React.forwardRef((
        props,
        ref
    ) => {

        let rawButtonProps = Object.assign({}, props);
        let appearanceProps = {
            disabled: props.disabled,
            popupOpened: props.popupOpened,
            children: props.children
        };

        customProps.forEach((customProp) => {
            delete rawButtonProps[customProp];
            appearanceProps[customProp] = props[customProp];
        });

        return <ButtonRaw {...rawButtonProps} ref={ref}>{ appearance(appearanceProps) }</ButtonRaw>
    });
};

const Button = createButton(ButtonDefault);

export default Button;

export { ButtonRaw, createButton };
