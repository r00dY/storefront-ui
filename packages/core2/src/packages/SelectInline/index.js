import React from "react";
import Box from "../Box";
import { createElement, getElementSpec, splitSx } from "../index";

import useSelectState from "../useSelectState";

const defaults = {
  label: ({ label }) => ({
    __type: Box,
    __props: {
      role: "group"
    },
    __children: label
  }),
  optionsContainer: ({ children }) => ({
    __type: Box,
    __children: children
  })
};

export function useSelectInline(props) {
  return useSelectState(props);
}

function SelectInline(props) {
  let controller;
  if (props.controller) {
    controller = props.controller;
  } else {
    controller = useSelectInline(props);
  }

  const { value, options, empty, setValue } = controller;

  let { label = "Select", sx, ...restProps } = props;

  const state = {
    label
  };

  const [css, customSx] = splitSx(sx);

  const labelElem = createElement(
    getElementSpec(customSx.$label, defaults.label, state)
  );

  const selectables = options.map(option => {
    const selectableProps = {
      selected: value && option.id === value.id,
      label: option.label,
      disabled: option.disabled,

      option: option,

      key: option.id,
      onClick: () => {
        setValue(option);
      }
    };

    if (React.isValidElement(sx.$selectable)) {
      return React.cloneElement(sx.$selectable, selectableProps, option.label);
    } else if (typeof sx.$selectable === "function") {
      return sx.$selectable(selectableProps);
    }
  });

  const optionsContainer = createElement(
    getElementSpec(customSx.$optionsContainer, defaults.optionsContainer, {
      ...state,
      children: selectables
    })
  );

  return (
    <Box as={"fieldset"} sx={{ $css: css }}>
      {labelElem}
      {optionsContainer}
    </Box>
  );
}

// TODO: accessibility

export default SelectInline;
