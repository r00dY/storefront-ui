import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";

import Icon from "@commerce-ui/core/Icon";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

const IconWrench = props => (
  <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none" />
      <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
    </svg>
  </Icon>
);

export const basic = () => (
  <Box sx={{ maxWidth: "800px" }}>
    <StoryWrapper
      stories={[
        {
          name: "Standard",
          component: (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 10,
                border: "1px dotted black"
              }}
            >
              Lorem ipsum <IconWrench />
            </Box>
          )
        },
        {
          name: "Bigger",
          component: (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 10,
                border: "1px dotted black"
              }}
            >
              Lorem ipsum <IconWrench size={48} />
            </Box>
          )
        },
        {
          name: "Bigger red",
          component: (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 10,
                border: "1px dotted black"
              }}
            >
              Lorem ipsum <IconWrench size={48} color={"red"} />
            </Box>
          )
        },
        {
          name: "Responisve size",
          component: (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: 10,
                border: "1px dotted black"
              }}
            >
              Lorem ipsum <IconWrench size={[24, 32, 48, 64, 128]} />
            </Box>
          )
        },
        {
          name: "fit width + height",
          component: (
            <Box sx={{ border: "1px dotted black", width: 300 }} fitW fitH>
              <IconWrench />
            </Box>
          )
        },
        {
          name: "fit width + height",
          component: (
            <Box
              sx={{ border: "1px dotted black", width: 300, height: 150 }}
              fitW
              fitH
            >
              <IconWrench />
            </Box>
          )
        },
        {
          name: "Display inline-block",
          component: (
            <Box
              as={"p"}
              sx={{
                border: "1px dotted black",
                p: 16,
                verticalAlign: "middle"
              }}
            >
              Lorem ipsum dolro sit amet{" "}
              <Box sx={{ display: "inline-block" }} as={"span"}>
                <IconWrench size={24} />
              </Box>{" "}
              lorem ipsum dolro sit amet.
            </Box>
          )
        }
      ]}
    />
  </Box>
);

export default {
  title: "Icon"
};
