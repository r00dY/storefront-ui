import React, { useState } from "react";
import PropTypes from "prop-types";
import usePagination from "../usePagination";

const Pagination$ = function(props) {
  const {
    overrides: { Root: root },
    split,
    current,
    count,
    href,
    onChange
  } = props;

  const pagination = usePagination({
    split,
    current,
    count,
    href,
    onChange
  });

  return root(pagination);
};

Pagination$.defaultProps = {
  current: 1,
  split: [1, 1, 1],
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

const StatefulPagination$ = props => {
  const [page, setPage] = useState(props.initPage || 1);

  return (
    <Pagination$
      {...props}
      current={page}
      onChange={page => {
        setPage(page);
        if (props.onChange) {
          props.onChange(page);
        }
      }}
    />
  );
};

export { Pagination$, StatefulPagination$ };
