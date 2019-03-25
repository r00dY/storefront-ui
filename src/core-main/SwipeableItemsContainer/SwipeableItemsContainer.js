import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { rs, RangeMap } from "responsive-helpers";
import { TouchSpace, AbstractSlider } from "simpleswiper";

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

    ${props =>
        rs("100%")
            .add(props.config.gutter)
            .css(CSS[props.config.mode].size)}
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
    position: relative;

    width: 100%;
    height: 100%;

    display: inline-flex;
    padding: 0;
    margin: 0;
    vertical-align: bottom;
    ${props => `flex-direction: ${CSS[props.config.mode].flexDirection}`};
    ${props => props.config.containerWidth.css(CSS[props.config.mode].size)}}
`;

const Item = styled.div`
    position: relative;

    width: 100%;
    ${props => (props.config.mode === "horizontal" ? "height: 100%" : "")}

    box-sizing: content-box;
    flex-grow: 1;
    ${props =>
        (props.isFirst ? props.config.offsetBefore : rs(0)).css(
            CSS[props.config.mode].paddingStart
        )}
    ${props =>
        (props.isLast
            ? props.config.gutter.add(props.config.offsetAfter)
            : props.config.gutter
        ).css(CSS[props.config.mode].paddingEnd)}
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
    }

    sliderGetConfig() {
        // Let's create
        let sizes = [];
        let margins = [];

        let config = {
            containerSize: this.wrapperRef.current.clientWidth,
            count: this.props.children.length,
            leftOffset: 0,
            rightOffset: 0,
            slideSize: null
        };

        let previousRightEdge = 0;

        this.inputRefs.forEach((inputRef, index) => {
            let offset = inputRef.current.offsetLeft;
            let size = inputRef.current.clientWidth;

            sizes.push(size);

            if (index === 0) {
                config.leftOffset = offset;
            }

            if (index > 0) {
                margins.push(offset - previousRightEdge);
            }

            previousRightEdge = offset + size;
        });

        margins.push(0);
        config.rightOffset =
            this.containerRef.current.clientWidth - previousRightEdge;
        config.slideSize = n => sizes[n];
        config.marginSize = n => margins[n];

        return config;
    }

    sliderApplyState() {
        this.containerRef.current.style.transform = `translate3d(${
            this.slider.state.slides[0].coord
        }px, 0, 0)`;
    }

    sliderInit() {
        let config = this.sliderGetConfig();

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
            config.containerWidth = config.gutter
                .multiply(config.amount - 1)
                .add(config.itemSize.multiply(config.amount))
                .add(config.offsetBefore)
                .add(config.offsetAfter);
        } else if (props.itemAspectRatio) {
            // this can work only in Javascript. No way for height ot be set anyhow in CSS and for us to keep
            // photo widths, unless in vertical mode
        } else if (props.itemsVisible) {
            let rangeMap = new RangeMap(props.itemsVisible);

            let containerWidth = {};
            rangeMap.forEach((value, range) => { containerWidth[range.from] = `${(config.amount / value) * 100}%`; });

            config.containerWidth = rs(containerWidth)
                .add(config.offsetBefore)
                .add(config.offsetAfter);

        } else {
            throw new Error(
                "FixedWidthItemsContainer: slider and slider-vertical modes require itemSize or itemsVisible parameter"
            );
        }

        return (
            <Root className={this.props.className} style={this.props.style}>
                <Wrapper ref={this.wrapperRef} config={config}>
                    <ItemsContainer ref={this.containerRef} config={config}>
                        {this.props.children.map((item, i) => {
                            return (
                                <Item
                                    isFirst={i === 0}
                                    isLast={i === this.props.children.length - 1}
                                    key={i}
                                    config={config}
                                    ref={this.inputRefs[i]}
                                >
                                    {item}
                                </Item>
                            );
                        })}
                    </ItemsContainer>
                </Wrapper>
            </Root>
        );
    }
}

SwipeableItemsContainer.defaultProps = {
    swiper: true,
    itemsVisible: 1,
    snap: "edge"
};

SwipeableItemsContainer.propTypes = {
    children: PropTypes.any,
    gutter: PropTypes.any,
    itemSize: PropTypes.any,
    snap: PropTypes.oneOf(["edge", "offset", "center"]),

    // swiper: PropTypes.bool.isRequired,
    onActiveChange: PropTypes.func
};

export default SwipeableItemsContainer;
