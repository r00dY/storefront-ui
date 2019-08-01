import React, { useEffect, useRef, useState, useMemo } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { rs, rssv, RangeMap } from "responsive-helpers";
import { TouchSpace, AbstractSlider } from "simpleswiper";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const CSS = {
  horizontal: {
    size: "width",
    flexDirection: "row",
    paddingStart: "padding-left",
    paddingEnd: "padding-right",
    overflowStyles: "overflow-y: hidden; overflow-x: auto;"
  },
  vertical: {
    size: "height",
    flexDirection: "column",
    paddingStart: "padding-top",
    paddingEnd: "padding-bottom",
    overflowStyles: "overflow-y: auto; overflow-x: hidden;"
  }
};

const DefaultArrowContainer = ({
  side,
  content,
  offset,
  hide,
  hideOnTouchDevices
}) => (
  <div
    className="storefrontUI__slider__arrow"
    css={css`
      position: absolute;
      ${offset.css(side)}
      top: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      transition: opacity 0.15s, visibility 0.15s;

      ${hide ? "visibility: hidden; opacity: 0;" : ""}

      ${hideOnTouchDevices
        ? "@media (hover: none) { visibility: hidden; }"
        : ""}
    `}
  >
    {content}
  </div>
);

const Root = styled.div`
  position: relative;
  height: 100%;

  @media (hover: hover) {
    &:not(:hover) .storefrontUI__slider__arrow {
      ${props =>
        props.showArrowsOnlyOnHover ? "visibility: hidden; opacity: 0;" : ""}
    }
  }
`;

const Wrapper = styled.div`
  position: relative;

  height: 100%;

  ${props => props.config.externalOffsetBefore.css("margin-left")}
  ${props =>
    props.config.externalOffsetAfter.css("margin-right")}

  ::-webkit-scrollbar {
    display: none;
  }
  text-align: center;
  ${props =>
    props.config.overflowAlwaysHidden
      ? "overflow: hidden"
      : CSS[props.config.mode].overflowStyles}
`;

const ItemsContainer = styled.div`
  height: 100%;

  display: flex;
  padding: 0;
  margin: 0;
  vertical-align: bottom;
  ${props => `flex-direction: ${CSS[props.config.mode].flexDirection}`};
`;

const Item = styled.div`
  ${props => (props.config.mode === "horizontal" ? "height: 100%;" : "")}
  box-sizing: border-box;
  ${props => props.size.css("flex-basis")}
  flex-grow: 0;
  flex-shrink: 0;
`;

function getActiveSlidesIds(state, activeAsArray) {
  let activeSlidesIds = [];
  state.slides.forEach((s, i) => {
    if (s.active) {
      activeSlidesIds.push(i);
    }
  });

  if (activeAsArray) {
    return activeSlidesIds;
  }

  return activeSlidesIds[0];
}

/**
 * Hook wrapping AbstractSlider
 *
 * @param config
 * @param events
 * @returns {*}
 */
function useAbstractSlider(config, events) {
  const ref = useRef(null);
  let [, updateState] = React.useState(0);

  const eventsRef = useRef(null);
  eventsRef.current = events || {};

  function getSlider(config) {
    if (!config) {
      return;
    }

    let abstractSlider = ref.current;

    if (abstractSlider !== null) {
      if (config) {
        abstractSlider.applyConfig(config);
      } else {
        abstractSlider.destroy();
        ref.current = undefined;
      }
    } else {
      abstractSlider = new AbstractSlider(config);
      ref.current = abstractSlider;

      // Register event listeners (only once)
      abstractSlider.addEventListener("move", () => {
        if (eventsRef.current.move) {
          eventsRef.current.move(abstractSlider.state);
        }
      });

      abstractSlider.addEventListener("activeSlidesChange", () => {
        updateState(Math.random());
      });
    }

    return abstractSlider;
  }

  const abstractSlider = useMemo(() => getSlider(config), [config]);

  let ret = {
    active: undefined,
    isFirstActive: undefined,
    isLastActive: undefined,

    instance: abstractSlider,

    moveTo: (...args) => abstractSlider.moveTo(...args),
    moveToNext: (...args) => abstractSlider.moveRight(...args),
    moveToPrev: (...args) => abstractSlider.moveLeft(...args),
    moveToSlide: (...args) => abstractSlider.moveToSlide(...args)
  };

  if (!abstractSlider) {
    return ret;
  }

  // Otherwise, return properly
  let active = getActiveSlidesIds(abstractSlider.state, true);

  return {
    ...ret,
    active: active,
    isFirstActive: active.includes(0),
    isLastActive: active.includes(abstractSlider._config.count - 1)
  };
}

let SwipeableItemsContainerPure = props => {
  let abstractSlider = props.__abstractSlider;
  let instance = abstractSlider.instance;

  const refs = useRef({
    leftOffsetRef: React.createRef(),
    rightOffsetRef: React.createRef(),
    wrapperRef: React.createRef(),
    containerRef: React.createRef(),
    itemRefs: [...Array(props.children.length)].map(() => React.createRef())
  });

  let {
    leftOffsetRef,
    rightOffsetRef,
    wrapperRef,
    containerRef,
    itemRefs
  } = refs.current;

  let config = {
    mode: props.mode || "horizontal",
    itemSize: rs(props.itemSize || 0),
    offsetBefore: rs(props.offsetBefore || 0),
    offsetAfter: rs(props.offsetAfter || 0),
    externalOffsetBefore: rs(props.externalOffsetBefore || 0),
    externalOffsetAfter: rs(props.externalOffsetAfter || 0),
    gutter: rs(props.gutter || 0),
    amount: props.children.length,
    items: props.children,
    overflowAlwaysHidden: props.swiper === true
  };

  const udpateAbstractSliderConfig = () => {
    // Let's create
    let sizes = [];
    let margins = [];

    let config = {
      containerSize: wrapperRef.current.clientWidth,
      count: itemRefs.length,
      leftOffset: leftOffsetRef.current.clientWidth,
      rightOffset: rightOffsetRef.current.clientWidth,
      slideSize: null
    };

    let previousRightEdge = 0;

    itemRefs.forEach((itemRef, index) => {
      let offset = itemRef.current.offsetLeft;
      let size = itemRef.current.clientWidth;

      sizes.push(size);

      if (index > 0) {
        margins.push(offset - previousRightEdge);
      }

      previousRightEdge = offset + size;
    });

    margins.push(0);

    config.slideSize = n => sizes[n];
    config.slideMargin = n => margins[n];

    if (props.snap === "center") {
      config.slideSnapOffset = n => (config.containerSize - sizes[n]) / 2;
    } else {
      config.slideSnapOffset = () => config.leftOffset;
    }

    props.__onConfigChange(config);
  };

  const applyState = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(${instance.state
        .slides[0].coord - instance.state.leftOffset}px, 0, 0)`;
    }
  };

  if (instance) {
    applyState();
  }

  // Slider config udpates (based on layout changes of items in DOM!)
  useEffect(() => {
    udpateAbstractSliderConfig();

    window.addEventListener("resize", udpateAbstractSliderConfig);

    return () => {
      window.removeEventListener("resize", udpateAbstractSliderConfig);
    };
  }, []); // TODO: For now prop changes don't update layout!

  useEffect(
    () => {
      if (instance) {
        // if abstractSlider available
        abstractSlider.instance.addEventListener("move", applyState);

        let touchSpace = new TouchSpace(instance, wrapperRef.current);
        touchSpace.enable();

        return () => {
          touchSpace.disable();
        };
      }
    },
    [instance]
  );

  if (props.itemSize) {
  } else if (props.itemAspectRatio) {
    // this can work only in Javascript. No way for height ot be set anyhow in CSS and for us to keep
    // photo widths, unless in vertical mode
  } else if (props.itemsVisible) {
    let itemsVisibleMap = new RangeMap(props.itemsVisible);

    let multiplier = {};
    itemsVisibleMap.forEach((itemsVisible, range) => {
      multiplier[range.from] = (itemsVisible - 1) / itemsVisible;
    });

    let base = rs("100%");
    if (!props.itemsVisibleIncludeMargins) {
      base = base.subtract(config.offsetBefore).subtract(config.offsetAfter);
    }

    config.itemSize = base
      .divide(itemsVisibleMap)
      .subtract(config.gutter.multiply(multiplier));
  } else {
    throw new Error(
      "FixedWidthItemsContainer: slider and slider-vertical modes require itemSize or itemsVisible parameter"
    );
  }

  let itemsInContainer = [];

  // left offset
  itemsInContainer.push(
    <div
      key="spacer-before"
      ref={leftOffsetRef}
      css={css`
        ${config.offsetBefore.css("flex-basis")}
        flex-grow: 0;
        flex-shrink: 0;
      `}
    />
  );

  props.children.forEach((item, i) => {
    itemsInContainer.push(
      <Item key={i} config={config} ref={itemRefs[i]} size={config.itemSize}>
        {item}
      </Item>
    );

    // gutter
    if (i !== props.children.length - 1) {
      itemsInContainer.push(
        <div
          key={`spacer-${i}`}
          css={css`
            ${config.gutter.css("flex-basis")}
            flex-grow: 0;
            flex-shrink: 0;
          `}
        />
      );
    }
  });

  // right offset
  itemsInContainer.push(
    <div
      key="spacer-after"
      ref={rightOffsetRef}
      css={css`
        ${config.offsetAfter.css("flex-basis")}
        flex-grow: 0;
        flex-shrink: 0;
      `}
    />
  );

  // arrows offset
  let arrowsOffset = [0, 0];
  if (props.arrows && props.arrows.offset) {
    if (Array.isArray(props.arrows.offset)) {
      arrowsOffset = [rs(props.arrows.offset[0]), rs(props.arrows.offset[1])];
    } else {
      arrowsOffset = [props.arrows.offset, props.arrows.offset];
    }
  }

  // console.log('pure component', abstractSlider.isFirstActive);

  return (
    <Root
      className={props.className}
      style={props.style}
      showArrowsOnlyOnHover={props.arrows && props.arrows.showOnlyOnHover}
    >
      <Wrapper ref={wrapperRef} config={config}>
        <ItemsContainer ref={containerRef} config={config}>
          {itemsInContainer}
        </ItemsContainer>
      </Wrapper>

      {props.arrows && (
        <DefaultArrowContainer
          side={"left"}
          content={props.arrows.left({
            onClick: () => {
              abstractSlider.moveToPrev();
            }
          })}
          offset={rs(arrowsOffset[0]).add(config.externalOffsetBefore)}
          hide={abstractSlider.isFirstActive && props.arrows.hideWhenInactive}
          hideOnTouchDevices={props.arrows.hideOnTouchDevices || false}
        />
      )}
      {props.arrows && (
        <DefaultArrowContainer
          side={"right"}
          content={props.arrows.right({
            onClick: () => {
              abstractSlider.moveToNext();
            }
          })}
          offset={rs(arrowsOffset[1]).add(config.externalOffsetAfter)}
          hide={abstractSlider.isLastActive && props.arrows.hideWhenInactive}
          hideOnTouchDevices={props.arrows.hideOnTouchDevices || false}
        />
      )}
    </Root>
  );
};

SwipeableItemsContainerPure.defaultProps = {
  swiper: true,
  itemsVisible: 1,
  snap: "offset",
  itemsVisibleIncludeMargins: false
};

SwipeableItemsContainerPure.propTypes = {
  children: PropTypes.any,
  gutter: PropTypes.any,
  itemSize: PropTypes.any,
  offsetBefore: PropTypes.any,
  offsetAfter: PropTypes.any,
  externalOffsetBefore: PropTypes.any,
  externalOffsetAfter: PropTypes.any,
  snap: PropTypes.oneOf(["offset", "center"]),
  itemsVisibleIncludeMargins: PropTypes.bool,
  itemsVisible: PropTypes.any,
  arrows: PropTypes.object,

  // swiper: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func
};

function useSwipeableItemsContainer(inputElement) {
  const [config, setConfig] = useState(undefined);

  let props = inputElement.props;

  const abstractSlider = useAbstractSlider(config);

  const element = (
    <SwipeableItemsContainerPure
      {...props}
      __abstractSlider={abstractSlider}
      __onConfigChange={config => setConfig(config)}
    />
  );

  return {
    ...abstractSlider,
    count: props.children.length,
    element: element
  };
}

function useSwipeableItemsContainerEvent(hook, event, callback) {
  const ref = useRef(null);

  useEffect(() => {
    let oldInstance = ref.current ? ref.current.instance : undefined;
    let newInstance = hook.instance;

    if (oldInstance !== newInstance) {
      if (oldInstance) {
        oldInstance.removeEventListener("move", callback);
      }

      if (newInstance) {
        newInstance.addEventListener("move", callback);
      }

      ref.current = newInstance;
    }

    return () => {
      if (newInstance) {
        newInstance.removeEventListener("move", callback);
      }
    };
  });
}

const SwipeableItemsContainer = props => {
  const { element } = useSwipeableItemsContainer(
    <SwipeableItemsContainerPure {...props} />
  );
  return <>{element}</>;
};

SwipeableItemsContainer.defaultProps = SwipeableItemsContainerPure.defaultProps;
SwipeableItemsContainer.propTypes = SwipeableItemsContainerPure.propTypes;

export default SwipeableItemsContainer;
export {
  useSwipeableItemsContainer,
  useSwipeableItemsContainerEvent,
  useAbstractSlider
};
