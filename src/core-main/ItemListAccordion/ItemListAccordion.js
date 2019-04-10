import PropTypes from "prop-types";
import React, { useState } from "react";

import Accordion from "../Accordion/Accordion";

const ItemListAccordion = props => {
    const [open, setOpen] = useState(props.openAtInit);

    let minAmountToShowAccordion = props.minAmountToShowAccordion || props.amountOfAlwaysVisible + 1;

    let itemsVisible = [];
    let itemsInAccordion = [];

    let items = [];
    if (Array.isArray(props.children)) {
        items = props.children;
    } else if (props.children) {
        items = [props.children]
    } else {
        items = [];
    }


    if (items.length < minAmountToShowAccordion) {
        itemsVisible = items;
    }
    else {
        itemsVisible = items.slice(0, props.amountOfAlwaysVisible);
        itemsInAccordion = items.slice(props.amountOfAlwaysVisible);
    }

    return <div className={props.className} style={props.style}>
        {itemsVisible}
        <Accordion open={open}>
            { itemsInAccordion }
        </Accordion>
        { itemsInAccordion.length > 0 && props.triggerComponent(open, setOpen) }
    </div>
};

ItemListAccordion.defaultProps = {
    openAtInit: false,
    amountOfAlwaysVisible: 5
};

ItemListAccordion.propTypes = {
    openAtInit: PropTypes.bool,
    amountOfAlwaysVisible: PropTypes.number.isRequired, // might be higher if `minAmountToShowAccordion` is higher
    minAmountToShowAccordion: PropTypes.number,
    children: PropTypes.any,
    triggerComponent: PropTypes.func.isRequired
};

export default ItemListAccordion;
