import React, { useState } from "react";
import PropTypes from "prop-types";

const Pagination$ = function(props) {
  // const {
  //     overrides: {
  //         ButtonPrev: buttonPrev,
  //         ButtonNext: buttonNext,
  //         Select: select,
  //
  //     }
  // }
};

Pagination$.defaultProps = {
  current: 1,
  split: [2, 5, 2],
  overrides: {}
};

Pagination$.propTypes = {
  count: PropTypes.number.isRequired,
  current: PropTypes.number,
  onChange: PropTypes.func,
  href: PropTypes.func,
  split: PropTypes.arrayOf(PropTypes.number),
  overrides: PropTypes.object
};

export { Pagination$ };
