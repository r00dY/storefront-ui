import React, { useRef, useState, useEffect } from "react";
import { RangeMap } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// This is "marketing video", more like moving image than nothing else, not interactive!
// TODO: autoplay when in viewport!
// TODO: show real image in case of lack of autoplay support

function Video$(props) {
  const [shouldShowPoster, setShouldShowPoster] = useState(false);
  const videoRef = useRef(null);

  const {
    poster, //: {image, variant, width}
    src,
    objectFit,
    objectPosition,
    _responsiveProps,
    style,
    className,
    draggable,
    backgroundColor
  } = props;

  let rangeMap = new RangeMap(
    _responsiveProps || {
      objectFit: objectFit,
      objectPosition: objectPosition
    }
  );
  // Defaults for _responsive
  rangeMap.forEach((val, range) => {
    val.objectFit = val.objectFit || "cover";
    val.objectPosition = val.objectPosition || "center center";
  });

  const styles = {
    video: `${rangeMap.css(
      ({ objectFit, objectPosition }) => `
                    object-fit: ${objectFit};
                    object-position: ${objectPosition};
                `
    )}`
  };

  // Poster
  let posterAttr;
  if (poster && shouldShowPoster) {
    poster.variant = poster.variant || "natural";
    poster.w = poster.w || 420;
    const srcset = poster.image.variants.find(x => x.name === poster.variant)
      .srcset;

    const closestSrc = srcset.reduce(
      ({ diff, val }, x) => {
        const newDiff = Math.abs(x.w - poster.w);
        if (newDiff < diff) {
          return {
            val: x,
            diff: newDiff
          };
        } else {
          return {
            val,
            diff
          };
        }
      },
      { diff: 999999, val: null }
    );

    posterAttr = closestSrc.val.url;
  }

  useEffect(() => {
    const video = videoRef.current;
    if (video.playing) {
      // if playing -> ignore
      return;
    }

    // Check if autoplay is enabled, if yes, then play, if no, show poster.
    let promise = video.play();

    if (promise !== undefined) {
      promise
        .then(_ => {
          // Autoplay started!
        })
        .catch(error => {
          // Show something in the UI that the video is muted
          setShouldShowPoster(true);
        });
    }
  });

  return (
    <div className={className} style={{ ...style, position: "relative" }}>
      <div
        css={css`
          padding-bottom: ${(src.h / src.w) * 100}%;
        `}
      />

      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        draggable={draggable}
        title={src.title}
        poster={posterAttr}
        ref={videoRef}
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: ${backgroundColor};
          ${styles.video}
        `}
      >
        {src.src.map(source => (
          <source key={source.url} type={source.type} src={source.url} />
        ))}
      </video>
    </div>
  );
}

Video$.defaultProps = {
  backgroundColor: "#f5f5f5"
};

export { Video$ };
