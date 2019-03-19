import { rs } from "responsive-helpers";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../Layout";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Container = props => {
    let width = rs(props.width || Layout.main.container);

    // Validation
    if (!width) {
        throw new Error("Container: width not defined. When using Container you must either provide width property or define Layout.main");
    }

    return (
        <div
            css={css`
                ${width.css("width")}
                margin: auto;
            `}
        >
            {props.children}
        </div>
    );
};

Container.propTypes = {
    width:
        PropTypes.any /* TODO: ResponsiveSize parameter might be number (pixels), string ("CSS width"), object (RangeMap) or ResponsiveSize. We must think of some unified way to type check */
};

export default Container;

