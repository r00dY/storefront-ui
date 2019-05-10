import React from "react";

const StorefrontUIContext = React.createContext({});

/**
 * Result of getAppearance is an object of canonical traits of the component.
 * appearance is a function of props (of the component) => canonicalProps
 * props can be always overwritten
 *
 * APPEARANCE is a reducer from (canonical props given + extraProps) to new set of canonical parameters
 */

/**
 * algorithm
 *
 * 1. If appearance is empty, then let's just use defaultProps
 */
const getAppearance = (appearance, appearanceProps, ...maps) => {
  let map = Object.assign({}, ...maps);

  // If appearance is string, convert it to function
  if (typeof appearance === "string") {
    if (map[appearance]) {
      appearance = map[appearance];
    } else {
      throw new Error(`Unknown component appearance: ${appearance}`);
    }
  }

  // At this point, appearance is either function or nothing.
  // If appearance is a function, then let's calculate object, if nothing, the object is empty
  let newProps = {};

  if (typeof appearance === "function") {
    newProps = appearance(appearanceProps);
  } else {
    if (map.default) {
      newProps = map.default(appearanceProps);
    }
  }

  return Object.assign({}, appearanceProps, newProps);
};

export default StorefrontUIContext;
export { getAppearance };
