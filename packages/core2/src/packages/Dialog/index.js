import React, { useEffect } from "react";
import Layer from "../Layer";

import FocusLock from "react-focus-lock";
import Box from "../Box";

function Dialog$(props) {
  const { children, onRequestClose, ...restProps } = props;

  useEffect(() => {
    const onDocumentKeyPress = evt => {
      if (evt.key !== "Escape") {
        return;
      }

      // Ignore events that have been `event.preventDefault()` marked.
      if (event.defaultPrevented) {
        return;
      }

      if (onRequestClose) {
        onRequestClose();
      }
    };

    document.addEventListener("keyup", onDocumentKeyPress);

    return () => {
      document.removeEventListener("keyup", onDocumentKeyPress);
    };
  });

  return (
    <Layer {...restProps} onClickOutside={onRequestClose}>
      {params => (
        <FocusLock
          returnFocus
          lockProps={{
            style: {
              width: "100%",
              height: "100%",
              maxWidth: "inherit",
              maxHeight: "inherit",
              minWidth: "inherit",
              minHeight: "inherit"
            },
            role: "dialog"
          }}
        >
          {typeof children === "function" ? children(params) : children}
        </FocusLock>
      )}
    </Layer>
  );
}

export default Dialog$;
