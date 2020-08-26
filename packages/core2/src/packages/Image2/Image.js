import React from "react";
// import { RangeMap } from "responsive-helpers";
import GatsbyImage from "./gatsby-image";
import Box, { styledBox } from "../Box";

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

const EmptyImage = styledBox({
  pb: p => p.paddingBottom,
  bg: p => p.backgroundColor
});

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
    ignoreBottomPadding = false,
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
    style,
    ignoreBottomPadding
  };

  src = src || image;
  image = src;

  const theme = useTheme();

  // In case of eager we don't want to wait until DOMContentLoad / Ready whatever to fade in the image.
  // It's ugly and images seem to be late. If eager, then load immediately. Often first paint will already include image.
  // For example, when image is in cache.
  // You can always override this with explicitly setting fadeIn to true for loading=eager.
  if (loading === "eager" && typeof fadeIn === "undefined") {
    gatsbyImageProps.fadeIn = false;
  }

  let sources = [];

  let variant = aspectRatio || "natural";

  if (!image || !Array.isArray(image.variants)) {
    // If no variants / no image
    console.warn("Image is empty or doesn't have 'variants' field");
  } else {
    responsiveValueForEach(variant, (val, breakpoint) => {
      let variant = findVariant(image, val);

      if (!variant) {
        variant = findVariant(image, "natural");
      }

      if (!variant) {
        // If variant not found
        console.warn("Image doesn't have natural variant");
      }

      sources.unshift({
        srcSet: getSrcset(image, variant.name),
        src: variant.srcset[0].url,
        sizes: sizes,
        media: breakpoint ? `(min-width: ${breakpoint})` : `(min-width: 0px)`,
        aspectRatio: variant.aspectRatio
      });
    });
  }

  const noImage = sources.length === 0;

  const paddingBottom = responsiveValueMap(aspectRatio, x => {
    let ratio;

    if (typeof x === "number") {
      ratio = x;
    } else if (typeof x === "string") {
      ratio = theme.imageAspectRatios[x];
    }

    if (!ratio) {
      if (noImage) {
        return 0;
      } else {
        ratio = src.variants.find(x => x.name === "natural").aspectRatio;
      }
    }

    return `${(1 / ratio) * 100}%`;
  });

  if (noImage) {
    return (
      <EmptyImage
        paddingBottom={paddingBottom}
        backgroundColor={backgroundColor}
      />
    );
  }

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
  objectFit: "cover",
  objectPosition: "center center",
  loading: "lazy",
  // backgroundColor: "#f5f5f5",
  sizes: "1px",
  sx: {},
  durationFadeIn: 300
};

export default Image$;
