import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import Image from "@commerce-ui/core/Image";
import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import { catImage } from "./images";

export const basic = () => (
  <Box sx={{ maxWidth: "800px" }}>
    <StoryWrapper
      stories={[
        {
          name: "Standard, variant natural",
          component: <Image image={catImage} />
        },
        {
          name: "Alternative variant portrait",
          component: (
            <Image
              image={catImage}
              sx={{
                variant: "portrait"
              }}
            />
          )
        },
        {
          name: "Image with size set explicitly (objectFit: cover (default))",
          component: (
            <Image
              image={catImage}
              sx={{
                height: "200px"
              }}
            />
          )
        },
        {
          name: "Image with size set explicitly (objectFit: contain)",
          component: (
            <Box sx={{ border: "1px solid black" }}>
              <Image
                image={catImage}
                sx={{
                  height: "800px",
                  objectFit: "contain"
                }}
              />
            </Box>
          )
        },
        {
          name:
            "Image with size set explicitly (objectFit: contain + objectPosition)",
          component: (
            <Box sx={{ border: "1px solid black" }}>
              <Image
                image={catImage}
                sx={{
                  height: "800px",
                  objectFit: "contain",
                  objectPosition: "left top"
                }}
              />
            </Box>
          )
        },
        {
          name: "Responsive variant (portrait for xs, natural for lg)",
          component: (
            <Image
              image={catImage}
              sx={{
                variant: {
                  _: "portrait",
                  md: "natural"
                }
              }}
            />
          )
        },
        {
          name: "Responsive variant mode and position",
          component: (
            <Box sx={{ border: "1px solid black" }}>
              <Image
                image={catImage}
                sx={{
                  height: ["400px", null, "800px"],
                  variant: ["portrait", null, "natural"],
                  objectFit: ["cover", null, "contain"],
                  objectPosition: ["top left", null, "bottom right"]
                }}
              />
            </Box>
          )
        },
        {
          name: "Responsive variant mode and position (with object syntax)",
          component: (
            <Box sx={{ border: "1px solid black" }}>
              <Image
                image={catImage}
                sx={{
                  height: {
                    _: "400px",
                    lg: "800px"
                  },
                  variant: {
                    _: "portrait",
                    lg: "natural"
                  },
                  objectFit: {
                    _: "cover",
                    lg: "contain"
                  },
                  objectPosition: {
                    _: "top left",
                    lg: "bottom right"
                  }
                }}
              />
            </Box>
          )
        },
        {
          name: "Add a Box on the image",
          component: (
            <Image image={catImage}>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bg: "rgba(255, 0, 0, 0.5)"
                }}
              />
            </Image>
          )
        }
      ]}
    />
  </Box>
);

export default {
  title: "Image"
};
