import MediaQueryRaw from "react-responsive";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Range } from "responsive-helpers";

const RENDERED_BY_FORCE = 0;
const RENDERED_NOT_YET = 1;
const RENDERED_BY_MEDIA_QUERY = 2;

const MediaQuery = props => {
  const [renderedState, setRenderedState] = useState(
    props.prerender ? RENDERED_BY_FORCE : RENDERED_NOT_YET
  );

  let query = props.query;
  if (props.range) {
    query = `screen and ${props.range.mediaQuery}`;
  }

  /**
   * Following code postpones enabling MediaQueryRaw as long as prerendered content matches current browser media query
   */
  useEffect(() => {
    if (renderedState === RENDERED_BY_MEDIA_QUERY) {
      return;
    }

    if (renderedState === RENDERED_NOT_YET) {
      setRenderedState(RENDERED_BY_MEDIA_QUERY);
      return;
    }

    // if (RENDERED_BY_FORCE) -> SELF-CORRECTION based on REAL media query.
    /**
     * The code below has following logic:
     *
     * - it should run on the browser and if we had prerendered content in SSR, it should correct rendered content according to the REAL media query (not guessed one).
     * - it should not run in test environment in node.js (where window is not defined)
     */
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia === "undefined"
    ) {
      return;
    }

    const onResize = () => {
      if (!window.matchMedia(query).matches) {
        setRenderedState(RENDERED_BY_MEDIA_QUERY);
      }
    };

    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  if (renderedState === RENDERED_BY_FORCE) {
    return props.children;
  }

  if (renderedState === RENDERED_BY_MEDIA_QUERY) {
    return <MediaQueryRaw query={query}>{props.children}</MediaQueryRaw>;
  }

  return null;
};

MediaQuery.propTypes = {
  range: PropTypes.instanceOf(Range),
  prerender: PropTypes.bool
};

MediaQuery.defaultProps = {
  prerender: false
};

export default MediaQuery;
