import React, { useEffect } from "react";
import { ThemeProvider } from "../Theme";
import Box, { styledBox } from "../Box";
import Grid from "../Grid";

import GridDebugger from "../GridDebugger";
import {
  NotificationSystemProvider,
  getNotificationOffset
} from "../NotificationSystem";

const NotificationContainerTopLeft = styledBox({
  position: "fixed",
  top: p => p.offset.top.y,
  left: p => p.offset.top.x,
  width: "notificationSystemWidth",
  display: ["none", null, "block"]
});

const NotificationContainerTopRight = styledBox({
  position: "fixed",
  top: p => p.offset.top.y,
  right: p => p.offset.top.x,
  width: "notificationSystemWidth",
  display: ["none", null, "block"]
});

const NotificationContainerTopMobile = styledBox({
  position: "fixed",
  top: p => p.offset.top.y,
  right: p => p.offset.top.x,
  left: p => p.offset.top.x,
  width: "notificationSystemWidth",
  display: ["block", null, "none"]
});

const NotificationContainerBottomLeft = styledBox({
  position: "fixed",
  bottom: p => p.offset.top.y,
  left: p => p.offset.top.x,
  width: "notificationSystemWidth",
  display: ["none", null, "block"]
});

const NotificationContainerBottomRight = styledBox({
  position: "fixed",
  bottom: p => p.offset.top.y,
  right: p => p.offset.top.x,
  width: "notificationSystemWidth",
  display: ["none", null, "block"]
});

const NotificationContainerBottomMobile = styledBox({
  position: "fixed",
  bottom: p => p.offset.top.y,
  right: p => p.offset.top.x,
  left: p => p.offset.top.x,
  width: "notificationSystemWidth",
  display: ["block", null, "none"]
});

export default ({ theme, children }) => {
  const offset = getNotificationOffset(theme);

  return (
    <ThemeProvider theme={theme}>
      <NotificationSystemProvider>
        <GridDebugger />

        <div
          style={{
            position: "relative",
            zIndex: 0
          }}
          id={"__app__"}
        >
          {children}
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10000
          }}
          id={"__layers__"}
        />

        <div
          style={{
            position: "absolute",
            zIndex: 10001
          }}
          id={"__notifications__"}
        >
          <NotificationContainerTopLeft offset={offset}>
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-topLeft__"}
            />
          </NotificationContainerTopLeft>

          <NotificationContainerTopRight offset={offset}>
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-topRight__"}
            />
          </NotificationContainerTopRight>

          <NotificationContainerTopMobile offset={offset}>
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-topMobile__"}
            />
          </NotificationContainerTopMobile>

          <NotificationContainerBottomLeft offset={offset}>
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-bottomLeft__"}
            />
          </NotificationContainerBottomLeft>

          <NotificationContainerBottomRight offset={offset}>
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-bottomRight__"}
            />
          </NotificationContainerBottomRight>

          <NotificationContainerBottomMobile offset={offset}>
            <Grid
              cols={1}
              gap={"notificationSystemSeparator"}
              id={"__notifications-bottomMobile__"}
            />
          </NotificationContainerBottomMobile>
        </div>
      </NotificationSystemProvider>
    </ThemeProvider>
  );
};
