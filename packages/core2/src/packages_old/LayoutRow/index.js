import React from "react";
import { rs } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({
  alignItems = "center",
  gutter = 16,
  children,
  height = null
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: ${alignItems};
        ${height === null ? "" : rs(height).css("height")}
      `}
    >
      {React.Children.map(children, (elem, index) => (
        <div
          key={elem.key || index}
          css={css`
            ${index > 0 ? rs(gutter).css("margin-left") : ""};
          `}
        >
          {elem}
        </div>
      ))}
    </div>
  );
};
