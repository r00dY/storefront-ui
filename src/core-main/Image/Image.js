import LazyAsset from "lazy-asset-react";
import React, { useEffect, useState } from "react";
import Color from "../Color";

function Image(props) {
    const [loaded, setLoaded] = useState(false);

    if (props.autoload) {
        useEffect(() => {
            setLoaded(true);
        });
    }

    const newProps = {
        ...props,
        load: loaded,
        backgroundColor: props.backgroundColor.css,
        images: props.image.src,
        alt: props.image.alt,
        loadWhenInViewport: props.loadWhenInViewport
    };

    if (!props.autoload) {
        newProps.load = props.load;
    }

    return <LazyAsset {...newProps} />;
}

Image.defaultProps = {
    mode: "natural",
    loadWhenInViewport: true,
    load: false,
    backgroundColor: new Color("#f5f5f5"),
    autoload: true
};

export default Image;
