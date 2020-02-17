import { styled } from "../../packages/base/styles";
import React from "react";

export const separatorStyles = ({ $theme }) => `
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const separatorChildren = () => <>-</>;

export const SeparatorStyled = styled(
  "div",
  separatorStyles,
  separatorChildren
);

export const rootStyles = ({ $theme }) => "";

const rootChildren = ({ rangePicker, clearButton }) => (
  <>
    {rangePicker}
    {clearButton}
  </>
);

export const RootStyled = styled("div", rootStyles, rootChildren);
