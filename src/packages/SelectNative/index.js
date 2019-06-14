import React, { useState } from "react";
import PropTypes from "prop-types";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { SelectStyled, RootStyled, IconStyled } from "./styled-components";
import { getOverrides } from "../base/helpers/overrides";

/**
 * Problem with native select
 *
 * There's one layout problem with native select. It's automatic width always equals longest option. Only setting width explicitly solves this -> and it sucks.
 *
 * Let's think of using custom select which is MOBILE FIRST.
 *
 */

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
    overrides: {
      Root: RootOverride,
      Select: SelectOverride,
      Icon: IconOverride
    },
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

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [Select, selectProps] = getOverrides(SelectOverride, SelectStyled);
  const [Icon, iconProps] = getOverrides(IconOverride, IconStyled);

  return (
    <Root {...rootProps} {...$sharedProps}>
      <Select
        {...selectProps}
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
      </Select>

      <Icon {...iconProps} {...$sharedProps}>
        <svg
          data-baseweb="icon"
          viewBox="0 0 24 24"
          width="16"
          fill="currentColor"
        >
          <title>open</title>
          <path d="M12.7071 15.2929L17.1464 10.8536C17.4614 10.5386 17.2383 10 16.7929 10L7.20711 10C6.76165 10 6.53857 10.5386 6.85355 10.8536L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929Z" />
        </svg>
      </Icon>
    </Root>
  );
};

SelectNative$.defaultProps = {
  placeholder: "Select",
  labelKey: "label",
  valueKey: "value",
  error: false,
  disabled: false,
  required: false,
  size: "default",
  overrides: {}
};

SelectNative$.propTypes = {};

export { SelectNative$ };
