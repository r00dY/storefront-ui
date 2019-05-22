import React from "react";
import { ButtonRaw } from "storefront-ui/ButtonRaw";
import { ThemeProvider } from "storefront-ui/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => (
  <div>
    <p>Raw button (no styling, just focus and accessibility)</p>
    <ButtonRaw>I'm a button</ButtonRaw>

    <p>Raw button, clickable paragraph of text</p>
    <ButtonRaw
      css={css`
        font-size: 20px;
        border: 1px solid black;
        padding: 12px;
        width: 300px;
      `}
      onClick={() => alert("hello")}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </ButtonRaw>

    <ThemeProvider
      theme={{
        ButtonRaw: {
          default: {
            overrides: {
              Root: {
                style: `
                                &:focus {
                                    outline: 2px solid red;
                                }
                            `
              }
            }
          }
        }
      }}
    >
      <p>Themed (outline on focus), pls focus this button</p>
      <ButtonRaw onClick={() => alert("paragraph clicked")}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </ButtonRaw>
    </ThemeProvider>
  </div>
);
