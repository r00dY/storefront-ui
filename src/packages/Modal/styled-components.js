import { styled } from "../base/styles";

export const bodyStyles = ({ $theme }) => `
    padding: 16px;
`;

export const BodyStyled = styled("div", bodyStyles);

export const rootStyles = ({ $theme }) => `
    position: relative;
    height: 100%;
    background-color: white;
`;

export const RootStyled = styled("div", rootStyles);
