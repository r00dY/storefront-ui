import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";

import AccordionRaw from "./AccordionRaw";

const Accordion = props => {
  const [open, setOpen] = useState(props.openAtInit);

  const {
    overrides: { Header: Header },
    title,
    ...restProps
  } = props;

  const containerRef = useRef(null);
  //
  // useEffect(() => {
  //
  //   console.log(containerRef.current.getBoundingClientRect());
  //
  //     if (containerRef.current && open && props.scrollTopAtOpen) {
  //       window.scrollTo({
  //         top: containerRef.current.getBoundingClientRect().top,
  //         behavior: 'smooth'
  //       });
  //     }
  // });
  /**
   * code
   */

  const headerProps = {
    open: open,
    onClick: () => {
      setOpen(!open);

      if (!open && props.scrollTopAtOpen) {
        setTimeout(() => {
          window.scrollTo({
            top:
              containerRef.current.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth"
          });
        }, 50);
      }
    },
    children: title
  };

  return (
    <div className={props.className} style={props.style} ref={containerRef}>
      <Header {...headerProps} />
      <AccordionRaw open={open} animated={props.animated}>
        {props.children}
      </AccordionRaw>
    </div>
  );
};

Accordion.defaultProps = {
  openAtInit: true,
  overrides: {},
  scrollTopAtOpen: false,
  animated: true
};

Accordion.propTypes = {
  title: PropTypes.string,
  openAtInit: PropTypes.bool,
  overrides: PropTypes.object,
  scrollTopAtOpen: PropTypes.bool,
  animated: PropTypes.bool
};

export default Accordion;
