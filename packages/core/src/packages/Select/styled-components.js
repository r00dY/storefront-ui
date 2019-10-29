import { styled } from "../base/styles";

import {
  getInputContainerStyles,
  getInputPadding
} from "../base/input/styled-components";

export const rootStyles = props => {
  const { $disabled, $size, $theme } = props;
  const { colors, sizing } = $theme;

  return {
    position: "relative",
    appearance: "none",
    border: "none",
    outline: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    textAlign: "left",
    cursor: $disabled ? "not-allowed" : "pointer",
    ...getInputContainerStyles(props),
    ...getInputPadding($size, sizing)
  };
};

export const RootStyled = styled("button", rootStyles);

export const iconContainerStyles = props => {
  return `
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        pointer-events: none;
        margin-left: 6px;
    `;
};

export const IconContainerStyled = styled("div", iconContainerStyles);

export const modalBodyProps = props => {
  return `max-height: 90vh;`;
};

export const ModalBodyStyled = styled("div", modalBodyProps);

export const popoverBodyProps = props => {
  return ``;
};

export const PopoverBodyStyled = styled("div", popoverBodyProps);
