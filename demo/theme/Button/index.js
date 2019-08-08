import { Button$ } from "storefront-ui/Button";

const overrides = {
  BaseButton: {
    style: ({ $theme, $kind }) => `
            border-radius: 4px;
            ${
              $kind === "white"
                ? `
                background: white;
                color: black;
                &:hover {
                    background: ${$theme.colors.mono100.css};
                }
            `
                : ""
            }
            ${
              $kind === "facebook"
                ? `
                background:  #0084ff;
                border: 1px solid #0084ff;
                color: white;
                
              `
                : ""
            }
        }
            ${
              $kind === "secondary"
                ? `
                background: white;
                border: 1px solid ${$theme.colors.primary.css};
                &:hover, &:focus {
                  background: white;
                  border: 1px solid ${$theme.colors.primary600.css};
                  color: ${$theme.colors.primary600.css};
                }
              `
                : ""
            }
            ${
              $kind === "primary"
                ? `
                  border: 1px solid ${$theme.colors.primary.css};
              `
                : ""
            }
            ${
              $kind === "minimal"
                ? `
                  padding: 6px 0;
                  &:hover, &:focus {
                    background: none;
                    color: ${$theme.colors.primary600.css};
                  }
                `
                : ""
            }
            
        `
  }
};

export const Button = props => <Button$ overrides={overrides} {...props} />;
