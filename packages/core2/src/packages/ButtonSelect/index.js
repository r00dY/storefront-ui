/** @jsx jsx */
import React, { useState, useLayoutEffect, useRef } from "react";
import Box from "../Box";
import HorizontalStackSimple from "../HorizontalStackSimple";
import { jsx, createElement, getElementSpec, splitSx } from "..";
import ButtonRaw from "../ButtonRaw";

import InputContainer from "../InputContainer";

function ButtonSelect$(props) {
  let { onChange, ...restProps } = props;

  let [empty, setEmpty] = useState(true);

  if (props.value) {
    empty = props.value === "";
  }

  return (
    <InputContainer
      {...props}
      empty={empty}
      label={props.label || props.placeholder}
    >
      <ButtonRaw sx={{ width: "100%", height: "100%" }}>Test</ButtonRaw>
    </InputContainer>
  );
}

export default ButtonSelect$;
