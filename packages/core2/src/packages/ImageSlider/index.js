import React, { useState } from "react";
import Image from "../Image";
import Box from "../Box";
import { getElementSpec, createElement, splitSx } from "../index";
import useSelectState from "../useSelectState";

export function useImageSlider(props) {
  const { images, active, defaultActive = 0 } = props;

  const { value, setValue } = useSelectState({
    options: Array.from(Array(images.length).keys()),
    value: active,
    defaultValue: defaultActive
  });

  return {
    active: value.id,
    setActive: setValue,
    activeImage: images[value.id],
    images
  };
}

function ImageSlider(props) {
  let { sx = {}, controller } = props;

  if (!controller) {
    controller = useImageSlider(props);
  }

  const [css, customSx] = splitSx(sx);

  const image = getElementSpec(
    customSx.$image,
    {
      __type: Image,
      $objectFit: "contain",
      width: "100%",
      height: "100%"
    },
    {}
  );

  const imageElem = createElement(image, {
    image: controller.activeImage
  });

  return (
    <Box
      sx={{
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        ...css
      }}
      onClick={() => {
        controller.setActive(
          controller.active + 1 === controller.images.length
            ? 0
            : controller.active + 1
        );
      }}
    >
      {imageElem}
    </Box>
  );
}

export default ImageSlider;
