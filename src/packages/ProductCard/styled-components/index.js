import { styled } from "../../base/styles";
import React from "react";
import { ButtonRaw$ } from "../../ButtonRaw";

export const rootStyles = ({ $theme }) => ``;
export const rootChildren = ({ content, image }) => (
  <>
    {image}
    {content}
  </>
);
export const RootStyled = styled("div", rootStyles, rootChildren);

export const imageContainerStyles = ({ $theme }) =>
  `position: relative; margin-bottom: ${$theme.spacings.s30}px; `;
export const ImageContainerStyled = styled("div", imageContainerStyles);

export const contentStyles = ({ $theme }) => ``;
export const contentChildren = ({ name, description, price }) => (
  <>
    {name}
    {description}
    {price}
  </>
);
export const ContentStyled = styled("div", contentStyles, contentChildren);

export const nameStyles = ({ $theme }) => `
   overflow: hidden;
  ${$theme.fonts.h6.css}
  max-height: calc(2 * 1.01em);
`;
export const NameStyled = styled("div", nameStyles);

export const descriptionStyles = ({ $theme }) => `
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${$theme.colors.mono500.css};
    ${$theme.fonts.body2.css}`;
export const DescriptionStyled = styled("div", descriptionStyles);

export const priceStyles = ({ $theme }) =>
  `span {text-decoration: line-through;} margin-top: ${
    $theme.spacings.s30
  }px; ${$theme.fonts.body1.css} `;
export const PriceStyled = styled("div", priceStyles);

export const badgeStyles = ({ $theme, type }) => `
    border-radius: ${$theme.borders.radius200};
    padding: ${$theme.sizing.scale100};
    background: ${$theme.colors.mono400.css};
    ${$theme.fonts.body2.css}
    ${type === "discount" &&
      `background: ${$theme.colors.primary500.css}; color: ${
        $theme.colors.foregroundInv.css
      };`}
    `;
export const BadgeStyled = styled("div", badgeStyles);

export const imageOverlayStyles = ({ $theme }) =>
  `position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; display: flex; align-items: flex-end; flex-wrap: wrap;
  justify-content: flex-end; padding: ${$theme.spacings.s20}px;
  div {
      margin-top: 4px;
      margin-right: 4px;
    }
  `;
export const imageOverlayChildren = ({ badges }) => <>{badges}</>;
export const ImageOverlayStyled = styled(
  "div",
  imageOverlayStyles,
  imageOverlayChildren
);
