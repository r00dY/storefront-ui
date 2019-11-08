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

  const image = props.dataMapper(props.image);

  const isImage =
    typeof image.type === "undefined" || props.image.type !== "video";

  newProps = {
    ...props,
    load: loaded,
    backgroundColor: props.backgroundColor.css,
    alt: image.altText,
    loadWhenInViewport: props.loadWhenInViewport
  };

  if (isImage) {
    const variant = image.variants.find(v => v.name === props.variant);
    newProps.images = variant.srcset.map(x => ({
      url: x.src,
      w: x.width,
      h: x.width / variant.aspectRatio
    }));
  } else {
    newProps.videos = image.src;
  }

  return <LazyAsset {...newProps} />;
}

Image$.defaultProps = {
  variant: "natural",
  mode: "natural",
  loadWhenInViewport: false,
  load: true,
  backgroundColor: new Color("#f5f5f5"),
  autoload: true,
  sizes: "420px",
  dataMapper: x => x
};

export default Image$;
