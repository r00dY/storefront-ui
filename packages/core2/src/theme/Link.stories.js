import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";
import Link from "@commerce-ui/core/Link";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

const LinkCustom = props => (
  <Link
    {...props}
    sx={({ hovered }) => ({
      p: 6,
      bg: hovered ? "yellow" : "antiquewhite",
      color: "black"
    })}
  />
);

export const basic = () => (
  <Box sx={{ maxWidth: "800px" }}>
    <StoryWrapper
      stories={[
        {
          name: "Standard",
          component: (
            <Link href={"#"} sx={{ color: "red" }}>
              Lorem ipsum dolor sit amet
            </Link>
          )
        },
        {
          name: "Component",
          component: (
            <LinkCustom href={"#"}>Lorem ipsum dolor sit amet</LinkCustom>
          )
        }
      ]}
    />
  </Box>
);

export default {
  title: "Link"
};
