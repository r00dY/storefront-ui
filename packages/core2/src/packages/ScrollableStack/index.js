import React, { useRef, useEffect, useState } from "react";
import {
  getElementSpec,
  createElement,
  splitSx,
  useResponsiveHelpers
} from "..";
import Box from "../Box";

import {
  responsiveValueMap,
  responsiveValueForEach,
  responsiveValueToRangeMap,
  responsiveValueToResponsiveSize
} from "..";
import { rs } from "responsive-helpers";

import useHover from "../useHover";
import animateScrollTo from "animated-scroll-to";

function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function getNextPos(
  scrollableContainerRef,
  spacerRef,
  itemRefs,
  direction = 1
) {
  const spacerWidth = spacerRef.current.getBoundingClientRect().width;

  const containerRect = scrollableContainerRef.current.getBoundingClientRect();
  const containerWidth = containerRect.width - spacerWidth * 2;

  let closestItem;
  let closestDiff = 999999;
  for (let i = 0; i < itemRefs.current.length; i++) {
    const item = itemRefs.current[i];

    const left = item.current.getBoundingClientRect().left - containerRect.left;
    const diff = Math.abs(left + containerWidth * direction - spacerWidth);

    if (diff < closestDiff) {
      closestItem = item.current;
      closestDiff = diff;
    }
  }

  let pos =
    scrollableContainerRef.current.scrollLeft +
    (closestItem.getBoundingClientRect().left -
      containerRect.left -
      spacerWidth);

  // snap to boundaries (1px problem)
  pos = Math.ceil(pos);

  if (Math.abs(pos) < 3) {
    pos = 0;
  }

  return pos;
}

function scrollTo(container, pos) {
  container.style.willChange = "scroll-position";

  animateScrollTo([pos, null], {
    elementToScroll: container,
    easing: easeOutExpo,
    minDuration: 500,
    maxDuration: 500
  }).then(() => {
    container.style.willChange = "auto";
  });
}

/**
 * Helper component placing components next to each other with gutter.
 *
 * Gutter can be responsive but items layout can not. So it's usable ONLY if on all resolutions items will be next to each other and won't wrap.
 */
export function useScrollableStack(props) {
  const scrollableContainerRef = useRef(null);
  const floatingElementRef = useRef(null);
  const { currentValue } = useResponsiveHelpers();
  //
  // const scrollTo = x => {
  //   scrollableContainerRef.current.scroll({
  //     left: x,
  //     behavior: "smooth"
  //   });
  // };

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(true);

  const itemRefs = useRef(null);

  const spacerRef = useRef(null);

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
    scrollTo: pos => {
      scrollTo(scrollableContainerRef.current, pos);
    },
    isAtStart,
    isAtEnd
  };

  // const currentContainerWidth = currentValue(padding) * 2;
  const previousButtonProps = {
    onClick: () => {
      const newLeftPos = getNextPos(
        scrollableContainerRef,
        spacerRef,
        itemRefs,
        1
      );
      scrollTo(scrollableContainerRef.current, newLeftPos);
    }
  };

  const nextButtonProps = {
    onClick: () => {
      const newLeftPos = getNextPos(
        scrollableContainerRef,
        spacerRef,
        itemRefs,
        -1
      );
      scrollTo(scrollableContainerRef.current, newLeftPos);
    }
  };

  return {
    ...ret,
    scrollableContainerRef,
    itemRefs: itemRefs.current,
    floatingElementRef,
    spacerRef,
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
    gap,
    align,
    innerMargin,
    itemSize,
    itemsVisible,

    ...restProps
  } = props;

  const [css, customSx] = splitSx(sx);

  const rootRef = useRef(null);
  const isRootHovered = useHover(rootRef);

  gap = gap || (customSx.$gap || 0);
  align = align || (customSx.$align || "left");
  const padding = innerMargin || (customSx.$innerMargin || 0);

  if (!controller) {
    controller = useScrollableStack({
      ...props,
      length: props.children.length
    });
  }

  let itemProps;

  itemSize = itemSize || customSx.$itemSize;
  itemsVisible = itemsVisible || customSx.$itemsVisible;

  if (itemSize) {
    itemProps = { width: itemSize };
  } else if (itemsVisible) {
    // TODO: unify responsive values arithmetics

    responsiveValueForEach(align, val => {
      if (val !== "left") {
        console.warn(
          `Warning: ScrollableStack uses $itemsVisible + $align, this behaviour is not allowed. If you want to use $align, please use $itemSize property or go with natural item widths.`
        );
      }
    });
    align = "left";

    let itemsVisibleMap = responsiveValueToRangeMap(itemsVisible);
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
      previousButton = previousButton({
        ...controller,
        isParentHovered: isRootHovered
      });
    }
    if (React.isValidElement(previousButton)) {
      previousButton = {
        button: previousButton
      };
    }

    previousButton.offset = previousButton.offset || 0;
    previousButton.hideOnTouch = previousButton.hideOnTouch || true;

    if (typeof previousButton.button === "function") {
      previousButton.button = previousButton.button({
        buttonProps: controller.previousButtonProps
      });
    }
  }

  if (nextButton) {
    if (typeof nextButton === "function") {
      nextButton = nextButton({
        ...controller,
        isParentHovered: isRootHovered
      });
    }
    if (React.isValidElement(nextButton)) {
      nextButton = {
        button: nextButton
      };
    }

    nextButton.offset = nextButton.offset || 0;
    nextButton.hideOnTouch = nextButton.hideOnTouch || true;

    if (typeof nextButton.button === "function") {
      nextButton.button = nextButton.button({
        buttonProps: controller.nextButtonProps
      });
    }
  }

  return (
    <Box sx={{ position: "relative", ...css }} _ref={rootRef}>
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
            ref={controller.spacerRef}
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
