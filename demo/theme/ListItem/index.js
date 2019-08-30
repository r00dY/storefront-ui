/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "storefront-ui/Theme";

import IconCheckBlank from "../../svg/checkbox_blank.svg";
import IconCheckChecked from "../../svg/checkbox.svg";

import { R, L } from "storefront-ui/Config";

const ListItem = ({ selected, focused, item, hasPaddingOnMobile }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        padding: ${theme.spacings.s40}px 0;
        display: flex;
        align-items: center;
        background-color: ${focused ? theme.colors.mono100.css : "transparent"};
        ${theme.fonts.body2.css}
        transition: all 150ms;
        ${hasPaddingOnMobile
          ? `${R.to("sm").css(
              `${L.margin.css("padding-right")}${L.margin.css("padding-left")}`
            )}`
          : ""}
        &:hover {
          color: ${theme.colors.mono600.css};
        }
        svg {
          transition: all 150ms;
          margin-right: ${theme.spacings.s40}px;
          fill: currentColor;
        }
        cursor: pointer;
      `}
    >
      {selected ? <IconCheckChecked /> : <IconCheckBlank />} {item.name}
    </div>
  );
};

export { ListItem };
