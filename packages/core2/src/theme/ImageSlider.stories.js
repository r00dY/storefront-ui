import React from "react";

import ImageSlider, { useImageSlider } from "@commerce-ui/core/ImageSlider";
import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import { catImage, pan1, pan2 } from "./images";

export const basic = () => {
  const imageSlider = useImageSlider({
    images: [catImage, pan1, pan2]
  });

  return (
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
          },

          {
            name: "Controlled",
            component: (
              <Box>
                <ImageSlider
                  controller={imageSlider}
                  sx={{ height: "500px" }}
                />
                <button onClick={() => imageSlider.setActive(0)}>
                  Go to first image
                </button>
              </Box>
            )
          }
        ]}
      />
    </Box>
  );
};

export default {
  title: "ImageSlider"
};
