import { styled } from "../base/styles";

export const rootStyles = ({ $theme }) => `
    position: relative;
    display: flex;
    flex-direction: row;
`;

export const RootStyled = styled("div", rootStyles);
