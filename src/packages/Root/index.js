import React, { useEffect } from "react";
import { ThemeProvider } from "../Theme";
import ReactModal from "react-modal";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

ReactModal.setAppElement("#__app__");

export default ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};
