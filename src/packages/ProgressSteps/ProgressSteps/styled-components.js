import { styled } from "../../base/styles";

export const rootStyles = ({ $theme }) => `
display: flex;
flex-wrap: wrap;
align-items: center;
>div:not(:last-of-type) {
  margin-right: ${$theme.spacings.s40}px;
}
`;
export const RootStyled = styled("div", rootStyles);

export const stepStyles = ({ $theme, completed, current }) => ``;
export const StepStyled = styled("div", stepStyles);

export const separatorStyles = ({ $theme, nextStepIsCompleted }) => `
color: ${
  nextStepIsCompleted ? $theme.colors.mono800.css : $theme.colors.mono400.css
};
`;
export const SeparatorStyled = styled("div", separatorStyles, () => (
  <div>→</div>
));
