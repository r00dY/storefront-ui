import React, { useEffect, useRef, useState } from "react";
import ButtonRaw from "../ButtonRaw";

import { useSelect as useSelectDownshift } from "downshift";

import { jsx, responsiveValueMap } from "../index";
import Box from "../Box";

import Layer from "../Layer";

import { getSelectableProps } from "../SelectInline";

import useSelectState from "../useSelectState";

function useSelect(props) {
  /**
   * we keep a bit different naming:
   * - options
   * - value
   * - onChange
   */

  const selectState = useSelectState(props);

  const { options, value, setValue } = selectState;

  // Stateful / Stateless
  const downshiftOptions = {
    items: options,
    selectedItem: value,
    onSelectedItemChange: item => {
      setValue(item.selectedItem);
    }
  };

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
        selected: value && option.id === value.id,
        highlighted: downshiftSelect.highlightedIndex === index,
        disabled: !!option.disabled,
        option: option,
        value: option.id,
        key: option.id,
        label: option.label,
        ...itemDownshiftProps
      }
    };
  });

  const layerProps = {
    isOpen: downshiftSelect.isOpen
  };

  return {
    ...downshiftSelect,
    ...selectState,

    // TODO: open, close functions

    options: newOptions,
    menuProps: downshiftSelect.getMenuProps(),
    layerProps,
    anchorRef,
    buttonProps
  };
}

/**
 * Select can be styled as 'InputContainer' and also as with a separate custom button.
 * We should clean this up and especially clean up InputContainer concept.
 *
 */
function Select2(props) {
  let {
    label,
    placeholder = "Select value",
    onClick,
    controller,
    button,
    separator,

    // layer props
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    animationTime,
    animationEase,
    backgroundColor,
    root,
    placement,

    // item
    children
  } = props;

  const layerPropsLook = {
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    animationTime,
    animationEase,
    backgroundColor,
    root,
    placement
  };

  if (!controller) {
    controller = useSelectState(props);
  }

  let {
    buttonProps,
    layerProps,
    menuProps,
    anchorRef,
    options,
    value,
    isOpen,
    openMenu
  } = controller;

  options = controller.options;

  // TODO: should be possible to make it a function
  // TODO: pass "selected", "disabled", "error", "placehoder", "selectedOption", "selectedValue"
  // const button = React.cloneElement($button, {
  //   ...buttonProps,
  //   sx: { ...$button.props.sx, ...restSx }
  // });

  button = typeof button === "function" ? button(controller) : button;

  return (
    <Layer {...layerPropsLook} button={React.cloneElement(button, buttonProps)}>
      {({ close }) => {
        const items = [];

        const selectableProps = getSelectableProps(controller, props);

        options.forEach((option, i) => {
          items.push(
            React.cloneElement(children, {
              ...selectableProps[i],
              onClick: (...args) => {
                selectableProps[i].onClick(...args);
                close();
              }
            })
          ); // TODO: we need more flexibility with item look
          if (separator && i < options.length - 1) {
            items.push(
              React.cloneElement(separator, {
                role: "separator",
                key: "separator-" + i
              })
            );
          }
        });

        return <Box>{items}</Box>;
      }}
    </Layer>
  );

  //
  //
  // const rootRef = useRef(null);
  //
  // // Calculate button content
  // let buttonLabel = value ? value.label : placeholder;
  //
  // if ($value) {
  //     buttonLabel = $value({value, placeholder});
  // }
  //
  // const button = (
  //     <InputContainer
  //         sx={restSx}
  //         forceFocused={isOpen}
  //         rootRef={rootRef}
  //         empty={value === null}
  //         label={label || placeholder}
  //         showArrow={"enhancer"}
  //         cursor={"pointer"}
  //         onClick={(...args) => {
  //             openMenu();
  //
  //             if (onClick) {
  //                 onClick(...args);
  //             }
  //         }}
  //         {...restProps}
  //     >
  //         <ButtonRaw {...buttonProps} sx={{cursor: "pointer"}}>
  //             {buttonLabel}
  //         </ButtonRaw>
  //     </InputContainer>
  // );
  //
  // const layer = React.cloneElement(
  //     $layer,
  //     {
  //         ...layerProps,
  //         anchoredTo: responsiveValueMap($layer.props.anchoredTo || "trigger", x =>
  //             x === "trigger" ? rootRef : x
  //         )
  //     },
  //     params => {
  //         const children = [];
  //         options.forEach((option, i) => {
  //             children.push(React.cloneElement($selectable, option.selectableProps));
  //             if ($separator && i < options.length - 1) {
  //                 children.push(
  //                     React.cloneElement($separator, {
  //                         role: "separator",
  //                         key: "separator-" + i
  //                     })
  //                 );
  //             }
  //         });
  //
  //         return React.cloneElement($wrapper, menuProps, children);
  //     }
  // );
  //
  // return (
  //     <>
  //         {button}
  //         {layer}
  //     </>
  // );
}

export { useSelect };
export default Select2;
