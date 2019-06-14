import { styled } from "../base/styles";

import { getInputPadding } from "../base/input/styled-components";

export const selectStyles = ({ $disabled, $size, $theme }) => {
  const { sizing, colors } = $theme;

  return {
    appearance: "none",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    display: "block",
    width: "100%",
    cursor: $disabled ? "not-allowed" : "pointer",
    color: $disabled ? colors.inputTextDisabled : colors.foreground,
    ...getInputPadding($size, sizing)
  };
};

export const SelectStyled = styled("select", selectStyles);
