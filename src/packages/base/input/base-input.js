/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from "react";

import { getOverrides } from "../helpers/overrides.js";

import { ADJOINED, SIZE, CUSTOM_INPUT_TYPE } from "./constants.js";
import {
  InputContainer as StyledInputContainer,
  Input as StyledInput,
  ClearButtonContainerStyled
} from "./styled-components.js";
import type { BaseInputPropsT, InternalStateT } from "./types.js";
import { getSharedProps } from "./utils.js";

import createEvent from "../utils/create-event.js";

const NullComponent = () => null;

class BaseInput<T: EventTarget> extends React.Component<
  BaseInputPropsT<T>,
  InternalStateT
> {
  static defaultProps = {
    "aria-label": null,
    "aria-labelledby": null,
    "aria-describedby": null,
    adjoined: ADJOINED.none,
    autoComplete: "on",
    autoFocus: false,
    disabled: false,
    error: false,
    name: "",
    inputRef: null, //(React.createRef(): { current: HTMLInputElement | null }),
    onBlur: () => {},
    onChange: () => {},
    onKeyDown: () => {},
    onKeyPress: () => {},
    onKeyUp: () => {},
    onFocus: () => {},
    overrides: {},
    placeholder: "",
    required: false,
    size: SIZE.default,
    type: "text",
    hideSpinButtons: true
  };

  state = {
    isFocused: this.props.autoFocus || false
  };

  inputRef = this.props.inputRef || React.createRef();

  componentDidMount() {
    const { autoFocus, clearable } = this.props;

    if (this.inputRef.current) {
      if (autoFocus) {
        this.inputRef.current.focus();
      }

      if (this.inputRef.current && clearable) {
        this.inputRef.current.addEventListener("keydown", this.onInputKeyDown);
      }
    }
  }

  componentWillUnmount() {
    const { clearable } = this.props;

    if (clearable && this.inputRef.current) {
      this.inputRef.current.removeEventListener("keydown", this.onInputKeyDown);
    }
  }

  onInputKeyDown = (e: SyntheticKeyboardEvent<T>) => {
    if (this.props.clearable && e.key === "Escape" && this.inputRef.current) {
      this.clearValue();
      // prevent event from closing modal or doing something unexpected
      e.stopPropagation();
    }
  };

  clearValue() {
    // trigger a fake input change event (as if all text was deleted)

    const input = this.inputRef.current;
    if (input) {
      const nativeInputValue = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      );
      if (nativeInputValue) {
        const nativeInputValueSetter = nativeInputValue.set;
        if (nativeInputValueSetter) {
          nativeInputValueSetter.call(input, "");
          const event = createEvent("input");
          input.dispatchEvent(event);
        }
      }
    }
  }

  onFocus = (e: SyntheticFocusEvent<T>) => {
    this.setState({ isFocused: true });
    this.props.onFocus(e);
  };

  onBlur = (e: SyntheticFocusEvent<T>) => {
    this.setState({ isFocused: false });
    this.props.onBlur(e);
  };

  getInputProps = () => {
    const {
      autoComplete,
      disabled,
      error,
      id,
      inputRef,
      $ref,
      name,
      onChange,
      onKeyDown,
      onKeyPress,
      onKeyUp,
      placeholder,
      required,
      rows,
      type,
      value
    } = this.props;

    return {
      $ref: this.inputRef,
      "aria-label": this.props["aria-label"],
      "aria-labelledby": this.props["aria-labelledby"],
      "aria-describedby": this.props["aria-describedby"],
      "aria-invalid": !!error,
      "aria-required": required,
      required: required,
      autoComplete,
      disabled,
      id,
      name,
      onBlur: this.onBlur,
      onChange,
      onFocus: this.onFocus,
      onKeyDown,
      onKeyPress,
      onKeyUp,
      placeholder,
      type,
      value,
      ...(type === CUSTOM_INPUT_TYPE.textarea ? { rows } : {})
    };
  };

  onClearButtonClick = () => {
    // console.log(this.props.inputRef.current);

    if (this.inputRef.current) {
      this.clearValue();
      // return focus to the input after click
      this.inputRef.current.focus();
    }
  };

  renderClear() {
    const { clearable, value, disabled, overrides = {}, size } = this.props;
    if (!clearable || !value || !value.length || disabled) {
      return null;
    }

    const [ClearButtonContainer, clearButtonContainerProps] = getOverrides(
      overrides.ClearButtonContainerOverride,
      ClearButtonContainerStyled
    );

    return (
      <ClearButtonContainer {...clearButtonContainerProps}>
        <div
          role={"button"}
          onClick={this.onClearButtonClick}
          style={{ opacity: 0.5, cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
      </ClearButtonContainer>
    );
  }

  render() {
    const {
      value,
      type,
      overrides: {
        InputContainer: InputContainerOverride,
        Input: InputOverride,
        Before: BeforeOverride,
        After: AfterOverride,
        ClearButtonContainer: ClearButtonContainerOverride
      }
    } = this.props;

    const sharedProps = getSharedProps(this.props, this.state);

    const [InputContainer, inputContainerProps] = getOverrides(
      InputContainerOverride,
      StyledInputContainer
    );
    const [Input, inputProps] = getOverrides(InputOverride, StyledInput);
    const [Before, beforeProps] = getOverrides(BeforeOverride, NullComponent);
    const [After, afterProps] = getOverrides(AfterOverride, NullComponent);
    // const [ClearButtonContainer, clearButtonContainerProps] = getOverrides(ClearButtonContainerOverride, ClearButtonContainerStyled);

    return (
      <InputContainer
        data-baseweb={this.props["data-baseweb"] || "base-input"}
        {...sharedProps}
        {...inputContainerProps}
      >
        <Before {...sharedProps} {...beforeProps} />
        <Input {...sharedProps} {...this.getInputProps()} {...inputProps}>
          {type === CUSTOM_INPUT_TYPE.textarea ? value : null}
        </Input>

        {this.renderClear()}
        <After {...sharedProps} {...afterProps} />
      </InputContainer>
    );
  }
}

export default BaseInput;
