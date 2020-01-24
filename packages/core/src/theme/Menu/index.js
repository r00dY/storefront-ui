import React from "react";

import Menu$ from "@commerce-ui/core/Menu";
import Box from "@commerce-ui/core/Box";

function Menu(props) {
  let { config, children, ...restProps } = props;

  config = config || {
    xs: {
      mode: "slide-from-bottom",
      height: "auto"
    },
    md: {
      anchored: true
    }
  }; // default config

  return (
    <Menu$ config={config} {...restProps}>
      {({ anchored, options }) => (
        <Box
          sx={{
            width: anchored ? "300px" : "auto",
            overflow: "auto",
            maxHeight: "600px",
            boxShadow: anchored ? "0 4px 16px hsla(0, 0%, 0%, 0.16);" : "none",
            bg: "white"
          }}
        >
          {children({ anchored, options })}
        </Box>
      )}
    </Menu$>
  );
}

export default Menu;
