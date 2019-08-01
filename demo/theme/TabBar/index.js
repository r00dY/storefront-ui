import { Button } from "../Button";
import { TabBar$ } from "storefront-ui/TabBar";
import { useTheme } from "storefront-ui/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const TabBar = props => {
  const theme = useTheme();
  return (
    <TabBar$
      overrides={{
        Tab: ({ tabData, focus }) => (
          <div
            css={css`
              padding: 16px;
              height: ${theme.spacings.s120}px;
              ${theme.fonts.body1.css}
              &:hover {
                color: ${theme.colors.primary.css};
              }
              display: flex;
              align-items: center;
              justify-content: center;
              ${focus ? `color: ${theme.colors.primary.css};` : ""}
            `}
          >
            {tabData.label}
          </div>
        ),
        Separator: () => false,
        Line: {
          style: `height: 1px; background: ${theme.colors.primary.css};`
        }
      }}
      gutter={5}
      {...props}
    />
  );
};
