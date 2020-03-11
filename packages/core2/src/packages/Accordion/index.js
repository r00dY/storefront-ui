import React, { useState } from "react";

import Box from "../Box";

export function useAccordion(props = {}) {
  let { isOpen, isOpenAtInit = false, onClick } = props;

  const [isOpenInternal, setIsOpenInternal] = useState(isOpenAtInit);

  const isControlled = typeof isOpen !== "undefined";

  isOpen = isControlled ? isOpen : isOpenInternal;

  const open = () => {
    if (isControlled) {
      return;
    }
    setIsOpenInternal(true);
  };

  const close = () => {
    if (isControlled) {
      return;
    }
    setIsOpenInternal(false);
  };

  const toggle = () => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  const buttonProps = {
    onClick: (...args) => {
      if (!isControlled) {
        toggle();
      }
      if (onClick) {
        onClick(...args);
      }
    },
    selected: isOpen
  };

  const showHideProps = {
    isOpen
  };

  return {
    isOpen,
    open,
    close,
    toggle,
    buttonProps,
    showHideProps
  };
}

function Accordion(props) {
  let {
    headerAs = "h6",
    children,
    controller,
    isOpen,
    isOpenAtInit,
    onOpen,
    onClose,
    ...restProps
  } = props;

  if (!controller) {
    controller = useAccordion(props);
  }

  children = React.Children.toArray(children);

  const button = children[0];
  const showHide = children[1];

  return (
    <Box {...restProps}>
      <Box as={headerAs}>
        {React.cloneElement(button, controller.buttonProps)}
      </Box>
      {React.cloneElement(showHide, controller.showHideProps)}
    </Box>
  );
}

export default Accordion;
