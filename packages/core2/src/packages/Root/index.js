import React, { useEffect } from "react";
import { ThemeProvider } from "../Theme";
import Box from "../Box";
import Grid from "../Grid";

/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";

import GridDebugger from "../GridDebugger";
import { NotificationSystemProvider } from "../NotificationSystem";

export default ({ theme, children }) => {
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
              top: "notificationSystemOffset",
              left: "notificationSystemOffset",
              width: theme.space.notificationSystemWidth,
              display: ["none", null, "block"]
            }}
          >
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-topLeft__"}
            >
              {/*<Box sx={{bg: "green", height: 100, position: "relative"}}/>*/}
              {/*<Box sx={{bg: "red", height: 100, position: "relative"}}/>*/}
            </Grid>
          </Box>

          <Box
            sx={{
              position: "fixed",
              top: "notificationSystemOffset",
              right: "notificationSystemOffset",
              width: theme.space.notificationSystemWidth,
              display: ["none", null, "block"]
            }}
          >
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-topRight__"}
            >
              {/*<Box sx={{bg: "blue", height: 100, position: "relative"}}/>*/}
              {/*<Box sx={{bg: "yellow", height: 100, position: "relative"}}/>*/}
            </Grid>
          </Box>

          <Box
            sx={{
              position: "fixed",
              top: "notificationSystemOffset",
              right: "notificationSystemOffset",
              left: "notificationSystemOffset",
              display: ["block", null, "none"]
            }}
          >
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-topMobile__"}
            >
              {/*<Box sx={{bg: "green", height: 30, position: "relative"}}/>*/}
              {/*<Box sx={{bg: "red", height: 30, position: "relative"}}/>*/}
              {/*<Box sx={{bg: "blue", height: 30, position: "relative"}}/>*/}
              {/*<Box sx={{bg: "yellow", height: 30, position: "relative"}}/>*/}
            </Grid>
          </Box>
        </div>
      </NotificationSystemProvider>
    </ThemeProvider>
  );
};
