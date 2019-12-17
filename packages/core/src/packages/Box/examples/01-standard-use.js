/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Box } from "@commerce-ui/core/Box";
import css from "@styled-system/css";

export default () => {
  return (
    <div>
      <p>Box with styles test</p>
      <Box
        sx={{
          color: "primary",
          p: 20,
          bg: "mono500"
        }}
      >
        Test
      </Box>

      <p>Box as section with styles test</p>
      <Box
        as={"section"}
        sx={{
          color: "primary",
          p: 4,
          bg: "mono500",
          font: "body",
          ":hover": {
            font: "heading"
          }
        }}
      >
        Test
        <br />
        Test
      </Box>

      <p>Box as section with styles test</p>
      <Box
        as={"p"}
        sx={{
          color: "primary",
          p: 20,
          bg: "mono500",
          ":hover": {
            bg: "black"
          },
          "@media only screen and (min-width: 600px)": {
            bg: "red",
            "@media only screen and (min-width: 1200px)": {
              opacity: 0.5
            }
          },
          font: "body"

          // font: "heading3",
          // padding: rslin(10, 20)
        }}
      >
        Test
      </Box>

      <div
        css={{
          color: "red",
          background: "primary"
        }}
      >
        Not wrapped
      </div>

      <div
        css={css({
          color: "red",
          bg: "primary"
        })}
      >
        Wrapped
      </div>
    </div>
  );
};
