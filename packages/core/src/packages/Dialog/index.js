import React, { useEffect } from "react";
import Layer from "../Layer";

import FocusLock from "react-focus-lock";

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
    <Layer {...props} onRequestClose={onRequestClose}>
      {params => (
        <FocusLock returnFocus>
          <div role={"dialog"}>
            {typeof children === "function" ? children(params) : children}
          </div>
        </FocusLock>
      )}
    </Layer>
  );
}

export default Dialog$;
