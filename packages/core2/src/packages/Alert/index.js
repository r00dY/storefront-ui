import React, { useState, useRef, useLayoutEffect } from "react";
import Box from "../Box";

const visuallyHiddenStyles = {
  position: "absolute",
  height: "1px",
  width: "1px",
  overflow: "hidden",
  clip: "rect(1px, 1px, 1px, 1px)",
  whiteSpace: "nowrap"
};

export function useAlert(props = {}) {
  const { timeout, initState = 0 } = props;

  const defaultTimeout = timeout;

  const ref = useRef(null);

  const timer = useRef(null);
  const [status, setStatus] = useState(initState); // 1 - "visible", 2 - "visually-hidden"
  const [payload, setPayload] = useState(null);
  const [content, setContent] = useState(null);
  const [counter, setCounter] = useState(0);

  const focus = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  useLayoutEffect(
    () => {
      focus();
    },
    [counter]
  );

  return {
    show: (options = {}) => {
      let { timeout, autofocus = false, payload, content } = options;
      clearTimeout(timer.current);
      setPayload(payload);
      setContent(content);
      setStatus(1);

      if (autofocus) {
        setCounter(counter + 1);
      }

      timeout = timeout || defaultTimeout;

      if (timeout) {
        timer.current = setTimeout(() => {
          setStatus(2);
        }, timeout);
      }
    },
    close: () => {
      setStatus(status === 0 ? 0 : 2);
    },
    focus,
    payload,
    content,
    ref,
    status
  };
}

export default function Alert(props) {
  let { children, controller, sx, ...restProps } = props;

  if (!controller) {
    controller = useAlert({ ...props, initState: 1 });
  }

  if (controller.status === 0) {
    return null;
  }

  if (controller.content) {
    children = controller.content;
  }

  if (typeof children === "function") {
    children = children(controller);
  } else if (React.isValidElement(children)) {
    children = React.cloneElement(children, {
      ...controller.payload,
      onRequestClose: controller.close
    });
  }

  return (
    <Box
      sx={{ ...sx, ...(controller.status === 2 ? visuallyHiddenStyles : {}) }}
      {...restProps}
      role={"alert"}
      tabIndex={-1}
      _ref={controller.ref}
    >
      {children}
    </Box>
  );

  return content;
}
