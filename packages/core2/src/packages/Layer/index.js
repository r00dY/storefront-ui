/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { Layer, TetherBehavior } from "../base/layer/index.js";
import {
  fromPopperPlacement,
  getEndPosition,
  getPopoverMarginStyles,
  getStartPosition
} from "../base/popover/utils";
import {
  createElement,
  getElementSpec,
  responsiveValueCurrent,
  jsx
} from "../index";
import Box from "../Box";

import uniqueId from "../uniqueId";

const mountNode = () => {
  if (typeof document !== "undefined") {
    return document.getElementById("__layers__");
  }
};

import FocusLock from "react-focus-lock";

let scrollbarWidth;

function getScrollbarWidth() {
  if (typeof scrollbarWidth === "number") {
    return scrollbarWidth;
  }

  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100%";
  // outer.style.overflow = "scroll"; // forcing scrollbar to appear
  // outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  scrollbarWidth = window.innerWidth - outer.clientWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

const centered = ({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  animationTime,
  animationEase,
  backgroundColor,
  shouldShow
}) => ({
  anchored: false,
  background: {
    backgroundColor,
    transition: `opacity ${animationTime}s ${animationEase}`,
    opacity: shouldShow ? 1 : 0
  },
  contentWrapper: {
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight
  },
  content: {
    transition: `all ${animationTime}s ${animationEase}`,
    opacity: shouldShow ? 1 : 0
  }
});

const slide = ({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
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
    transition: `opacity ${animationTime}s ${animationEase}`,
    opacity: shouldShow ? 1 : 0
  },
  contentWrapper: {
    position: "absolute",
    top: (axis === "Y" && fromStart) || axis === "X" ? 0 : "auto",
    bottom: axis === "Y" && !fromStart ? 0 : "auto",
    left: (axis === "X" && fromStart) || axis === "Y" ? 0 : "auto",
    right: axis === "X" && !fromStart ? 0 : "auto",
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight
  },
  content: {
    transition: `all ${animationTime}s ${animationEase}`,
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
  placement,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight
}) => ({
  boxSizing: "border-box",
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
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,

  overflowY: "auto",
  __children: children
});

function layerAdded(isAnchoredToWindow) {
  window.__cui_layerCounter = window.__cui_layerCounter || {
    window: 0,
    element: 0,
    all: 0
  };

  if (isAnchoredToWindow) {
    if (
      window.__cui_layerCounter.window === 0 &&
      window.__cui_notificationSystemSetLayerOpen
    ) {
      window.__cui_notificationSystemSetLayerOpen(true);
    }
    window.__cui_layerCounter.window++;
  } else {
    window.__cui_layerCounter.element++;
  }

  window.__cui_layerCounter.all =
    window.__cui_layerCounter.window + window.__cui_layerCounter.element;
}

function layerRemoved(isAnchoredToWindow) {
  window.__cui_layerCounter = window.__cui_layerCounter || {
    window: 0,
    element: 0,
    all: 0
  };

  if (isAnchoredToWindow) {
    window.__cui_layerCounter.window = Math.max(
      0,
      window.__cui_layerCounter.window - 1
    );

    if (
      window.__cui_layerCounter.window === 0 &&
      window.__cui_notificationSystemSetLayerOpen
    ) {
      window.__cui_notificationSystemSetLayerOpen(false);
    }
  } else {
    window.__cui_layerCounter.element = Math.max(
      0,
      window.__cui_layerCounter.element - 1
    );
  }

  window.__cui_layerCounter.all =
    window.__cui_layerCounter.window + window.__cui_layerCounter.element;
}

function layerChanged(isAnchoredToWindow) {
  window.__cui_layerCounter = window.__cui_layerCounter || {
    window: 0,
    element: 0,
    all: 0
  };

  if (isAnchoredToWindow) {
    if (
      window.__cui_layerCounter.window === 0 &&
      window.__cui_notificationSystemSetLayerOpen
    ) {
      window.__cui_notificationSystemSetLayerOpen(true);
    }
    window.__cui_layerCounter.window++;
    window.__cui_layerCounter.element = Math.max(
      0,
      window.__cui_layerCounter.element - 1
    );
  } else {
    window.__cui_layerCounter.element++;
    window.__cui_layerCounter.window = Math.max(
      0,
      window.__cui_layerCounter.window - 1
    );

    if (
      window.__cui_layerCounter.window === 0 &&
      window.__cui_notificationSystemSetLayerOpen
    ) {
      window.__cui_notificationSystemSetLayerOpen(false);
    }
  }

  window.__cui_layerCounter.all =
    window.__cui_layerCounter.window + window.__cui_layerCounter.element;
}

function Layer$(props) {
  const [isMounted, setMounted] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isLayerMounted, setLayerMounted] = useState(false);

  let { onClose, isOpen, anchoredTo, sx = {} } = props;

  let {
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    animationTime,
    animationEase,
    backgroundColor,
    root = {},
    container = {},
    placement
  } = Object.assign({ ...sx }, props); // backward compatibility. Now props are recommended.

  let closeTimeout = 0;

  const animateStartTimer = useRef(null);
  const animateOutTimer = useRef(null);

  // Popover
  const popperRef = useRef(null);
  const arrowRef = useRef(null);
  const [arrowOffset, setArrowOffset] = useState({ left: 0, top: 0 });
  const [popoverPlacement, setPopoverPlacement] = useState("bottomLeft");
  const [popoverOffset, setPopoverOffset] = useState({ left: 0, top: 0 });

  // ID (to count number of open layers)
  const id = useRef(uniqueId());

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
  anchoredTo = responsiveValueCurrent(anchoredTo) || "window";

  const isAnchored = anchoredTo && anchoredTo !== "window";
  const currentPlacement = responsiveValueCurrent(placement);

  const current = {
    isAnchored,
    anchoredTo,
    placement: currentPlacement,
    width:
      typeof width === "function"
        ? width({
            anchorRect: (anchoredTo.current &&
              anchoredTo.current.getBoundingClientRect()) || {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              right: 0,
              left: 0,
              top: 0,
              bottom: 0
            }
          })
        : width || "auto",
    height:
      typeof height === "function"
        ? height({
            anchorRect: (anchoredTo.current &&
              anchoredTo.current.getBoundingClientRect()) || {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
              right: 0,
              left: 0,
              top: 0,
              bottom: 0
            }
          })
        : height || "auto",
    minWidth: minWidth || 0,
    minHeight: minHeight || 0,
    maxWidth: maxWidth || "10000px",
    maxHeight: maxHeight || "10000px",
    animationTime: animationTime || 0.3,
    animationEase: animationEase || "cubic-bezier(0.19, 1, 0.22, 1)",
    backgroundColor: backgroundColor || "rgba(0,0,0,0.3)",
    shouldShow
  };

  // Following 2 useEffects are responsible for counting open non-anchored layers
  useEffect(
    () => {
      const body = document.querySelector("body");
      const scrollbarWidth = getScrollbarWidth();

      if (isOpen === true) {
        layerAdded(!current.isAnchored);
      } else {
        layerRemoved(!current.isAnchored);
      }

      if (isOpen && window.__cui_layerCounter.all === 1) {
        body.style["padding-right"] = scrollbarWidth + "px";
        body.style["overflow-y"] = "hidden";
      } else if (!isOpen && window.__cui_layerCounter.all == 0) {
        body.style.removeProperty("overflow-y");
        body.style.removeProperty("padding-right");
      }
    },
    [isOpen]
  );

  // on route change!
  useEffect(() => {
    const onRouteChange = () => {
      if (onClose) {
        onClose();
      }
    };

    if (!window.__cui_onRouteChange) {
      window.__cui_onRouteChange = [];
    }

    window.__cui_onRouteChange.push(onRouteChange);

    return () => {
      window.__cui_onRouteChange = window.__cui_onRouteChange.filter(
        x => x !== onRouteChange
      );
    };
  }, []);

  useEffect(
    () => {
      if (!isOpen || !isMounted) {
        return;
      }

      layerChanged(!current.isAnchored);
    },
    [current.isAnchored]
  );

  useEffect(
    () => {
      if (isOpen) {
        if (!current.isAnchored) {
          show();
        }
      } else {
        hide();
      }
    },
    [isOpen]
  );

  useOnClickOutside(
    [popperRef.current, arrowRef.current, anchoredTo.current],
    () => {
      if (!isOpen) {
        return;
      }

      if (current.isAnchored) {
        if (onClose) {
          onClose();
        }
      }
    }
  );

  useEffect(() => {
    setMounted(true);
  });

  if (!isMounted) {
    return null;
  }

  if (!current.isAnchored) {
    if (!isOpen && !isVisible) {
      return null;
    }

    let styles;

    switch (currentPlacement) {
      case "left":
        styles = slide({
          ...current,
          height: "100%",
          axis: "X",
          fromStart: true
        });
        break;
      case "right":
        styles = slide({
          ...current,
          height: "100%",
          axis: "X",
          fromStart: false
        });
        break;
      case "top":
        styles = slide({
          ...current,
          width: "100%",
          axis: "Y",
          fromStart: true
        });
        break;
      case "bottom":
        styles = slide({
          ...current,
          width: "100%",
          axis: "Y",
          fromStart: false
        });
        break;
      default:
        // "center"
        styles = centered(current);
    }

    return (
      <Layer mountNode={mountNode()}>
        <Box
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
          className={"__layer-window__"}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bg: "rgba(0,0,0,0.5)",
              zIndex: "-1",
              ...styles.background
            }}
            onClick={onClose}
          />

          <Box
            sx={{
              ...styles.contentWrapper
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "inherit",
                minWidth: "inherit",
                maxHeight: "inherit",
                maxWidth: "inherit",
                overflowY: "auto",
                ...styles.content,
                ...root
              }}
            >
              {/*<Box sx={{...container}}>*/}
              {typeof props.children === "function"
                ? props.children({
                    anchored: current.isAnchored,
                    close: () => {
                      if (onClose) {
                        onClose();
                      }
                    }
                  })
                : props.children}
              {/*</Box>*/}
            </Box>
          </Box>
        </Box>
      </Layer>
    );
  }

  if (!isOpen) {
    return null;
  }

  const onPopperUpdate = (normalizedOffsets, data) => {
    const placement = fromPopperPlacement(data.placement) || "top";
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
      anchorWidth: anchoredTo.current && anchoredTo.current.clientWidth
    };
  };

  const renderPopover = () => {
    // UPDATED CODE:

    const state = {
      ...getSharedProps(),
      anchored: !!current.isAnchored,
      close: () => {
        if (onClose) {
          onClose();
        }
      }
    };

    // const children = <Box sx={{...container}}>{
    //     typeof props.children === "function"
    //         ? props.children(state)
    //         : props.children
    // }</Box>;

    const children =
      typeof props.children === "function"
        ? props.children(state)
        : props.children;

    // const bodyProps = this.getPopoverBodyProps();

    const popoverRootSpec = getElementSpec(root, popoverRootDefault, {
      ...state,

      width: current.width,
      height: current.height,
      minWidth: current.minWidth,
      maxWidth: current.maxWidth,
      minHeight: current.minHeight,
      maxHeight: current.maxHeight,
      children
    });

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
        anchorRef={anchoredTo.current}
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
        placement={currentPlacement || "bottomLeft"}
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

function getLayout(children, header, footer, onLinkClick) {
  const containerSx = {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: "100%",
    maxWidth: "inherit",
    maxHeight: "inherit",
    minWidth: "inherit",
    minHeight: "inherit"
  };

  return (
    <Box
      sx={containerSx}
      onClick={e => {
        if (e.target && e.target.tagName === "A") {
          onLinkClick();
        }
      }}
    >
      {header && (
        <Box
          sx={{
            flex: "0 0 auto"
          }}
        >
          {header}
        </Box>
      )}

      <Box
        sx={{
          flex: "1 1 auto",
          overflow: "auto"
        }}
      >
        {children}
      </Box>

      {footer && (
        <Box
          sx={{
            flex: "0 0 auto"
          }}
        >
          {footer}
        </Box>
      )}
    </Box>
  );
}

// Temporary wrapper around layer solving 2 tasks: header, footer and focus lock
function LayerWithHeaderAndFooter(props) {
  const {
    children,
    header,
    footer,
    container,
    focusLock = false,
    hideOnLinkClick = false,
    ...restProps
  } = props;

  const [focusLockDisabled, setFocusLockDisabled] = useState(true);

  // We must enabled focus lock AFTER its mounted. For popups its mounted top: 0, left: 0 in the first place and then its position changes. Focus too early and you'll cause unwanted "scroll to top" effect.
  useEffect(
    () => {
      if (props.isOpen) {
        setTimeout(() => {
          setFocusLockDisabled(false);
        }, 0);
      } else {
        setFocusLockDisabled(true);
      }
    },
    [props.isOpen]
  );

  const content = params =>
    getLayout(
      <Box sx={container}>
        {typeof children === "function" ? children(params) : children}
      </Box>,
      typeof header === "function" ? header(params) : header,
      typeof footer === "function" ? footer(params) : footer,
      () => {
        if (hideOnLinkClick) {
          params.close();
        }
      }
    );

  let output;

  if (focusLock) {
    output = params => (
      <FocusLock
        returnFocus
        lockProps={{
          style: {
            width: "100%",
            height: "100%",
            maxWidth: "inherit",
            maxHeight: "inherit",
            minWidth: "inherit",
            minHeight: "inherit"
          },
          role: "dialog"
        }}
        disabled={focusLockDisabled}
      >
        {content(params)}
      </FocusLock>
    );
  } else {
    output = params => content(params);
  }

  return <Layer$ {...restProps}>{output}</Layer$>;
}

// Layer with Button
function Layer$$({ button, ...layerProps }) {
  let {
    anchoredTo = "button",
    closeOnEsc = true,
    onClose,
    ...restProps
  } = layerProps;

  const [isOpen, setOpen] = useState(false);

  const buttonRef = useRef(null);

  // TODO: Make this not only array
  if (Array.isArray(anchoredTo)) {
    anchoredTo = anchoredTo.map(x => (x === "button" ? buttonRef : x));
  } else {
    anchoredTo = anchoredTo === "button" ? buttonRef : anchoredTo;
  }

  useEffect(() => {
    const onDocumentKeyPress = evt => {
      if (!closeOnEsc) {
        return;
      }

      if (evt.key !== "Escape") {
        return;
      }

      // Ignore events that have been `event.preventDefault()` marked.
      if (event.defaultPrevented) {
        return;
      }

      setOpen(false);

      if (onClose) {
        onClose({ type: "esc" });
      }
    };

    document.addEventListener("keyup", onDocumentKeyPress);

    return () => {
      document.removeEventListener("keyup", onDocumentKeyPress);
    };
  });

  if (!button) {
    return <LayerWithHeaderAndFooter {...layerProps} onClose={onClose} />;
  }

  return React.cloneElement(button, {
    onClick: () => {
      setOpen(true);
    },
    _ref: buttonRef,
    selected: isOpen,
    __portals__: (
      <LayerWithHeaderAndFooter
        {...restProps}
        anchoredTo={anchoredTo}
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
          if (onClose) {
            onClose();
          }
        }}
      />
    )
  });
}

export default Layer$$;
