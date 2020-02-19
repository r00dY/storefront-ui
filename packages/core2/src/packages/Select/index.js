import React, { useEffect, useRef, useState } from "react";
import Layer from "../Layer";
import Box from "../Box";

import { useSelect as useSelectDownshift } from "downshift";

import { responsiveValueMap } from "../index";

function useSelect({
  options,
  value,
  onChange,
  placeholder = "Select",
  ...restProps
}) {
  const downshiftSelect = useSelectDownshift({
    ...restProps,
    items: options,
    selectedItem: value,
    onSelectedItemChange: item => {
      if (onChange) {
        onChange(item.selectedItem);
      }
    }
  });

  const buttonPropsDownshift = downshiftSelect.getToggleButtonProps();

  const anchorRef = useRef(null);

  const buttonRef = element => {
    buttonPropsDownshift.ref(element);
    anchorRef.current = element;
  };

  const buttonProps = {
    ...buttonPropsDownshift,
    buttonRef: buttonRef,
    ref: undefined,
    children: downshiftSelect.selectedItem
      ? downshiftSelect.selectedItem.value
      : placeholder
  };

  delete buttonProps.ref;

  const newOptions = options.map((option, index) => {
    const itemDownshiftProps = downshiftSelect.getItemProps({
      index,
      item: option
    });
    itemDownshiftProps.forwardedRef = itemDownshiftProps.ref;
    delete itemDownshiftProps.ref;

    return {
      ...option,
      // itemProps: {
      //     ...downshiftSelect.getItemProps({index, item: option})
      // },
      selectableProps: {
        selected:
          downshiftSelect.selectedItem &&
          option.value === downshiftSelect.selectedItem.value,
        highlighted: downshiftSelect.highlightedIndex === index,
        option: option,
        value: option.value,
        key: option.value,
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

// This is the list which is inline (without button and Layer etc).
// todo: make Root styleable, make list tabbable (tabIndex from downshift is -1) etc.
function SelectInline$(props) {
  let { children, options, sx = {}, menuProps, ...restProps } = props;

  children = typeof children === "function" ? children({ options }) : children;

  // Default children
  children = children || options.map(o => <>{o.value}</>);

  const items = children.map((selectable, i) => (
    <Box {...options[i].itemProps}>
      {React.cloneElement(selectable, { ...options[i].selectableProps })}
    </Box>
  ));

  return (
    <Box {...menuProps} sx={sx.$root}>
      {items}
    </Box>
  );
}

// todo: Select$ is "Stateful", in future this should change into more consistent architecture
function Select$(props) {
  let { children, wrapper, config, sx, button, ...restProps } = props;
  const { selectProps, buttonProps, layerProps, ...rest } = useSelect(
    restProps
  );

  button = typeof button === "function" ? button(rest) : button;

  return (
    <>
      {React.cloneElement(button, { ...buttonProps })}
      <Layer {...layerProps} config={config}>
        {params => {
          const select = (
            <SelectInline$ {...selectProps} sx={sx}>
              {children}
            </SelectInline$>
          );

          let content = select;

          if (wrapper) {
            content = wrapper({ ...params, content: select });
          }

          return content;
        }}
      </Layer>
    </>
  );
}

function Select2(props) {
  let { sx = {}, ...restProps } = props;

  const { $layer, $button, $separator, $selectable, $wrapper, ...restSx } = sx;

  const {
    buttonProps,
    layerProps,
    menuProps,
    options,
    anchorRef,
    ...rest
  } = useSelect(restProps);

  // TODO: should be possible to make it a function
  // TODO: pass "selected", "disabled", "error", "placehoder", "selectedOption", "selectedValue"
  const button = React.cloneElement($button, {
    ...buttonProps,
    sx: { ...$button.props.sx, ...restSx }
  });

  // const wrapper = $wrapper;

  // console.log("anchorRef", anchorRef && anchorRef.current);

  //
  // console.log('tudum!!!', $layer.props.anchoredTo);
  //
  // // const anchoredTo = $layer.props.anchoredTo ? responsiveValueMap($layer.props.anchoredTo, x => x === "trigger" ? anchorRef : x) : anchorRef;
  //
  // const anchoredTo = anchorRef;
  //
  // console.log('anchoredTo', anchoredTo);

  // const anchoredTo = "window";

  const layer = React.cloneElement(
    $layer,
    { ...layerProps, anchoredTo: ["window", null, anchorRef] },
    params => {
      return (
        <Box {...menuProps}>
          {options.map((option, i) =>
            React.cloneElement($selectable, option.selectableProps)
          )}
        </Box>
      );

      // TODO: wrapper

      // const select = <SelectInline$ {...selectProps}>{children}</SelectInline$>;
      //
      // let content = select;
      //
      // if (wrapper) {
      //   content = wrapper({ ...params, content: select });
      // }
      //
      // return content;
    }
  );

  return (
    <>
      {button}
      {layer}
    </>
  );
}

export { useSelect, SelectInline$, Select$, Select2 };
