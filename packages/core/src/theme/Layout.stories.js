import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import Container from "@commerce-ui/core/Container";
import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

export const basic = () => (
  <StoryWrapper
    stories={[
      {
        name: "Container default",
        component: (
          <Container>
            <Box sx={{ p: 2, bg: "mono300" }}>Lorem ipsum dolor sit amet</Box>
          </Container>
        )
      },
      {
        name: "Container custom",
        component: (
          <Container variant={"secondary"}>
            <Box sx={{ p: 2, bg: "mono300" }}>Lorem ipsum dolor sit amet</Box>
          </Container>
        )
      },
      {
        name: "Container inline margin",
        component: (
          <Container variant={[10, 20, 30, 40, 50]}>
            <Box sx={{ p: 2, bg: "mono300" }}>Lorem ipsum dolor sit amet</Box>
          </Container>
        )
      },
      {
        name: "Container default, extra styles",
        component: (
          <Container sx={{ pt: 3, pb: 3, bg: "green" }}>
            <Box sx={{ p: 2, bg: "mono300" }}>Lorem ipsum dolor sit amet</Box>
          </Container>
        )
      }
    ]}
  />
);

export default {
  title: "Layout"
};
