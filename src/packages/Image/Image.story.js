import React, { useEffect, useState } from "react";
import { storiesOf } from "@storybook/react";
import Index from "../Container/Container";
import Image from "./Image";
import ImageZoomable from "./ImageZoomable";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

/**
 * Image always should have some helper wrapper which translates Image object in an easier form to Image component.
 */

const CAT_LANDSCAPE = [
    {
        url: "/static/cat/cat_420.png",
        w: 420,
        h: 236
    },
    {
        url: "/static/cat/cat_768.png",
        w: 768,
        h: 430
    },
    {
        url: "/static/cat/cat_1024.png",
        w: 1024,
        h: 534
    },
    {
        url: "/static/cat/cat_1280.png",
        w: 1280,
        h: 717
    },
    {
        url: "/static/cat/cat_1600.png",
        w: 1600,
        h: 896
    },
    {
        url: "/static/cat/cat_1920.png",
        w: 1920,
        h: 1075
    }
];

const CAT_PORTRAIT = [
    {
        url: "/static/cat/cat_p420.png",
        w: 420,
        h: 489
    },
    {
        url: "/static/cat/cat_p768.png",
        w: 768,
        h: 894
    },
    {
        url: "/static/cat/cat_p920.png",
        w: 1024,
        h: 1071
    }
];

/**
 * IMPORTANT!!!
 *
 * Creating wrapper around <Image> in the app is highly recommended. The function of wrapper should be:
 * - setting background / placeholder image across all images within an app
 * - setting consistent strategy for loading / lazy loading
 * - transformation of image from data format to Image format
 *
 */
function Story() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    });

    return (
        <Index>
            <p>Natural image</p>

            <Image
                css={css`
                    width: 100%;
                    max-width: 800px;
                `}
                images={CAT_LANDSCAPE}
                mode={"natural"}
                load={loaded}
                alt={"Super kociak"}
                backgroundColor={"rgba(255,0,0,0.1)"}
            />

            <p>Cover image</p>

            <Image
                css={css`
                    width: 100%;
                    max-width: 800px;
                    height: 800px;
                `}
                images={CAT_LANDSCAPE}
                mode={"cover"}
                load={loaded}
                alt={"Super kociak"}
            />

            <p>Contain image (loaded when in viewport)</p>

            <Image
                css={css`
                    width: 100%;
                    max-width: 800px;
                    height: 800px;
                `}
                images={CAT_PORTRAIT}
                mode={"contain"}
                loadWhenInViewport={true}
                load={loaded}
                alt={"Super kociak"}
            />

            <p>Zoomable image (so far works only for natural/cover mode)</p>

            <ImageZoomable
                css={css`
                    width: 100%;
                    max-width: 500px;
                `}
                images={CAT_PORTRAIT}
                mode={"natural"}
                loadWhenInViewport={true}
                load={loaded}
                alt={"Super kociak"}
                zoom={2.5}
            />
        </Index>
    );
}

storiesOf("Image", module).add("default", () => <Story />);
