/** @jsx jsx */
import React from "react";
import { Box } from "@commerce-ui/core/Box";
import { jsx, rs, rslin } from "@commerce-ui/core";

export default () => {
  return (
    <div>
      <p>Box with styles test</p>
      <Box
        css={{
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
        css={{
          color: "primary",
          pt: rslin(1, 5),
          pb: rs({
            xs: 0,
            lg: rslin(1, 5)
          }),
          m: rs({
            xs: 1,
            lg: 5
          }),
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
        css={{
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
        css={{
          color: "red",
          bg: "primary",
          font: "body",
          p: 4
        }}
      >
        Wrapped
      </div>
    </div>
  );
};
