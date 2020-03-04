import React, { useState, useLayoutEffect, useRef } from "react";
import Box from "../Box";
import { createElement, getElementSpec, splitSx } from "../index";
import InputContainer from "../InputContainer";

import useNormalizedOptions from "../useNormalizedOptions";

const defaults = {
  label: ({ label }) => ({
    __type: Box,
    __props: {
      as: "legend"
    },
    __children: label
  }),
  optionsContainer: ({ children }) => ({
    __type: Box,
    __children: children
  })
};

function SelectInline(props) {
  let {
    onChange,
    value,
    defaultValue,
    options,
    allowEmpty = true,
    label = "Select",
    sx,
    ...restProps
  } = props;

  const data = useNormalizedOptions(props);

  const state = {
    label
  };

  const [css, customSx] = splitSx(props.sx);

  const legend = createElement(
    getElementSpec(customSx.$label, defaults.label, state)
  );

  const [internalValue, setInternalValue] = useState(data.defaultValue);

  const value_ = data.isControlled ? data.value : internalValue;

  const selectables = data.options.map(option => {
    return React.cloneElement(
      sx.$selectable,
      {
        selected: value_ && option.id === value_.id,
        label: option.label,
        disabled: option.disabled,

        option: option,

        key: option.id,
        onClick: () => {
          if (option.disabled) {
            return;
          }
          if (!data.isControlled) {
            setInternalValue(option);
          }
          onChange(option);
        }
      },
      option.label
    );
  });

  const optionsContainer = createElement(
    getElementSpec(customSx.$optionsContainer, defaults.optionsContainer, {
      ...state,
      children: selectables
    })
  );

  return (
    <Box as={"fieldset"} {...restProps} sx={{ $css: css }}>
      {legend}
      {optionsContainer}
    </Box>
  );
}

export default SelectInline;
