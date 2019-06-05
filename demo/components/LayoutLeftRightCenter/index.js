import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ left, right, center }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
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
            align-items: center;
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
            align-items: center;
          `}
        >
          {right}
        </div>
      </div>
    </div>
  );
};
