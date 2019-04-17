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

const DefaultArrow = ({ side, content, offset, onClick, hide}) => (<div className="storefrontUI__slider__arrow" css={css`
                position: absolute;
                ${offset.css(side)}
                top: 0;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 1;
                transition: opacity .15s, visibility .15s;
                ${hide ? 'visibility: hidden; opacity: 0;' : ''}
            `}>

    <button onClick={onClick} css={css`
                    border: none;
                    padding: 0;
                    pointer-events: auto;
                    cursor: pointer;
                `}>
        {content}
    </button>
</div>);

const Root = styled.div`
    position: relative;
    height: 100%;
    
    &:not(:hover) .storefrontUI__slider__arrow {
        ${props => props.showArrowsOnlyOnHover ? "visibility: hidden; opacity: 0;" : ""}
    }
`;

const Wrapper = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

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
    ${props => props.size.css('flex-basis')}
    flex-grow: 0;
    flex-shrink: 0;
`;

function getActiveSlidesIds(slider, activeAsArray) {
    let activeSlidesIds = [];
    slider.state.slides.forEach((s, i) => { if (s.active) { activeSlidesIds.push(i)} });

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
    let [active, setActive] = useState();

    events = events || {};

    function setConfig(config) {
        let slider = ref.current;

        if (slider) {
            slider.applyConfig(config);

            slider.activeAsArray = config.activeAsArray ? true : false;
        }
        else {
            ref.current = new AbstractSlider(config);
            slider = ref.current;

            slider.activeAsArray = config.activeAsArray ? true : false;

            // activeSlides
            setActive(getActiveSlidesIds(slider));
            active = getActiveSlidesIds(slider);

            slider.addEventListener('activeSlidesChange', () => {
                setActive(getActiveSlidesIds(slider));
            });

            slider.addEventListener('move', () => {
                if (events.move) {
                    events.move(slider.state);
                }
            });
        }
    }

    function getSlider() {
        return ref.current;
    }

    // init slider if config given and slider not initialised
    if (!getSlider() && config) {
        setConfig(config);
    }

    let slider = getSlider();

    // If slider not yet initialized, return emtpy values

    let ret = {
        active: undefined,
        isFirstActive: undefined,
        isLastActive: undefined,
        _getSlider: getSlider,

        moveTo: (...args) => getSlider().moveTo(...args),
        moveToNext: (...args) => getSlider().moveRight(...args),
        moveToPrev: (...args) => getSlider().moveLeft(...args),
        moveToSlide: (...args) => getSlider().moveToSlide(...args),
        setConfig: setConfig
    };

    if (!slider) {
        return ret;
    }

    // Otherwise, return properly
    return {
        ...ret,
        active: active,
        isFirstActive: Array.isArray(active) ? active.includes(0) : active === 0,
        isLastActive: Array.isArray(active) ? active.includes(slider._config.count - 1) : active === slider._config.count - 1,
    }
}


let SwipeableItemsContainerPure = (props) => {
    let refs = props.__refs;
    let abstractSlider = props.__abstractSlider;

    if (!refs) {
        refs = useRef({
            leftOffsetRef: React.createRef(),
            rightOffsetRef: React.createRef(),
            wrapperRef: React.createRef(),
            containerRef: React.createRef(),
            itemRefs: [...Array(props.children.length)].map(() => React.createRef()),
        });
    }

    let { leftOffsetRef, rightOffsetRef, wrapperRef, containerRef, itemRefs } = refs.current;

    let config = {
        mode: props.mode || "horizontal",
        itemSize: rs(props.itemSize || 0),
        offsetBefore: rs(props.offsetBefore || 0),
        offsetAfter: rs(props.offsetAfter || 0),
        gutter: rs(props.gutter || 0),
        amount: props.children.length,
        items: props.children,
        overflowAlwaysHidden: props.swiper === true
    };

    useEffect(() => {

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

        if (props.snap === 'center') {
            config.slideSnapOffset = (n) => (config.containerSize - sizes[n]) / 2;
        }
        else {
            config.slideSnapOffset = () => config.leftOffset;
        }

        abstractSlider.setConfig(config);

        props.__applyState(abstractSlider._getSlider().state);

        let touchSpace = new TouchSpace(abstractSlider._getSlider(), wrapperRef.current);
        touchSpace.enable();

        return () => {
            containerRef.current.style.transform = "none";
            touchSpace.disable();
            abstractSlider._getSlider().destroy();
        }

    }, []);

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

        let base = rs('100%');
        if (!props.itemsVisibleIncludeMargins) {
            base = base.subtract(config.offsetBefore).subtract(config.offsetAfter);
        }

        config.itemSize = base.divide(itemsVisibleMap).subtract(config.gutter.multiply(multiplier));

    } else {
        throw new Error(
            "FixedWidthItemsContainer: slider and slider-vertical modes require itemSize or itemsVisible parameter"
        );
    }

    let itemsInContainer = [];

    // left offset
    itemsInContainer.push(<div key='spacer-before' ref={leftOffsetRef} css={css`
        ${config.offsetBefore.css('flex-basis')}
        flex-grow: 0;
        flex-shrink: 0;
    `} />);


    props.children.forEach((item, i) => {
        itemsInContainer.push(<Item
            key={i}
            config={config}
            ref={itemRefs[i]}
            size={config.itemSize}
        >
            {item}
        </Item>);

        // gutter
        if (i !== props.children.length - 1) {
            itemsInContainer.push(<div key={`spacer-${i}`} css={css`
                ${config.gutter.css('flex-basis')}
                flex-grow: 0;
                flex-shrink: 0;
            `} />);
        }
    });

    // right offset
    itemsInContainer.push(<div key='spacer-after' ref={rightOffsetRef} css={css`
        ${config.offsetAfter.css('flex-basis')}
        flex-grow: 0;
        flex-shrink: 0;
    `} />);


    // arrows offset
    let arrowsOffset = [0, 0];
    if (props.arrows && props.arrows.offset) {
        if (Array.isArray(props.arrows.offset)) {
            arrowsOffset = [rs(props.arrows.offset[0]), rs(props.arrows.offset[1])];
        }
        else {
            arrowsOffset = [props.arrows.offset,props.arrows.offset];
        }
    }

    // console.log('pure component', abstractSlider.isFirstActive);

    return (
        <Root className={props.className} style={props.style} showArrowsOnlyOnHover={props.arrows && props.arrows.showOnlyOnHover}>
            <Wrapper ref={wrapperRef} config={config}>
                <ItemsContainer ref={containerRef} config={config}>
                    {itemsInContainer}
                </ItemsContainer>
            </Wrapper>

            {props.arrows && <DefaultArrow side={"left"} content={props.arrows.left} offset={rs(arrowsOffset[0])} hide={abstractSlider.isFirstActive && props.arrows.hideWhenInactive} onClick={() => { abstractSlider.moveToPrev() }} />}
            {props.arrows && <DefaultArrow side={"right"} content={props.arrows.right} offset={rs(arrowsOffset[1])} hide={abstractSlider.isLastActive && props.arrows.hideWhenInactive} onClick={() => { abstractSlider.moveToNext() }}/>}
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
    snap: PropTypes.oneOf(["offset", "center"]),
    itemsVisibleIncludeMargins: PropTypes.bool,
    itemsVisible: PropTypes.any,
    arrows: PropTypes.object,

    // swiper: PropTypes.bool.isRequired,
    onActiveChange: PropTypes.func
};


function useSwipeableItemsContainer(inputElement) {
    let props = inputElement.props;

    const refs = useRef({
        leftOffsetRef: React.createRef(),
        rightOffsetRef: React.createRef(),
        wrapperRef: React.createRef(),
        containerRef: React.createRef(),
        itemRefs: [...Array(props.children.length)].map(() => React.createRef()),
    });

    // TODO: these refs ere, sliderApplyState here, passing props to SwipeableItemsContainerPure -> this structure sucks, need to clean this up. But works so far.
    // TODO: Need to consider resize and fact what happens if element is killed and reinstantiated, and hook is still the same!!! RESIZE.
    let { leftOffsetRef, rightOffsetRef, wrapperRef, containerRef, itemRefs } = refs.current;

    const sliderApplyState = (state) => {
        containerRef.current.style.transform = `translate3d(${
        state.slides[0].coord - state.leftOffset
            }px, 0, 0)`;
    };

    const abstractSlider = useAbstractSlider(undefined, {
        'move': (state) => {
            sliderApplyState(state);
            // cancelAnimationFrame(raf);
            // raf = requestAnimationFrame(() => {
            //     this.sliderApplyState();
            // });
        }
    });

    const element = useMemo(() => <SwipeableItemsContainerPure {...props } __refs={refs} __abstractSlider={abstractSlider} __applyState={sliderApplyState}/>, [abstractSlider.isFirstActive, abstractSlider.isLastActive]);

    return {
        ...abstractSlider,
        element: element
    };
}

const SwipeableItemsContainer = (props) => {
    const { element } = useSwipeableItemsContainer(<SwipeableItemsContainerPure {...props} />);
    return <>{ element }</>;
};

SwipeableItemsContainer.defaultProps = SwipeableItemsContainerPure.defaultProps;
SwipeableItemsContainer.propTypes = SwipeableItemsContainerPure.propTypes;

export default SwipeableItemsContainer;
export {
    useSwipeableItemsContainer,
    useAbstractSlider
}
