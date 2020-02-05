/** @jsx jsx */
import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import { Image$ } from "@commerce-ui/core/Image";
import Box from "@commerce-ui/core/Box";

import StoryWrapper from "@commerce-ui/core/StoryWrapper";

import { catImage } from "./images";

export const basic = () => (
  <StoryWrapper
    stories={[
      {
        name: "Standard, variant natural",
        component: <Image$ image={catImage} />
      }
    ]}
  />
);

export default {
  title: "Image"
};
