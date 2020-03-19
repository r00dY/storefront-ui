import React, { useState, useLayoutEffect, useRef } from "react";
import InputRaw$ from "../InputRaw";
import InputContainer from "../InputContainer";

function Input$(props) {
  let { onChange, ...restProps } = props;

  let [empty, setEmpty] = useState(true);

  if (props.value) {
    empty = props.value === "";
  }

  const onChangeEvent = (val, e) => {
    if (!val || val === "") {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    if (onChange) {
      onChange(val, e);
    }
  };

  return (
    <InputContainer
      {...props}
      empty={empty}
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
