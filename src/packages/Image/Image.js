import LazyAsset from "./LazyAsset";
import React, { useEffect, useState } from "react";
import Color from "../Color";

function Image$(props) {
  // appearance: backgroundColor, animationTime, offset, draggable, placeholder -> will do for now (Image$.defaultProps)

  /**
   * Options to load image
   * 1. loaded = true from start -> srcset is always in rendered, in SSR too, so we have most standard images.
   * 2. loaded = false && autoload = true -> srcset will be set on client-side on componentDidMount, might go hand in hand with loadWhenInViewport.
   * 3. loaded = false && autoload = false, and then at some point loaded = true -> custom loading of image
   *
   * ONCE IMAGE IS LOADED, IT CAN'T BE UNLOADED
   */

  const [loaded, setLoaded] = useState(props.load || false);

  useEffect(() => {
    if (props.autoload || props.load === true) {
      setLoaded(true);
    }
  });

  let newProps;

  const image = props.image;

  const isImage =
    typeof image.type === "undefined" || props.image.type !== "video";

  newProps = {
    ...props,
    load: loaded,
    backgroundColor: props.backgroundColor.css,
    [isImage ? "image" : "videos"]: props.image,
    alt: image.alt,
    loadWhenInViewport: props.loadWhenInViewport
  };

  return <LazyAsset {...newProps} />;
}

Image$.defaultProps = {
  variant: "natural",
  mode: "natural",
  loadWhenInViewport: false,
  load: true,
  backgroundColor: new Color("#f5f5f5"),
  autoload: true,
  sizes: "420px"
};

export default Image$;
