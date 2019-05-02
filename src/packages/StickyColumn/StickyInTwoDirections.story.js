import React from "react";
import { storiesOf } from "@storybook/react";
import Index from "../Container/Container";
import { Grid, GridItem } from "../Grid/Grid";
import StickyColumn from "./StickyInTwoDirections";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

class VariableHeightColumn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: props.height
        };
    }

    handleHeightChange(delta) {
        this.setState({
            height: Math.max(0, this.state.height + delta)
        });
    }

    render() {
        return (
            <div
                css={css`
                    position: relative;
                    border: 3px solid ${this.props.color};
                    width: 100%;
                    height: ${this.state.height}px;
                    overflow: hidden;
                    transition: height 0.5s ease-out;
                `}
            >
                <div
                    css={css`
                        position: absolute;
                        width: 100%;
                        top: 0;
                        left: 0;
                    `}
                >
                    {[...Array(500)].map((e, i) => {
                        return (
                            <span key={i}>
                                {i}
                                <br />
                                {i % 10 === 0 && (
                                    <div>
                                        <button
                                            onClick={() => {
                                                this.handleHeightChange(300);
                                            }}
                                        >
                                            +300
                                        </button>
                                        <br />
                                        <button
                                            onClick={() => {
                                                this.handleHeightChange(-300);
                                            }}
                                        >
                                            -300
                                        </button>
                                        <br />
                                    </div>
                                )}
                            </span>
                        );
                    })}
                </div>
            </div>
        );
    }
}

storiesOf("StickyInTwoDirections", module).add("default", () => (
    <div>
        <Index>
            <div
                css={css`
                    margin: 24px 0;
                `}
            >
                {[...Array(20)].map((e, i) => {
                    return (
                        <span key={i}>
                            {i}
                            <br />
                        </span>
                    );
                })}
            </div>
        </Index>

        <Index>
            <Grid>
                <GridItem
                    params={{
                        xs: 24,
                        lg: 12
                    }}
                >
                    <VariableHeightColumn color={"blue"} height={8000} />
                </GridItem>
                <GridItem
                    params={{
                        xs: [24, 0, -1],
                        lg: 3
                    }}
                >
                    <StickyColumn
                        css={css`
                            height: 100%;
                        `}
                        offset={[10, 10]}
                    >
                        <VariableHeightColumn color={"green"} height={2000} />
                    </StickyColumn>
                </GridItem>
                <GridItem
                    params={{
                        xs: 0,
                        lg: 3
                    }}
                >
                    <VariableHeightColumn color={"red"} height={1000} />
                </GridItem>

                <GridItem
                    params={{
                        xs: 0,
                        lg: 3
                    }}
                >
                    <VariableHeightColumn color={"orange"} height={400} />
                </GridItem>

                <GridItem
                    params={{
                        xs: [24, 0, 2],
                        lg: 3
                    }}
                >
                    <StickyColumn
                        css={css`
                            height: 100%;
                        `}
                    >
                        <VariableHeightColumn color={"black"} height={400} />
                    </StickyColumn>
                </GridItem>
            </Grid>
        </Index>

        <Index>
            <div
                css={css`
                    margin: 24px 0;
                `}
            >
                {[...Array(250)].map((e, i) => {
                    return (
                        <span key={i}>
                            {i}
                            <br />
                        </span>
                    );
                })}
            </div>
        </Index>
    </div>
));
