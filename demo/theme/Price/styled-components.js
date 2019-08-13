import { styled } from "storefront-ui/base/styles";

export const rootStyles = ({ $theme, alignRight }) => `
    display: flex; flex-wrap: no-wrap; white-space: nowrap; justify-content: flex-start; align-items: center;
    ${alignRight ? "justify-content: flex-end;" : ""}
    ${$theme.fonts.body1.css}
`;

export const Root = styled("div", rootStyles);
