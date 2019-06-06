import { styled } from "../../base/styles";

export const popoverRootStyles = ({ $theme }) =>
  `width: 200px; max-height: 250px; display: flex; flex-direction: column;`;
export const PopoverRootStyled = styled("div", popoverRootStyles);

export const popoverHeadStyles = ({ $theme }) => ``;
export const PopoverHeadStyled = styled("div", popoverHeadStyles);

export const popoverBodyStyles = ({ $theme }) =>
  `flex-grow: 1; overflow-y: auto;`;
export const PopoverBodyStyled = styled("div", popoverBodyStyles);

export const popoverFooterStyles = ({ $theme }) => ``;
export const PopoverFooterStyled = styled("div", popoverFooterStyles);

export const rootStyles = ({ $theme }) => `display: flex;`;
export const RootStyled = styled("div", rootStyles);
//
// export const separatorStyles = ({ $theme }) => ``;
// export const SeparatorStyled = styled("div", separatorStyles);
