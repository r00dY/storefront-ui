import React, { useRef } from "react";
import { getElementSpec, createElement, splitSx } from "..";
import Box from "../Box";

import {
  responsiveValueMap,
  responsiveValueForEach,
  responsiveValueToRangeMap,
  responsiveValueToResponsiveSize
} from "..";
import { rs } from "responsive-helpers";
import Image from "../Image";

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

  // const [itemRefs, setItemRefs] = React.useState([]);

  const itemRefs = useRef(null);

  if (!itemRefs.current) {
    itemRefs.current = [];
    for (let i = 0; i < props.length; i++) {
      itemRefs.current.push(React.createRef());
    }
  }

  const moveFloatingElementToItem = n => {
    if (!floatingElementRef.current) {
      return;
    }
    const offsetLeft = itemRefs.current[n].current.offsetLeft;
    const width = itemRefs.current[n].current.clientWidth;

    floatingElementRef.current.style.transform = `translateX(${offsetLeft}px)`;
    floatingElementRef.current.style.width = `${width}px`;
  };

  React.useEffect(
    () => {
      moveFloatingElementToItem(0);

      setTimeout(() => {
        if (floatingElementRef.current) {
          floatingElementRef.current.style.transition = `all .15s ease-out`;
        }
      }, 500);
    },
    [props.length]
  );

  const ret = {
    scrollTo
  };

  return {
    ...ret,
    scrollableContainerRef,
    itemRefs: itemRefs.current,
    floatingElementRef,
    moveFloatingElementToItem
  };
}

function ScrollableStack(props) {
  let { sx, children, controller, ...restProps } = props;

  const [css, customSx] = splitSx(sx);

  let scrollableContainerRef = useRef(null);
  if (!controller) {
    controller = useScrollableStack({
      ...props,
      length: props.children.length
    });
  }

  const gap = customSx.$gap || 0;
  let align = customSx.$align || "left";
  const padding = customSx.$container || 0;

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

  return (
    <Box sx={css}>
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
    </Box>
  );
}

export default ScrollableStack;
