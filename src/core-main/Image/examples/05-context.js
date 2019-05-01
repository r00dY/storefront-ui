import {Image, Grid, GridItem, StorefrontUIContext, Color } from "storefront-ui";
import React, { useState } from "react";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import {catLandscape} from "../../../../data/images";

export default () => {
    const [loaded, setLoaded] = useState(false);

    const catLandscapeWithPlaceholder = Object.assign({}, catLandscape, {
        placeholder: "/static/cat/cat_placeholder.png"
    });

    return <div>
        <p>Default <code>backgroundColor</code></p>
        <StorefrontUIContext.Provider value={{
            Image: {
                defaultProps: {
                    backgroundColor: new Color("rgba(255,0,0,0.2)"),
                }
            }
        }}>
            <p>Hit the button to load image: <button onClick={() => setLoaded(true)}>Load</button></p>
            <Image
                css={css`
                    max-width: 800px;
                `}
                image={catLandscapeWithPlaceholder}
                autoload={false}
                load={loaded}
            />
        </StorefrontUIContext.Provider>

        <p>Default <code>placeholder</code> based on placeholder property of source</p>
        <StorefrontUIContext.Provider value={{
            Image: {
                defaultProps: (props) => {
                    let placeholder;
                    if (props.image) { placeholder = props.image.placeholder }
                    else if (props.video) { placeholder = props.video.placeholder }

                    return {
                        placeholder: placeholder
                    }
                }
            }
        }}>
            <p>Hit the button to load image: <button onClick={() => setLoaded(true)}>Load</button></p>
            <Image
                css={css`
                    max-width: 800px;
                `}
                image={catLandscapeWithPlaceholder}
                autoload={false}
                load={loaded}
            />
        </StorefrontUIContext.Provider>

    </div>

};
