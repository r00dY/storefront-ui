import { styled } from "../../base/styles";

export const rootStyles = ({ $theme }) => `
display: flex;
flex-wrap: wrap;
>div:not(:last-of-type) {
  margin-right: ${$theme.spacings.s40}px;
}
`;
export const RootStyled = styled("div", rootStyles);

export const stepStyles = ({ $theme, completed, current }) => `
flex-wrap: wrap;
white-space: nowrap;
${$theme.fonts.body2.css}
a, span {
    ${
      completed
        ? `color: ${$theme.colors.primary500.css}; text-decoration: none;`
        : ""
    }
    ${
      current
        ? `color: ${$theme.colors.primary500.css}; text-decoration: underline;`
        : ""
    }
    ${
      !current && !completed
        ? `color: ${
            $theme.colors.mono400.css
          }; pointer-events: none; text-decoration: none;`
        : ""
    }
}
`;
export const StepStyled = styled("div", stepStyles);

export const separatorStyles = ({ $theme, nextStepIsCompleted }) => `
color: ${
  nextStepIsCompleted ? $theme.colors.mono800.css : $theme.colors.mono400.css
};
`;
export const SeparatorStyled = styled("div", separatorStyles, () => (
  <div>→</div>
));
