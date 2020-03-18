import React, { useState } from "react";

import ImageSlider, { useImageSlider } from "@commerce-ui/core/ImageSlider";
import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import { useSelectScrollableStack } from "@commerce-ui/core/SelectScrollableStack";

import { catImage, pan1, pan2 } from "./images";
import SelectScrollableStack from "../packages/SelectScrollableStack";

import Image from "@commerce-ui/core/Image";

import Selectable from "@commerce-ui/core/Selectable";

const images = [
  catImage,
  pan1,
  pan2,
  catImage,
  pan1,
  pan2,
  catImage,
  pan1,
  pan2,
  catImage,
  pan1,
  pan2,
  catImage,
  pan1,
  pan2,
  catImage,
  pan1,
  pan2
].map((x, index) => ({ ...x, id: index }));

export const basic = () => {
  const imageSlider = useImageSlider({
    images: [catImage, pan1, pan2]
  });

  let imageSlider2;
  let thumbnails2;

  const [index, setIndex] = useState(0);

  imageSlider2 = useImageSlider({
    images: images,
    onChange: index => {
      setIndex(index);
    },
    active: index
  });

  thumbnails2 = useSelectScrollableStack({
    options: images,
    value: images[index],
    allowEmpty: false,
    onChange: (_, index) => {
      setIndex(index);
    }
  });

  console.log(thumbnails2);

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
          },

          {
            name: "Controlled with thumbnails",
            component: (
              <Box>
                <ImageSlider
                  controller={imageSlider2}
                  sx={{ height: "500px" }}
                />

                <SelectScrollableStack
                  controller={thumbnails2}
                  sx={{
                    $itemSize: 70,
                    $gap: 10,
                    $floatingElement: {
                      height: "2px",
                      bg: "black"
                    }
                  }}
                >
                  <Selectable>
                    {({ selected, option }) => {
                      return (
                        <Box>
                          <Image
                            image={option}
                            sx={{ $objectFit: "cover", height: "70px" }}
                          />
                        </Box>
                      );
                    }}
                  </Selectable>
                </SelectScrollableStack>
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
