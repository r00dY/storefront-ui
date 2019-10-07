/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "@commerce-ui/core/Theme";

import IconCheckBlank from "../../svg/checkbox_blank.svg";
import IconCheckChecked from "../../svg/checkbox.svg";

const ListItem = ({ selected, focused, item }) => {
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
