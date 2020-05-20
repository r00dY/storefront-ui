import React from "react";

import useSelectState from "../useSelectState";

export function getSelectableProps(controller, props) {
  const { value, options, setValue, multi, isSelected } = controller;

  const selectableProps = options.map(option => {
    return {
      selected: isSelected(option),
      disabled: option.disabled,
      invalid: !!props.invalid,

      option: option,

      key: option.id,
      label: option.label,
      onClick: () => {
        if (controller.isSelected(option)) {
          if (!multi && props.allowEmpty !== false) {
            controller.unselectValue(option);
          }
        } else {
          controller.selectValue(option);
        }
      }
    };
  });

  return selectableProps;
}

export function getChildren(controller, props) {
  let children = props.children;

  try {
    const itemElement = React.Children.only(children);
    children = ({ selectableProps }) =>
      selectableProps.map(props => {
        return React.cloneElement(itemElement, props);
      });
  } catch (error) {}

  children = children(controller);

  return children;
}

export function useSelectInline(props) {
  let controller = useSelectState(props);

  return {
    ...controller,
    selectableProps: getSelectableProps(controller, props)
  };
}

export function SelectInline({ controller, ...props }) {
  if (!controller) {
    controller = useSelectInline(props);
  }

  return getChildren(controller, props);
}

// TODO: accessibility

export default SelectInline;
