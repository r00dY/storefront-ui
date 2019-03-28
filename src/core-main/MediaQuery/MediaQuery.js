import MediaQueryRaw from "react-responsive";
import React from "react";
import PropTypes from "prop-types";
import { Range } from "responsive-helpers";

const MediaQuery = (props) => {
    if (props.range) {
        return <MediaQueryRaw query={`screen and ${props.range.mediaQuery}`}>{props.children}</MediaQueryRaw>
    }

    return <MediaQueryRaw {...props}>{props.children}</MediaQueryRaw>
};

MediaQuery.propTypes = {
    range: PropTypes.instanceOf(Range)
};

export default MediaQuery
