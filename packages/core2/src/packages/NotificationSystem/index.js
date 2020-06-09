import React, { useState, useRef, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import Box from "../Box";
import { useResponsiveHelpers } from "../index";

const NotificationsContext = React.createContext({});

// TODO: make alerts visually-hidden instead of removing from DOM
// TODO: make it possible to show notification into ref

export function NotificationSystemProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  const { currentValue } = useResponsiveHelpers();

  const [notifications, setNotifications] = useState([]);

  const close = notification => {
    setNotifications(notifications =>
      notifications.filter(x => x.id !== notification.id)
    );
  };

  const show = config => {
    const id = config.id || generateID();

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

  let portals;
  if (mounted) {
    let topLeft = [];
    let topRight = [];
    let topMobile = [];

    notifications.forEach(notification => {
      const placement = currentValue(notification.placement); // TODO: this function can't use hook!!!

      console.log(placement);

      let content =
        typeof notification.content === "function"
          ? notification.content({
              close: () => {
                close(notification);
              }
            })
          : notification.content;
      content = (
        <Box sx={{}} role={"alert"}>
          {content}
        </Box>
      );

      if (placement === "topLeft") {
        topLeft.push(content);
        topMobile.push(content);
      } else if (placement === "topRight") {
        topRight.push(content);
        topMobile.push(content);
      }
    });

    portals = [
      ReactDOM.createPortal(
        topLeft,
        document.getElementById("__notifications-topLeft__")
      ),
      ReactDOM.createPortal(
        topRight,
        document.getElementById("__notifications-topRight__")
      ),
      ReactDOM.createPortal(
        topMobile,
        document.getElementById("__notifications-topMobile__")
      )
    ];
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

function generateID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}
