import { styled } from "../base/styles";

export const tabStyles = ({ $theme }) => `
    background-color: yellow;
`;

export const TabStyled = styled("div", tabStyles);

export const rootStyles = ({ $theme }) => `
    position: relative;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    ::-webkit-scrollbar {display:none;}
`;

export const RootStyled = styled("div", rootStyles);
