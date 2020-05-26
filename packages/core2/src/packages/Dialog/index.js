import React from "react";
import Layer from "../Layer";
import Box from "../Box";

import FocusLock from "react-focus-lock";

function DialogHeader(props) {
  return props.children;
}

function DialogFooter(props) {
  return props.children;
}

function getLayout(children) {
  let header, footer;
  let filteredChildren = [];

  React.Children.forEach(children, child => {
    if (child.type === DialogHeader) {
      header = child;
    } else if (child.type === DialogFooter) {
      footer = child;
    } else {
      filteredChildren.push(child);
    }
  });

  const containerSx = {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "100%",
    maxWidth: "inherit",
    maxHeight: "inherit",
    minWidth: "inherit",
    minHeight: "inherit"
  };

  return (
    <Box sx={containerSx}>
      {header && (
        <Box
          sx={{
            flex: "0 0 auto"
          }}
        >
          {header}
        </Box>
      )}

      <Box
        sx={{
          flex: "1 1 auto",
          overflow: "auto"
        }}
      >
        {filteredChildren}
      </Box>

      {footer && (
        <Box
          sx={{
            flex: "0 0 auto"
          }}
        >
          {footer}
        </Box>
      )}
    </Box>
  );
}

function Dialog$(props) {
  const { children, ...restProps } = props;

  return (
    <Layer {...restProps}>
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
          {getLayout(
            typeof children === "function" ? children(params) : children
          )}
        </FocusLock>
      )}
    </Layer>
  );
}

Dialog$.Header = DialogHeader;
Dialog$.Footer = DialogFooter;

export default Dialog$;
