import PropTypes from "prop-types";
import React, { useState } from "react";

import AccordionRaw from "../Accordion/AccordionRaw";

const ItemListAccordion = props => {
  const [open, setOpen] = useState(props.openAtInit);
  const toggle = () => {
    setOpen(!open);
  };

  let minAmountToShowAccordion =
    props.minAmountToShowAccordion || props.amountOfAlwaysVisible + 1;

  let itemsVisible = [];
  let itemsInAccordion = [];

  let items = [];
  if (Array.isArray(props.children)) {
    items = props.children;
  } else if (props.children) {
    items = [props.children];
  } else {
    items = [];
  }

  if (items.length < minAmountToShowAccordion) {
    itemsVisible = items;
  } else {
    itemsVisible = items.slice(0, props.amountOfAlwaysVisible);
    itemsInAccordion = items.slice(props.amountOfAlwaysVisible);
  }

  return (
    <div className={props.className} style={props.style}>
      {itemsVisible}
      <AccordionRaw open={open}>{itemsInAccordion}</AccordionRaw>
      {itemsInAccordion.length > 0 && props.trigger(open, toggle)}
    </div>
  );
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
  trigger: PropTypes.func.isRequired
};

export default ItemListAccordion;
