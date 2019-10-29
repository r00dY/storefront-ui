import { styled } from "../base/styles";
import React from "react";

export const titleStyles = ({ $theme }) => `
`;

export const TitleStyled = styled("div", titleStyles);

export const toggleStyles = ({ $theme }) => `
`;

export const ToggleStyled = styled("div", toggleStyles);

export const rootStyles = ({ $theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${$theme.sizing.scale400};
    border-bottom: 1px solid ${$theme.colors.mono400.css};
`;

export const rootChildren = ({ title, toggle }) => (
  <>
    {title}
    {toggle}
  </>
);

export const RootStyled = styled("div", rootStyles, rootChildren);
