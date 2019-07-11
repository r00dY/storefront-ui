import { styled } from "../../base/styles";
import React from "react";
import { rslin } from "responsive-helpers";
import { R } from "storefront-ui/Config";

export const rootStyles = ({ $theme }) =>
  `display: flex; flex-wrap: nowrap; background: white;`;
export const rootChildren = ({ content, image }) => (
  <>
    {image}
    {content}
  </>
);
export const RootStyled = styled("div", rootStyles, rootChildren);

export const imageContainerStyles = ({ $theme }) =>
  `position: relative; flex-shrink: 0; ${rslin(100, 140).css("width")} `;
export const ImageContainerStyled = styled("div", imageContainerStyles);

export const quantityStyles = ({ $theme }) =>
  `display: flex; align-items: center; `;
export const QuantityStyled = styled("div", quantityStyles);

export const nameStyles = ({ $theme }) => `${$theme.fonts.h6.css} 
   overflow: hidden;
  max-height: calc(2 * 1.01em);
  a {text-decoration: none; color: ${$theme.colors.mono900.css};}`;
export const NameStyled = styled("div", nameStyles);

export const descriptionStyles = ({ $theme }) => `color: ${
  $theme.colors.mono500.css
}; ${$theme.fonts.body2.css}     white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;`;
export const DescriptionStyled = styled("div", descriptionStyles);

export const variantStyles = ({ $theme }) =>
  `color: ${$theme.colors.mono500.css}; ${$theme.fonts.body2.css}`;
export const VariantStyled = styled("div", variantStyles);

export const dataStyles = ({ $theme, gutter }) => `
`;
export const dataChildren = ({ name, description, variant }) => (
  <>
    {name}
    {description}
    {variant}
  </>
);
export const DataStyled = styled("div", dataStyles, dataChildren);
