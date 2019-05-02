import { rs } from "responsive-helpers";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../Layout";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Container = props => {
  let width = rs(props.width || Layout.main.container || "90vw");

  // Validation
  if (!width) {
    throw new Error(
      "Container: width not defined. When using Container you must either provide width property or define Layout.main"
    );
  }

  let margin = rs("100vw")
    .subtract(width)
    .divide(2);

  return (
    <div style={props.style} className={props.className}>
      <div
        css={css`
          ${margin.css("margin-left")}
          ${margin.css("margin-right")}
        `}
      >
        {props.children}
      </div>
    </div>
  );
};

Container.propTypes = {
  width:
    PropTypes.any /* TODO: ResponsiveSize parameter might be number (pixels), string ("CSS width"), object (RangeMap) or ResponsiveSize. We must think of some unified way to type check */
};

export default Container;
