import React from "react";
import InputContainer from "../InputContainer";

import SelectNativeRaw from "../SelectNativeRaw";
import useSelectState from "../useSelectState";

function SelectNative(props) {
  let { setValue, value, options, empty } = useSelectState(props);

  let {
    placeholder = "Select",
    allowEmpty = true,
    ...restProps
  } = useSelectState.filterProps(props);

  let optionElems = [];

  if (allowEmpty) {
    optionElems.push(
      <option disabled value={""} key={"__default__"}>
        {placeholder}
      </option>
    );
  }

  options.map(({ id, label, disabled = false }) => {
    optionElems.push(
      <option value={id} key={id} disabled={disabled}>
        {label}
      </option>
    );
  });

  return (
    <InputContainer
      {...restProps}
      empty={empty}
      label={props.label || props.placeholder}
      showArrow={"inline"}
      cursor={"pointer"}
    >
      <SelectNativeRaw
        sx={{
          height: "100%",
          width: "100%",
          cursor: "pointer"
        }}
        onChange={e => {
          setValue(
            !e.target.value || e.target.value === "" ? null : e.target.value
          );
        }}
        value={value ? value.id : ""}
      >
        {optionElems}
      </SelectNativeRaw>
    </InputContainer>
  );
}

export default SelectNative;
