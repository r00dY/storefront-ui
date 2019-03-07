import React from "react";
import { storiesOf } from "@storybook/react";
import Container from "../../core-main/Container/Container";
import Overlay from "./Overlay";
import styled from "styled-components";
import Ease from "../Ease";

const Button = styled.button`
    padding: 5px 15px;
    border: 1px solid black;
    font-size: 14px;

    &:hover {
        opacity: 0.8;
    }
`;

const OverlayContent = styled.div`
    position: absolute;
    background-color: lightgoldenrodyellow;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
`;

const Paragraph = styled.p`
    margin-bottom: 1em;
`;

class OverlayTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpened: false
        };
    }

    componentDidMount() {
        Overlay.setAppElement("#overlaysContainer");
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: "20px" }}>
                    <Button onClick={() => this.setState({ isOpened: true })}>
                        Open
                    </Button>

                    <Overlay
                        isOpen={this.state.isOpened}
                        {...this.props}
                        onRequestClose={() =>
                            this.setState({ isOpened: false })
                        }
                    >
                        <OverlayContent>
                            <Paragraph>Hello world</Paragraph>
                            <Button
                                onClick={() =>
                                    this.setState({ isOpened: false })
                                }
                            >
                                Close overlay
                            </Button>
                        </OverlayContent>
                    </Overlay>
                </div>
            </div>
        );
    }
}

storiesOf("Overlay", module).add("default", () => (
    <div>
        <div id={"overlaysContainer"} />

        <Container style={{ marginTop: "100px" }}>
            <Paragraph>Overlay positioned absolutely</Paragraph>

            {
                <OverlayTest
                    config={{
                        positionStyle: {
                            top: 0,
                            right: 0,
                            width: "500px",
                            height: "100%"
                        },
                        animation: {
                            time: 350,
                            ease: Ease.expoOut,
                            content: {
                                styleBefore: {
                                    transform: "translateX(100%)"
                                },
                                styleAfter: {
                                    transform: "none"
                                }
                            },
                            background: {
                                styleBefore: {
                                    opacity: 0
                                },
                                styleAfter: {
                                    opacity: 1
                                }
                            }
                        }
                    }}
                />
            }

            <Paragraph>Overlay centered</Paragraph>

            {
                <OverlayTest
                    config={{
                        positionStyle: {
                            width: "50%",
                            height: "50%"
                        },
                        center: true,
                        animation: {
                            ease: Ease.expoOut,
                            time: 350,
                            content: {
                                styleBefore: {
                                    opacity: 0,
                                    transform: "scale(0.95)"
                                },
                                styleAfter: {
                                    opacity: 1,
                                    transform: "none"
                                }
                            },
                            background: {
                                styleBefore: {
                                    opacity: 0
                                },
                                styleAfter: {
                                    opacity: 1
                                }
                            }
                        }
                    }}
                />
            }

            <Paragraph>Overlay from bottom</Paragraph>

            {
                <OverlayTest
                    config={{
                        positionStyle: {
                            left: 0,
                            bottom: 0,
                            width: "100%",
                            height: "30%"
                        },
                        animation: {
                            time: 350,
                            ease: Ease.expoOut,
                            content: {
                                styleBefore: {
                                    transform: "translateY(100%)"
                                },
                                styleAfter: {
                                    transform: "none"
                                }
                            },
                            background: {
                                styleBefore: {
                                    opacity: 0
                                },
                                styleAfter: {
                                    opacity: 1
                                }
                            }
                        }
                    }}
                />
            }
        </Container>
    </div>
));

storiesOf("Overlay", module).add("presets", () => (
    <div>
        <div id={"overlaysContainer"} />

        <Container style={{ marginTop: "100px" }}>
            <Paragraph>slide from right</Paragraph>

            {
                <OverlayTest
                    config={Overlay.slideFromRight({ width: "30%", time: 600 })}
                />
            }

            <Paragraph>slide from left</Paragraph>

            {
                <OverlayTest
                    config={Overlay.slideFromLeft({ width: "30%", time: 600 })}
                />
            }

            <Paragraph>slide from top</Paragraph>

            {
                <OverlayTest
                    config={Overlay.slideFromTop({ height: "30%", time: 600 })}
                />
            }

            <Paragraph>slide from bottom</Paragraph>

            {
                <OverlayTest
                    config={Overlay.slideFromBottom({
                        height: "30%",
                        time: 600
                    })}
                />
            }

            <Paragraph>fade in centered</Paragraph>

            {
                <OverlayTest
                    config={Overlay.fadeInCentered({
                        width: "30%",
                        height: "30%",
                        time: 600
                    })}
                />
            }
        </Container>
    </div>
));
