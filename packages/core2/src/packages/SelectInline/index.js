import React, { useState, useLayoutEffect, useRef } from "react";
import Box from "../Box";
import { createElement, getElementSpec, splitSx } from "../index";
import InputContainer from "../InputContainer";

import useSelectState from "../useSelectState";

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
  const { value, options, empty, setValue } = useSelectState(props);

  let { label = "Select", sx, ...restProps } = props;

  const state = {
    label
  };

  const [css, customSx] = splitSx(props.sx);

  const legend = createElement(
    getElementSpec(customSx.$label, defaults.label, state)
  );

  const selectables = options.map(option => {
    return React.cloneElement(
      sx.$selectable,
      {
        selected: value && option.id === value.id,
        label: option.label,
        disabled: option.disabled,

        option: option,

        key: option.id,
        onClick: () => {
          setValue(option);
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
    <Box as={"fieldset"} sx={{ $css: css }}>
      {legend}
      {optionsContainer}
    </Box>
  );
}

export default SelectInline;
