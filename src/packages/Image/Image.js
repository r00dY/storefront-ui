import LazyAsset from "./LazyAsset";
import React, { useEffect, useState } from "react";
import Color from "../Color";

function Image(props) {
  // appearance: backgroundColor, animationTime, offset, draggable, placeholder -> will do for now (Image.defaultProps)

  const [loaded, setLoaded] = useState(props.load || false);

  useEffect(() => {
    if (props.autoload) {
      setLoaded(true);
    }
  });

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
  } else if (props.video) {
    newProps = {
      ...props,
      load: loaded,
      backgroundColor: props.backgroundColor.css,
      videos: props.video.src,
      alt: props.video.alt,
      loadWhenInViewport: props.loadWhenInViewport
    };
  }

  return <LazyAsset {...newProps} />;
}

Image.defaultProps = {
  mode: "natural",
  loadWhenInViewport: false,
  load: true,
  backgroundColor: new Color("#f5f5f5"),
  autoload: true,
  dataMapper: x => x
};

export default Image;
