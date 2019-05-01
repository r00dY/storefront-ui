import {Image, Grid, GridItem, StorefrontUIContext, Color } from "storefront-ui";
import React, { useState } from "react";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import {catLandscape} from "../../../../data/images";

export default () => {
    const [loaded, setLoaded] = useState(false);

    return <div>
        <StorefrontUIContext.Provider value={{
            Image: {
                defaultProps: {
                    autoload: false,
                    backgroundColor: new Color("rgba(255,0,0,0.2)")
                }
            }
        }}>
            <p>Hit the button to load image: <button onClick={() => setLoaded(true)}>Load</button></p>
            <Image
                css={css`
                    max-width: 800px;
                `}
                image={catLandscape}
                load={loaded}
            />
        </StorefrontUIContext.Provider>
    </div>

};
