import React from "react";

import useSelectState from "../useSelectState";

export function useSelectInline(props) {
  let controller = useSelectState(props);

  const { value, options, setValue, isSelected } = controller;

  const selectableProps = options.map(option => {
    return {
      selected: isSelected(option),
      disabled: option.disabled,
      invalid: !!props.invalid,

      option: option,

      key: option.id,
      label: option.label,
      onClick: () => {
        setValue(option);
      }
    };
  });

  return {
    ...controller,
    selectableProps
  };
}

function SelectInline({ children, controller, ...props }) {
  if (!controller) {
    controller = useSelectInline(props);
  }

  try {
    const itemElement = React.Children.only(children);
    // console.log(React.cloneElement(children));
    children = ({ selectableProps }) =>
      selectableProps.map(props => {
        return React.cloneElement(itemElement, props);
      });
  } catch (error) {}

  children = children(controller);

  return children;
}

// TODO: accessibility

export default SelectInline;
