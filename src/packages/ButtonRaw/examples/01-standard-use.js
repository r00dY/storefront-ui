import React from "react";
import { ButtonRaw } from "storefront-ui/ButtonRaw";
import { ThemeProvider } from "storefront-ui/Theme";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => (
  <div>
    <p>Raw button (no styling, just focus and accessibility)</p>
    <ButtonRaw>I'm a button</ButtonRaw>

    <p>Raw button, custom styles</p>
    <ButtonRaw
      css={css`
        font-size: 20px;
        border: 1px solid black;
        padding: 12px;
      `}
      onClick={() => alert("hello")}
    >
      I'm a styled button
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
      <ButtonRaw>Some content here that is button with custom focus.</ButtonRaw>
    </ThemeProvider>
  </div>
);
