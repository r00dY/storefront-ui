import { styled } from "../base/styles";
import React from "react";

/**
 * Standard radio styles
 */
const containerStyles = ({ $theme }) => `
    display: flex;
    flex-direction: row;
`;

const ContainerStyled = styled("div", containerStyles, ({ items }) => (
  <>{items}</>
));

const itemContainerStyles = ({ $theme }) => `
  margin-right: ${$theme.spacings.s60}px;
  cursor: pointer;
  ${$theme.fonts.body1.css}
`;

const ItemContainerStyled = styled("label", itemContainerStyles);

const ItemStyled = styled(
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

const labelStyled = ({ $theme }) => `
      ${$theme.fonts.body1.css}
    margin-left: ${$theme.spacings.s10}px;
`;

const LabelStyled = styled("div", labelStyled);

export const RadioStandard = {
  ContainerStyled,
  ItemContainerStyled,
  ItemStyled,
  LabelStyled
};

/**
 * Panel styles
 */

const panelContainerStyles = ({ $theme }) => `
    display: flex;
    flex-direction: column;
    border: 1px solid ${$theme.colors.mono300.css};
    border-radius: ${$theme.spacings.s20}px;
`;

const PanelContainerStyled = styled(
  "div",
  panelContainerStyles,
  ({ items }) => <>{items}</>
);

export const panelItemContainerStyled = ({ $theme, index, lastIndex }) => `
  cursor: pointer;
  border-top: ${index > 0 ? `1px solid ${$theme.colors.mono300};` : "none"};
  padding: ${$theme.spacings.s60}px;
  transition: background-color .1s;
  &:hover {
    background-color: ${$theme.colors.mono200.css};
  }
`;

export const PanelItemContainerStyled = styled(
  "label",
  panelItemContainerStyled
);

export const PanelItemStyled = styled(
  "div",
  props => {
    return `
            display: flex;
            flex-direction: row;
            align-items: center;
        `;
  },
  ({
    radioMark,
    label,
    labelContainer,
    radioMarkContainer,
    enhancerContainer
  }) => (
    <>
      {radioMarkContainer}
      {labelContainer}
      {enhancerContainer}
    </>
  )
);

const panelLabelContainerStyles = ({ $theme }) => `
    flex-grow: 1;
`;

const PanelLabelContainerStyled = styled(
  "div",
  panelLabelContainerStyles,
  ({ label, description }) => (
    <>
      {label}
      {description}
    </>
  )
);

const panelRadioMarkContainerStyles = ({ $theme }) => `
    flex: 0 0 auto;
    align-self: flex-start;
    margin-right: ${$theme.spacings.s50}px;
`;

const PanelRadioMarkContainerStyled = styled(
  "div",
  panelRadioMarkContainerStyles
);

const panelEnhancerContainerStyles = ({ $theme }) => `  
    flex: 0 0 auto;
    align-self: flex-start;
    margin-left: ${$theme.spacings.s50}px;
`;

const PanelEnhancerContainerStyled = styled(
  "div",
  panelEnhancerContainerStyles
);

const panelLabelStyles = ({ $theme }) => `  
    ${$theme.fonts.body1.css}
`;

const PanelLabelStyled = styled("div", panelLabelStyles);

const panelDescriptionStyles = ({ $theme }) => `  
    ${$theme.fonts.body2.css}
    color: ${$theme.colors.mono500.css};
    margin-top: ${$theme.spacings.s10}px;
`;

const PanelDescriptionStyled = styled("div", panelDescriptionStyles);

export const RadioPanel = {
  ContainerStyled: PanelContainerStyled,
  ItemContainerStyled: PanelItemContainerStyled,
  ItemStyled: PanelItemStyled,
  LabelStyled: PanelLabelStyled,

  DescriptionStyled: PanelDescriptionStyled,
  LabelContainerStyled: PanelLabelContainerStyled,
  RadioMarkContainerStyled: PanelRadioMarkContainerStyled,
  EnhancerContainerStyled: PanelEnhancerContainerStyled
};

//
// export const labelStyled = ({ $theme }) => `
//     margin-left: ${$theme.spacings.s10}px;
// `;
//
// export const LabelStyled = styled("div", labelStyled);
