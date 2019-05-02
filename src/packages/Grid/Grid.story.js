import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid, GridItem } from "./Grid";
import Index from "../Container/Container";
import Layout from "../Layout";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const HalfGutterLine = () => (
    <div
        css={css`
            position: absolute;
            top: 0;
            height: 100%;
            width: 1px;
            background-color: lightgrey;
            ${Layout.main.gutter.divide(-2).css("left")}
        `}
    />
);

const Rectangle = props => (
    <div
        css={css`
            position: relative;
            background-color: ${props.color};
            width: 100%;
            height: 320px;
        `}
    >
        {props.text && (
            <p
                css={css`
                    font-size: 20px;
                    color: white;
                    margin: 0;
                    padding: 0;
                `}
            >
                {props.text}
            </p>
        )}
    </div>
);

storiesOf("Grid", module).add("default", () => (
    <div
        css={css`
            margin: 24px 0;
            overflow-x: hidden;
        `}
    >
        <Index>
            <Grid>
                <GridItem params={{ xs: 12, md: 12, lg: 12 }}>
                    <Rectangle color={"red"} />
                </GridItem>

                <GridItem params={{ xs: 12, md: 12, lg: 12 }}>
                    <div style={{ position: "relative" }}>
                        <Rectangle color={"magenta"} />
                        <HalfGutterLine />
                    </div>
                </GridItem>

                <GridItem
                    params={{
                        xs: 24,
                        md: 12,
                        lg: [6, 0, 2]
                    }}
                >
                    <Rectangle color={"blue"} />
                </GridItem>

                <GridItem
                    params={{
                        xs: 24,
                        md: 12,
                        lg: [12, 6, 1]
                    }}
                >
                    <Rectangle color={"green"} />
                </GridItem>
            </Grid>
        </Index>
    </div>
));

storiesOf("Grid", module).add("non-default grid", () => (
    <div
        css={css`
            margin: 24px 0;
            overflow-x: hidden;
        `}
    >
        <Grid colNumber={5} gutter={0}>
            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"red"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"blue"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"orange"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"yellow"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"magenta"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"cyan"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"black"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"lightgrey"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"coral"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"lightblue"} />
            </GridItem>
        </Grid>
    </div>
));

storiesOf("Grid", module).add("nested grid", () => (
    <div
        css={css`
            margin: 24px 0;
            overflow-x: hidden;
        `}
    >
        <Grid colNumber={5} gutter={20}>
            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"red"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"blue"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"orange"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"yellow"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"magenta"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 1 }}>
                <Rectangle color={"cyan"} />
            </GridItem>

            <GridItem params={{ xs: 5, md: 4 }}>
                <Grid colNumber={4} gutter={20}>
                    <GridItem params={{ xs: 4, md: 1 }}>
                        <Rectangle
                            color={"black"}
                            text={
                                "Look at the code! This item is in a nested grid."
                            }
                        />
                    </GridItem>

                    <GridItem params={{ xs: 4, md: 1 }}>
                        <Rectangle
                            color={"lightgrey"}
                            text={
                                "Look at the code! This item is in a nested grid."
                            }
                        />
                    </GridItem>

                    <GridItem params={{ xs: 4, md: 1 }}>
                        <Rectangle
                            color={"coral"}
                            text={
                                "Look at the code! This item is in a nested grid."
                            }
                        />
                    </GridItem>

                    <GridItem params={{ xs: 4, md: 1 }}>
                        <Rectangle
                            color={"lightblue"}
                            text={
                                "Look at the code! This item is in a nested grid."
                            }
                        />
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    </div>
));
