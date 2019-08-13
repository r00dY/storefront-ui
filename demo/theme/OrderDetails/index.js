import React, { useState } from "react";
import { Button } from "../Button";

import { useTheme } from "storefront-ui/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import routerPush from "../../helpers/routerPush";

const OrderDetails = ({ rows }) => {
  const theme = useTheme();

  return (
    <table
      css={css`
        width: 100%;
        border-spacing: 0;
        background: ${theme.colors.mono50.css};
        ${theme.fonts.body2.css}
        td {
          padding: ${theme.spacings.s40}px ${theme.spacings.s40}px
            ${theme.spacings.s40}px ${theme.spacings.s80}px;
        }
      `}
    >
      {rows.map((row, index) => (
        <tr
          css={css`
            &: not(: last-of-type);
          `}
        >
          <td>{row.label}</td>
          <td>{row.value}</td>
          <td
            css={css`
              text-align: right;
            `}
          >
            <Button
              kind={"minimal"}
              onClick={() => {
                routerPush(row.href);
              }}
            >
              Change
            </Button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default OrderDetails;
