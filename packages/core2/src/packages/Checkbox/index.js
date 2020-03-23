import React from "react";
import useToggleState from "../useToggleState";

function Checkbox({ children, ...props }) {
  let controller = useToggleState(props);

  let selectable = React.Children.only(children);

  selectable = React.cloneElement(selectable, {
    ...props,
    selected: controller.value,
    onClick: () => {
      controller.setValue(!controller.value);
    }
  });
  return selectable;
}

// TODO: accessibility

export default Checkbox;
