import React, { useEffect, useRef, useState } from "react";
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

const DefaultArrow = ({ side, content, offset, onClick}) => (<div className="storefrontUI__slider__arrow" css={css`
                position: absolute;
                ${offset.css(side)}
                top: 0;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 1;
                transition: opacity .15s;
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

        moveTo: (...args) => slider.moveTo(...args),
        moveToNext: (...args) => slider.moveRight(...args),
        moveToPrev: (...args) => slider.moveLeft(...args),
        moveToSlide: (...args) => slider.moveToSlide(...args),
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


function useSwipeableItemsContainer() {
    const handler = useRef(null);

    const sliderApplyState = (state) => {
        handler.current.containerRef.current.style.transform = `translate3d(${
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

    useEffect(() => {
        if (!handler.current.connected) {
            throw new Error("useSwiper hook is not connected to any SwipeableItemsContainer");
        }

        let { leftOffsetRef, rightOffsetRef, wrapperRef, containerRef, itemRefs, props } = handler.current;

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

        sliderApplyState(abstractSlider._getSlider().state);

        let touchSpace = new TouchSpace(abstractSlider._getSlider(), wrapperRef.current);
        touchSpace.enable();

        console.log('useEffect');
        return () => {
            containerRef.current.style.transform = "none";
            touchSpace.disable();
            abstractSlider._getSlider().destroy();
            console.log('useEffect destroy');
        }

    }, []);

    return {
        ...abstractSlider,
        handler
    };
}

const SwipeableItemsContainer = React.memo((props) => {

    const refs = useRef({
        leftOffsetRef: React.createRef(),
        rightOffsetRef: React.createRef(),
        wrapperRef: React.createRef(),
        containerRef: React.createRef(),
        itemRefs: [...Array(props.children.length)].map(() => React.createRef()),
    });

    let { leftOffsetRef, rightOffsetRef, wrapperRef, containerRef, itemRefs } = refs.current;

    // Handler for hook!
    let hook = props.connect;
    if (!hook) {
        hook = useSwipeableItemsContainer();
    }

    hook.handler.current = {
        ...refs.current,
        props: props,
        connected: true
    };

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

    return (
        <Root className={props.className} style={props.style} showArrowsOnlyOnHover={props.arrows && props.arrows.showOnlyOnHover}>
            <Wrapper ref={wrapperRef} config={config}>
                <ItemsContainer ref={containerRef} config={config}>
                    {itemsInContainer}
                </ItemsContainer>
            </Wrapper>

            {props.arrows && <DefaultArrow side={"left"} content={props.arrows.left} offset={rs(arrowsOffset[0])} onClick={() => { hook.moveToPrev() }} />}
            {props.arrows && <DefaultArrow side={"right"} content={props.arrows.right} offset={rs(arrowsOffset[1])} onClick={() => { hook.moveToNext() }}/>}
        </Root>
    );
}, () => true);



// class SwipeableItemsContainer extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.wrapperRef = React.createRef();
//         this.containerRef = React.createRef();
//         this.inputRefs = [];
//         for (let i = 0; i < props.children.length; i++) {
//             this.inputRefs.push(React.createRef());
//         }
//
//         this.leftOffsetRef = React.createRef();
//         this.rightOffsetRef = React.createRef();
//
//         this.state = {
//             active: 0
//         }
//     }
//
//     sliderGetConfig() {
//         // Let's create
//         let sizes = [];
//         let margins = [];
//
//         let config = {
//             containerSize: this.wrapperRef.current.clientWidth,
//             count: this.props.children.length,
//             leftOffset: this.leftOffsetRef.current.clientWidth,
//             rightOffset: this.rightOffsetRef.current.clientWidth,
//             slideSize: null
//         };
//
//         let previousRightEdge = 0;
//
//         this.inputRefs.forEach((inputRef, index) => {
//             let offset = inputRef.current.offsetLeft;
//             let size = inputRef.current.clientWidth;
//
//             sizes.push(size);
//
//             if (index > 0) {
//                 margins.push(offset - previousRightEdge);
//             }
//
//             previousRightEdge = offset + size;
//         });
//
//         margins.push(0);
//
//         config.slideSize = n => sizes[n];
//         config.slideMargin = n => margins[n];
//
//         if (this.props.snap === 'center') {
//             config.slideSnapOffset = (n) => (config.containerSize - sizes[n]) / 2;
//         }
//         else {
//             config.slideSnapOffset = () => config.leftOffset;
//         }
//
//         return config;
//     }
//
//     sliderApplyState() {
//         this.containerRef.current.style.transform = `translate3d(${
//             this.slider.state.slides[0].coord - this.leftOffset
//         }px, 0, 0)`;
//     }
//
//     sliderInit() {
//         let config = this.sliderGetConfig();
//
//         this.leftOffset = config.leftOffset;
//
//         this.slider = new AbstractSlider(config);
//
//         this.touchSpace = new TouchSpace(this.slider, this.wrapperRef.current);
//         this.touchSpace.enable();
//
//         let raf;
//         this.slider.addEventListener("move", () => {
//             cancelAnimationFrame(raf);
//             raf = requestAnimationFrame(() => {
//                 this.sliderApplyState();
//             });
//         });
//
//         this.slider.addEventListener("activeSlidesChange", () => {
//             let active = this.slider.state.slides.findIndex(s => s.active);
//             if (this.props.onActiveChange) { this.props.onActiveChange(active) }
//             if (this._onActiveChange) { this._onActiveChange(active) }
//         });
//
//         this.sliderApplyState();
//     }
//
//     sliderUpdate() {
//         this.containerRef.current.style.transform = "none";
//         this.slider.applyConfig(this.sliderGetConfig());
//         this.sliderApplyState();
//     }
//
//     sliderDeinit() {
//         if (this.slider) {
//             this.containerRef.current.style.transform = "none";
//             this.touchSpace.disable();
//             this.slider.destroy();
//             this.slider = undefined;
//         }
//     }
//
//     componentDidMount() {
//         if (this.props.swiper === true) {
//             this.sliderInit();
//         }
//     }
//
//     componentWillUnmount() {
//         window.removeEventListener("resize", this.resizeListener);
//         this.sliderDeinit();
//     }
//
//     render() {
//         let props = this.props;
//
//         let config = {
//             mode: props.mode || "horizontal",
//             itemSize: rs(props.itemSize || 0),
//             offsetBefore: rs(props.offsetBefore || 0),
//             offsetAfter: rs(props.offsetAfter || 0),
//             gutter: rs(props.gutter || 0),
//             amount: this.props.children.length,
//             items: this.props.children,
//             overflowAlwaysHidden: props.swiper === true
//         };
//
//         if (props.itemSize) {
//             // config.containerWidth = config.gutter
//             //     .multiply(config.amount - 1)
//             //     .add(config.itemSize.multiply(config.amount))
//             //     .add(config.offsetBefore)
//             //     .add(config.offsetAfter);
//
//             // config.itemSize = props.itemSize;
//
//         } else if (props.itemAspectRatio) {
//             // this can work only in Javascript. No way for height ot be set anyhow in CSS and for us to keep
//             // photo widths, unless in vertical mode
//         } else if (props.itemsVisible) {
//             let itemsVisibleMap = new RangeMap(props.itemsVisible);
//
//             let multiplier = {};
//             itemsVisibleMap.forEach((itemsVisible, range) => {
//                multiplier[range.from] = (itemsVisible - 1) / itemsVisible;
//             });
//
//             let base = rs('100%');
//             if (!this.props.itemsVisibleIncludeMargins) {
//                 base = base.subtract(config.offsetBefore).subtract(config.offsetAfter);
//             }
//
//             config.itemSize = base.divide(itemsVisibleMap).subtract(config.gutter.multiply(multiplier));
//
//         } else {
//             throw new Error(
//                 "FixedWidthItemsContainer: slider and slider-vertical modes require itemSize or itemsVisible parameter"
//             );
//         }
//
//         let itemsInContainer = [];
//
//         // left offset
//         itemsInContainer.push(<div key='spacer-before' ref={this.leftOffsetRef} css={css`
//             ${config.offsetBefore.css('flex-basis')}
//             flex-grow: 0;
//             flex-shrink: 0;
//         `} />);
//
//
//         this.props.children.forEach((item, i) => {
//             itemsInContainer.push(<Item
//                 key={i}
//                 config={config}
//                 ref={this.inputRefs[i]}
//                 size={config.itemSize}
//             >
//                 {item}
//             </Item>);
//
//             // gutter
//             if (i !== this.props.children.length - 1) {
//                 itemsInContainer.push(<div key={`spacer-${i}`} css={css`
//                     ${config.gutter.css('flex-basis')}
//                     flex-grow: 0;
//                     flex-shrink: 0;
//                 `} />);
//             }
//         });
//
//         // right offset
//         itemsInContainer.push(<div key='spacer-after' ref={this.rightOffsetRef} css={css`
//             ${config.offsetAfter.css('flex-basis')}
//             flex-grow: 0;
//             flex-shrink: 0;
//         `} />);
//
//
//         // arrows offset
//         let arrowsOffset = [0, 0];
//         if (this.props.arrows && this.props.arrows.offset) {
//             if (Array.isArray(this.props.arrows.offset)) {
//                 arrowsOffset = [rs(this.props.arrows.offset[0]), rs(this.props.arrows.offset[1])];
//             }
//             else {
//                 arrowsOffset = [this.props.arrows.offset,this.props.arrows.offset];
//             }
//         }
//
//         return (
//             <Root className={this.props.className} style={this.props.style} showArrowsOnlyOnHover={this.props.arrows && this.props.arrows.showOnlyOnHover}>
//                 <Wrapper ref={this.wrapperRef} config={config}>
//                     <ItemsContainer ref={this.containerRef} config={config}>
//                         {itemsInContainer}
//                     </ItemsContainer>
//                 </Wrapper>
//
//                 {this.props.arrows && <DefaultArrow side={"left"} content={this.props.arrows.left} offset={rs(arrowsOffset[0])} onClick={() => { this.slider.moveLeft() }} />}
//                 {this.props.arrows && <DefaultArrow side={"right"} content={this.props.arrows.right} offset={rs(arrowsOffset[1])} onClick={() => { this.slider.moveRight() }}/>}
//             </Root>
//         );
//     }
// }

// function useSwipeableItemsContainer() {
//     const [active, setActiveRaw] = useState(0);
//     const ref = useRef(null);
//
//     const setActive = (n, animated) => {
//         if (ref.current && ref.current.slider) {
//             ref.current.slider.moveToSlide(n, animated);
//         }
//     };
//
//     const setActiveNext = (animated) => {
//         if (ref.current && ref.current.slider) {
//             ref.current.slider.moveLeft(animated);
//         }
//     };
//
//     const setActivePrevious = (animated) => {
//         if (ref.current && ref.current.slider) {
//             ref.current.slider.moveRight(animated);
//         }
//     };
//
//     useEffect(() => {
//         if (ref.current) {
//             ref.current._onActiveChange = setActiveRaw;
//         }
//     });
//
//     return {
//         ref: ref,
//         active: active,
//         setActive: setActive,
//         setActiveNext: setActiveNext,
//         setActivePrevious: setActivePrevious,
//     };
// }

SwipeableItemsContainer.defaultProps = {
    swiper: true,
    itemsVisible: 1,
    snap: "offset",
    itemsVisibleIncludeMargins: false
};

SwipeableItemsContainer.propTypes = {
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

export default SwipeableItemsContainer;
export {
    useSwipeableItemsContainer,
    useAbstractSlider
}
