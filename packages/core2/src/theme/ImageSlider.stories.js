import React from "react";

import ImageSlider from "@commerce-ui/core/ImageSlider";
import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import { catImage, pan1, pan2 } from "./images";

export const basic = () => (
  <Box sx={{ maxWidth: "800px" }}>
    <StoryWrapper
      stories={[
        {
          name: "Basic use case",
          component: (
            <ImageSlider
              images={[catImage, pan1, pan2]}
              sx={{ height: "500px" }}
            />
          )
        }
      ]}
    />
  </Box>
);

export default {
  title: "ImageSlider"
};
