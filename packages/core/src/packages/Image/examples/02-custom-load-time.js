import React, { useState } from "react";

import { Image$ } from "@commerce-ui/core/Image";
import images from "@commerce-ui/data-mock/images";

import Color from "@commerce-ui/core/Color";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <p>
        Hit the button to load image:{" "}
        <button onClick={() => setLoaded(true)}>Load</button>
      </p>
      <Image$
        css={css`
          max-width: 800px;
        `}
        image={images["landscape1.jpg"]}
        autoload={false}
        backgroundColor={new Color("lightgrey")}
        load={loaded}
      />
    </div>
  );
};
