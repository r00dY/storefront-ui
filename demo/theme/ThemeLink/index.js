import React from "react";

import { useTheme } from "storefront-ui/Theme";

// import { Grid, GridItem } from "storefront-ui/Grid";
// import { rslin } from "responsive-helpers";
// import { R } from "storefront-ui/Config";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const ThemeLink = props => {
  const theme = useTheme();
  const Elem = styled.a`
    transition: color 150ms;
    text-decoration: none;
    
    ${props =>
      props.kind === "primary" || props.kind === undefined
        ? `
    &,
      &:active,
      &:visited {
        color: ${theme.colors.primary.css};
      }
      &:hover {
        color: ${theme.colors.primary600.css};
      }
    `
        : ""}
    ${props =>
      props.kind === "secondary"
        ? `
    &,
      &:active,
      &:visited {
        color: ${theme.colors.mono700.css};
      }
      &:hover {
        color: ${theme.colors.mono500.css};
      }
    `
        : ""}
    ${props =>
      props.kind === "underline"
        ? `
    &,
      &:active,
      &:visited {
        color: ${theme.colors.mono500.css};
        text-decoration: underline;
      }
      &:hover {
        color: ${theme.colors.mono700.css};
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
  `;
  return (
    <Elem kind={props.kind} {...props}>
      {props.children}
    </Elem>
  );
};

export default ThemeLink;
