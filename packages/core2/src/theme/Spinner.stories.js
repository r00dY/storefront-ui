import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import Container from "@commerce-ui/core/Container";
import Spinner from "@commerce-ui/core/Spinner";
import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

export const basic = () => (
  <StoryWrapper
    stories={[
      {
        name: "Basic spinner",
        component: (
          <Container>
            <Spinner />
          </Container>
        )
      },
      {
        name: "Basic spinner big",
        component: (
          <Container>
            <Spinner
              sx={{
                width: "160px"
              }}
            />
          </Container>
        )
      },
      {
        name: "Basic spinner colors",
        component: (
          <Container>
            <Spinner
              sx={{
                $color: "blue",
                $color2: "red"
              }}
            />
          </Container>
        )
      }
    ]}
  />
);

export default {
  title: "Spinner"
};
