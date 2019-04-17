import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import Color from "../Color";

function ScrollBar(props) {
    let _width = props.width;
    let _start = props.start % 1;
    let _secondProgressWidth = 0;

    let sum = _start + _width;

    if (sum > 1 && props.infinite) {
        _secondProgressWidth = sum % 1;
    }

    let _barStyle = `
        position: absolute;
        height: 100%;
        background: ${props.backgroundColor.css};
        border-radius: 2px;
    `;

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
                <div
                    css={css`
                        width: ${_width * 100}%;
                        left: ${_start * 100}%;
                        ${_barStyle}
                    `}
                />

                <div
                    css={css`
                        width: ${_secondProgressWidth * 100}%;
                        left: 0;
                        ${_barStyle}
                    `}
                />
            </div>
        </div>
    );
}

ScrollBar.defaultProps = {
    trackColor: new Color("lightgrey"),
    backgroundColor: new Color("black"),
    height: 2,
    infinite: false
};

ScrollBar.propTypes = {
    start: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    trackColor: PropTypes.instanceOf(Color),
    backgroundColor: PropTypes.instanceOf(Color),
    height: PropTypes.number,
    infinite: PropTypes.bool
};

export default ScrollBar;
