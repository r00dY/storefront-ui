import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

import Ease from "../Ease";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const AccordionRaw = props => {
  const containerRef = useRef(null);
  let [height, setHeight] = useState(props.open ? null : 0);

  useEffect(
    () => {
      // if (!props.animated) { return; }

      if (props.open) {
        setHeight(containerRef.current.clientHeight);

        setTimeout(() => {
          setHeight(null);
        }, 300);
      } else {
        setHeight(containerRef.current.clientHeight);

        setTimeout(() => {
          setHeight(0);
        }, 50);
      }
    },
    [props.open]
  );

  if (!props.animated) {
    height = props.open ? null : 0;
  }

  return (
    <div className={props.className} style={props.style}>
      <div
        css={css`
          height: ${height === null ? "auto" : `${height}px`};
          position: relative;
          transition: height 0.35s ${Ease.expoOut.css};
          overflow: hidden;
        `}
      >
        <div
          css={css`
            position: ${height === null ? "relative" : "absolute"};
          `}
          ref={containerRef}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

AccordionRaw.defaultProps = {
  animated: true
};

AccordionRaw.propTypes = {
  open: PropTypes.bool,
  animated: PropTypes.bool
};

export default AccordionRaw;
