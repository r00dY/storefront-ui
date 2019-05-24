import { styled } from "../base/styles";
import React from "react";

export const titleStyles = ({ $theme }) => `
    ${$theme.fonts.body1.css}
`;

export const TitleStyled = styled("div", titleStyles);

export const toggleStyles = ({ $theme }) => `
    ${$theme.fonts.body1.css}
`;

export const ToggleStyled = styled("div", toggleStyles);

export const rootStyles = ({ $theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${$theme.sizing.scale300};
`;

export const rootChildren = ({ title, toggle }) => (
  <>
    {title}
    {toggle}
  </>
);

export const RootStyled = styled("div", rootStyles, rootChildren);
