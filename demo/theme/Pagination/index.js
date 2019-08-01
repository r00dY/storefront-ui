import React, { useState } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Button } from "../Button";
import { SelectNative } from "../SelectNative";
import { useTheme } from "storefront-ui/Theme";

import LayoutRow from "storefront-ui/LayoutRow";
import { Pagination$, StatefulPagination$ } from "storefront-ui/Pagination";

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
        <Button {...prevButtonProps} disabled={!prevButtonActive}>
          Previous
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
        <Button {...nextButtonProps} disabled={!nextButtonActive}>
          Next
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
