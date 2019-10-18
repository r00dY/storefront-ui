import { styled } from "../base/styles";
import React from "react";

export const containerStyled = ({ $theme }) => `
    display: flex;
    flex-direction: row;
`;

export const ContainerStyled = styled("div", containerStyled, ({ items }) => (
  <>{items}</>
));

export const itemContainerStyled = ({ $theme }) => `
  margin-right: ${$theme.spacings.s60}px;
  cursor: pointer;
  ${$theme.fonts.body1.css}
`;

export const ItemContainerStyled = styled("label", itemContainerStyled);

export const ItemStyled = styled(
  "div",
  props => {
    return `
            display: flex;
            flex-direction: row;
            align-items: center;
        `;
  },
  ({ radioMark, label }) => (
    <>
      {radioMark}
      {label}
    </>
  )
);

export const labelStyled = ({ $theme }) => `
    margin-left: ${$theme.spacings.s10}px;
`;

export const LabelStyled = styled("div", labelStyled);
