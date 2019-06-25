import { styled } from "../base/styles";

export const tabStyles = ({ $theme }) => `
    background-color: yellow;
`;

export const TabStyled = styled("div", tabStyles);

export const tabsContainerStyles = ({ $theme }) => `
    position: relative;
    display: flex;
    flex-direction: row;
`;

export const TabsContainerStyled = styled("div", tabsContainerStyles);

export const rootStyles = ({ $theme }) => `
    position: relative;
    overflow-x: auto;
    ::-webkit-scrollbar {display:none;}
`;

export const RootStyled = styled("div", rootStyles);

export const lineStyles = ({ $theme }) => `
      position: absolute;
      left: 0;
      bottom: 0;
      height: 0px;
      background-color: black;
      width: 0px;
`;

export const LineStyled = styled("div", lineStyles);
