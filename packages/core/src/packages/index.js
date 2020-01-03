import React from "react";
import { jsx as emotionJsx } from "@emotion/core";
import styledSystemCss from "@styled-system/css";
import { useTheme } from "emotion-theming";
import { rs as rs_, rslin as rslin_ } from "responsive-helpers";

function rs(config) {
  return {
    config,
    __isRs: true
  };
}

function rslin(from, to, isInf) {
  return {
    from,
    to,
    isInf,
    __isRslin: true
  };
}

// Traverses through rs and rslin objects (from above) and changes values according to values from "space"
function traverseRsAndOverrideSpacing(obj, space) {
  // If number
  if (typeof obj === "number") {
    if (space && space[obj]) {
      return space[obj];
    }
    return obj;
  }

  let newObject = { ...obj };
  // If object
  if (obj.__isRs) {
    let config = {};
    for (const key in obj.config) {
      config[key] = traverseRsAndOverrideSpacing(obj.config[key], space);
    }
    newObject.config = config;
  } else if (obj.__isRslin) {
    if (space) {
      newObject.from = space[newObject.from] || newObject.from;
      newObject.to = space[newObject.to] || newObject.to;
    }
  }

  return newObject;
}
//
// function mergeStyleObjects(...args) {
//     let ret = {};
//     args.forEach(x => {
//         ret = {...ret, ...x};
//     });
//     return ret;
// }
//

function merge2StyleObject(x, y) {
  let ret = { ...x };
  for (const yKey in y) {
    if (typeof x[yKey] === "object" && typeof y[yKey] === "object") {
      ret[yKey] = merge2StyleObject(x[yKey], y[yKey]);
    } else {
      ret[yKey] = y[yKey];
    }
  }

  return ret;
}

function mergeStyleObjects(...args) {
  let ret = {};
  args.forEach(x => {
    ret = merge2StyleObject(ret, x);
  });
  return ret;
}

function traverseAndOverride(styles, theme) {
  if (Array.isArray(styles)) {
    return styles;
  }
  let restStyles = {};

  // Responsive styles
  let responsiveStyles = {};

  Object.entries(styles).forEach(([cssProp, val]) => {
    if (val.__isRs || val.__isRslin) {
      let newVal = traverseRsAndOverrideSpacing(val, theme.space);

      let responsiveSize;
      if (val.__isRs) {
        // Nested rslins in rs
        let newConfig = { ...newVal.config };
        for (const key in newConfig) {
          if (newConfig[key].__isRslin) {
            newConfig[key] = rslin_(
              newConfig[key].from,
              newConfig[key].to,
              newConfig[key].isInf
            );
          }
        }
        //
        responsiveSize = rs_(newConfig);
      } else if (val.__isRslin) {
        responsiveSize = rslin_(newVal.from, newVal.to, newVal.isInf);
      }

      const css = responsiveSize.cssObject(cssProp);

      responsiveStyles = mergeStyleObjects(responsiveStyles, css);
    } else {
      restStyles[cssProp] = val;
    }
  });

  // Check for font!
  const font = restStyles.font;
  delete restStyles.font;

  let fontStyles = {};

  if (font && theme.typography && theme.typography[font]) {
    fontStyles = theme.typography[font];
  }

  // Traverse the rest
  for (const key in restStyles) {
    if (typeof restStyles[key] === "object") {
      restStyles[key] = traverseAndOverride(restStyles[key], theme);
    }
  }

  return mergeStyleObjects(fontStyles, responsiveStyles, restStyles);

  // Do recursive search for "font" existence. We should do recursive call ONLY for media queries / :hover etc, not for Array / object sizes.
  // TODO: do it right
  // For now we just traverse, we don't expect to find 'font' key anywhere in the object.
}

/**
 * Let's just add:
 * - responsive helpers to take theme breakpoints into account
 * - extension that allows to add
 */

function css(styles) {
  const theme = useTheme();

  styles = Array.isArray(styles) ? styles.flat([9]) : [styles]; // we can have multiple styles
  styles = styles.filter(x => !!x);

  return x =>
    styles.map(stylesSet => {
      return styledSystemCss(traverseAndOverride(stylesSet, theme))(x);
    });
}

function jsx(type, props, ...children) {
  let newProps = { ...props };
  let createElement = React.createElement;

  if (typeof type === "string" && props.css) {
    newProps.css = css(props.css);
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

  const type = childSpec.type || parentSpec.type;

  return {
    ...parentSpec.props,
    ...childSpec.props,
    ...forcedProps,
    css: mergeCss(parentSpec.css, childSpec.css),
    overrides: childSpec.overrides,
    children: childSpec.children || parentSpec.children,
    type: type
  };
}

function createElement(spec) {
  return jsx(spec.type || "div", {
    ...spec,
    type: undefined
  });
}

export { css, jsx, rs, rslin, mergeCss, getElementSpec, createElement };

/**
 What do we want?

 css={{
    color: "primary", // colors by simple string from theme,
    font: "heading1", // fonts that compile to a group of properties
    padding: rslin(10, 20), // linear spacings, responsive sizes,
    "media-query": {
        color: "blue" // media queries available directly
    }
 }}

 rslin(10, 20)
 {
    _: 0,
    md: rslin(10, 20)
 }

 We want easy access to:
 - h1, h2, h3, h4, etc.
 - p
 - ul, li, ol
 - section etc.
 - A
 - <Ul>
 - <Li>

 sx!!!

 <ul sx={} />

 <li sx={{}}

 They should have some nice default styles, but easily overrideable.

 If we want to use native HTML elements, we must remember that then can't have default styles defined in any other way than global styles.


 NATYWNE KOMPONENTY CZY NIE?
 - na razie natywne!!! z sx. Potem możemy rozszerzać. Możemy zostawić Box i Text na razie (w sumie to samo tylko inny default "as" na "p", lol)
 - czyli co, wgrywamy theme-ui?

 ZALETY NIENATYWNYCH
 - możemy mieć kontrolę nad propsami i wtedy np. wiedzieć, że żaden komponent w środku jakiegoś komponentu nie zrobi position: fixed czy coś. Można to realnie zablokować :O ZAJEBIŚCIE.
 - zacznijmy od Box i Text.


 THINGS TO DO:
 - One big css() function that takes "our form of css" (with theme styles, fonts, responsive sizes) and compiles to emotion form. It should be wrapper around css from styled-system.
 - W całej appce posługujemy sie naszymi obiektami, dopiero na SAM KONIEC kompilujemy style do styli emotion.
 - Rozkmiń kolejnośc media query etc.

 **/
