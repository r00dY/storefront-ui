import PropTypes from "prop-types";
import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const AccordionRaw = props => {
    return <div className={props.className} style={props.style}>
        <div css={css`
            display: ${props.open ? 'initial' : 'none'};
            height: ${props.open ? 'auto' : '0px'};
            position: relative;
            transition: height .3s;
            overflow: ${props.open ? 'visible' : 'hidden'};
        `}>
            <div css={css`
                position: relative;
            `}>
                {props.children}
            </div>
        </div>
    </div>
};

AccordionRaw.propTypes = {
    open: PropTypes.bool
};

export default AccordionRaw;
