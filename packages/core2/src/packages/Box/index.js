/** @jsx jsx */

import React from "react";
import { jsx, splitSx } from "..";

const boxStyles = {
  boxSizing: "border-box",
  minWidth: "0px",
  m: 0,
  p: 0,
  border: 0,
  listStyle: "none"
};

const focusReset = {
  ":focus": {
    outline: "none"
  }
};

const fitChildStyles = {
  position: "relative",
  "> *": {
    minWidth: "inherit !important",
    maxWidth: "inherit !important",
    width: "100% !important"
  }
};

const fitChildHeightStyles = {
  position: "relative",
  "> *": {
    minHeight: "inherit !important",
    maxHeight: "inherit !important",
    height: "100% !important"
  }
};

function Box_(props) {
  let {
    sx,
    as,
    _ref,
    noFocus = false,
    fitChild = false,
    fitChildHeight = false,
    fitW,
    fitH,
    __portals__,
    ...restProps
  } = props;

  const [css, customSx] = splitSx(sx);

  if (fitW === true) {
    fitChild = true;
  }

  if (fitH === true) {
    fitChildHeight = true;
  }

  const ret = jsx(as, {
    sx: [
      boxStyles,
      noFocus && focusReset,
      fitChild && fitChildStyles,
      fitChildHeight && fitChildHeightStyles,
      css
    ],
    ref: _ref,
    ...restProps
  });

  if (__portals__) {
    return (
      <>
        {__portals__}
        {ret}
      </>
    );
  }
  return ret;
}

const Box = React.forwardRef((props, ref) => <Box_ _ref={ref} {...props} />);

Box.defaultProps = {
  as: "div"
};

export default Box;

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
