import { rslin as rslin_, rslin } from "responsive-helpers";

/**
 * TODO: VERY IMPORTANT NOTES
 *
 * BEWARE!!! Fixing this file will take you longer than you think it will.
 *
 *
 * 1. This file is copied from styled-system which is not maintained and theme-ui has newest version
 * 2. Modifications in this file are:
 * a) font -> it's just custom variant actually, we could do PR for theme-ui for this.
 * b) linear spacings -> we should do them in array / object form with linearity done as "step functions". Arithmetic will be trivial to implement and we could add this as a PR to theme-ui.
 * c) make it possible to use [0, 0, "gridGap"] by using recursion. We could make it as a PR too.
 *
 * New version of theme-ui is constantly updated, for example it now has nested array styles, one thing that was missing here.
 *
 * Bugs in current version: there's only one level of recursion and no nested styles so:
 * mt: "gridGap"
 *
 * ... will work if this is on the top level:
 * 1. In first iteration it will be transformed into array.
 * 2. In second iteration array will be decoupled into values.
 *
 * Not sure if it work deeper.
 *
 * To sum up, we should sync with theme-ui and build PR for them.
 *
 */

// based on https://github.com/developit/dlv
export const get = (obj, key, def, p, undef) => {
  key = key && key.split ? key.split(".") : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};

const defaultBreakpoints = [40, 52, 64].map(n => n + "em");

const defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};

const aliases = {
  bg: "backgroundColor",
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  mx: "marginX",
  my: "marginY",
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  px: "paddingX",
  py: "paddingY"
};

const multiples = {
  marginX: ["marginLeft", "marginRight"],
  marginY: ["marginTop", "marginBottom"],
  paddingX: ["paddingLeft", "paddingRight"],
  paddingY: ["paddingTop", "paddingBottom"],
  size: ["width", "height"]
};

const scales = {
  color: "colors",
  backgroundColor: "colors",
  borderColor: "colors",
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginX: "space",
  marginY: "space",
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingX: "space",
  paddingY: "space",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  gridGap: "space",
  gridColumnGap: "space",
  gridRowGap: "space",
  gap: "space",
  columnGap: "space",
  rowGap: "space",
  fontFamily: "fonts",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  letterSpacing: "letterSpacings",
  border: "borders",
  borderTop: "borders",
  borderRight: "borders",
  borderBottom: "borders",
  borderLeft: "borders",
  borderWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderRadius: "radii",
  borderTopRightRadius: "radii",
  borderTopLeftRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  borderTopWidth: "borderWidths",
  borderTopColor: "colors",
  borderTopStyle: "borderStyles",
  borderBottomWidth: "borderWidths",
  borderBottomColor: "colors",
  borderBottomStyle: "borderStyles",
  borderLeftWidth: "borderWidths",
  borderLeftColor: "colors",
  borderLeftStyle: "borderStyles",
  borderRightWidth: "borderWidths",
  borderRightColor: "colors",
  borderRightStyle: "borderStyles",
  outlineColor: "colors",
  boxShadow: "shadows",
  textShadow: "shadows",
  zIndex: "zIndices",
  width: "sizes",
  minWidth: "sizes",
  maxWidth: "sizes",
  height: "sizes",
  minHeight: "sizes",
  maxHeight: "sizes",
  flexBasis: "sizes",
  size: "sizes",
  // svg
  fill: "colors",
  stroke: "colors"
};

const positiveOrNegative = (scale, value) => {
  if (typeof value !== "number" || value >= 0) {
    return get(scale, value, value);
  }
  const absolute = Math.abs(value);
  const n = get(scale, absolute, absolute);
  if (typeof n === "string") return "-" + n;
  return n * -1;
};

const transforms = [
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "top",
  "bottom",
  "left",
  "right"
].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: positiveOrNegative
  }),
  {}
);

function isStylesObject(obj) {
  if (typeof obj !== "object") {
    return false;
  }

  if (obj.__isLinear) {
    return false;
  }

  if (typeof obj._ !== "undefined") {
    return false;
  }

  return true;
}

export const responsive = styles => theme => {
  const next = {};
  const breakpoints = get(theme, "breakpoints", defaultBreakpoints);
  const mediaQueries = [
    null,
    ...breakpoints.map(n => `@media screen and (min-width: ${n})`)
  ];

  // MODIFICATION: let's add all media in a good order so that this order is kept later
  for (let k = 1; k < mediaQueries.length; k++) {
    next[mediaQueries[k]] = null;
  }

  // console.log('next', next);
  // mediaQueries.forEach(query => {
  //     if (query) {
  //         next[query] = {};
  //     }
  // });

  for (const key in styles) {
    const value =
      typeof styles[key] === "function" ? styles[key](theme) : styles[key];

    // here we could get value from scales and transform it.

    if (value == null) continue;

    /** MODIFICATION 3, linear spacings **/
    if (typeof value === "object" && value.__isLinear) {
      const css = rslin(
        theme.space[value.from] || value.from,
        theme.space[value.to] || value.to,
        value.isInf
      ).cssObject(key);

      for (let media in css) {
        next[media] = next[media] || {};
        next[media][key] = css[media][key];
      }

      continue;
    }

    /** MODIFICATION 2, check if this is responsive object **/
    if (typeof value === "object" && typeof value._ !== "undefined") {
      for (let breakpoint in value) {
        if (breakpoint !== "_" && !breakpoints[breakpoint]) {
          throw new Error(
            `Wrong breakpoint name in your rs styles: "${breakpoint}"`
          );
        }

        let media = `@media screen and (min-width: ${breakpoints[breakpoint]})`;
        if (breakpoint === "_") {
          media = undefined;
        }

        if (!media) {
          next[key] = value[breakpoint];
          continue;
        }

        next[media] = next[media] || {};
        next[media][key] = value[breakpoint];
      }
      continue;
    }

    if (!Array.isArray(value)) {
      next[key] = value;

      /** MODIFICATION: it's required for cssSingle(cssSingle(...)) recursion to work. We don't want old media queries to override new ones. **/
      // if (isStylesObject(next[key])) {
      //     next[key] = {
      //         ...next[key],
      //         ...value
      //     };
      // } else {
      //     next[key] = value;
      // }

      continue;
    }

    /**
     * IF ARRAY
     */
    for (let i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
      const media = mediaQueries[i];
      if (value[i] == null) continue;

      if (!media) {
        next[key] = value[i];
        continue;
      }

      next[media] = next[media] || {};
      next[media][key] = value[i];
    }
  }

  // MODIFICATION: let's clean up empty media queries
  for (let key in next) {
    if (next[key] === null) {
      delete next[key];
    }
  }

  return next;
};

function getValue(val, key, theme) {
  const prop = get(aliases, key, key);
  const scaleName = get(scales, prop);
  const scale = get(theme, scaleName, get(theme, prop, {}));
  const transform = get(transforms, prop, get);
  let value = transform(scale, val, val);

  if (!Array.isArray(value)) {
    // non-array values can easily pass
    return value;
  }

  let lastBreakpointArray;

  for (let i = 0; i < value.length; i++) {
    let breakpointVal = getValue(value[i], key, theme, i);

    if (breakpointVal === null || breakpointVal === undefined) {
      if (lastBreakpointArray) {
        value[i] = lastBreakpointArray[i];
      } else {
        value[i] = null;
      }
    } else if (Array.isArray(breakpointVal)) {
      value[i] = breakpointVal[i];
      lastBreakpointArray = breakpointVal;
    } else {
      value[i] = breakpointVal;
    }
  }

  return value;
}

export const css = args => (props = {}) => {
  const theme = { ...defaultTheme, ...(props.theme || props) };
  let result = {};
  const obj = { ...(typeof args === "function" ? args(theme) : args) };

  // Pre-iteration flattening arrays with values from theme
  for (const key in obj) {
    obj[key] = getValue(obj[key], key, theme);
  }

  const styles = responsive(obj)(theme);

  for (const key in styles) {
    const x = styles[key];
    let val = typeof x === "function" ? x(theme) : x;

    if (key === "variant") {
      const variant = css(get(theme, val))(theme);
      result = { ...result, ...variant };
      continue;
    }

    /** MODIFICATION 1, special value font **/
    if (key === "font") {
      const variant = css(get(theme, "typography." + val))(theme);
      result = { ...result, ...variant };
      continue;
    }

    if (val && typeof val === "object") {
      result[key] = css(val)(theme); // TODO: bug, second iteration overrides first one (or other way round), media queries are not merged in a smart way
      continue;
    }

    const prop = get(aliases, key, key);
    const scaleName = get(scales, prop);
    const scale = get(theme, scaleName, get(theme, prop, {}));
    const transform = get(transforms, prop, get);
    let value = transform(scale, val, val);

    if (multiples[prop]) {
      const dirs = multiples[prop];

      for (let i = 0; i < dirs.length; i++) {
        result[dirs[i]] = value;
      }
    } else {
      result[prop] = value;
    }
  }

  return result;
};

export default css;
