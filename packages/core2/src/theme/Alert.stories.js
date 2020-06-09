import Box from "@commerce-ui/core/Box";
import Alert, { useAlert } from "@commerce-ui/core/Alert";

import React, { useRef, useState } from "react";

const TestAlert = ({ bg, content }) => (
  <Box sx={{ p: "s5", bg: bg || "antiquewhite" }}>
    {content || "Lorem ipsum"}
  </Box>
);

export const basic = () => {
  const alert = useAlert();
  const alert2 = useAlert();
  const alert3 = useAlert();
  const alert4 = useAlert();

  return (
    <Box>
      <h2>Basic</h2>

      <Alert
        controller={alert}
        sx={{
          p: "s5",
          bg: "coral",
          color: "white",
          mb: "s6"
        }}
      >
        Alert!
      </Alert>

      <button onClick={() => alert.show()}>Show alert</button>
      <button onClick={() => alert.close()}>Close alert</button>
      <button
        onClick={() =>
          alert.show({
            autofocus: true
          })
        }
      >
        Show alert with focus
      </button>

      <button
        onClick={() =>
          alert.show({
            timeout: 2000
          })
        }
      >
        Show with timeout 2 seconds
      </button>

      <h2>Payload</h2>

      <Alert
        controller={alert2}
        sx={{
          mb: "s6"
        }}
      >
        {({ payload }) => (
          <Box
            sx={{
              p: "s5",
              bg: payload.bg,
              color: "white"
            }}
          >
            {payload.text}
          </Box>
        )}
      </Alert>

      <button
        onClick={() =>
          alert2.show({
            payload: { bg: "red", text: "Lorem ipsum" },
            autofocus: true,
            timeout: 2000
          })
        }
      >
        Show payload 1
      </button>
      <button
        onClick={() =>
          alert2.show({
            payload: { bg: "black", text: "Lorem ipsum dolor sit amet" },
            autofocus: true,
            timeout: 2000
          })
        }
      >
        Show payload 2
      </button>

      <h2>Content</h2>

      <Alert
        controller={alert3}
        sx={{
          mb: "s6"
        }}
      />

      <button
        onClick={() =>
          alert3.show({
            content: (
              <Box sx={{ p: "s5", bg: "antiquewhite" }}>Notyfikacja!</Box>
            ),
            autofocus: true,
            timeout: 2000
          })
        }
      >
        Show
      </button>

      <h2>Component</h2>

      <Alert
        controller={alert4}
        sx={{
          mb: "s6"
        }}
      >
        <TestAlert />
      </Alert>

      <button
        onClick={() =>
          alert4.show({
            autofocus: true,
            timeout: 2000,
            payload: {
              content: "Test",
              bg: "coral"
            }
          })
        }
      >
        Show
      </button>

      <br />
    </Box>
  );
};

export default {
  title: "Alerts"
};
