import React, { useEffect, useRef, useState } from "react";
import Layer from "../Layer";

import { useSelect as useSelectDownshift } from "downshift";

function useSelect(props) {
  const { options, onClick, value, onChange } = props;

  const downshiftSelect = useSelectDownshift({ items: options });

  const [isOpen, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const buttonPropsDownshift = downshiftSelect.getToggleButtonProps();
  buttonPropsDownshift.buttonRef = buttonPropsDownshift.ref;
  delete buttonPropsDownshift.ref;

  const buttonProps = {
    // buttonRef,
    // onClick: () => {
    //   setOpen(true);
    // },
    ...buttonPropsDownshift
  };

  const newOptions = options.map((option, index) => ({
    ...option,
    itemProps: {
      ...downshiftSelect.getItemProps({ index, item: option })

      // onClick: e => {
      //   setOpen(false);
      //
      //   if (onChange) {
      //     onChange(option.value);
      //   }
      //
      //   if (onClick) {
      //     onClick(option.value, option, e);
      //   }
      // },
      // role: "menuitem"
    },
    selectableProps: {
      selected:
        downshiftSelect.selectedItem &&
        option.value === downshiftSelect.selectedItem.value,
      highlighted: downshiftSelect.highlightedIndex === index
    }
  }));

  const menuProps = {
    isOpen: downshiftSelect.isOpen,
    onRequestClose: () => setOpen(false),
    anchorRef: buttonPropsDownshift.buttonRef,
    options: newOptions,
    menuProps: {
      ...downshiftSelect.getMenuProps()
    }
  };

  // useEffect(() => {
  //   const onDocumentKeyPress = evt => {
  //     if (evt.key !== "Escape") {
  //       return;
  //     }
  //
  //     // Ignore events that have been `event.preventDefault()` marked.
  //     if (event.defaultPrevented) {
  //       return;
  //     }
  //
  //     setOpen(false);
  //   };
  //
  //   document.addEventListener("keyup", onDocumentKeyPress);
  //
  //   return () => {
  //     document.removeEventListener("keyup", onDocumentKeyPress);
  //   };
  // });

  return { buttonProps, menuProps };
}

function Select$(props) {
  let { children, options, menuProps, ...restProps } = props;

  return (
    <Layer {...restProps}>
      {params => {
        // If children are function
        children =
          typeof children === "function"
            ? children({ options, ...params })
            : children;

        // Default children
        children = children || options.map(o => <>{o.value}</>);

        const items = children.map((selectable, i) => (
          <div {...options[i].itemProps}>
            {React.cloneElement(selectable, { ...options[i].selectableProps })}
          </div>
        ));

        return <div {...menuProps}>{items}</div>;
      }}
    </Layer>
  );
}

function SelectButton({ button, menu, ...restProps }) {
  const { buttonProps, menuProps } = useSelect({ ...restProps });

  const buttonElem = React.cloneElement(button, buttonProps);
  const menuElem = React.cloneElement(menu, menuProps);

  return (
    <>
      {buttonElem}
      {menuElem}
    </>
  );
}

export default Select$;

export { useSelect, SelectButton };
