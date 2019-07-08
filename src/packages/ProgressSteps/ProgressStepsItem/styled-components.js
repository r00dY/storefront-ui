import { styled } from "../../base/styles";

export const rootStyles = ({ $theme, completed, current }) => `
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
export const RootStyled = styled("div", rootStyles);
