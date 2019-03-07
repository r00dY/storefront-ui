import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { rs, RangeMap } from "responsive-helpers";
import { TouchSpace, AbstractSlider } from "simpleswiper";

/**
 * TODO: arrows
 *
 */

const simpleVertical = params => ({
    root: `position: relative`,
    wrapper: ``,
    itemsContainer: `
        position: relative;
        display: flex;
        flex-direction: column;
        ${params.offsetBefore.css("padding-top")}
        ${params.offsetBefore.css("padding-bottom")}
    `,
    item: (isFirst, isLast, isPlaceholder) => `
        ${params.gutter.css("margin-bottom")}
        &:last-child {
            margin-bottom: 0;
        }
        
        ${isPlaceholder ? "display: none;" : ""}
    `,
    placeholder: params.showPlaceholders ? "" : "display: none;"
});

function slider(mode, overflowAlwaysHidden) {
    overflowAlwaysHidden = overflowAlwaysHidden || false;

    let paddingStart = mode === "horizontal" ? "padding-left" : "padding-top";
    let paddingEnd = mode === "horizontal" ? "padding-right" : "padding-bottom";
    let flexDirection = mode === "horizontal" ? "row" : "column";
    let size = mode === "horizontal" ? "width" : "height";

    // mode horizontal
    let overflowStyles;

    if (overflowAlwaysHidden) {
        overflowStyles = `
            overflow-y: hidden;
            overflow-x: hidden;
        `;
    } else if (mode === "horizontal") {
        overflowStyles = `
            overflow-y: hidden;
            overflow-x: auto;
        `;
    } else if (mode === "vertical") {
        overflowStyles = `
            overflow-y: auto;
            overflow-x: hidden;
        `;
    }

    return params => {
        return {
            wrapper: `
                ${mode === "vertical" ? "width: 100%;" : ""}
                position: relative;
                ${rs("100%")
                    .add(params.gutter)
                    .css(size)}
                ${overflowStyles}
                ::-webkit-scrollbar {
                    display: none;
                }
                text-align: center;
            `,
            root: `
                overflow: hidden;
            `,

            itemsContainer: `
                ${mode === "vertical" ? "width: 100%;" : ""}
                position: relative;
                display: inline-flex;
                padding: 0;
                margin: 0;
                vertical-align: bottom;
                flex-direction: ${flexDirection};
                ${params.containerWidth.css(size)}
    
                margin-top: 0;
                margin-bottom: 0;
            `,

            item: (isFirst, isLast, isPlaceholder) => {
                let before = isFirst ? params.offsetBefore : rs(0);
                let after = isLast
                    ? params.gutter.add(params.offsetAfter)
                    : params.gutter;

                return `
                ${mode === "vertical" ? "width: 100%;" : ""}
                position: relative;
                box-sizing: content-box;
                flex-grow: 1;
                ${before.css(paddingStart)}
                ${after.css(paddingEnd)}
                
                ${isPlaceholder ? "display: none;" : ""}
            `;
            },
            placeholder: params.showPlaceholders ? "" : "display: none;"
        };
    };
}

// const sliderVertical = slider("vertical");
// const sliderHorizontal = slider("horizontal");

const grid = params => ({
    root: `
        position: relative;
    `,
    wrapper: `
        position: relative;
        ${params.offsetBefore.css("padding-left")}
        ${params.offsetAfter.css("padding-right")}
    `,
    itemsContainer: `
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        ${params.gutter.divide(-2).css("margin-left")}
        ${params.gutter.divide(-2).css("margin-right")}
    `,
    item: (isFirst, isLast, isPlaceholder) => `
        flex-grow: 1;
        flex-shrink: 0;
        ${params.itemSize.css("flex-basis")}
        
        ${params.gutter.divide(2).css("padding-left")}
        ${params.gutter.divide(2).css("padding-right")}
        
        ${!params.showPlaceholders && isPlaceholder ? "display: none;" : ""}
    `
});

const styles = {};
styles["simple-vertical"] = simpleVertical;
styles["slider"] = slider("horizontal");
styles["slider-vertical"] = slider("vertical");
styles["slider-transform"] = slider("horizontal", true);
styles["grid"] = grid;

const Root = styled.div`
    ${props => props.rangeMap.css(config => config.styles.root)}
`;

const Wrapper = styled.div`
    ${props => props.rangeMap.css(config => config.styles.wrapper)}
`;

const ItemsContainer = styled.div`
    ${props => props.rangeMap.css(config => config.styles.itemsContainer)}
`;

const Item = styled.div`
    ${props =>
        props.rangeMap.css(config =>
            config.styles.item(props.isFirst, props.isLast, props.isPlaceholder)
        )}
`;

// ${props => `flex-grow: ${props.flexGrow};`}

class FixedWidthItemsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.containerRef = React.createRef();
        this.inputRefs = [];
        for (let i = 0; i < props.items.length; i++) {
            this.inputRefs.push(React.createRef());
        }

        this._createRangeMapFromProps();
    }

    _createRangeMapFromProps() {
        // Convert config to rangeMap
        let rangeMap;

        // trivial detection if rangeMap or
        if (this.props.config instanceof RangeMap) {
            rangeMap = this.props.config;
        } else if (typeof this.props.config === "object") {
            rangeMap = new RangeMap({
                0: this.props.config
            });
        } else {
            throw new Error(
                "FixedWidthItemsContainer: bad input config property"
            );
        }

        rangeMap.forEach((config, range) => {
            let params = {
                itemSize: rs(config.itemSize || 0),
                offsetBefore: rs(config.offsetBefore || 0),
                offsetAfter: rs(config.offsetAfter || 0),
                gutter: rs(config.gutter || 0),
                amount: this.props.items.length,
                flexGrow: 0,
                items: this.props.items,
                showPlaceholders: false
            };

            switch (config.mode) {
                case "simple-vertical":
                    if (!config.itemSize) {
                        throw new Error(
                            "FixedWidthItemsContainer: simple-vertical mode requires itemSize parameter"
                        );
                    }
                    break;

                case "slider":
                case "slider-vertical":
                case "slider-transform":
                    if (config.itemSize) {
                        params.containerWidth = params.gutter
                            .multiply(params.amount - 1)
                            .add(params.itemSize.multiply(params.amount))
                            .add(params.offsetBefore)
                            .add(params.offsetAfter);
                    } else if (config.itemAspectRatio) {
                        // this can work only in Javascript. No way for height ot be set anyhow in CSS and for us to keep
                        // photo widths
                    } else if (config.itemsInRow) {
                        params.containerWidth = rs(
                            `${(params.amount / config.itemsInRow) * 100}%`
                        )
                            .add(params.offsetBefore)
                            .add(params.offsetAfter);
                    } else {
                        throw new Error(
                            "FixedWidthItemsContainer: slider and slider-vertical modes require itemSize or itemsInRow parameter"
                        );
                    }

                    break;

                case "grid":
                    if (config.itemsInRow) {
                        params.itemSize = rs(`${100 / config.itemsInRow}%`);
                    } else if (config.itemMinSize) {
                        params.itemSize = rs(config.itemMinSize);
                        params.flexGrow = 1;
                        params.showPlaceholders = true;
                    } else {
                        throw new Error(
                            "FixedWidthItemsContainer: grid mode require itemsInRow or itemMinSize"
                        );
                    }

                    // config.styles = grid;
                    break;

                default:
                    throw new Error(
                        `FixedWidthItemsContainer: unknown mode: ${config.mode}`
                    );
                    break;
            }

            config.styles = styles[config.mode](params);
        });

        this.rangeMap = rangeMap;
    }

    sliderGetConfig() {
        // Let's create
        let sizes = [];
        let margins = [];

        let config = {
            containerSize: this.wrapperRef.current.clientWidth,
            count: this.props.items.length,
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
        console.log("slider init");
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
        let toggleSlider = () => {
            if (this.slider) {
                if (this.rangeMap.current.mode === "slider-transform") {
                    this.sliderUpdate();
                } else {
                    this.sliderDeinit();
                }
            } else {
                if (this.rangeMap.current.mode === "slider-transform") {
                    this.sliderInit();
                } else {
                    // nothing. It wasn't slider and still isn't.
                }
            }
        };

        this.resizeListener = window.addEventListener("resize", toggleSlider);

        toggleSlider();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeListener);
        this.sliderDeinit();
    }

    render() {
        return (
            <Root rangeMap={this.rangeMap}>
                <Wrapper rangeMap={this.rangeMap} ref={this.wrapperRef}>
                    <ItemsContainer
                        rangeMap={this.rangeMap}
                        ref={this.containerRef}
                    >
                        {this.props.items.map((item, i) => {
                            return (
                                <Item
                                    rangeMap={this.rangeMap}
                                    isFirst={i === 0}
                                    isLast={i === this.props.items.length - 1}
                                    key={i}
                                    isPlaceholder={false}
                                    ref={this.inputRefs[i]}
                                >
                                    {item}
                                </Item>
                            );
                        })}

                        {new Array(10).fill(0).map((item, i) => (
                            <Item
                                rangeMap={this.rangeMap}
                                isFirst={false}
                                isLast={false}
                                isPlaceholder={true}
                                key={this.props.items.length + i}
                            />
                        ))}
                    </ItemsContainer>
                </Wrapper>
            </Root>
        );
    }
}

FixedWidthItemsContainer.propTypes = {
    fit: PropTypes.oneOfType([
        PropTypes.boolean,
        PropTypes.arrayOf(PropTypes.boolean)
    ]),
    items: PropTypes.arrayOf(PropTypes.element).isRequired,
    config: PropTypes.oneOfType([
        PropTypes.instanceOf(RangeMap),
        PropTypes.object
    ]).isRequired
};

export default FixedWidthItemsContainer;
