import React from "react";
import { jsx as emotionJsx } from "@emotion/core";
import styledSystemCss, { get } from "./css";
import { useTheme } from "./Theme";

import { RangeMap, ResponsiveSize } from "responsive-helpers";

// import { R}

// import { rs as rs_, rslin as rslin_ } from "responsive-helpers";

function rs(config) {
  return config;
}

function rslin(from, to, isInf) {
  return {
    from,
    to,
    isInf,
    __isLinear: true
  };
}

const lin = rslin;

/**
 * Let's just add:
 * - responsive helpers to take theme breakpoints into account
 * - extension that allows to add
 */

function css(styles) {
  styles = Array.isArray(styles) ? styles : [styles]; // we can have multiple styles

  // console.log('before css flattened styles', styles);

  styles = styles.flat([100]);
  styles = styles.filter(x => !!x);

  // console.log('after css flattened styles', styles);

  return theme =>
    styles.map(stylesSet => {
      return styledSystemCss(stylesSet)(theme);
    });
}

function jsx(type, props, ...children) {
  let newProps = { ...props };
  let createElement = React.createElement;

  if (typeof type === "string" && props && props.sx) {
    // const [_css, _] = splitSx(props.sx); // for primitive components we ignore custom sx and just extract CSS to pass it through emotion "css" prop
    newProps.css = css(props.sx); //theme => { return css(props.sx, theme) }
    delete newProps.sx;
    createElement = emotionJsx;
  }

  return createElement(type, newProps, ...children);
}

function mergeCss(a, b) {
  let ret = [];

  if (Array.isArray(a)) {
    ret = [...a];
  } else {
    ret = [a];
  }

  if (Array.isArray(b)) {
    ret = [...ret, ...b];
  } else {
    ret = [...ret, b];
  }

  return ret;
}

function getElementSpec(childSpec = {}, parentSpec, state, forcedProps = {}) {
  childSpec = typeof childSpec === "function" ? childSpec(state) : childSpec;
  parentSpec =
    typeof parentSpec === "function" ? parentSpec(state) : parentSpec;
  forcedProps =
    typeof forcedProps === "function" ? forcedProps(state) : forcedProps;

  const parentSx = { ...parentSpec };
  delete parentSx.__children;
  delete parentSx.__type;
  delete parentSx.__props;

  const childSx = { ...childSpec };
  delete childSx.__children;
  delete childSx.__type;
  delete childSx.__props;

  const [parentCss, parentCustomSx] = splitSx(parentSx);
  const [childCss, childCustomSx] = splitSx(childSx);
  //
  // console.log('parent css', parentCss);
  // console.log('child css', childCss);
  //
  // console.log('---- ', [parentSx.$css, parentCss, childSx.$css, childCss]);

  return {
    ...parentCustomSx,
    ...childCustomSx,
    $css: [parentSx.$css, parentCss, childSx.$css, childCss],
    __props: {
      ...parentSpec.__props,
      ...childSpec.__props,
      ...forcedProps
    },
    __children: childSpec.__children || parentSpec.__children,
    __type: childSpec.__type || parentSpec.__type
  };
}

function createElement(spec, props = {}) {
  const { __type, __children, __props, ...sx } = spec;

  if (!__type || typeof __type === "string") {
    // If primitive element, then we should extract $css and sx should be an array.
    const [css, { $css }] = splitSx(sx);

    return jsx(
      __type || "div",
      {
        sx: [css, $css],
        ...__props,
        ...props
      },
      __children
    );
  }

  return jsx(
    __type,
    {
      sx: sx,
      ...__props,
      ...props
    },
    __children
  );
}

function splitSx(sx) {
  let css = {};
  let customSx = {};

  if (Array.isArray(sx)) {
    customSx.$css = [];

    sx.forEach(subSx => {
      const [css_, sx_] = splitSx(subSx);
      customSx.$css.push(css_);
      customSx = {
        ...customSx,
        ...sx_
      };
    });
  } else {
    for (const prop in sx) {
      if (prop.startsWith("$")) {
        customSx[prop] = sx[prop];
      } else {
        css[prop] = sx[prop];
      }
    }
  }

  if (customSx.$css) {
    css = [customSx.$css, css];
    delete customSx.$css;
  }

  return [css, customSx];
}

//
// function responsiveValueGetValueForBreakpoint(value, breakpoint) {
//   const theme = useTheme();
//
//   if (typeof value === 'string') {
//     const potentialValueFromTheme = get(theme.space || {}, value);
//     if (potentialValueFromTheme) {
//       value = potentialValueFromTheme;
//     }
//   }
// }

function responsiveValueForEach(resVal, callback, theme) {
  if (!theme) {
    theme = useTheme();
  }

  const { breakpoints } = theme;

  if (Array.isArray(resVal)) {
    resVal.forEach((val, index) => {
      if (val === null) return;
      if (index === 0) {
        callback(val, null);
        return;
      }
      callback(val, breakpoints[index - 1]);
    });
    return;
  } else if (typeof resVal === "object" && typeof resVal._ !== "undefined") {
    for (let key in resVal) {
      if (key === "_") {
        callback(resVal[key], null);
        continue;
      }
      if (!breakpoints[key]) {
        throw new Error("Non-existent breakpoint");
      }
      callback(resVal[key], breakpoints[key]);
    }
    return;
  }
  callback(resVal, null);
}

function responsiveValueMap(resVal, mapper, theme) {
  if (!theme) {
    theme = useTheme();
  }
  const { breakpoints } = theme;

  if (Array.isArray(resVal)) {
    const newResVal = [];
    for (let index in resVal) {
      if (resVal[index] === null) {
        newResVal.push(null);
        continue;
      }
      newResVal.push(mapper(resVal[index]));
    }
    return newResVal;
  } else if (typeof resVal === "object") {
    const newResVal = {};
    for (let key in resVal) {
      newResVal[key] = mapper(resVal[key]);
    }
    return newResVal;
  }
  return mapper(resVal);
}

/**
 * ARITHMETICS ON RESPONSIVE ARRAYS
 */

function castResponsiveValue(resVal, Type, scale) {
  const theme = useTheme();

  // if (scale) {
  //   scale = theme[scale] || {};
  // }

  let config = {};
  responsiveValueForEach(resVal, (val, breakpoint) => {
    //
    // if (scale && typeof val === 'string') {
    //   const potentialValueFromTheme = get(scale, val);
    //
    //   console.log('potential value', potentialValueFromTheme, 'from', val);
    //   if (potentialValueFromTheme) {
    //     val = potentialValueFromTheme;
    //   }
    //   // console.log('before', val, 'after', val2)
    //
    // }

    if (breakpoint === null) {
      config[0] = val;
    } else {
      config[parseInt(breakpoint)] = val;
    }
  });
  return new Type(config);
}

export function responsiveValueToRangeMap(resVal) {
  return castResponsiveValue(resVal, RangeMap);
}

export function responsiveValueToResponsiveSize(resVal) {
  return castResponsiveValue(resVal, ResponsiveSize, "space");
}

export function responsiveValueCurrent(resVal, theme) {
  if (typeof window !== "object") {
    return;
  }

  let activeVal;
  responsiveValueForEach(
    resVal,
    (val, breakpoint) => {
      if (!breakpoint) {
        activeVal = val;
        return;
      }
      if (window.matchMedia(`screen and (min-width: ${breakpoint})`).matches) {
        activeVal = val;
      }
    },
    theme
  );

  return activeVal;
}

export function useResponsiveHelpers() {
  const theme = useTheme();

  return {
    currentValue: resVal => {
      responsiveValueCurrent(resVal, theme);
    }
  };
}

// Helper for quick creating of components
const createComponent = (Component, newSx) => {
  return ({ sx, ...restProps }) => {
    const [css, customSx] = splitSx(sx);

    let newSx2 = typeof newSx === "function" ? newSx(customSx) : newSx;

    let newSx3;

    if (typeof newSx2 === "function") {
      newSx3 = (...args) => ({ ...newSx2(...args), ...sx, $css: css });
    } else {
      newSx3 = { ...newSx2, ...sx, $css: css };
    }

    return <Component {...restProps} sx={newSx3} />;
  };
};

export function responsiveValueTransformScales(value, theme, scale, mainScale) {
  if (Array.isArray(value)) {
    return value.map(v =>
      responsiveValueTransformScales(v, theme, scale, mainScale)
    );
  } else if (typeof value === "object" && value !== null) {
    const newObj = {};

    for (let key in value) {
      newObj[key] = responsiveValueTransformScales(
        value[key],
        theme,
        scale,
        mainScale
      );
    }
    return newObj;
  } else if (typeof value === "string") {
    const key = `${scale}.${value}`;
    const transformedVal = get(theme, `${mainScale}.${key}`);

    if (transformedVal) {
      return key;
    }

    return value;
  }

  return value;
}

//
// function superResponsive(val, dict = {}) {
//   return responsiveValueMap(val, (x, breakpoint) => {
//     console.log(x, breakpoint);
//     return typeof dict[x] === 'undefined' ? x : dict[x];
//   })
// }

export {
  jsx,
  rs,
  rslin,
  lin,
  getElementSpec,
  createElement,
  splitSx,
  responsiveValueMap,
  responsiveValueForEach,
  // superResponsive,
  createComponent
};
