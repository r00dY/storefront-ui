import MediaQueryRaw from "react-responsive";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Range } from "responsive-helpers";

const MediaQuery = props => {
  const [state, setState] = useState(props.prerender ? 1 : 0);

  useEffect(() => {
    setState(2);
  });

  let query = props.query;
  if (props.range) {
    query = `screen and ${props.range.mediaQuery}`;
  }

  return (
    <>
      {state === 1 && props.children}
      {state === 2 && (
        <MediaQueryRaw query={query}>{props.children}</MediaQueryRaw>
      )}
    </>
  );
};

MediaQuery.propTypes = {
  range: PropTypes.instanceOf(Range),
  prerender: PropTypes.bool
};

MediaQuery.defaultProps = {
  prerender: false
};

export default MediaQuery;
