import React, { useState } from "react";
import PropTypes from "prop-types";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { SelectStyled } from "./styled-components";

import {
  getInputPadding,
  getInputContainerStyles
} from "../base/input/styled-components";

import { styled } from "../base/styles";

const Container = styled("div", props => ({
  ...getInputContainerStyles(props)
}));

const getOptionFields = (option, props) => {
  if (typeof option === "undefined" || option === null) {
    return ["", ""];
  }

  let value, label;

  if (typeof option === "object") {
    label = option[props.labelKey];
    value = option[props.valueKey] || label;
  } else {
    value = option;
    label = option;
  }

  return [value, label];
};

const SelectNative$ = props => {
  const {
    options,
    value,
    onChange,
    placeholder,
    disabled,
    required,
    labelKey,
    valueKey,
    overrides,
    autoFocus,
    onFocus,
    onBlur,
    error,
    size,
    ...restProps
  } = props;

  const [isFocused, setFocused] = useState(autoFocus || false);

  const onFocus_ = e => {
    setFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const onBlur_ = e => {
    setFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const $sharedProps = {
    $isFocused: isFocused,
    $disabled: disabled,
    $error: error,
    $required: required,
    $size: size,
    $adjoined: "none"
  };

  const selectedValue = getOptionFields(value, props)[0];

  return (
    <Container {...$sharedProps}>
      <SelectStyled
        {...$sharedProps}
        {...restProps}
        value={selectedValue}
        disabled={disabled}
        onChange={e => {
          let newSelectedOption = options.find(x => {
            return getOptionFields(x, props)[0] === e.target.value;
          });

          if (onChange) {
            onChange(newSelectedOption);
          }
        }}
        onBlur={onBlur_}
        onFocus={onFocus_}
      >
        {placeholder && (
          <option disabled value={""}>
            {placeholder}
          </option>
        )}
        {options.map(option => {
          let value, label;

          if (typeof option === "object") {
            label = option[labelKey];
            value = option[valueKey] || label;
          } else {
            value = option;
            label = option;
          }

          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </SelectStyled>
    </Container>
  );
};

SelectNative$.defaultProps = {
  placeholder: "Select",
  labelKey: "label",
  valueKey: "value",
  error: false,
  disabled: false,
  required: false,
  size: "default"
};

SelectNative$.propTypes = {};

export { SelectNative$ };
