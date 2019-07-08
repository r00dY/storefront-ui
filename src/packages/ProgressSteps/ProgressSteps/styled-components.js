import { styled } from "../../base/styles";

export const rootStyles = ({ $theme }) => `
display: flex;
flex-wrap: wrap;
>div:not(:last-of-type) {
  margin-right: ${$theme.spacings.s40}px;
}
`;
export const RootStyled = styled("div", rootStyles);

export const separatorStyles = ({ $theme, highlighted }) => `
color: ${highlighted ? $theme.colors.mono800.css : $theme.colors.mono400.css};
`;
export const SeparatorStyled = styled("div", separatorStyles, () => (
  <div>→</div>
));
