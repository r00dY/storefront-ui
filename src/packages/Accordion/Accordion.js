import PropTypes from "prop-types";
import React, { useState } from "react";

import AccordionRaw from "./AccordionRaw";

const Accordion = props => {
  const [open, setOpen] = useState(props.openAtInit);

  const {
    overrides: { Header: Header },
    title,
    ...restProps
  } = props;

  /**
   * code
   */

  const headerProps = {
    open: open,
    onClick: () => {
      setOpen(!open);
    },
    children: title
  };

  return (
    <div className={props.className} style={props.style}>
      <Header {...headerProps} />
      <AccordionRaw open={open}>{props.children}</AccordionRaw>
    </div>
  );
};

Accordion.defaultProps = {
  openAtInit: true,
  overrides: {}
};

Accordion.propTypes = {
  title: PropTypes.string,
  openAtInit: PropTypes.bool,
  overrides: PropTypes.object
};

export default Accordion;
