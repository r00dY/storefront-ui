/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "storefront-ui/Theme";

import IconCheckBlank from "../../svg/checkbox_blank.svg";
import IconCheckChecked from "../../svg/checkbox.svg";

const ListItem = ({ selected, focused, item }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        padding: ${theme.spacings.s40}px;
        display: flex;
        align-items: center;
        background-color: ${focused ? theme.colors.mono100.css : "transparent"};
        ${theme.fonts.body2.css}
        &:hover {
          background-color: ${theme.colors.mono100.css};
        }
        svg {
          margin-right: ${theme.spacings.s40}px;
        }
        cursor: pointer;
      `}
    >
      {selected ? <IconCheckChecked /> : <IconCheckBlank />} {item.name}
    </div>
  );
};

export { ListItem };
