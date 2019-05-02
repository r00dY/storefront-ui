import MediaQueryRaw from "react-responsive";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Range } from "responsive-helpers";

const MediaQuery = props => {
  const [enabled, setEnabled] = useState(!props.lazy);
  useEffect(() => {
    setEnabled(true);
  });

  if (props.range) {
    return (
      <MediaQueryRaw query={`screen and ${props.range.mediaQuery}`}>
        {enabled && props.children}
      </MediaQueryRaw>
    );
  }

  return <MediaQueryRaw {...props}>{enabled && props.children}</MediaQueryRaw>;
};

MediaQuery.propTypes = {
  range: PropTypes.instanceOf(Range),
  lazy: PropTypes.bool // 'lazy' means that children will be rendered on componentDidMount -> this is quick fix to prevent this from being rendered in SSR environment
};

MediaQuery.defaultProps = {
  lazy: true
};

export default MediaQuery;
