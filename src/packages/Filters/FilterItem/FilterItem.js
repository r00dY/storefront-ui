import PropTypes from "prop-types";
import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const FilterItem = props => {
  return (
    <div className={props.className} style={props.style}>
      <label
        css={css`
          display: block;
          width: 100%;
          padding: 4px 0;
          cursor: pointer;
        `}
      >
        <input type="checkbox" name={props.name} onClick={props.onClick} />{" "}
        {props.label}
      </label>
    </div>
  );
};

FilterItem.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default FilterItem;
