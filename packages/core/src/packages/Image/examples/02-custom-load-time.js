import React, { useState } from "react";

import { Image } from "../../../../../../demo/components/Image";
import Color from "@commerce-ui/core/Color";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { catLandscape } from "../../../../data/images";

export default () => {
  const [loaded, setLoaded] = useState(false);

  console.log(loaded);

  return (
    <div>
      <p>
        Hit the button to load image:{" "}
        <button onClick={() => setLoaded(true)}>Load</button>
      </p>
      <Image
        css={css`
          max-width: 800px;
        `}
        image={catLandscape}
        autoload={false}
        backgroundColor={new Color("lightgrey")}
        load={loaded}
      />
    </div>
  );
};
