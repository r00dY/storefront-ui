import React, { useEffect, useRef, useState } from "react";
import Layer from "../Layer";

import { useSelect as useSelectDownshift } from "downshift";

function useSelect(props) {
  const { options, onClick, value, onChange } = props;

  const downshiftSelect = useSelectDownshift({ items: options });

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

  return { buttonProps, selectProps, layerProps };
}

// This is the list which is inline (without button and Layer etc).
// todo: make Root styleable, make list tabbable (tabIndex from downshift is -1) etc.
function SelectInline$(props) {
  let { children, options, menuProps, ...restProps } = props;

  children = typeof children === "function" ? children({ options }) : children;

  // Default children
  children = children || options.map(o => <>{o.value}</>);

  const items = children.map((selectable, i) => (
    <div {...options[i].itemProps}>
      {React.cloneElement(selectable, { ...options[i].selectableProps })}
    </div>
  ));

  return <div {...menuProps}>{items}</div>;
}

function Select$(props) {
  let {
    children,
    options,
    menuProps,
    layerProps,
    wrapper,
    ...restProps
  } = props;

  return (
    <>
      <Layer {...layerProps} {...restProps}>
        {params => {
          const select = (
            <SelectInline$
              options={options}
              menuProps={menuProps}
              options={options}
            >
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
