import React from "react";

import Menu$ from "@commerce-ui/core/Menu";
import Box from "@commerce-ui/core/Box";

import Icon from "../svg/close.svg";

function Menu(props) {
  let { config, children, width, title = "Title", ...restProps } = props;

  config = config || {
    xs: {
      mode: "slide-from-bottom",
      height: "auto",
      maxHeight: "80vh"
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
            position: "relative",
            width: anchored ? width || "300px" : "auto",
            maxHeight: "500px",
            boxShadow: anchored ? "0 4px 16px hsla(0, 0%, 0%, 0.16);" : "none",
            bg: "white",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {!anchored && (
            <Box
              sx={{
                paddingLeft: "16px",
                paddingRight: "16px",
                flex: "0 0 60px",
                height: "60px",
                position: "relative"
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  alignItems: "center",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "black",
                  font: "label",
                  color: "black",
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                {title}
                <Icon />
              </Box>
            </Box>
          )}

          <Box
            sx={{
              overflow: "auto",
              flexGrow: 1,
              paddingTop: "8px",
              paddingBottom: "8px"
            }}
          >
            {children({ anchored, options })}
          </Box>
        </Box>
      )}
    </Menu$>
  );
}

export default Menu;
