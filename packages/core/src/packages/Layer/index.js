/** @jsx jsx */

import React, { useState, useEffect, useRef } from "react";
import { Layer, TetherBehavior } from "../base/layer/index.js";
import { jsx, rs } from "@commerce-ui/core";
import Ease from "../../packages_old/Ease";
import { rm } from "responsive-helpers";
import {
  fromPopperPlacement,
  getEndPosition,
  getPopoverMarginStyles,
  getStartPosition
} from "../base/popover/utils";
import { ANIMATE_IN_TIME, PLACEMENT } from "../base/popover";
import { createElement, getElementSpec } from "..";
import { SharedStylePropsArgT } from "../base/popover/types";

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
  centered: {
    width: rs({
      0: "90%",
      720: "50%"
    }),
    height: "auto"
  },
  "slide-from-left": {
    width: rs({
      0: "90%",
      720: "35%"
    }),
    height: "100%"
  },
  "slide-from-right": {
    width: rs({
      0: "90%",
      720: "35%"
    }),
    height: "100%"
  },
  "slide-from-top": {
    width: "100%",
    height: rs({
      0: "90%",
      720: "35%"
    })
  },
  "slide-from-bottom": {
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
  anchored: false,
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
  anchored: false,
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

const popoverRootDefault = ({
  children,
  isOpen,
  isVisible,
  popoverOffset,
  showArrow,
  placement
}) => ({
  boxSizing: "border-box",
  minWidth: 0,
  position: "absolute",
  top: 0,
  left: 0,
  transition: isVisible ? "all .1s ease-out" : "none",
  opacity: isVisible && isOpen ? 1 : 0,
  transform:
    isVisible && isOpen
      ? getEndPosition(popoverOffset)
      : getStartPosition(popoverOffset, placement, showArrow),
  ...getPopoverMarginStyles(showArrow, placement),
  __children: children
});

function Layer$(props) {
  const [isMounted, setMounted] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isLayerMounted, setLayerMounted] = useState(false);

  const { onRequestClose, config, isOpen, anchorRef } = props;

  let configs = rm(config || defaults.centered);

  let rawConfigs = {};

  let closeTimeout = 0;

  const animateStartTimer = useRef(null);
  const animateOutTimer = useRef(null);

  // Popover
  const popperRef = useRef(null);
  const arrowRef = useRef(null);
  const [arrowOffset, setArrowOffset] = useState({ left: 0, top: 0 });
  const [popoverPlacement, setPopoverPlacement] = useState("bottomLeft");
  const [popoverOffset, setPopoverOffset] = useState({ left: 0, top: 0 });

  const clearTimers = () => {
    clearTimeout(animateOutTimer.current);
    cancelAnimationFrame(animateStartTimer.current);
  };

  const show = () => {
    clearTimers();
    animateStartTimer.current = requestAnimationFrame(() => {
      setVisible(true);
    });
  };

  const hide = () => {
    animateOutTimer.current = setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  const shouldShow = isVisible && isOpen;

  configs.forEach((config, range) => {
    // ANCHORED
    if (config.anchored) {
      rawConfigs[range.from] = {
        anchored: true
      };

      return;
    }

    // OVERLAY

    config.mode = config.mode || "centered";
    config = Object.assign({}, defaults[config.mode], globalDefaults, config);

    if (config.animationTime > closeTimeout) {
      closeTimeout = config.animationTime;
    }

    switch (config.mode) {
      case "centered":
        rawConfigs[range.from] = centered({
          ...config,
          shouldShow
        });
        break;
      case "slide-from-left":
        rawConfigs[range.from] = slide({
          ...config,
          height: "100%",
          axis: "X",
          fromStart: true,
          shouldShow
        });
        break;
      case "slide-from-right":
        rawConfigs[range.from] = slide({
          ...config,
          height: "100%",
          axis: "X",
          fromStart: false,
          shouldShow
        });
        break;
      case "slide-from-top":
        rawConfigs[range.from] = slide({
          ...config,
          width: "100%",
          axis: "Y",
          fromStart: true,
          shouldShow
        });
        break;
      case "slide-from-bottom":
        rawConfigs[range.from] = slide({
          ...config,
          width: "100%",
          axis: "Y",
          fromStart: false,
          shouldShow
        });
    }
  });

  let styles = rm(rawConfigs);

  useEffect(
    () => {
      if (isOpen) {
        if (!styles.current.anchored) {
          show();
        }
      } else {
        hide();
      }
    },
    [isOpen]
  );

  useOnClickOutside([popperRef.current, arrowRef.current], () => {
    if (styles.current.anchored) {
      if (onRequestClose) {
        onRequestClose();
      }
    }
  });

  useEffect(() => {
    setMounted(true);
  });

  if (!isMounted) {
    return null;
  }

  if (!styles.current.anchored) {
    if (!isOpen && !isVisible) {
      return null;
    }

    const backgroundStyles = styles.cssObject(styles => ({
      ...styles.background
    }));
    const contentWrapperStyles = styles.cssObject(styles => ({
      ...styles.contentWrapper
    }));
    const contentStyles = styles.cssObject(styles => ({ ...styles.content }));

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
              {typeof props.children === "function"
                ? props.children({ anchored: !!styles.current.anchored })
                : props.children}
            </div>
          </div>
        </div>
      </Layer>
    );
  }

  if (!isOpen) {
    return null;
  }

  const onPopperUpdate = (normalizedOffsets, data) => {
    const placement = fromPopperPlacement(data.placement) || PLACEMENT.top;
    // this.setState({
    //     arrowOffset: normalizedOffsets.arrow,
    //     popoverOffset: normalizedOffsets.popper,
    //     placement
    // });

    setPopoverOffset(normalizedOffsets.popper);
    setPopoverPlacement(placement);
    setArrowOffset(normalizedOffsets.arrowOffset);

    // Now that element has been positioned, we can animate it in
    // this.animateInTimer = setTimeout(this.animateIn, ANIMATE_IN_TIME);

    show();

    return data;
  };

  const getSharedProps = () => {
    return {
      showArrow: false,
      arrowOffset: arrowOffset,
      popoverOffset: popoverOffset,
      placement: popoverPlacement,
      isVisible: isVisible,
      isOpen: isOpen,
      anchorWidth: anchorRef.current.clientWidth
    };
  };

  const renderPopover = () => {
    // UPDATED CODE:

    const state = {
      ...getSharedProps(),
      anchored: !!styles.current.anchored
    };

    const children =
      typeof props.children === "function"
        ? props.children(state)
        : props.children;

    // const bodyProps = this.getPopoverBodyProps();

    const popoverRootSpec = getElementSpec(
      props.sx ? props.sx.$root : undefined,
      popoverRootDefault,
      {
        ...state,
        children
      }
    );

    const popoverRoot = createElement(popoverRootSpec, {
      ref: popperRef
      // ...bodyProps
    });

    return popoverRoot;
  };

  // onMount and onUnmount are necessary to create rerender. Rerender makes popperRef to become not-null and TetherBehaviour depends on that
  return (
    <Layer
      mountNode={mountNode()}
      onMount={() => setLayerMounted(true)}
      onUnmount={() => setLayerMounted(false)}
    >
      <TetherBehavior
        anchorRef={anchorRef.current}
        arrowRef={arrowRef.current}
        popperRef={popperRef.current}
        // Remove the `ignoreBoundary` prop in the next major version
        // and have it replaced with the TetherBehavior props overrides
        popperOptions={{
          modifiers: {
            preventOverflow: { enabled: !props.ignoreBoundary }
          }
        }}
        onPopperUpdate={onPopperUpdate}
        placement={"bottomLeft"}
      >
        {renderPopover()}
      </TetherBehavior>
    </Layer>
  );
}

function useOnClickOutside(nodes, callback) {
  useEffect(() => {
    const onDocumentClick = evt => {
      const target = evt.target;

      for (const i in nodes) {
        const node = nodes[i];

        if (!node) {
          continue;
        }

        if (node === target || node.contains(target)) {
          return;
        }
      }

      if (callback) {
        callback(evt);
      }
    };

    document.addEventListener("mousedown", onDocumentClick);

    return () => {
      document.removeEventListener("mousedown", onDocumentClick);
    };
  });
}

export default Layer$;
