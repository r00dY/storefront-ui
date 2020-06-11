import React, { useState, useRef, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import Box from "../Box";
import { useResponsiveHelpers } from "../index";
import useWindowSize from "../useWindowSize";

import uniqueId from "../uniqueId";

const NotificationsContext = React.createContext({});

// TODO: make alerts visually-hidden instead of removing from DOM
// TODO: make it possible to show notification into ref

export function NotificationSystemProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  const { currentValue } = useResponsiveHelpers();

  const [notifications, setNotifications] = useState([]);
  const [isLayerOpen, setLayerOpen] = useState(false);

  const close = notification => {
    setNotifications(notifications =>
      notifications.filter(x => x.id !== notification.id)
    );
  };

  useEffect(() => {
    window.window.__cui_notificationSystemSetLayerOpen = isOpen => {
      // We do it this way so that Layer doesn't have to import MenuLayout if not needed (code split!)
      setLayerOpen(isOpen);
    };
  }, []);

  const show = config => {
    const id = config.id || uniqueId();
    const index = notifications.findIndex(x => x.id === id);

    if (index > -1) {
      clearTimeout(notifications[index].timeout);
    }

    const newNotification = {
      ...config,
      id
    };

    if (typeof config.timeout === "number" && config.timeout > 0) {
      newNotification.timeout = setTimeout(() => {
        close(newNotification);
      }, config.timeout);
    }

    let newNotifications = [...notifications];

    if (index > -1) {
      newNotifications[index] = newNotification;
    } else {
      newNotifications.push(newNotification);
    }

    setNotifications(newNotifications);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const _ = useWindowSize(); // unused but rerenders on resize

  let portals;
  if (mounted) {
    let topLeft = [];
    let topRight = [];
    let topMobile = [];

    let bottomLeft = [];
    let bottomRight = [];
    let bottomMobile = [];

    const refs = new Map();

    notifications.forEach(notification => {
      const placement = currentValue(notification.placement); // TODO: this function can't use hook!!!

      let content =
        typeof notification.content === "function"
          ? notification.content({
              close: () => {
                close(notification);
              }
            })
          : notification.content;

      // TODO: accessibility!!
      content = (
        <Box sx={{ display: "contents" }} role={"alert"} key={notification.id}>
          {content}
        </Box>
      );

      if (typeof placement === "string") {
        if (placement === "topLeft") {
          topLeft.push(content);
          topMobile.push(content);
        } else if (placement === "topRight") {
          topRight.push(content);
          topMobile.push(content);
        } else if (placement === "bottomLeft") {
          bottomLeft.push(content);
          bottomMobile.push(content);
        } else if (placement === "bottomRight") {
          bottomRight.push(content);
          bottomMobile.push(content);
        } else {
          throw new Error(
            "unknown position " + placement + " for notification"
          );
        }
      } else {
        if (!placement.current) {
          throw new Error(
            "placement for notification can be either string with position (topLeft, topRight, etc...) or ref"
          );
        }

        if (refs.has(placement.current)) {
          refs.set(placement.current, [
            ...refs.get(placement.current),
            content
          ]);
        } else {
          refs.set(placement.current, [content]);
        }
      }
    });

    portals = [
      ReactDOM.createPortal(
        topLeft,
        document.getElementById(
          isLayerOpen
            ? "__notifications-topLeft__"
            : "__notifications-menu-topLeft__"
        ) || document.getElementById("__notifications-topLeft__") // if there's no menu we must default
      ),
      ReactDOM.createPortal(
        topRight,
        document.getElementById(
          isLayerOpen
            ? "__notifications-topRight__"
            : "__notifications-menu-topRight__"
        ) || document.getElementById("__notifications-topRight__")
      ),
      ReactDOM.createPortal(
        topMobile,
        document.getElementById(
          isLayerOpen
            ? "__notifications-topMobile__"
            : "__notifications-menu-topMobile__"
        ) || document.getElementById("__notifications-topMobile__")
      ),
      ReactDOM.createPortal(
        bottomLeft,
        document.getElementById("__notifications-bottomLeft__")
      ),
      ReactDOM.createPortal(
        bottomRight,
        document.getElementById("__notifications-bottomRight__")
      ),
      ReactDOM.createPortal(
        bottomMobile,
        document.getElementById("__notifications-bottomMobile__")
      )
    ];

    refs.forEach((value, keyRef) => {
      portals.push(ReactDOM.createPortal(value, keyRef));
    });
  }

  return (
    <NotificationsContext.Provider
      value={{
        show
      }}
    >
      {children}
      {portals}
    </NotificationsContext.Provider>
  );
}

// export function Notifications

export function useNotificationSystem() {
  return useContext(NotificationsContext);
}
