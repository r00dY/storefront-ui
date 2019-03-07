import React from "react";
import { storiesOf } from "@storybook/react";
import FixedWidthItemsContainer from "./FixedWidthItemsContainer";
import { Container } from "../Layout/Components";
import styled from "styled-components";
import { Layout, RangeMap, rslin } from "responsive-helpers";

const Box = styled.div`
    position: relative;
    width: 100%;
    background-color: ${props => props.background};
    height: 200px;
`;

const items = [
    <Box background={"black"} />,
    <Box background={"blue"} />,
    <Box background={"red"} />,
    <Box background={"yellow"} />,
    <Box background={"orange"} />,
    <Box background={"green"} />,
    <Box background={"black"} />,
    <Box background={"blue"} />,
    <Box background={"red"} />,
    <Box background={"yellow"} />,
    <Box background={"orange"} />,
    <Box background={"green"} />
];

const items2 = [<Box background={"black"} />, <Box background={"blue"} />];

const items27 = [
    <Box background={"black"} />,
    <Box background={"blue"} />,
    <Box background={"red"} />,
    <Box background={"yellow"} />,
    <Box background={"orange"} />,
    <Box background={"green"} />,
    <Box background={"black"} />,
    <Box background={"blue"} />,
    <Box background={"red"} />,
    <Box background={"yellow"} />,
    <Box background={"orange"} />,
    <Box background={"green"} />,
    <Box background={"black"} />,
    <Box background={"blue"} />,
    <Box background={"red"} />,
    <Box background={"yellow"} />,
    <Box background={"orange"} />,
    <Box background={"green"} />,
    <Box background={"black"} />,
    <Box background={"blue"} />,
    <Box background={"red"} />,
    <Box background={"yellow"} />,
    <Box background={"orange"} />,
    <Box background={"green"} />,
    <Box background={"black"} />,
    <Box background={"blue"} />,
    <Box background={"red"} />
];

const Test = styled.div`
    background-color: red;

    @media screen and (min-width: 600px) {
        background-color: blue;

        @media screen and (min-width: 1200px) {
            background-color: yellow;
        }
    }
`;

storiesOf("FixedWidthItemsContainer", module).add(
    "vertical simple mode",
    () => (
        <Container>
            <br />
            <h2>Vertical</h2>
            <br />
            <FixedWidthItemsContainer
                style={{ border: "1px solid lightgrey", width: "200px" }}
                items={items}
                config={{
                    mode: "simple-vertical",
                    gutter: rslin(10, 50),
                    itemSize: "150px",
                    offsetBefore: rslin(10, 50),
                    offsetAfter: rslin(10, 50)
                }}
            />
        </Container>
    )
);

storiesOf("FixedWidthItemsContainer", module).add("slider mode", () => (
    <Container>
        <br />
        <h2>Slider horizontal (itemSize)</h2>
        <br />
        <FixedWidthItemsContainer
            style={{ border: "1px solid lightgrey", width: "100%" }}
            items={items}
            config={{
                mode: "slider",
                gutter: rslin(10, 50),
                itemSize: Layout.main.cols(5),
                offsetBefore: rslin(10, 50),
                offsetAfter: rslin(10, 50)
            }}
        />
        <br />
        <h2>Slider horizontal (itemsVisible)</h2>
        <br />
        <FixedWidthItemsContainer
            style={{ border: "1px solid lightgrey", width: "100%" }}
            items={items}
            config={{
                mode: "slider",
                gutter: rslin(10, 50),
                itemsInRow: 3
            }}
        />
        <br />
        <h2>Slider horizontal (itemsVisible + offsets)</h2>
        <br />
        <FixedWidthItemsContainer
            style={{ border: "1px solid lightgrey", width: "100%" }}
            items={items}
            config={{
                mode: "slider",
                gutter: rslin(10, 50),
                itemsInRow: 3,
                offsetBefore: rslin(10, 50),
                offsetAfter: rslin(10, 50)
            }}
        />
        <br />
        <h2>Slider horizontal (new test)</h2>
        <br />
        <FixedWidthItemsContainer
            style={{ border: "1px solid lightgrey", width: "100%" }}
            items={[...items2, ...items2]}
            config={{
                mode: "slider",
                gutter: 0,
                itemSize: "200px",
                offsetBefore: 200,
                offsetAfter: 200
            }}
        />
        <br />

        <h2>Slider vertical</h2>
        <br />
        <FixedWidthItemsContainer
            style={styled.div`
                top: 0;
                left: 0;
            `}
            styleContainer={styled.div`
                top: 0;
                left: 0;
            `}
            fit={true / false}
            style={{
                border: "1px solid lightgrey",
                width: "200px",
                height: "800px"
            }}
            items={items}
            config={{
                mode: "slider-vertical",
                gutter: rslin(10, 50),
                itemSize: rslin(100, 200),
                offsetBefore: rslin(10, 50),
                offsetAfter: rslin(10, 50)
            }}
        />
        <br />

        <h2>Slider vertical (itemsVisible)</h2>
        <br />
        <FixedWidthItemsContainer
            style={{
                border: "1px solid lightgrey",
                width: "200px",
                height: "600px"
            }}
            items={items}
            config={{
                mode: "slider-vertical",
                itemsInRow: 3
            }}
        />

        <br />
        <h2>
            Slider horizontal with transforms (simple swiper) + itemsVisible
        </h2>
        <br />
        <FixedWidthItemsContainer
            style={{ border: "1px solid lightgrey", width: "100%" }}
            items={items}
            config={{
                mode: "slider-transform",
                gutter: 20,
                itemsInRow: 2,
                offsetBefore: 100,
                offsetAfter: 100
            }}
            test={true}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </Container>
));

storiesOf("FixedWidthItemsContainer", module).add("grid mode", () => (
    <Container>
        <br />
        <h2>Grid mode</h2>
        <br />
        <FixedWidthItemsContainer
            style={{ border: "1px solid lightgrey", width: "100%" }}
            items={items}
            config={{
                mode: "grid",
                gutter: Layout.main.gutter,
                itemsInRow: 4,
                offsetBefore: 0,
                offsetAfter: 0
            }}
        />
        <br />
        <h2>Grid mode (with offsets)</h2>
        <br />
        <FixedWidthItemsContainer
            style={{ border: "1px solid lightgrey", width: "100%" }}
            items={items}
            config={{
                mode: "grid",
                gutter: Layout.main.gutter,
                itemsInRow: 4,
                offsetBefore: rslin(10, 50),
                offsetAfter: rslin(10, 50)
            }}
        />
        <br />
        <h2>Grid mode (max size)</h2>
        <br />
        <FixedWidthItemsContainer
            style={{ border: "1px solid lightgrey", width: "100%" }}
            items={items27}
            config={{
                mode: "grid",
                gutter: Layout.main.gutter,
                itemMinSize: 180,
                offsetBefore: 0,
                offsetAfter: 0
            }}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </Container>
));

storiesOf("FixedWidthItemsContainer", module).add("mixed mode", () => (
    <div>
        <Container>
            <br />
            <h2>Grid 4 lg, Grid 3 md, Slider xs</h2>
            <br />
        </Container>

        <FixedWidthItemsContainer
            style={{ border: "1px solid lightgrey", width: "100%" }}
            items={items}
            config={
                new RangeMap({
                    xs: {
                        mode: "slider",
                        gutter: Layout.main.gutter,
                        itemSize: Layout.main.cols(24),
                        offsetBefore: Layout.main.margin,
                        offsetAfter: Layout.main.margin
                    },
                    sm: {
                        mode: "slider",
                        gutter: Layout.main.gutter,
                        itemSize: Layout.main.cols(16),
                        offsetBefore: Layout.main.margin,
                        offsetAfter: Layout.main.margin
                    },
                    md: {
                        mode: "slider-transform",
                        gutter: Layout.main.gutter,
                        itemSize: Layout.main.cols(12),
                        offsetBefore: Layout.main.margin,
                        offsetAfter: Layout.main.margin
                    },
                    lg: {
                        mode: "grid",
                        gutter: Layout.main.gutter,
                        itemsInRow: 3,
                        offsetBefore: Layout.main.margin,
                        offsetAfter: Layout.main.margin
                    },
                    xl: {
                        mode: "grid",
                        gutter: Layout.main.gutter,
                        itemsInRow: 4,
                        offsetBefore: Layout.main.margin,
                        offsetAfter: Layout.main.margin
                    }
                })
            }
        />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
));

/**
 * TEST
 */
storiesOf("FixedWidthItemsContainer", module).add(
    "mixed mode with swiper-modules",
    () => {
        const testRef = useRef();

        // We need only one instance of these!
        let {
            arrowsEnabled,
            leftArrowActive,
            rightArrowActive,
            leftArrowClicked,
            rightArrowClicked
        } = useSwiperArrows(testRef);
        let { dotsEnabled, dotActive /* array */, dotClicked } = useSwiperDots(
            testRef,
            itemsNum
        );
        let { counterEnabled, activeNum } = useSwiperCounter(testRef, itemsNum);

        // Enabled flags will be true when slider is enabled, and false when it's disabled
        return (
            <div>
                <Container>
                    <br />
                    <h2>Grid 4 lg, Grid 3 md, Slider xs</h2>
                    <br />
                </Container>

                <FixedWidthItemsContainer
                    ref={testRef}
                    style={{ border: "1px solid lightgrey", width: "100%" }}
                    items={items}
                    config={
                        new RangeMap({
                            xs: {
                                mode: "slider",
                                gutter: Layout.main.gutter,
                                itemSize: Layout.main.cols(24),
                                offsetBefore: Layout.main.margin,
                                offsetAfter: Layout.main.margin
                                // snapPoints: "sth...",
                            },
                            sm: {
                                mode: "slider",
                                gutter: Layout.main.gutter,
                                itemSize: Layout.main.cols(16),
                                offsetBefore: Layout.main.margin,
                                offsetAfter: Layout.main.margin
                            },
                            md: {
                                mode: "slider",
                                gutter: Layout.main.gutter,
                                itemSize: Layout.main.cols(12),
                                offsetBefore: Layout.main.margin,
                                offsetAfter: Layout.main.margin
                            },
                            lg: {
                                mode: "grid",
                                gutter: Layout.main.gutter,
                                itemsInRow: 3,
                                offsetBefore: Layout.main.margin,
                                offsetAfter: Layout.main.margin
                            },
                            xl: {
                                mode: "grid",
                                gutter: Layout.main.gutter,
                                itemsInRow: 4,
                                offsetBefore: Layout.main.margin,
                                offsetAfter: Layout.main.margin
                            }
                        })
                    }
                />

                <div className={"arrow-left"} onClick={leftArrowClicked} />
                <div className={"arrow-right"} onClick={rightArrowClicked} />

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
);
