import React from "react";
import { getChildren, getSelectableProps } from "../SelectInline";
import useMultiSelectState from "../useMultiSelectState";

export function useMultiSelectInline(props) {
  let controller = useMultiSelectState(props);

  return {
    ...controller,
    selectableProps: getSelectableProps(controller, props)
  };
}

export function MultiSelectInline({ controller, ...props }) {
  if (!controller) {
    controller = useMultiSelectInline(props);
  }

  return getChildren(controller, props);
}

export default MultiSelectInline;
