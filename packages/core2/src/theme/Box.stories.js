import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";

import Button from "@commerce-ui/core/Button";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

export const basic = () => (
  <Box sx={{ maxWidth: "800px" }}>
    <StoryWrapper
      stories={[
        {
          name: "Standard",
          component: (
            <Box sx={{ p: 2, bg: "mono300" }}>Lorem ipsum dolor sit amet</Box>
          )
        },
        {
          name: "As section",
          component: (
            <Box as={"section"} sx={{ p: 2, bg: "mono300" }}>
              Lorem ipsum dolor sit amet
            </Box>
          )
        },
        {
          name: "As span",
          component: (
            <Box sx={{ p: 2, bg: "mono300" }}>
              Lorem{" "}
              <Box as="span" sx={{ bg: "yellow" }}>
                ipsum
              </Box>{" "}
              dolor sit amet
            </Box>
          )
        },
        {
          name: "As h2",
          component: (
            <Box as="h2" sx={{ p: 2, bg: "mono300" }}>
              Lorem ipsum dolor sit amet
            </Box>
          )
        },
        {
          name: "As p + sup",
          component: (
            <Box as="p" sx={{ p: 2, bg: "mono300" }}>
              Lorem ipsum dolor sit amet. Superscript<Box as={"sup"}>2</Box>
            </Box>
          )
        },
        {
          name: "As list",
          component: (
            <Box as="ul" sx={{ p: 2, bg: "mono300" }}>
              <Box as={"li"}>One</Box>
              <Box as={"li"}>Two</Box>
              <Box as={"li"}>Three</Box>
              <Box as={"li"}>Four</Box>
            </Box>
          )
        },
        {
          name: "As form",
          component: (
            <Box as="form" sx={{ p: 2, bg: "mono300" }}>
              <Box as={"p"}>Blah blah blah</Box>
            </Box>
          )
        },
        {
          name: "As fieldset",
          component: (
            <Box as="fieldset" sx={{ p: 2, bg: "mono300" }}>
              <Box as={"p"}>Blah blah blah</Box>
            </Box>
          )
        },
        {
          name: "As label",
          component: (
            <Box as="label" sx={{ p: 2, bg: "mono300" }}>
              Blah blah blah
            </Box>
          )
        },
        {
          name: "As legend",
          component: (
            <Box as="legend" sx={{ p: 2, bg: "mono300" }}>
              Blah blah blah
            </Box>
          )
        },
        {
          name: "ButtonBase",
          component: <Button sx={{ p: 2, bg: "mono300" }}>Click me!</Button>
        },
        {
          name: "Button href",
          component: (
            <Button
              sx={{ p: 2, bg: "mono300", width: "100px", height: "50px" }}
              href={"https://wikipedia.org"}
              target={"blank"}
            >
              Click me!
            </Button>
          )
        },
        {
          name: "fitChild",
          component: (
            <Box fitChild={true} sx={{ width: "300px", height: "300px" }}>
              <Button
                sx={{ p: 2, bg: "mono300", width: "100px", height: "50px" }}
                href={"https://wikipedia.org"}
                target={"blank"}
              >
                Click me!
              </Button>
            </Box>
          )
        },
        {
          name: "fitChild + fitChildHeight",
          component: (
            <Box
              fitChild={true}
              fitChildHeight={true}
              sx={{ width: "300px", height: "300px" }}
            >
              <Button
                sx={{ p: 2, bg: "mono300", width: "100px", height: "50px" }}
                href={"https://wikipedia.org"}
                target={"blank"}
              >
                Click me!
              </Button>
            </Box>
          )
        }
      ]}
    />
  </Box>
);

export default {
  title: "Box"
};
