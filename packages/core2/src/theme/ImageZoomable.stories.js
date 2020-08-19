import React from "react";

import Image from "@commerce-ui/core/Image2";
import ImageZoomable from "@commerce-ui/core/ImageZoomable";
import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import { catImage } from "./images";

export const basic = () => (
  <Box sx={{ maxWidth: "800px" }}>
    <StoryWrapper
      stories={[
        {
          name: "Default",
          component: (
            <ImageZoomable>
              <Image src={catImage} />
            </ImageZoomable>
          )
        },
        {
          name: "cover, fitw, fith",
          component: (
            <Box sx={{ width: 500, height: 500 }} fitW fitH>
              <ImageZoomable>
                <Image src={catImage} objectFit={"cover"} />
              </ImageZoomable>
            </Box>
          )
        },
        {
          name: "cover, fitw, fith",
          component: (
            <Box
              sx={{ width: 500, height: 500, border: "1px dotted black" }}
              fitW
              fitH
            >
              <ImageZoomable>
                <Image src={catImage} objectFit={"contain"} />
              </ImageZoomable>
            </Box>
          )
        }
      ]}
    />
  </Box>
);

export default {
  title: "ImageZoomable"
};
