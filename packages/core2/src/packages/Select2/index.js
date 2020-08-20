import React from "react";

import Box from "../Box";

import Layer from "../Layer";

import { getSelectableProps } from "../SelectInline";

import useSelectState from "../useSelectState";

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
    selectable,

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
    container,
    placement,
    anchoredTo,
    header,
    footer,

    // item
    children
  } = props;

  const layerProps = {
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
    container,
    placement,
    anchoredTo,
    header,
    footer
  };

  if (!controller) {
    controller = useSelectState(props);
  }

  let {
    buttonProps,
    // layerProps,
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
    <Layer {...layerProps} button={React.cloneElement(button, buttonProps)}>
      {({ close }) => {
        let items = [];
        let selectableProps = getSelectableProps(controller, props, {
          allowUnselect: false
        });

        selectableProps = selectableProps.map(props => ({
          ...props,
          onClick: (...args) => {
            props.onClick(...args);
            close();
          }
        }));

        if (typeof children === "function") {
          let optionsArg = options.map((option, index) => ({
            ...option,
            selectableProps: selectableProps[index]
          }));

          items = children({ options: optionsArg });
        } else {
          options.forEach((option, i) => {
            const item =
              typeof selectable === "function"
                ? selectable({ option })
                : selectable;

            items.push(React.cloneElement(item, selectableProps[i])); // TODO: we need more flexibility with item look

            if (separator && i < options.length - 1) {
              items.push(
                React.cloneElement(separator, {
                  role: "separator",
                  key: "separator-" + i
                })
              );
            }
          });
        }

        return <Box>{items}</Box>;
      }}
    </Layer>
  );
}

export default Select2;
