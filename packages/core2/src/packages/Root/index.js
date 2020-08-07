import React, { useEffect } from "react";
import { ThemeProvider } from "../Theme";
import Box from "../Box";
import Grid from "../Grid";

/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";

import GridDebugger from "../GridDebugger";
import {
  NotificationSystemProvider,
  getNotificationOffset
} from "../NotificationSystem";

export default ({ theme, children }) => {
  const offset = getNotificationOffset(theme);

  return (
    <ThemeProvider theme={theme}>
      <NotificationSystemProvider>
        <GridDebugger />
        <Global
          styles={css`
            body.ReactModal__Body--open {
              overflow-y: hidden;
            }
          `}
        />

        <div
          css={css`
            position: relative;
            z-index: 0;
          `}
          id={"__app__"}
        >
          {children}
        </div>

        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10000;
          `}
          id={"__layers__"}
        />

        <div
          css={css`
            position: absolute;
            z-index: 10001;
          `}
          id={"__notifications__"}
        >
          <Box
            sx={{
              position: "fixed",
              top: offset.top.y,
              left: offset.top.x,
              width: theme.space.notificationSystemWidth,
              display: ["none", null, "block"]
            }}
          >
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-topLeft__"}
            />
          </Box>

          <Box
            sx={{
              position: "fixed",
              top: offset.top.y,
              right: offset.top.x,
              width: theme.space.notificationSystemWidth,
              display: ["none", null, "block"]
            }}
          >
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-topRight__"}
            />
          </Box>

          <Box
            sx={{
              position: "fixed",
              top: offset.top.y,
              right: offset.top.x,
              left: offset.top.x,
              display: ["block", null, "none"]
            }}
          >
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-topMobile__"}
            />
          </Box>

          <Box
            sx={{
              position: "fixed",
              bottom: offset.top.y,
              left: offset.top.x,
              width: theme.space.notificationSystemWidth,
              display: ["none", null, "block"]
            }}
          >
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-bottomLeft__"}
            />
          </Box>

          <Box
            sx={{
              position: "fixed",
              bottom: offset.top.y,
              right: offset.top.x,
              width: theme.space.notificationSystemWidth,
              display: ["none", null, "block"]
            }}
          >
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-bottomRight__"}
            />
          </Box>

          <Box
            sx={{
              position: "fixed",
              bottom: offset.top.y,
              right: offset.top.x,
              left: offset.top.x,
              display: ["block", null, "none"]
            }}
          >
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-bottomMobile__"}
            />
          </Box>
        </div>
      </NotificationSystemProvider>
    </ThemeProvider>
  );
};
