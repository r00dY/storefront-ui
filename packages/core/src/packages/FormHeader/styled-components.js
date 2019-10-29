import { styled } from "../base/styles";

export const titleStyles = ({ $theme }) => `
    ${$theme.fonts.h5.css}
    margin-bottom: ${$theme.spacings.s30}px;
`;

export const TitleStyled = styled("div", titleStyles);

export const descriptionStyles = ({ $theme }) => `
    ${$theme.fonts.body1.css}
`;

export const DescriptionStyled = styled("div", descriptionStyles);

export const rootStyles = ({ $theme }) => `
    margin-bottom: ${$theme.spacings.s80}px;
`;

export const RootStyled = styled("div", rootStyles);
