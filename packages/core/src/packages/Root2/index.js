import React, { useEffect } from "react";
import { ThemeProvider } from "../Theme2";
import ReactModal from "react-modal";

/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";

// import { NotificationsContainer } from "../Notifications";

export default ({ theme, children }) => {
  useEffect(() => {
    ReactModal.setAppElement("#__app__");
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body.ReactModal__Body--open {
            overflow-y: hidden;
          }
        `}
      />

      <div
        css={css`
          position: relative;
          z-index: 0;
        `}
        id={"__app__"}
      >
        {children}
      </div>

      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10000;
        `}
        id={"__layers__"}
      />

      <div
        css={css`
          position: absolute;
          z-index: 10001;
        `}
        id={"__notifications__"}
      >
        {/*<NotificationsContainer />*/}
      </div>
    </ThemeProvider>
  );
};
