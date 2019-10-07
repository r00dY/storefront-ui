import React, { useState } from "react";
import { Button } from "../Button";

import { useTheme } from "storefront-ui/Theme";
import Link from "next/link";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import routerPush from "../../helpers/routerPush";
import ThemeLink from "../ThemeLink";

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
          padding: ${theme.spacings.s60}px ${theme.spacings.s80}px
            ${theme.spacings.s60}px ${theme.spacings.s80}px;
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
            <Link href={row.href}>
              <ThemeLink>Change</ThemeLink>
            </Link>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default OrderDetails;
