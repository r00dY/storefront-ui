import { styled } from "../base/styles";

export const tabStyles = ({ $theme }) => `
    background-color: yellow;
`;

export const TabStyled = styled("div", tabStyles);

export const tabsContainerStyles = ({ $theme, align }) => {
  let marginLeft = 0;
  let marginRight = 0;
  switch (align) {
    case "right":
      marginLeft = "auto";
      break;
    case "center":
      marginLeft = "auto";
      marginRight = "auto";
      break;
    default:
      marginRight = "auto";
  }

  return `
        position: relative;
        display: flex;
        flex-direction: row;
        margin-left: ${marginLeft};
        margin-right: ${marginRight};
    `;
};

export const TabsContainerStyled = styled("div", tabsContainerStyles);

export const rootStyles = ({ $theme, scrollable, align }) => {
  return `
    position: relative;

    ${
      scrollable
        ? `
        overflow-x: auto;
        ::-webkit-scrollbar {display:none;}
    `
        : `
        overflow: hidden;
    `
    }
    
    ${align !== "fit" ? "display: flex" : ""};
        
`;
};

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
