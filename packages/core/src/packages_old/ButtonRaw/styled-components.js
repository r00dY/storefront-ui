import { styled } from "../../packages/base/styles";

export const rootStyles = ({ $theme }) => `
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1; /* 1 */
  margin: 0; /* 2 */

  overflow: visible;
  text-transform: none;

  appearance: none;

  &::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  &:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;

  text-align: left;

  cursor: pointer;
  &:disabled {
    cursor: default;
    color: black;
  }
  
  &:focus {
    outline: none;
  }
  
  -webkit-tap-highlight-color: transparent;
`;

export const RootStyled = styled("button", rootStyles);
