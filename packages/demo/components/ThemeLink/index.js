import React from "react";

import { useTheme } from "@commerce-ui/core/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Elem = styled.a`
    transition: color 150ms;
    text-decoration: none;
    
    ${props =>
      props.kind === "primary" || props.kind === undefined
        ? `
    &,
      &:active,
      &:visited {
        color: ${props.theme.colors.primary.css};
      }
      &:hover {
        color: ${props.theme.colors.primary600.css};
      }
    `
        : ""}
    ${props =>
      props.kind === "secondary"
        ? `
    &,
      &:active,
      &:visited {
        color: ${props.theme.colors.mono700.css};
      }
      &:hover {
        color: ${props.theme.colors.mono500.css};
      }
    `
        : ""}
    ${props =>
      props.kind === "underline"
        ? `
    &,
      &:active,
      &:visited {
        color: ${props.theme.colors.mono500.css};
        text-decoration: underline;
      }
      &:hover {
        color: ${props.theme.colors.mono700.css};
      }
    `
        : ""}
    ${props =>
      props.kind === "inherit"
        ? `
    &,
      &:active,
      &:visited {
        color: inherit;
      }
    `
        : ""}
    ${props =>
      props.kind === "hoverUnderline"
        ? `
    &,
      &:active,
      &:visited {
        color: inherit;
      }
      &:hover {text-decoration: underline;}
    `
        : ""}
    ${props =>
      props.kind === "inheritUnderline"
        ? `
    &,
      &:active,
      &:visited {
        color: inherit;
      }
      text-decoration: underline;
    `
        : ""}
  `;
const ThemeLink = React.forwardRef((props, ref) => {
  const theme = useTheme();

  return (
    <Elem kind={props.kind} theme={theme} {...props} ref={ref}>
      {props.children}
    </Elem>
  );
});

export default ThemeLink;
