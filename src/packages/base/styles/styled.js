/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// // @flow
// import * as React from 'react';
// import {createStyled, withStyleDeep} from 'styletron-react';
// import {driver, getInitialStyle} from 'styletron-standard';
//
// import {ThemeContext} from './theme-provider.js';
//
// const wrapper = StyledComponent =>
//   function withThemeHOC(props) {
//     return (
//       <ThemeContext.Consumer>
//         {theme => <StyledComponent {...props} $theme={theme} />}
//       </ThemeContext.Consumer>
//     );
//   };
//
// const baseStyled = createStyled({wrapper, getInitialStyle, driver});
//
// // TODO(#495): Need a flow expert to help remove this 'any' type
// // eslint-disable-next-line flowtype/no-weak-types
// export default function styledWrapper(...args: any) {
//   // If user is trying to style a styled component
//   // use withStyleDeep, otherwise use baseStyled
//   let styleFn = baseStyled;
//   if (args[0] && args[0].__STYLETRON__) {
//     styleFn = withStyleDeep;
//   }
//   // Also allow passing deep style overrides via $style prop
//   // Ex: <StyledDiv $style={{color: 'red'}} />
//   // Issue for supporting this natively in styletron:
//   // https://github.com/rtsao/styletron/issues/221
//
//   // $FlowFixMe
//   return withStyleDeep(styleFn(...args), (props: {$style?: ?{}}) => {
//     const {$style} = props;
//     if (typeof $style === 'function') {
//       return $style(props);
//     }
//     return $style || {};
//   });
// }

/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";
import styledEmotion from "@emotion/styled";

import React, { useContext } from "react";

import { ThemeContext } from "../../Theme";

import Color from "../../Color";

/**
 * TODO: temporarily transforms legacy styled-components.js format styles to our format by proper use of Font and Color classes.
 */
function stylesToString(styles) {
  if (!styles) {
    return "";
  }
  if (typeof styles === "string") {
    return styles;
  }

  let font;

  Object.keys(styles).forEach(key => {
    if (key === "animationName") {
      styles["animationName"] = `${keyframes(styles[key])}`;
    } else if (key === "font") {
      font = styles[key];
      delete styles[key];
    } else if (styles[key] instanceof Color) {
      styles[key] = styles[key].css;
    } else if (typeof styles[key] === "object") {
      // if object, it means it's ":hover" or sth, and we need recursively solve it.
      styles[key] = stylesToString(styles[key]);
    }
  });

  return css`
    ${font ? font.css : ""}
    ${styles}
  `;
}

function styled(component, arg, childrenFunc) {
  arg = arg || {};

  const Component = styledEmotion[component]``;

  return props => (
    <ThemeContext.Consumer>
      {theme => {
        const styleProps = { ...props, $theme: theme, $config: theme };
        const styles = typeof arg === "function" ? arg(styleProps) : arg;

        let overrideStyles;
        if (typeof props.$style === "function") {
          overrideStyles = props.$style(styleProps);
        } else {
          overrideStyles = props.$style;
        }

        let { children, ...restProps } = props;

        let func = props.$children || childrenFunc;
        if (func) {
          children = func(styleProps);
        }

        return (
          <Component
            ref={props.$ref}
            {...restProps}
            $theme={theme}
            css={css`
              ${stylesToString(styles)}
              ${stylesToString(overrideStyles)}
            `}
            children={children}
          />
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default styled;
