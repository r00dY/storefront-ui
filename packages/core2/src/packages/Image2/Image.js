import React from "react";
// import { RangeMap } from "responsive-helpers";
import GatsbyImage from "./gatsby-image";

import { responsiveValueForEach, responsiveValueMap, splitSx } from "../index";

import { useTheme } from "../Theme";

function findVariant(image, variant) {
  return image.variants.find(v => v.name === variant);
}

function getSrcset(image, variant) {
  let result = "";

  findVariant(image, variant).srcset.forEach(img => {
    result += `${img.url} ${img.w}w, `;
  });
  return result;
}

function Image$(props) {
  let {
    src,
    image,
    fadeIn,
    durationFadeIn,
    crossOrigin,
    backgroundColor,
    onLoad,
    onStartLoad,
    onError,
    loading,
    sizes,
    draggable,
    className,
    aspectRatio,
    objectFit,
    objectPosition,
    style,
    children
  } = props;

  let gatsbyImageProps = {
    fadeIn,
    durationFadeIn,
    crossOrigin,
    backgroundColor,
    onLoad,
    onStartLoad,
    onError,
    loading,
    draggable,
    children,
    className,
    style
  };

  src = src || image;

  const theme = useTheme();

  // In case of eager we don't want to wait until DOMContentLoad / Ready whatever to fade in the image.
  // It's ugly and images seem to be late. If eager, then load immediately. Often first paint will already include image.
  // For example, when image is in cache.
  // You can always override this with explicitly setting fadeIn to true for loading=eager.
  if (loading === "eager" && typeof fadeIn === "undefined") {
    gatsbyImageProps.fadeIn = false;
  }

  let sources = [];

  let variant = "natural";

  responsiveValueForEach(variant, (val, breakpoint) => {
    const variant = findVariant(image, val);

    sources.unshift({
      srcSet: getSrcset(image, variant.name),
      src: variant.srcset[0].url,
      sizes: sizes,
      media: breakpoint ? `(min-width: ${breakpoint})` : `(min-width: 0px)`,
      aspectRatio: variant.aspectRatio
    });
  });

  const paddingBottom = responsiveValueMap(aspectRatio, x => {
    let ratio;

    if (typeof x === "number") {
      ratio = x;
    } else if (typeof x === "string") {
      ratio = theme.imageAspectRatios[x];
    }

    if (!ratio) {
      ratio = src.variants.find(x => x.name === "natural").aspectRatio;
    }

    return `${(1 / ratio) * 100}%`;
  });

  // const paddingBottom = aspectRatio
  //     ? responsiveValueMap($aspectRatio, x => `${x * 100}%`)
  //     : responsiveValueMap(
  //         sxVariant,
  //         variantName =>
  //             `${(1 / findVariant(image, variantName).aspectRatio) * 100}%`
  //     );

  const specialStyles = {
    objectFit,
    objectPosition,
    paddingBottom
  };

  return (
    <GatsbyImage
      {...gatsbyImageProps}
      className={props.className}
      fluid={sources}
      title={image.title}
      alt={image.alt}
      specialStyles={specialStyles}
    />
  );
}

Image$.defaultProps = {
  variant: "natural",
  objectFit: "cover",
  objectPosition: "center center",
  loading: "lazy",
  // backgroundColor: "#f5f5f5",
  sizes: "1px",
  sx: {},
  durationFadeIn: 300
};

export default Image$;
