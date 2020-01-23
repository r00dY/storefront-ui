import React, { useEffect, useRef, useState } from "react";
import Layer from "../Layer";

function useMenu(props) {
  const { options, onClick } = props;

  console.log("OPTIONS", options);

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
      role: "menuitem",
      onClick: e => {
        setOpen(false);

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
  let { children, options, ...restProps } = props;

  children =
    children || options.map(o => <div role={"menuitem"}>{o.value}</div>);

  return (
    <Layer {...restProps}>
      {params => (
        <div role={"menuitem"}>
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

  console.log("rest props", restProps);

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
