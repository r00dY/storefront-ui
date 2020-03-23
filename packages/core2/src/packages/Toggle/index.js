import React from "react";

import useToggleState from "../useToggleState";

export function useToggle(props) {
  let controller = useToggleState(props);

  const { value, setValue } = controller;

  const selectableProps = {
    selected: value,
    disabled: props.disabled,
    invalid: !!props.invalid,
    onClick: () => {
      setValue(!value);
    }
  };

  return {
    ...controller,
    selectableProps
  };
}

// function Toggle({ children, controller, ...props }) {
//     if (!controller) {
//         controller = useToggle(props);
//     }
//
//     try {
//         const itemElement = React.Children.only(children);
//         children = ({ selectableProps }) => React.cloneElement(itemElement, selectableProps);
//     } catch (error) {}
//
//     children = children(controller);
//
//     return children;
// }
//
// // TODO: accessibility
//
// export default SelectInline;
