import LazyAsset from "./LazyAsset";
import React, { useEffect, useState } from "react";
import Color from "../Color";
import StorefrontUIContext from "../StorefrontUIContext/StorefrontUIContext";

function Image(props) {
    // appearance: backgroundColor, animationTime, offset, draggable -> will do for now (Image.defaultProps)

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (props.autoload) {
            setLoaded(true);
        }
    });

    return <StorefrontUIContext.Consumer>
        {({ Image }) => {
            if (Image && Image.defaultProps) {
                props = Object.assign({}, props, Image.defaultProps);
            }

            let newProps;

            if (props.image) {
                newProps = {
                    ...props,
                    load: loaded,
                    backgroundColor: props.backgroundColor.css,
                    images: props.image.src,
                    alt: props.image.alt,
                    loadWhenInViewport: props.loadWhenInViewport
                };
            }
            else if (props.video) {

                newProps = {
                    ...props,
                    load: loaded,
                    backgroundColor: props.backgroundColor.css,
                    videos: props.video.src,
                    alt: props.video.alt,
                    loadWhenInViewport: props.loadWhenInViewport
                };
            }

            if (!props.autoload) {
                newProps.load = props.load;
            }

            return <LazyAsset {...newProps} />
        }}
    </StorefrontUIContext.Consumer>

}

Image.defaultProps = {
    mode: "natural",
    loadWhenInViewport: true,
    load: false,
    backgroundColor: new Color("#f5f5f5"),
    autoload: true
};


export default Image;
