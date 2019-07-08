import { styled } from "../../base/styles";
import React from "react";

export const rootStyles = ({ $theme, isTotal }) =>
  `position: relative; display: flex; flex-wrap: nowrap;
    padding: ${$theme.spacings.s10}px 0;
    `;
export const rootChildren = ({ label, value }) => (
  <>
    {label}
    {value}
  </>
);
export const RootStyled = styled("div", rootStyles, rootChildren);

export const labelStyles = ({ $theme, isTotal }) =>
  `flex-grow: 1; ${$theme.fonts.body1.css}
     ${isTotal && $theme.fonts.h6.css}
    `;
export const LabelStyled = styled("div", labelStyles);

export const valueStyles = ({ $theme, isTotal }) =>
  `text-align: right; ${$theme.fonts.body1.css}
    ${isTotal && $theme.fonts.h6.css}
    `;
export const ValueStyled = styled("div", valueStyles);
