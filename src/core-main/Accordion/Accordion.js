import PropTypes from "prop-types";
import React from "react";

const Accordion = props => {
    return <div className={props.className} style={props.style}>
        <div style={{
            visibility: props.open ? 'visible' : 'hidden',
            height: props.open ? 'auto' : '0px',
            position: 'relative'
        }}>
            {props.children}
        </div>
    </div>
};

Accordion.propTypes = {
    open: PropTypes.bool
};

export default Accordion;
