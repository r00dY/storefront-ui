import React, { useEffect, useRef, useState } from "react";
import Layer from "../Layer";

function useMenu(props) {
  const { options, onClick, value, onChange } = props;

  const [isOpen, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const buttonProps = {
    buttonRef,
    onClick: () => {
      setOpen(true);
    }
  };

  const newOptions = options.map((option, index) => ({
    ...option,
    itemProps: {
      selected: value === option.value,
      onClick: e => {
        setOpen(false);

        if (onChange) {
          onChange(option.value);
        }

        if (onClick) {
          onClick(option.value, option, e);
        }
      }
    }
  }));

  const menuProps = {
    isOpen: isOpen,
    onRequestClose: () => setOpen(false),
    anchorRef: buttonRef,
    options: newOptions
  };

  useEffect(() => {
    const onDocumentKeyPress = evt => {
      if (evt.key !== "Escape") {
        return;
      }

      // Ignore events that have been `event.preventDefault()` marked.
      if (event.defaultPrevented) {
        return;
      }

      setOpen(false);
    };

    document.addEventListener("keyup", onDocumentKeyPress);

    return () => {
      document.removeEventListener("keyup", onDocumentKeyPress);
    };
  });

  return { buttonProps, menuProps };
}

function Menu$(props) {
  let { children, options, menuProps, ...restProps } = props;

  children =
    children || options.map(o => <div role={"menuitem"}>{o.value}</div>);

  return (
    <Layer {...restProps}>
      {params => (
        <>
          {typeof children === "function"
            ? children({ options, ...params })
            : children}
        </>
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
