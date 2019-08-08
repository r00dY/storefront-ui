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
            
        `
  }
};

export const Button = props => <Button$ overrides={overrides} {...props} />;
