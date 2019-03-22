import {Image, Color} from "storefront-ui";
import React, { useState } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { catLandscape } from "./images";

export default () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div>
            <p>Hit the button to load image: <button onClick={() => setLoaded(true)}>Load</button></p>
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
