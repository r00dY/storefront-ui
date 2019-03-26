import React from "react";
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

const Root = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
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

class SwipeableItemsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.containerRef = React.createRef();
        this.inputRefs = [];
        for (let i = 0; i < props.children.length; i++) {
            this.inputRefs.push(React.createRef());
        }

        this.leftOffsetRef = React.createRef();
        this.rightOffsetRef = React.createRef();
    }

    sliderGetConfig() {
        // Let's create
        let sizes = [];
        let margins = [];

        let config = {
            containerSize: this.wrapperRef.current.clientWidth,
            count: this.props.children.length,
            leftOffset: this.leftOffsetRef.current.clientWidth,
            rightOffset: this.rightOffsetRef.current.clientWidth,
            slideSize: null
        };

        let previousRightEdge = 0;

        this.inputRefs.forEach((inputRef, index) => {
            let offset = inputRef.current.offsetLeft;
            let size = inputRef.current.clientWidth;

            // console.log(index, offset, size);

            sizes.push(size);

            if (index > 0) {
                margins.push(offset - previousRightEdge);
            }

            previousRightEdge = offset + size;
        });

        margins.push(0);

        config.slideSize = n => sizes[n];
        config.slideMargin = n => margins[n];

        if (this.props.snap === 'center') {
            config.slideSnapOffset = (n) => (config.containerSize - sizes[n]) / 2;
        }
        else {
            config.slideSnapOffset = () => config.leftOffset;
        }

        return config;
    }

    sliderApplyState() {
        this.containerRef.current.style.transform = `translate3d(${
            this.slider.state.slides[0].coord - this.leftOffset
        }px, 0, 0)`;
    }

    sliderInit() {
        let config = this.sliderGetConfig();

        this.leftOffset = config.leftOffset;

        this.slider = new AbstractSlider(config);

        this.touchSpace = new TouchSpace(this.slider, this.wrapperRef.current);
        this.touchSpace.enable();

        let raf;
        this.slider.addEventListener("move", () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                this.sliderApplyState();
            });
        });

        if (this.props.onActiveChange) {
            this.slider.addEventListener("activeSlidesChange", () => {
                this.props.onActiveChange(
                    this.slider.state.slides.findIndex(s => s.active)
                );
            });
        }

        this.sliderApplyState();
    }

    sliderUpdate() {
        this.containerRef.current.style.transform = "none";
        this.slider.applyConfig(this.sliderGetConfig());
        this.sliderApplyState();
    }

    sliderDeinit() {
        if (this.slider) {
            this.containerRef.current.style.transform = "none";
            this.touchSpace.disable();
            this.slider.destroy();
            this.slider = undefined;
        }
    }

    componentDidMount() {
        if (this.props.swiper === true) {
            this.sliderInit();
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeListener);
        this.sliderDeinit();
    }

    render() {
        let props = this.props;

        let config = {
            mode: props.mode || "horizontal",
            itemSize: rs(props.itemSize || 0),
            offsetBefore: rs(props.offsetBefore || 0),
            offsetAfter: rs(props.offsetAfter || 0),
            gutter: rs(props.gutter || 0),
            amount: this.props.children.length,
            items: this.props.children,
            overflowAlwaysHidden: props.swiper === true
        };

        if (props.itemSize) {
            // config.containerWidth = config.gutter
            //     .multiply(config.amount - 1)
            //     .add(config.itemSize.multiply(config.amount))
            //     .add(config.offsetBefore)
            //     .add(config.offsetAfter);

            // config.itemSize = props.itemSize;

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
            if (!this.props.itemsVisibleIncludeMargins) {
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
        itemsInContainer.push(<div key='spacer-before' ref={this.leftOffsetRef} css={css`
            ${config.offsetBefore.css('flex-basis')}
            flex-grow: 0;
            flex-shrink: 0;
        `} />);


        this.props.children.forEach((item, i) => {
            itemsInContainer.push(<Item
                key={i}
                config={config}
                ref={this.inputRefs[i]}
                size={config.itemSize}
            >
                {item}
            </Item>);

            // gutter
            if (i !== this.props.children.length - 1) {
                itemsInContainer.push(<div key={`spacer-${i}`} css={css`
                    ${config.gutter.css('flex-basis')}
                    flex-grow: 0;
                    flex-shrink: 0;
                `} />);
            }
        });

        // right offset
        itemsInContainer.push(<div key='spacer-after' ref={this.rightOffsetRef} css={css`
            ${config.offsetAfter.css('flex-basis')}
            flex-grow: 0;
            flex-shrink: 0;
        `} />);

        return (
            <Root className={this.props.className} style={this.props.style}>
                <Wrapper ref={this.wrapperRef} config={config}>
                    <ItemsContainer ref={this.containerRef} config={config}>
                        {itemsInContainer}
                    </ItemsContainer>
                </Wrapper>
            </Root>
        );
    }
}

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

    // swiper: PropTypes.bool.isRequired,
    onActiveChange: PropTypes.func
};

export default SwipeableItemsContainer;
