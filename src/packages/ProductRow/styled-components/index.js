import { styled } from "../../base/styles";
import React from "react";
import { rslin } from "responsive-helpers";
import { R } from "storefront-ui/Config";

export const rootStyles = ({ $theme }) =>
  `position: relative; display: flex; flex-wrap: nowrap; background: white;`;
export const rootChildren = ({ content, image }) => (
  <>
    {image}
    {content}
  </>
);
export const RootStyled = styled("div", rootStyles, rootChildren);

export const imageContainerStyles = ({ $theme, mode }) =>
  `position: relative; height: 100%; display: flex;  ${
    mode === "compact"
      ? rslin(100, 100).css("width")
      : rslin(80, 140).css("width")
  }`;
export const ImageContainerStyled = styled("div", imageContainerStyles);

export const quantityStyles = ({ $theme }) =>
  `${$theme.fonts.body1.css} display: flex; align-items: center; `;
export const QuantityStyled = styled("div", quantityStyles);

export const nameStyles = ({ $theme, mode }) => `${$theme.fonts.h6.css} 
  a {text-decoration: none; color: ${$theme.colors.mono900.css};}`;
export const NameStyled = styled("div", nameStyles);

export const descriptionStyles = ({ $theme }) => `
color: ${$theme.colors.mono500.css};
${$theme.fonts.body2.css}
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
    `;
export const DescriptionStyled = styled("div", descriptionStyles);

export const variantStyles = ({ $theme }) =>
  `color: ${$theme.colors.mono500.css}; ${$theme.fonts.body2.css}`;
export const VariantStyled = styled("div", variantStyles);
