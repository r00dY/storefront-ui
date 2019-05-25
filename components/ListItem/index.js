// TODO: here should be used a preset with easily styleable checkmark!

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ListItem = ({ selected, focused, item }) => (
  <div
    css={css`
      padding: 8px;
      background-color: ${focused ? "lightgrey" : "transparent"};
      &:hover {
        background-color: lightgrey;
      }
      cursor: pointer;
    `}
  >
    {selected ? "[X]" : "[ ]"} {item.value}
  </div>
);

export { ListItem };
