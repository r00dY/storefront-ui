import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";

import Display from "@commerce-ui/core/Display";
import StoryWrapper from "@commerce-ui/core/StoryWrapper";

export const basic = () => (
  <Box sx={{ maxWidth: "800px" }}>
    <StoryWrapper
      stories={[
        {
          name: "Standard",
          component: (
            <Box>
              <Display when={[true, null, false]}>
                <Box sx={{ p: 2, bg: "mono300" }}>Mobile</Box>
              </Display>

              <Display when={[false, null, true]}>
                <Box sx={{ p: 2, bg: "mono300" }}>Desktop</Box>
              </Display>
            </Box>
          )
        }
      ]}
    />
  </Box>
);

export default {
  title: "Display"
};
