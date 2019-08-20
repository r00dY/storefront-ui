import React, { useState } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Button } from "../Button";
import { SelectNative } from "../SelectNative";
import { useTheme } from "storefront-ui/Theme";

import LayoutRow from "storefront-ui/LayoutRow";
import { Pagination$, StatefulPagination$ } from "storefront-ui/Pagination";

import IconBack from "./arrow_back.svg";
import IconForward from "./arrow_forward.svg";
import Device from "storefront-ui/Device";

const overrides = {
  Root: ({
    prevButtonProps,
    prevButtonActive,
    nextButtonProps,
    nextButtonActive,
    selectProps,
    count
  }) => {
    const theme = useTheme();
    return (
      <LayoutRow gutter={10}>
        <Button
          {...prevButtonProps}
          startEnhancer={() => <IconBack />}
          disabled={!prevButtonActive}
          css={css`
            svg {
              fill: currentColor;
            }
          `}
        >
          <Device desktop> Prev </Device>
        </Button>
        <div
          css={css`
            width: 70px;
          `}
        >
          <SelectNative {...selectProps} />
        </div>
        <div
          css={css`
            ${theme.fonts.body1.css}
          `}
        >
          of {count}
        </div>
        <Button
          {...nextButtonProps}
          disabled={!nextButtonActive}
          endEnhancer={() => <IconForward />}
          css={css`
            svg {
              fill: currentColor;
            }
          `}
        >
          <Device desktop> Next </Device>
        </Button>
      </LayoutRow>
    );
  }
};

export const Pagination = props => (
  <Pagination$ overrides={overrides} {...props} />
);
export const StatefulPagination = props => (
  <StatefulPagination$ overrides={overrides} {...props} />
);
