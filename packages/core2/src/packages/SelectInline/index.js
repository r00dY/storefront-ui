import React from "react";

import useSelectState from "../useSelectState";

export function getSelectableProps(controller, props, config = {}) {
  const { value, options, setValue, multi, isSelected } = controller;

  const { allowUnselect = true } = config; // this flag is important. In dropdown select even if we have allowEmpty=true, clicking on selected option doesn't unselect it. It does for SelectInline however.

  const selectableProps = options.map(option => {
    return {
      selected: isSelected(option),
      disabled: option.disabled,
      invalid: !!props.invalid,

      option: option,

      key: option.id,
      label: option.label,
      onClick: () => {
        if (option.disabled) {
          return;
        }
        if (controller.isSelected(option)) {
          if (multi || (props.allowEmpty !== false && allowUnselect)) {
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
    let item;

    if (props.selectable) {
      item = props.selectable;
    } else {
      item = React.Children.only(children);
    }

    children = ({ selectableProps }) =>
      selectableProps.map(props => {
        return React.cloneElement(
          typeof item === "function" ? item({ option: props.option }) : item,
          props
        );
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
