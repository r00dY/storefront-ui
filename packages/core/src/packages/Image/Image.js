import React from "react";
import { RangeMap } from "responsive-helpers";
import GatsbyImage from "./gatsby-image";

import { responsiveValueForEach, responsiveValueMap } from "../index";

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
  const {
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
    sx,
    className,
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

  // In case of eager we don't want to wait until DOMContentLoad / Ready whatever to fade in the image.
  // It's ugly and images seem to be late. If eager, then load immediately. Often first paint will already include image.
  // For example, when image is in cache.
  // You can always override this with explicitly setting fadeIn to true for loading=eager.
  if (loading === "eager" && typeof fadeIn === "undefined") {
    gatsbyImageProps.fadeIn = false;
  }

  let rangeMap = new RangeMap(
    props._responsiveProps || {
      objectFit: props.objectFit,
      objectPosition: props.objectPosition,
      variant: props.variant
    }
  );
  // Defaults for _responsive
  rangeMap.forEach((val, range) => {
    val.variant = val.variant || "natural";
    val.objectFit = val.objectFit || "cover";
    val.objectPosition = val.objectPosition || "center center";
  });

  const sxVariant = sx && sx.variant ? sx.variant : "natural";

  let sources = [];

  responsiveValueForEach(sxVariant, (val, breakpoint) => {
    const variant = findVariant(image, val);

    sources.unshift({
      srcSet: getSrcset(image, variant.name),
      src: variant.srcset[0].url,
      sizes: sizes,
      media: breakpoint ? `(min-width: ${breakpoint})` : `(min-width: 0px)`,
      aspectRatio: variant.aspectRatio
    });
  });

  const { objectFit, objectPosition, ...restSx } = sx;

  const specialStyles = {
    objectFit,
    objectPosition,
    paddingBottom: responsiveValueMap(
      sxVariant,
      variantName =>
        `${(1 / findVariant(image, variantName).aspectRatio) * 100}%`
    )
  };

  return (
    <GatsbyImage
      {...gatsbyImageProps}
      className={props.className}
      fluid={sources}
      title={image.title}
      alt={image.alt}
      specialStyles={specialStyles}
      sx={restSx}
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
