import React, { useEffect, useRef, useState } from "react";
import Layer from "../../packages_old/Layer";
import Box from "../Box";

import { useSelect as useSelectDownshift } from "downshift";

function useSelect({ options, value, onChange, ...restProps }) {
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
    ref: undefined
  };

  const newOptions = options.map((option, index) => ({
    ...option,
    itemProps: {
      ...downshiftSelect.getItemProps({ index, item: option })
    },
    selectableProps: {
      selected:
        downshiftSelect.selectedItem &&
        option.value === downshiftSelect.selectedItem.value,
      highlighted: downshiftSelect.highlightedIndex === index
    }
  }));

  const layerProps = {
    isOpen: downshiftSelect.isOpen,
    anchorRef
  };

  const selectProps = {
    options: newOptions,
    menuProps: downshiftSelect.getMenuProps(),
    layerProps
  };

  return { buttonProps, selectProps, layerProps, ...downshiftSelect };
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

export { useSelect, SelectInline$, Select$ };
