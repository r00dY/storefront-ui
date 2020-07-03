import React, { useState, useLayoutEffect, useRef } from "react";
import InputRaw$ from "../InputRaw";
import InputContainer from "../InputContainer";

function isValueEmpty(val) {
  return val === undefined || val === null || val.toString() === "";
}
function Input$(props) {
  let { onChange, ...restProps } = props;

  let [isEmpty, setEmpty] = useState(isValueEmpty(props.value));

  const onChangeEvent = (val, e) => {
    setEmpty(isValueEmpty(val));

    if (onChange) {
      onChange(val, e);
    }
  };

  return (
    <InputContainer
      {...restProps}
      empty={isEmpty}
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
