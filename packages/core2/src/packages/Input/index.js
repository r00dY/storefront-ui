import React, { useState, useLayoutEffect, useRef } from "react";
import InputRaw$ from "../InputRaw";
import InputContainer from "../InputContainer";

function isEmpty(val) {
  return val === undefined || val === null || val.toString() === "";
}
function Input$(props) {
  let { onChange, ...restProps } = props;

  const onChangeEvent = (val, e) => {
    if (onChange) {
      onChange(val, e);
    }
  };

  return (
    <InputContainer
      {...props}
      empty={isEmpty(props.value)}
      label={props.label || props.placeholder}
      cursor={"text"}
    >
      <InputRaw$
        sx={{ width: "100%", height: "100%" }}
        onChange={onChangeEvent}
      />
    </InputContainer>
  );
}

export default Input$;
