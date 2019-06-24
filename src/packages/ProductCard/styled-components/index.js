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
  `position: relative; margin-bottom: 10px;`;
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

export const nameStyles = ({ $theme }) => ``;
export const NameStyled = styled("div", nameStyles);

export const descriptionStyles = ({ $theme }) => ``;
export const DescriptionStyled = styled("div", descriptionStyles);

export const priceStyles = ({ $theme }) => `margin-top: 10px;`;
export const PriceStyled = styled("div", priceStyles);

export const discountPriceStyles = ({ $theme }) => ``;
export const DiscountPriceStyled = styled("div", discountPriceStyles);

export const imageOverlayStyles = ({ $theme }) =>
  `position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; display: flex; align-items: flex-end; justify-content: flex-end;`;
export const imageOverlayChildren = ({ badges }) => <>{badges}</>;
export const ImageOverlayStyled = styled(
  "div",
  imageOverlayStyles,
  imageOverlayChildren
);
