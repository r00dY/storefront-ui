import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { SelectStyled } from "./styled-components";

import {
  getInputStyles,
  getInputContainerStyles
} from "../base/input/styled-components";
import { styled } from "../base/styles";

const Container = styled("div", props => ({
  ...getInputStyles(props),
  ...getInputContainerStyles(props)
}));

const SelectNative$ = props => {
  const {
    options,
    placeholder,
    disabled,
    required,
    overrides,
    ...restProps
  } = props;

  const $sharedProps = {
    $isFocused: false,
    $adjoined: false,
    $error: false,
    $disabled: false,
    $size: "default"
  };

  return (
    <Container {...$sharedProps}>
      <SelectStyled {...restProps}>
        {placeholder && (
          <option disabled selected>
            {placeholder}
          </option>
        )}
        {options.map(({ value, label, selected }) => (
          <option key={value} value={value} selected={selected}>
            {label}
          </option>
        ))}
      </SelectStyled>
    </Container>
  );
};

export { SelectNative$ };
