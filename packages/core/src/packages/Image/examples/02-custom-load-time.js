import React, { useState } from "react";

import { Image } from "../../../../demo/components/Image";
import Color from "@commerce-ui/core/Color";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { catImage } from "../../../../data/images";

export default () => {
  return (
    <div>
      <p>loading=lazy</p>
      <Image image={catImage} />

      <p>loading=eager</p>
      <Image image={catImage} loading={"eager"} />

      <p>loading=lazy + black background</p>
      <Image image={catImage} backgroundColor={"black"} />
    </div>
  );
};
