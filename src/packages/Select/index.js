import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import {
  RootStyled,
  ModalBodyStyled,
  PopoverBodyStyled,
  IconContainerStyled
} from "./styled-components";
import { getOverrides } from "../base/helpers/overrides";
import { Popover$, StatefulPopover$ } from "../Popover";
import { ButtonRaw$ } from "../ButtonRaw";

/**
 * Problems with native select
 *
 * - There's one layout problem with native select. It's automatic width always equals longest option. Only setting width explicitly solves this -> and it sucks.
 * - select renders option label. Rest of stuff (like down arrow etc) must be positioned absolute and this should be taken into account in select padding. Unfortunately you can't open native select with JS, so having arrow not "inside select rectangle" will make cliking on arrow NOT open select, which definitely sucks.
 *
 * TODO: correct so that icon is not absolute and clicking on it will focus the input!!!
 */

const defaultIcon = () => (
  <svg data-baseweb="icon" viewBox="0 0 24 24" width="16" fill="currentColor">
    <title>open</title>
    <path d="M12.7071 15.2929L17.1464 10.8536C17.4614 10.5386 17.2383 10 16.7929 10L7.20711 10C6.76165 10 6.53857 10.5386 6.85355 10.8536L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929Z" />
  </svg>
);

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

const Select$ = props => {
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
      Button: ButtonOverride,
      IconContainer: IconContainerOverride,
      Icon: Icon,
      Item: Item,
      Inner: Inner,
      Popover: Popover,
      Modal: Modal,
      ModalBody: ModalBodyOverride,
      PopoverBody: PopoverBodyOverride,
      Separator: Separator
    },
    autoFocus,
    onFocus,
    onBlur,
    error,
    size,
    onRequestClose,
    onClick,
    open,
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

  const close = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [IconContainer, iconProps] = getOverrides(
    IconContainerOverride,
    IconContainerStyled
  );
  const [ModalBody, modalBodyProps] = getOverrides(
    ModalBodyOverride,
    ModalBodyStyled
  );
  const [PopoverBody, popoverBodyProps] = getOverrides(
    PopoverBodyOverride,
    PopoverBodyStyled
  );

  let items = [];

  options.forEach((option, index) => {
    items.push(
      <ButtonRaw$
        css={css`
          display: block;
          width: 100%;
          &:focus {
            outline: none;
          }
        `}
        onClick={() => {
          close();
          if (onChange) {
            onChange(option);
          }
        }}
      >
        {Item({ option, selected: option === value })}
      </ButtonRaw$>
    );

    if (index < options.length - 1 && Separator) {
      items.push(Separator());
    }
  });

  const inner = Inner({ value });

  const popoverProps = {
    isOpen: open && window.innerWidth >= 768,
    onClick: () => {
      if (onClick) {
        onClick();
      }
    },
    onClickOutside: close,
    onEsc: close,
    onBlur: close,
    content: <PopoverBody {...popoverBodyProps}>{items}</PopoverBody>,
    accessibilityType: "tooltip",
    placement: Popover$.PLACEMENT.bottomLeft,
    children: (
      <Root
        {...rootProps}
        {...$sharedProps}
        onBlur={onBlur_}
        onFocus={onFocus_}
      >
        {inner}

        <IconContainer {...iconProps} {...$sharedProps}>
          {Icon ? Icon($sharedProps) : defaultIcon($sharedProps)}
        </IconContainer>
      </Root>
    )
  };

  const modalProps = {
    config: {
      mode: "bottom",
      height: "auto"
    },
    isOpen: open && window.innerWidth < 768,
    onRequestClose: close,
    children: <ModalBodyStyled {...modalBodyProps}>{items}</ModalBodyStyled>
  };

  return (
    <>
      {Popover({ popoverProps })}
      {Modal({ modalProps })}
    </>
  );
};

Select$.defaultProps = {
  placeholder: "Select",
  labelKey: "label",
  valueKey: "value",
  error: false,
  disabled: false,
  required: false,
  size: "default",
  overrides: {}
};

Select$.propTypes = {};

const StatefulSelect$ = props => {
  const [value, setValue] = useState(props.initValue);
  const [open, setOpen] = useState(false);

  return (
    <Select$
      {...props}
      value={value}
      onChange={newValue => {
        setValue(newValue);

        if (props.onChange) {
          props.onChange(newValue);
        }
      }}
      onRequestClose={() => setOpen(false)}
      onClick={() => setOpen(!open)}
      open={open}
    />
  );
};

export { Select$, StatefulSelect$ };
