import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import styled from "styled-components";

import { stylesToCSS, RangeMap } from "responsive-helpers";
import Ease from "../Ease";

let ModalContentWrapper = styled.div`
    ${props => props.styles}
`;

let ModalContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    transition: ${props => props.styles.transition};
    ${props => props.styles.before}
    .Modal--opened:not(.Modal--before-close) & {
        ${props => props.styles.after}
    }
`;

const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.backgroundColor};
    cursor: pointer;

    transition: ${props => props.styles.transition};
    ${props => props.styles.before}
    .Modal--opened:not(.Modal--before-close) & {
        ${props => props.styles.after}
    }
`;

// TODO: RangeMap as a config! Example: overlay from right on desktop and from bottom on mobile (like PresentationController)
function Overlay(props) {
    // let rangeMap;

    // if (props.config) {
    //     if (props.config instanceof RangeMap) {
    //         rangeMap = props.config;
    //     }
    //     else if (typeof props.config === 'object') {
    //         rangeMap = new RangeMap({
    //             0: props.config
    //         })
    //     }
    //     else {
    //         throw new Error('Overlay: wrong value for "config" property!');
    //     }
    // }
    // else {
    //     throw new Error('Overlay: "config" property not defined!');
    // }
    //

    let config = props.config;
    if (!config) {
        throw new Error('Overlay: "config" property not defined!');
    }

    // backgroundColor

    if (!config.backgroundColor) {
        config.backgroundColor = "rgba(0,0,0,0.1)";
    }

    // position styles

    let positionStyles;

    if (config.positionStyle) {
        positionStyles = { ...config.positionStyle, position: "absolute" };
    } else {
        throw new Error("Overlay: 'positionStyle' must be defined in config");
    }

    let closeTimeout = 0;

    // Modal Content
    let modalStyles = {
        before: "",
        after: "",
        transition: "none"
    };

    if (config.animation && config.animation.content) {
        let anim = config.animation.content;

        anim.time = anim.time || config.animation.time || 0;
        anim.ease = anim.ease || config.animation.ease || "linear";

        if (anim.time > closeTimeout) {
            closeTimeout = anim.time;
        }

        if (anim.styleBefore) {
            modalStyles.before = anim.styleBefore;
        }

        if (anim.styleAfter) {
            modalStyles.after = anim.styleAfter;
        }

        modalStyles.transition = `all ${anim.time}ms ${anim.ease}`;
    }

    // Modal background
    let backgroundStyles = {
        before: "",
        after: "",
        transition: "none"
    };

    if (config.animation && config.animation.background) {
        let anim = config.animation.background;

        anim.time = anim.time || config.animation.time || 0;
        anim.ease = anim.ease || config.animation.ease || "linear";

        if (anim.time > closeTimeout) {
            closeTimeout = anim.time;
        }

        if (anim.styleBefore) {
            backgroundStyles.before = anim.styleBefore;
        }

        if (anim.styleAfter) {
            backgroundStyles.after = anim.styleAfter;
        }

        backgroundStyles.transition = `all ${anim.time}ms ${anim.ease}`;
    }

    // overlay styles

    let overlayCss = {
        position: "fixed",
        zIndex: 10,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: "transparent"
    };

    let modalCss = {};

    if (config.center) {
        modalCss = {
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        };
    }

    return (
        <Modal
            overlayClassName={{
                base: "Overlay",
                afterOpen: `Overlay--opened`,
                beforeClose: `Overlay--before-close`
            }}
            className={{
                base: "Modal",
                afterOpen: `Modal--opened`,
                beforeClose: `Modal--before-close`
            }}
            style={{
                overlay: overlayCss,
                content: modalCss
            }}
            isOpen={props.isOpen}
            closeTimeoutMS={closeTimeout}
            onRequestClose={props.onRequestClose}
            onAfterOpen={props.onAfterOpen}
        >
            <ModalBackground
                backgroundColor={config.backgroundColor}
                onClick={props.onRequestClose}
                styles={backgroundStyles}
                key={"background"}
            />

            <ModalContentWrapper styles={positionStyles}>
                <ModalContent styles={modalStyles}>
                    {props.children}
                </ModalContent>
            </ModalContentWrapper>
        </Modal>
    );
}

const slide = ({ width, height, time, ease }, axis, fromStart) => ({
    positionStyle: {
        top: (axis === "Y" && fromStart) || axis === "X" ? 0 : "auto",
        bottom: axis === "Y" && !fromStart ? 0 : "auto",
        left: (axis === "X" && fromStart) || axis === "Y" ? 0 : "auto",
        right: axis === "X" && !fromStart ? 0 : "auto",

        width: width ? width : "100%",
        height: height ? height : "100%"
    },
    animation: {
        time: time ? time : 350,
        ease: ease ? ease : Ease.expoOut,
        content: {
            styleBefore: {
                transform: `translate${axis}(${fromStart ? "-" : ""}100%)`
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
});

Overlay.slideFromLeft = ({ width, height, time, ease }) =>
    slide({ width, height, time, ease }, "X", true);
Overlay.slideFromRight = ({ width, height, time, ease }) =>
    slide({ width, height, time, ease }, "X", false);
Overlay.slideFromTop = ({ width, height, time, ease }) =>
    slide({ width, height, time, ease }, "Y", true);
Overlay.slideFromBottom = ({ width, height, time, ease }) =>
    slide({ width, height, time, ease }, "Y", false);

Overlay.fadeInCentered = ({ width, height, time, ease }) => ({
    positionStyle: {
        width: width ? width : "100%",
        height: height ? height : "100%"
    },
    center: true,
    animation: {
        time: time ? time : 350,
        ease: ease ? ease : Ease.expoOut,
        content: {
            styleBefore: {
                opacity: 0
            },
            styleAfter: {
                opacity: 1
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
});

Overlay.setAppElement = function(appElement) {
    Modal.setAppElement(appElement);
};

Overlay.propTypes = {
    config: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.instanceOf(RangeMap)
    ]).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]),
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func,
    onAfterOpen: PropTypes.func
};

export default Overlay;
