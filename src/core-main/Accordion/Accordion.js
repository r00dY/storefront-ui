import PropTypes from "prop-types";
import React, { useState } from "react";

import AccordionRaw from "./AccordionRaw";

const Accordion = props => {
    const [open, setOpen] = useState(props.openAtInit);
    const toggle = () => { setOpen(!open); };

    return <div className={props.className} style={props.style}>
        { props.header(open, toggle) }

        <AccordionRaw open={open}>
            {props.children}
        </AccordionRaw>

    </div>;
};

Accordion.defaultProps = {
    openAtInit: true
};

Accordion.propTypes = {
    openAtInit: PropTypes.bool,
    header: PropTypes.func.isRequired
};

export default Accordion;
