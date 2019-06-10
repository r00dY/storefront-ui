import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import { ButtonRaw } from "../ButtonRaw";

import IconClose from "../../../data/svg/close.svg";

export const ModalHeader = ({ onRequestClose, title }) => (
  <div
    css={css`
      height: 50px;
      background-color: lightgrey;
      padding: 16px;
    `}
  >
    <LayoutLeftCenterRight
      height={"100%"}
      left={
        <ButtonRaw
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 1;
          `}
          onClick={onRequestClose}
        >
          <IconClose />
        </ButtonRaw>
      }
      center={title}
      right={<div />}
    />
  </div>
);
