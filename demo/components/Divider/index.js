import { Divider$ } from "@commerce-ui/core/Divider";
import { useTheme } from "@commerce-ui/core/Theme";

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
