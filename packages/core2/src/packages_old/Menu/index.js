import React, { useEffect, useRef, useState } from "react";
import Layer from "../../packages/Layer";

import { useSelect } from "downshift";

function useMenu(props) {
  const { options, onClick, value, onChange } = props;

  const downshiftSelect = useSelect({ items: options });

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
      selected: value === option.value,
      // test: console.log(downshiftSelect.highlightedIndex === index),
      highlighted: downshiftSelect.highlightedIndex === index,
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
    }
  }));

  const menuProps = {
    isOpen: downshiftSelect.isOpen,
    onRequestClose: () => setOpen(false),
    anchorRef: buttonPropsDownshift.buttonRef,
    options: newOptions,
    menuProps: downshiftSelect.getMenuProps()
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

function Menu$(props) {
  let { children, options, menuProps, ...restProps } = props;

  children =
    children || options.map(o => <div role={"menuitem"}>{o.value}</div>);

  return (
    <Layer {...restProps}>
      {params => (
        <div {...menuProps}>
          {typeof children === "function"
            ? children({ options, ...params })
            : children}
        </div>
      )}
    </Layer>
  );
}

function MenuButton({ button, menu, ...restProps }) {
  const { buttonProps, menuProps } = useMenu({ ...restProps });

  const buttonElem = React.cloneElement(button, buttonProps);
  const menuElem = React.cloneElement(menu, menuProps);

  return (
    <>
      {buttonElem}
      {menuElem}
    </>
  );
}

export default Menu$;

export { useMenu, MenuButton };
