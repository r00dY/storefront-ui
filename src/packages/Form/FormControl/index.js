import React, { useState, useEffect } from "react";
import { C, F } from "../../Config";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const FormControl = props => {
  return (
    <div>
      <label
        css={css`
          display: block;
          ${F.body2.css}
          margin-bottom: 8px;
          font-weight: 600;
          color: ${C.grey900.css};
        `}
      >
        {props.label}
      </label>
      <div>{props.children}</div>
      <div
        css={css`
          ${F.caption.css}
          margin-top: 8px;
          color: ${C.grey500.css};
        `}
      >
        {props.caption}
      </div>
    </div>
  );
};

export default FormControl;
