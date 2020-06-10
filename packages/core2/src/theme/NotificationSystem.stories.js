import Box from "@commerce-ui/core/Box";
// import Alert, { useAlert } from "@commerce-ui/core/Alert";

import { useNotificationSystem } from "@commerce-ui/core/NotificationSystem";

import React, { useRef, useState } from "react";
import Grid from "@commerce-ui/core/Grid";

const TestAlert = ({ bg, onClose, children }) => (
  <Box sx={{ p: "s5", bg: bg || "antiquewhite" }}>
    <button onClick={onClose}>close</button> {children}
  </Box>
);

export const basic = () => {
  const notificationSystem = useNotificationSystem();

  const [counter, setCounter] = useState(0);

  const containerRef = useRef(null);

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
      <br />
      <br />

      <button
        onClick={() => {
          notificationSystem.show({
            content: ({ close }) => <TestAlert bg={"aqua"} onClose={close} />,
            placement: "bottomLeft"
          });
        }}
      >
        Show on bottom left
      </button>
      <br />
      <br />

      <button
        onClick={() => {
          notificationSystem.show({
            content: ({ close }) => <TestAlert bg={"coral"} onClose={close} />,
            placement: "bottomRight"
          });
        }}
      >
        Show on bottom right
      </button>

      <br />
      <br />

      <button
        onClick={() => {
          notificationSystem.show({
            content: ({ close }) => <TestAlert bg={"coral"} onClose={close} />,
            placement: ["bottomLeft", null, "topRight"]
          });
        }}
      >
        Show topRight desktop, bottomLeft mobile
      </button>

      <br />
      <br />

      <button
        onClick={() => {
          notificationSystem.show({
            content: ({ close }) => <TestAlert bg={"coral"} onClose={close} />,
            placement: containerRef
          });
        }}
      >
        Show topRight desktop, bottomLeft mobile
      </button>

      <br />

      <Grid
        cols={1}
        gap={10}
        _ref={containerRef}
        sx={{
          width: 500,
          height: 200,
          border: "1px dotted black"
        }}
      />
    </Box>
  );
};

export default {
  title: "NotificationSystem"
};
