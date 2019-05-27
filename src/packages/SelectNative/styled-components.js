import { styled } from "../base/styles";

export const selectStyles = ({ $theme }) => `
  appearance: none;
  border: none;
  outline: none;
  background-color: transparent;
  display: block;
  width: 100%;
`;

export const SelectStyled = styled("select", selectStyles);
