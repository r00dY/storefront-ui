import { Divider$ } from "storefront-ui/Divider";
import { useTheme } from "storefront-ui/Theme";

export const Divider = props => {
  const theme = useTheme();

  return (
    <Divider$
      overrides={{
        Label: {
          style: () => `
                ${theme.fonts.caption1.css}
                color: ${theme.colors.mono500.css};
                `
        },
        Root: {
          style: () => `
                padding: 24px 0;
            `
        }
      }}
      {...props}
    />
  );
};
