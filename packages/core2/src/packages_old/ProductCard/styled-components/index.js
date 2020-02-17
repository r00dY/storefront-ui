import { styled } from "../../../packages/base/styles";
import React from "react";

export const rootStyles = ({ $theme }) => `position: relative;`;
export const rootChildren = ({ contentElem, imageElem }) => (
  <>
    {imageElem}
    {contentElem}
  </>
);
export const RootStyled = styled("div", rootStyles, rootChildren);

export const imageContainerStyles = ({ $theme }) =>
  `position: relative; margin-bottom: ${$theme.spacings.s30}px; `;
export const ImageContainerStyled = styled("div", imageContainerStyles);

export const contentStyles = ({ $theme }) => ``;
export const contentChildren = ({ titleElem, descriptionElem, priceElem }) => (
  <>
    {titleElem}
    {descriptionElem}
    {priceElem}
  </>
);
export const ContentStyled = styled("div", contentStyles, contentChildren);

export const titleStyles = ({ $theme }) => `
   overflow: hidden;
  ${$theme.fonts.h6.css}
  max-height: calc(2 * 1.2em);
  a {text-decoration: none; color: ${$theme.colors.mono900.css}; }
`;
export const TitleStyled = styled("div", titleStyles);

export const descriptionStyles = ({ $theme }) => `
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${$theme.colors.mono500.css};
    ${$theme.fonts.body2.css}`;
export const DescriptionStyled = styled("div", descriptionStyles);

export const badgeStyles = ({ $theme, type }) => `
    display: inline-block;
    background: ${$theme.colors.mono400.css};
    ${$theme.fonts.body2.css}
    ${
      type === "discount"
        ? `background: ${$theme.colors.primary500.css};
      color: ${$theme.colors.foregroundInv.css};`
        : ""
    }
    `;
export const BadgeStyled = styled("div", badgeStyles);

export const imageOverlayStyles = ({ $theme }) =>
  `position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; 
  `;
export const imageOverlayChildren = ({ badgesElem }) => <>{badgesElem}</>;
export const ImageOverlayStyled = styled(
  "div",
  imageOverlayStyles,
  imageOverlayChildren
);
