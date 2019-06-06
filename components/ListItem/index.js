// TODO: here should be used a neat tiny preset with easily styleable checkmark!

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import IconCheckBlank from "../../data/svg/outline-check_box_outline_blank-24px.svg";
import IconCheckChecked from "../../data/svg/outline-check_box-24px.svg";

const ListItem = ({ selected, focused, item }) => (
  <div
    css={css`
      padding: 8px;
      display: flex;
      align-items: center;
      background-color: ${focused ? "lightgrey" : "transparent"};
      &:hover {
        background-color: lightgrey;
      }
      svg {
        margin-right: 8px;
      }
      cursor: pointer;
    `}
  >
    {selected ? <IconCheckChecked /> : <IconCheckBlank />} {item.name}
  </div>
);

export { ListItem };
