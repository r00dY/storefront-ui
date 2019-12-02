import React from "react";
import { RangeMap } from "responsive-helpers";
import GatsbyImage from "./gatsby-image";

// function Image$(props) {
//   // appearance: backgroundColor, animationTime, offset, draggable, placeholder -> will do for now (Image$.defaultProps)
//
//   /**
//    *
//    * props.load => when this is false, image is NEVER loaded. If this is true, image loading is "unblocked". If no other flag is set, in SSR srcset will be set.
//    * props.lazyLoad => "
//    *
//    *
//    * Options to load image
//    * 1. loaded = true from start -> srcset is always in rendered, in SSR too, so we have most standard images.
//    * 2. loaded = false && autoload = true -> srcset will be set on client-side on componentDidMount, might go hand in hand with loadWhenInViewport.
//    * 3. loaded = false && autoload = false, and then at some point loaded = true -> custom loading of image
//    *
//    * ONCE IMAGE IS LOADED, IT CAN'T BE UNLOADED
//    */
//
//   const [loaded, setLoaded] = useState(props.load || false);
//
//   useEffect(() => {
//     if (props.autoload || props.load === true) {
//       setLoaded(true);
//     }
//   });
//
//   let newProps;
//
//   const image = props.image;
//
//   const isImage =
//     typeof image.type === "undefined" || props.image.type !== "video";
//
//   newProps = {
//     ...props,
//     load: loaded,
//     backgroundColor: props.backgroundColor.css,
//     [isImage ? "image" : "videos"]: props.image,
//     alt: image.alt,
//     loadWhenInViewport: props.loadWhenInViewport
//   };
//
//   return <LazyAsset {...newProps} />;
// }

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
    className,
    style,
    children
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

  let sources = [];
  // console.log('---');
  rangeMap.forEach((val, range) => {
    const variant = findVariant(image, val.variant);

    const media = range.mediaQuery || "(min-width: 0px)";

    // console.log(variant.srcset[0].url);

    sources.push({
      srcSet: getSrcset(image, val.variant),
      src: variant.srcset[0].url,
      sizes: sizes,
      media: range.mediaQuery || "(min-width: 0px)",
      aspectRatio: variant.aspectRatio
    });
  });

  const _emotionStyles = {
    wrapper: `
                ${rangeMap.css(
                  ({ variant, mode }) => `
                    padding-bottom: ${(1 /
                      findVariant(image, variant).aspectRatio) *
                      100}%}
                `
                )}
          `,
    img: `${rangeMap.css(
      ({ variant, objectFit, objectPosition }) => `
                    object-fit: ${objectFit};
                    object-position: ${objectPosition};
                `
    )}`
  };

  return (
    <GatsbyImage
      {...gatsbyImageProps}
      className={props.className}
      fluid={sources}
      title={image.title}
      alt={image.alt}
      _emotionStyles={_emotionStyles}
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
  durationFadeIn: 300
};

export default Image$;
