import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSwipeableItemsContainerEvent } from "../SwipeableItemsContainer/SwipeableItemsContainer";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Color from "../Color";

const getScrollbarParams = (instance) => {
    let width = 0;
    let start = 0;

    if (instance) {
        width = instance.state.containerSize / instance.state.slideableWidth;
        start = -instance.state.slides[0].coord / instance.state.slideableWidth;
    }

    return { width, start };
}

function ScrollBar(props) {
    const instance = props.swipeableItemsContainer.instance;

    // let _width = props.width;
    // let _start = props.start % 1;
    // let _secondProgressWidth = 0;
    //
    // let sum = _start + _width;
    //
    // if (sum > 1 && props.infinite) {
    //     _secondProgressWidth = sum % 1;
    // }

    let _barStyle = `
        height: 100%;
        background: ${props.backgroundColor.css};
        border-radius: 2px;
    `;

    let { width, start } = getScrollbarParams(instance);

    /**
     *
     * Updating without rerenders.
     *
     **/
    const bar = useRef(null);

    const onMove = () => {
        if (bar.current && instance) {
            let { start } = getScrollbarParams(instance);
            bar.current.style.transform = `translateX(${start / width * 100}%)`;
        }
    };

    useSwipeableItemsContainerEvent(props.swipeableItemsContainer, 'move', onMove);

    return (
        <div className={props.className} style={props.style}>
            <div
                css={css`
                    width: 100%;
                    height: ${props.height}px;
                    background: ${props.trackColor.css};
                    position: relative;
                    overflow: hidden;
                `}
            >
                <div ref={bar}
                    css={css`
                        width: ${width * 100}%;
                        transform: translateX(${start / width * 100}%);
                        ${_barStyle}
                    `}
                />

                {/*<div*/}
                    {/*css={css`*/}
                        {/*width: ${_secondProgressWidth * 100}%;*/}
                        {/*left: 0;*/}
                        {/*${_barStyle}*/}
                    {/*`}*/}
                {/*/>*/}
            </div>
        </div>
    );
}

ScrollBar.defaultProps = {
    trackColor: new Color("lightgrey"),
    backgroundColor: new Color("black"),
    height: 2
    // infinite: false
};

// ScrollBar.propTypes = {
//     start: PropTypes.number.isRequired,
//     width: PropTypes.number.isRequired,
//     trackColor: PropTypes.instanceOf(Color),
//     backgroundColor: PropTypes.instanceOf(Color),
//     height: PropTypes.number,
//     infinite: PropTypes.bool
// };

export default ScrollBar;
