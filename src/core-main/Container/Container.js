import { rs } from "responsive-helpers";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../Layout";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Container = props => {
    return (
        <div
            css={css`
                ${rs(props.width).css("width")}
                margin: auto;
            `}
        >
            {props.children}
        </div>
    );
};

Container.defaultProps = {
    width: Layout.main.container
};

Container.propTypes = {
    width:
        PropTypes.any
            .isRequired /* TODO: ResponsiveSize parameter might be number (pixels), string ("CSS width"), object (RangeMap) or ResponsiveSize. We must think of some unified way to type check */
};

export default Container;

