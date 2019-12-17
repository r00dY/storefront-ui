/** @jsx jsx */

import React from "react";
import { jsx } from "@emotion/core";
import styledSystemCss from "@styled-system/css";
import { useTheme } from "emotion-theming";

function traverseAndChangeFont(styles, theme) {
  const { font, ...restStyles } = styles;

  let fontStyles = {};

  if (font && theme.typography && theme.typography[font]) {
    fontStyles = theme.typography[font];
  }

  for (const key in restStyles) {
    if (typeof restStyles[key] === "object") {
      restStyles[key] = traverseAndChangeFont(restStyles[key], theme);
    }
  }

  return { ...fontStyles, ...restStyles };

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

  styles = Array.isArray(styles) ? styles : [styles]; // we can have multiple styles

  return x =>
    styles.map(stylesSet => {
      return styledSystemCss(traverseAndChangeFont(stylesSet, theme))(x);
    });
}

export { css };

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
