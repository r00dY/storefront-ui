import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default props => (
  <div
    css={css`
      position: relative;
      background-color: ${props.color};
      width: 100%;
      height: ${props.height || "320px"};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      color: white;
    `}
  >
    {props.children}
  </div>
);
