/** @jsx jsx */
import React, { useState, useLayoutEffect, useRef } from "react";
import Box from "../Box";
import { jsx, createElement, getElementSpec, splitSx } from "..";
import InputContainer from "../InputContainer";

import SelectNativeRaw from "../SelectNativeRaw";
import useNormalizedOptions from "../useNormalizedOptions";

const defaults = {
  $arrowContainer: ({ arrow }) => ({
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
    __children: arrow
  })
};

function SelectNative(props) {
  let {
    onChange,
    value,
    defaultValue,
    options,
    allowEmpty = true,
    placeholder = "Select",
    ...restProps
  } = props;

  const data = useNormalizedOptions(props);

  let optionElems = [];

  if (allowEmpty) {
    optionElems.push(
      <option disabled value={""} key={"__default__"}>
        {placeholder}
      </option>
    );
  }

  data.options.map(({ id, label, disabled = false }) => {
    optionElems.push(
      <option value={id} key={id} disabled={disabled}>
        {label}
      </option>
    );
  });

  return (
    <InputContainer
      {...restProps}
      empty={data.empty}
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
          data.onChange(
            !e.target.value || e.target.value === "" ? null : e.target.value,
            e
          );
        }}
        defaultValue={
          data.defaultValue === undefined
            ? undefined
            : data.defaultValue === null
            ? ""
            : data.defaultValue.id
        }
        value={
          data.value === undefined
            ? undefined
            : data.value === null
            ? ""
            : data.value.id
        }
      >
        {optionElems}
      </SelectNativeRaw>
    </InputContainer>
  );
}

export default SelectNative;
