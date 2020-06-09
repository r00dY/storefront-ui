import Box from "@commerce-ui/core/Box";
// import Alert, { useAlert } from "@commerce-ui/core/Alert";

import { useNotificationSystem } from "@commerce-ui/core/NotificationSystem";

import React, { useRef, useState } from "react";

const TestAlert = ({ bg, onClose, children }) => (
  <Box sx={{ p: "s5", bg: bg || "antiquewhite", height: 100 }}>
    <button onClick={onClose}>close</button> {children}
  </Box>
);

export const basic = () => {
  const notificationSystem = useNotificationSystem();

  const [counter, setCounter] = useState(0);

  return (
    <Box>
      <button
        onClick={() => {
          notificationSystem.show({
            content: ({ close }) => <TestAlert bg={"green"} onClose={close} />,
            placement: "topLeft"
          });
        }}
      >
        Show on top left
      </button>
      <br />
      <br />

      <button
        onClick={() => {
          notificationSystem.show({
            content: ({ close }) => <TestAlert bg={"red"} onClose={close} />,
            placement: "topRight"
          });
        }}
      >
        Show on top right
      </button>

      <br />
      <br />

      <button
        onClick={() => {
          notificationSystem.show({
            content: ({ close }) => (
              <TestAlert bg={"antiquewhite"} onClose={close} />
            ),
            placement: "topRight",
            timeout: 1000
          });
        }}
      >
        Show on top right with timeout
      </button>

      <br />
      <br />

      <button
        onClick={() => {
          notificationSystem.show({
            content: ({ close }) => (
              <TestAlert bg={"antiquewhite"} onClose={close}>
                {counter}{" "}
                <button onClick={() => setCounter(counter => counter + 1)}>
                  increment
                </button>
              </TestAlert>
            ),
            placement: "topRight",
            timeout: 3000,
            id: "always-the-same"
          });
        }}
      >
        Show always the same
      </button>
    </Box>
  );
};

export default {
  title: "NotificationSystem"
};
