import React, { useEffect, useRef, useState } from "react";
import ButtonRaw from "../ButtonRaw";

import { useSelect as useSelectDownshift } from "downshift";

import { jsx, responsiveValueMap } from "../index";
import InputContainer from "../InputContainer";

import useNormalizedOptions from "../useNormalizedOptions";

function useSelect(props) {
  /**
   * we keep a bit different naming:
   * - options
   * - value
   * - onChange
   */

  const {
    options,
    value,
    defaultValue,
    empty,
    onChange,
    isControlled
  } = useNormalizedOptions(props);

  // Stateful / Stateless
  const downshiftOptions = {
    ...props,
    items: options,
    onSelectedItemChange: item => {
      if (onChange) {
        onChange(item.selectedItem);
      }
    }
  };

  if (isControlled) {
    downshiftOptions.selectedItem = value;
  } else {
    downshiftOptions.initialSelectedItem = defaultValue;
  }

  const downshiftSelect = useSelectDownshift(downshiftOptions);

  const buttonPropsDownshift = downshiftSelect.getToggleButtonProps();

  const anchorRef = useRef(null);

  const buttonRef = element => {
    buttonPropsDownshift.ref(element);
    anchorRef.current = element;
  };

  const buttonProps = {
    ...buttonPropsDownshift,
    buttonRef: buttonRef
    // ref: undefined,
    // ref: buttonRef,
    // children: downshiftSelect.selectedItem
    //   ? downshiftSelect.selectedItem.value
    //   : placeholder
  };

  delete buttonProps.ref;

  const newOptions = options.map((option, index) => {
    const itemDownshiftProps = downshiftSelect.getItemProps({
      index,
      item: option
    });
    itemDownshiftProps._ref = itemDownshiftProps.ref;
    delete itemDownshiftProps.ref;

    return {
      ...option,
      selectableProps: {
        selected:
          downshiftSelect.selectedItem &&
          option.id === downshiftSelect.selectedItem.id,
        highlighted: downshiftSelect.highlightedIndex === index,
        option: option,
        value: option.id,
        key: option.id,
        children: option.label,
        ...itemDownshiftProps
      }
    };
  });

  const layerProps = {
    isOpen: downshiftSelect.isOpen
  };

  const selectProps = {
    options: newOptions,
    menuProps: downshiftSelect.getMenuProps(),
    layerProps
  };

  return {
    buttonProps,
    selectProps,
    menuProps: downshiftSelect.getMenuProps(),
    layerProps,
    anchorRef,
    options: newOptions,
    ...downshiftSelect
  };
}

function Select(props) {
  let {
    sx = {},
    label,
    placeholder = "Select value",
    onClick,

    options,
    value, // can be object or id
    defaultValue, // can be object or id
    onChange,
    allowEmpty = true,

    ...restProps
  } = props;

  let {
    $layer,
    $button,
    $separator,
    $selectable,
    $wrapper,
    $value,
    endEnhancer,
    ...restSx
  } = sx;

  const controller = useSelect({
    options,
    value, // can be object or id
    defaultValue, // can be object or id
    onChange,
    allowEmpty
  });

  let {
    buttonProps,
    layerProps,
    menuProps,
    anchorRef,
    isOpen,
    selectedItem,
    openMenu,
    ...rest
  } = controller;

  options = controller.options;

  // TODO: should be possible to make it a function
  // TODO: pass "selected", "disabled", "error", "placehoder", "selectedOption", "selectedValue"
  // const button = React.cloneElement($button, {
  //   ...buttonProps,
  //   sx: { ...$button.props.sx, ...restSx }
  // });

  const rootRef = useRef(null);

  // Calculate button content
  let buttonLabel = selectedItem ? selectedItem.label : placeholder;

  if ($value) {
    buttonLabel = $value({ selectedItem, placeholder });
  }

  const button = (
    <InputContainer
      sx={restSx}
      forceFocused={isOpen}
      rootRef={rootRef}
      empty={selectedItem === null}
      label={label || placeholder}
      showArrow={"enhancer"}
      cursor={"pointer"}
      onClick={(...args) => {
        openMenu();

        if (onClick) {
          onClick(...args);
        }
      }}
      {...restProps}
    >
      <ButtonRaw {...buttonProps} sx={{ cursor: "pointer" }}>
        {buttonLabel}
      </ButtonRaw>
    </InputContainer>
  );

  const layer = React.cloneElement(
    $layer,
    {
      ...layerProps,
      anchoredTo: responsiveValueMap($layer.props.anchoredTo || "trigger", x =>
        x === "trigger" ? rootRef : x
      )
    },
    params => {
      const children = [];
      options.forEach((option, i) => {
        children.push(React.cloneElement($selectable, option.selectableProps));
        if ($separator && i < options.length - 1) {
          children.push(
            React.cloneElement($separator, {
              role: "separator",
              key: "separator-" + i
            })
          );
        }
      });

      return React.cloneElement($wrapper, menuProps, children);
    }
  );

  return (
    <>
      {button}
      {layer}
    </>
  );
}

export { useSelect };
export default Select;
