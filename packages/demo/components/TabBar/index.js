import { TabBar$ } from "@commerce-ui/core/TabBar";
import { useTheme } from "@commerce-ui/core/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const TabBar = props => {
  const theme = useTheme();
  return (
    <TabBar$
      overrides={{
        Tab: ({ tabData, focus, active }) => (
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
              ${active ? `color: ${theme.colors.primary.css};` : ""}
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
      align={"fit"}
      scrollable={"false"}
      {...props}
    />
  );
};
