import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import LayoutLeftCenterRight from "storefront-ui/LayoutLeftCenterRight";
import { ButtonRaw } from "../ButtonRaw";
import { useTheme } from "storefront-ui/Theme";

import IconClose from "../../../data/svg/close.svg";

export const ModalHeader = ({ onRequestClose, title }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        box-sizing: border-box;
        height: 50px;
        padding: ${theme.spacings.s40}px;
        ${theme.fonts.body1.css}
      `}
    >
      <LayoutLeftCenterRight
        height={"100%"}
        right={
          <ButtonRaw
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
            onClick={onRequestClose}
          >
            <IconClose />
          </ButtonRaw>
        }
        center={title}
        left={<div />}
      />
    </div>
  );
};
