import { styled } from "../base/styles";

import {
  getInputContainerStyles,
  getInputPadding
} from "../base/input/styled-components";

export const selectStyles = ({ $disabled, $size, $theme }) => {
  const { colors, sizing } = $theme;

  return {
    appearance: "none",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    display: "block",
    width: "100%",
    color: $disabled ? colors.inputTextDisabled : colors.foreground,
    cursor: $disabled ? "not-allowed" : "pointer",
    ...getInputPadding($size, sizing),
    paddingRight: "28px"
  };
};

export const SelectStyled = styled("select", selectStyles);

export const rootStyles = props => {
  return {
    ...getInputContainerStyles(props),
    overflow: "hidden",
    position: "relative"
  };
};

export const RootStyled = styled("div", rootStyles);

export const iconStyles = props => {
  return `
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        margin-right: 6px;
        pointer-events: none;
    `;
};

export const IconStyled = styled("div", iconStyles);
