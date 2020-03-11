import React, { useRef, useEffect, useState } from "react";
import { getElementSpec, createElement, splitSx } from "..";
import Box from "../Box";

import {
  responsiveValueMap,
  responsiveValueForEach,
  responsiveValueToRangeMap,
  responsiveValueToResponsiveSize
} from "..";
import { rs } from "responsive-helpers";

/**
 * Helper component placing components next to each other with gutter.
 *
 * Gutter can be responsive but items layout can not. So it's usable ONLY if on all resolutions items will be next to each other and won't wrap.
 */

export function useScrollableStack(props) {
  const scrollableContainerRef = useRef(null);
  const floatingElementRef = useRef(null);

  const scrollTo = x => {
    scrollableContainerRef.current.scroll({
      left: x,
      behavior: "smooth"
    });
  };

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(true);

  const itemRefs = useRef(null);

  if (!itemRefs.current) {
    itemRefs.current = [];
    for (let i = 0; i < props.length; i++) {
      itemRefs.current.push(React.createRef());
    }
  }

  const setFloatingElementIndex = n => {
    if (!floatingElementRef.current) {
      return;
    }

    if (typeof props.length !== "number") {
      throw new Error(
        "You're must pass 'length' parameter to useScrollableStack in order to make it work with floating element!!!"
      );
    }

    let offsetLeft;
    let width;

    if (n === null) {
      offsetLeft = 0;
      width = 0;
    } else {
      offsetLeft = itemRefs.current[n].current.offsetLeft;
      width = itemRefs.current[n].current.clientWidth;
    }

    floatingElementRef.current.style.transform = `translateX(${offsetLeft}px)`;
    floatingElementRef.current.style.width = `${width}px`;
  };

  useEffect(() => {
    setFloatingElementIndex(
      typeof props.initialFloatingElementIndex === "number"
        ? props.initialFloatingElementIndex
        : 0
    );

    setTimeout(() => {
      if (floatingElementRef.current) {
        floatingElementRef.current.style.transition = `all .15s ease-out`;
      }
    }, 500);
  }, []);

  useEffect(() => {
    const elem = scrollableContainerRef.current;

    const listener = () => {
      const isStart = elem.scrollLeft <= 0;
      const isEnd = elem.scrollWidth - elem.scrollLeft <= elem.clientWidth;

      setIsAtStart(isStart);
      setIsAtEnd(isEnd);
    };

    listener();

    elem.addEventListener("scroll", listener, { passive: true });

    return () => {
      elem.removeEventListener("scroll", listener);
    };
  }, []);

  const ret = {
    scrollTo,
    isAtStart,
    isAtEnd
  };

  const previousButtonProps = {
    onClick: () => {
      scrollableContainerRef.current.scroll({
        left: 0,
        behavior: "smooth"
      });
    }
  };

  const nextButtonProps = {
    onClick: () => {
      scrollableContainerRef.current.scroll({
        left: 10000,
        behavior: "smooth"
      });
    }
  };

  return {
    ...ret,
    scrollableContainerRef,
    itemRefs: itemRefs.current,
    floatingElementRef,
    setFloatingElementIndex,
    previousButtonProps,
    nextButtonProps
  };
}

function ScrollableStack(props) {
  let {
    sx,
    children,
    controller,
    previousButton,
    nextButton,
    ...restProps
  } = props;

  const [css, customSx] = splitSx(sx);

  if (!controller) {
    controller = useScrollableStack({
      ...props,
      length: props.children.length
    });
  }

  const gap = customSx.$gap || 0;
  let align = customSx.$align || "left";
  const padding = customSx.$innerMargin || 0;

  let itemProps;

  if (customSx.$itemSize) {
    itemProps = { width: customSx.$itemSize };
  } else if (customSx.$itemsVisible) {
    // TODO: unify responsive values arithmetics

    responsiveValueForEach(align, val => {
      if (val !== "left") {
        console.warn(
          `Warning: ScrollableStack uses $itemsVisible + $align, this behaviour is not allowed. If you want to use $align, please use $itemSize property or go with natural item widths.`
        );
      }
    });
    align = "left";

    let itemsVisibleMap = responsiveValueToRangeMap(customSx.$itemsVisible);
    let paddingRs = responsiveValueToResponsiveSize(padding);
    let gapRs = responsiveValueToResponsiveSize(gap);

    let multiplier = {};
    itemsVisibleMap.forEach((itemsVisible, range) => {
      multiplier[range.from] = (itemsVisible - 1) / itemsVisible;
    });

    let base = rs("100%");
    // if (!props.itemsVisibleIncludeMargins) {
    base = base.subtract(paddingRs).subtract(paddingRs);
    // }

    let size = base
      .divide(itemsVisibleMap)
      .subtract(gapRs.multiply(multiplier));

    itemProps = size.cssObject("width");
  }

  let floatingElement;

  if (customSx.$floatingElement) {
    floatingElement = createElement(
      getElementSpec(
        customSx.$floatingElement,
        {
          __type: Box,
          position: "absolute",
          width: 0,
          zIndex: customSx.$floatingElementUnder ? -1 : 1,
          bottom: 0,
          left: 0
        },
        {}
      ),
      {
        _ref: controller.floatingElementRef
      }
    );
  }

  /**
   * Inner container styles
   */
  let innerContainerStyles = {
    width: responsiveValueMap(align, x => (x === "left" ? "100%" : undefined)),
    ml: responsiveValueMap(align, x =>
      x === "center" || x === "right" ? "auto" : "initial"
    ),
    mr: responsiveValueMap(align, x =>
      x === "center" || x === "left" ? "auto" : "initial"
    )
  };

  const childrenArray = React.Children.toArray(children);

  // TODO: floating line!!! (rect) => ...

  /**
   * Buttons
   */
  if (previousButton) {
    if (typeof previousButton === "function") {
      previousButton = previousButton(controller);
    }
    if (React.isValidElement(previousButton)) {
      previousButton = {
        button: previousButton
      };
    }

    previousButton.offset = previousButton.offset || 0;
    previousButton.hideOnTouch = previousButton.hideOnTouch || true;
  }

  if (nextButton) {
    if (typeof nextButton === "function") {
      nextButton = nextButton(controller);
    }
    if (React.isValidElement(nextButton)) {
      nextButton = {
        button: nextButton
      };
    }

    nextButton.offset = nextButton.offset || 0;
    nextButton.hideOnTouch = nextButton.hideOnTouch || true;
  }

  return (
    <Box sx={{ position: "relative", ...css }}>
      <Box
        sx={[
          {
            position: "relative",
            display: "flex",
            height: "100%",
            minHeight: "inherit",
            overflowX: "auto",
            "::-webkit-scrollbar": {
              display: "none"
            },
            scrollbarWidth: "none"
          }
        ]}
        _ref={controller.scrollableContainerRef}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            ...innerContainerStyles
          }}
        >
          {floatingElement}
          <Box
            sx={{
              position: "relative",
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: padding,
              zIndex: 0
            }}
          />
          {childrenArray.map((child, index) => {
            return (
              <Box
                sx={{
                  position: "relative",
                  marginRight: index === childrenArray.length - 1 ? 0 : gap,
                  flexGrow: 0,
                  flexShrink: 0,
                  ...itemProps
                }}
                key={child.key}
                _ref={controller.itemRefs[index]}
              >
                {child}
              </Box>
            );
          })}
          <Box
            sx={{
              position: "relative",
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: padding
            }}
          />
        </Box>
      </Box>

      {previousButton && (
        <Box
          sx={{
            position: "absolute",
            left: padding,
            top: 0,
            height: "100%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Box
            sx={{
              position: "relative",
              left: previousButton.offset,
              ...(previousButton.hideOnTouch
                ? {
                    "@media not all and (pointer: fine)": {
                      display: "none"
                    }
                  }
                : {})
            }}
          >
            {React.cloneElement(
              previousButton.button,
              controller.previousButtonProps
            )}
          </Box>
        </Box>
      )}

      {nextButton && (
        <Box
          sx={{
            position: "absolute",
            right: padding,
            top: 0,
            height: "100%",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Box
            sx={{
              position: "relative",
              right: nextButton.offset,
              ...(nextButton.hideOnTouch
                ? {
                    "@media not all and (pointer: fine)": {
                      display: "none"
                    }
                  }
                : {})
            }}
          >
            {React.cloneElement(nextButton.button, controller.nextButtonProps)}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ScrollableStack;
