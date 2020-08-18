import React, { useState, useLayoutEffect, useRef } from "react";
import InputRaw$ from "../InputRaw";
import InputContainer from "../InputContainer";

function isValueEmpty(val) {
  return val === undefined || val === null || val.toString() === "";
}
function Input$(props) {
  let { onChange, ...restProps } = props;

  let [value, setValue] = useState(props.value);
  const isEmpty = isValueEmpty(value);
  // let [isEmpty, setEmpty] = useState(isValueEmpty(props.value));

  const onChangeEvent = (val, e) => {
    setValue(val);

    if (onChange) {
      onChange(val, e);
    }
  };

  return (
    <InputContainer
      {...restProps}
      empty={isEmpty}
      onClear={() => {
        onChangeEvent("", null);
      }}
      label={props.label || props.placeholder}
      cursor={"text"}
    >
      <InputRaw$
        sx={{ width: "100%", height: "100%" }}
        onChange={onChangeEvent}
        value={value}
      />
    </InputContainer>
  );
}

export default Input$;
