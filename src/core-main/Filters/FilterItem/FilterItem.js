import PropTypes from "prop-types";
import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";


const FilterItem = props => {
    return <div className={props.className} style={props.style}>
        <div css={css`
            display: flex;
            width: 100%;
            padding: 4px 0;
            flex-direction: row;
            align-items: center;
        `}>

            <input type="checkbox" name={props.name} id={props.id}/>
            <label id={props.id}  css={css`margin-left: 4px;`}>{props.label}</label>
        </div>
    </div>
};

FilterItem.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.function
};

export default FilterItem;
