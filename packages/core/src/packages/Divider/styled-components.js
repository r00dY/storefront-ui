import { styled } from "../base/styles";
import { rs } from "responsive-helpers";
export const rootStyles = ({ $theme }) => `
    width: 100%;
    display: flex;
    align-items: center;
    ${rs($theme.spacings.s100, $theme.spacings.s160).css("height")}
`;
export const RootStyled = styled("div", rootStyles);

export const labelStyles = ({ $theme }) => `
    padding-left: ${$theme.spacings.s40}px;
    padding-right: ${$theme.spacings.s40}px;
    text-align: center;
    max-width: 80%;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${$theme.colors.mono700.css};
    ${$theme.fonts.body2.css}
`;
export const LabelStyled = styled("div", labelStyles);

export const lineStyles = ({ $theme }) =>
  `flex-grow: 1; border-bottom: 1px solid ${$theme.colors.mono300.css};`;
export const LineStyled = styled("div", lineStyles);
