/** @jsx jsx */

import React, { useState, useEffect, useRef } from "react";
import { Layer } from "../base/layer/index.js";
import { jsx, rs } from "@commerce-ui/core";
import Ease from "../Ease";
import { rm } from "responsive-helpers";

const mountNode = () => {
  if (typeof document !== "undefined") {
    return document.getElementById("__layers__");
  }
};

const globalDefaults = {
  animationTime: 0.3,
  animationEase: Ease.expoOut,
  backgroundColor: "rgba(0, 0, 0, 0.5)"
};

const defaults = {
  center: {
    mode: "center",
    width: rs({
      0: "90%",
      720: "50%"
    }),
    height: "auto"
  },
  left: {
    mode: "left",
    width: rs({
      0: "90%",
      720: "35%"
    }),
    height: "100%"
  },
  right: {
    mode: "right",
    width: rs({
      0: "90%",
      720: "35%"
    }),
    height: "100%"
  },
  top: {
    mode: "top",
    width: "100%",
    height: rs({
      0: "90%",
      720: "35%"
    })
  },
  bottom: {
    mode: "bottom",
    width: "100%",
    height: rs({
      0: "90%",
      720: "35%"
    })
  }
};

const centered = ({
  width,
  height,
  animationTime,
  animationEase,
  backgroundColor,
  shouldShow
}) => ({
  background: {
    backgroundColor,
    transition: `opacity ${animationTime}s ${animationEase.css}`,
    opacity: shouldShow ? 1 : 0
  },
  contentWrapper: {
    width,
    height
  },
  content: {
    transition: `all ${animationTime}s ${animationEase.css}`,
    opacity: shouldShow ? 1 : 0
  }
});

const slide = ({
  width,
  height,
  animationTime,
  animationEase,
  backgroundColor,
  axis,
  fromStart,
  shouldShow
}) => ({
  background: {
    backgroundColor,
    transition: `opacity ${animationTime}s ${animationEase.css}`,
    opacity: shouldShow ? 1 : 0
  },
  contentWrapper: {
    position: "absolute",
    top: (axis === "Y" && fromStart) || axis === "X" ? 0 : "auto",
    bottom: axis === "Y" && !fromStart ? 0 : "auto",
    left: (axis === "X" && fromStart) || axis === "Y" ? 0 : "auto",
    right: axis === "X" && !fromStart ? 0 : "auto",
    width,
    height
  },
  content: {
    transition: `all ${animationTime}s ${animationEase.css}`,
    transform: shouldShow
      ? "none"
      : `translate${axis}(${fromStart ? "-" : ""}100%)`,
    opacity: shouldShow ? 1 : 0
  }
});

function Layer$(props) {
  const [isMounted, setMounted] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const { onRequestClose, config, isOpen } = props;

  let configs = rm(config || defaults.center);

  let rawConfigs = {};

  let closeTimeout = 0;

  const animateStartTimer = useRef(null);
  const animateOutTimer = useRef(null);

  const clearTimers = () => {
    clearTimeout(animateOutTimer.current);
    cancelAnimationFrame(animateStartTimer.current);
  };

  useEffect(
    () => {
      if (isOpen) {
        clearTimers();
        animateStartTimer.current = requestAnimationFrame(() => {
          setVisible(true);
        });
      } else {
        animateOutTimer.current = setTimeout(() => {
          setVisible(false);
        }, 500);
      }
    },
    [isOpen]
  );

  const shouldShow = isVisible && isOpen;

  configs.forEach((config, range) => {
    config.mode = config.mode || "center";
    config = Object.assign({}, defaults[config.mode], globalDefaults, config);

    if (config.animationTime > closeTimeout) {
      closeTimeout = config.animationTime;
    }

    switch (config.mode) {
      case "center":
        rawConfigs[range.from] = centered({
          ...config,
          shouldShow
        });
        break;
      case "left":
        rawConfigs[range.from] = slide({
          ...config,
          height: "100%",
          axis: "X",
          fromStart: true,
          shouldShow
        });
        break;
      case "right":
        rawConfigs[range.from] = slide({
          ...config,
          height: "100%",
          axis: "X",
          fromStart: false,
          shouldShow
        });
        break;
      case "top":
        rawConfigs[range.from] = slide({
          ...config,
          width: "100%",
          axis: "Y",
          fromStart: true,
          shouldShow
        });
        break;
      case "bottom":
        rawConfigs[range.from] = slide({
          ...config,
          width: "100%",
          axis: "Y",
          fromStart: false,
          shouldShow
        });
        break;
    }
  });

  let styles = rm(rawConfigs);

  const backgroundStyles = styles.cssObject(styles => ({
    ...styles.background
  }));
  const contentWrapperStyles = styles.cssObject(styles => ({
    ...styles.contentWrapper
  }));
  const contentStyles = styles.cssObject(styles => ({ ...styles.content }));

  useEffect(() => {
    setMounted(true);
  });

  if (!isMounted) {
    return null;
  }

  if (!isOpen && !isVisible) {
    return null;
  }

  return (
    <Layer mountNode={mountNode()}>
      <div
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bg: "rgba(0,0,0,0.5)",
            zIndex: "-1",
            ...backgroundStyles
          }}
          onClick={onRequestClose}
        />

        <div
          sx={{
            ...contentWrapperStyles
          }}
        >
          <div
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              ...contentStyles
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </Layer>
  );

  return null;
}

export default Layer$;
