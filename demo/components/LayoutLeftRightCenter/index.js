import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ left, right, center, alignItems = "center" }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: ${alignItems};
      `}
    >
      <div
        css={css`
          position: relative;
          flex-grow: 1;
        `}
      >
        {left}
      </div>

      <div
        css={css`
          position: relative;
          flex-grow: 1;
        `}
      >
        <div
          css={css`
            position: relative;
            display: flex;
            justify-content: center;
            align-items: ${alignItems};
          `}
        >
          {center}
        </div>
      </div>

      <div
        css={css`
          position: relative;
          flex-grow: 1;
        `}
      >
        <div
          css={css`
            position: relative;
            display: flex;
            justify-content: flex-end;
            align-items: ${alignItems};
          `}
        >
          {right}
        </div>
      </div>
    </div>
  );
};
