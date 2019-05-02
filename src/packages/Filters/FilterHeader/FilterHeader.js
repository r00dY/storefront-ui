import PropTypes from "prop-types";
import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";


const FilterHeader = props => {
    return <div className={props.className} style={props.style}>
        <button css={css`
            display: block;
            width: 100%;
            border: none;
            background-color: transparent;
            padding: 0;
            margin: 0;
            cursor: pointer;
        `} onClick={props.onClick}>
            <div css={css`
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: 4px 4px 4px 0;
            `}>
                <div>{props.title}</div>
                <div>{props.open ? '-' : '+'}</div>
            </div>
        </button>
    </div>
};

FilterHeader.propTypes = {
    title: PropTypes.any.isRequired,
    open: PropTypes.bool,
    onClick: PropTypes.func
};

export default FilterHeader;
