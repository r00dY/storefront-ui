import { styled } from "../base/styles";

export const rootStyles = ({ $theme, alignRight }) => `
    display: flex; flex-wrap: wrap; white-space: nowrap; justify-content: flex-start;
    ${alignRight && "justify-content: flex-end;"}
    ${$theme.fonts.body1.css}
`;

export const RootStyled = styled("div", rootStyles);
