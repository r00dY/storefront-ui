import { styled } from "../../../src/packages/base/styles";

export const rootStyles = ({ $theme, alignRight }) => `
    display: flex; flex-wrap: wrap; white-space: nowrap; justify-content: flex-start;
    ${alignRight && "justify-content: flex-end;"}
    ${$theme.fonts.body1.css}
`;

export const Root = styled("div", rootStyles);
