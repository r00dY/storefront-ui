import React from "react";
import Box from "../Box";
import { createElement, getElementSpec, splitSx } from "../index";

import useSelectState from "../useSelectState";

const defaults = {
  label: ({ label }) => ({
    __type: Box,
    __children: label,
    __props: {
      as: "legend"
    }
  }),
  labelHidden: ({ label }) => ({
    __type: Box,
    __children: label,
    __props: {
      as: "legend"
    },
    position: "absolute !important",
    width: "1px",
    height: "1px",
    overflow: "hidden",
    whiteSpace: "nowrap"
  }),
  optionsContainer: ({ children }) => ({
    __type: Box,
    __children: children
  })
};
//
// export function useSelectInline(props) {
//   return useSelectState(props);
// }

export function useSelectInline(props) {
  let controller = useSelectState(props);

  const { value, options, setValue } = controller;

  const selectableProps = options.map(option => {
    return {
      selected: value && (option.id === value || option.id === value.id),
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

  const restProps = useSelectState.filterProps(props);

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

//
//
// function SelectInline(props) {
//   let controller;
//   if (props.controller) {
//     controller = props.controller;
//   } else {
//     controller = useSelectInline(props);
//   }
//
//   const { value, options, empty, setValue } = controller;
//
//   let { label = "Select", sx, ...restProps } = props;
//
//   const state = {
//     label
//   };
//
//   const [css, customSx] = splitSx(sx);
//
//   const labelElem = createElement(
//     getElementSpec(
//       customSx.$label,
//       customSx.$hideLabel ? defaults.labelHidden : defaults.label,
//       state
//     )
//   );
//
//   const selectables = options.map(option => {
//     const selectableProps = {
//       selected: value && option.id === value.id,
//       label: option.label,
//       disabled: option.disabled,
//
//       option: option,
//
//       key: option.id,
//       onClick: () => {
//         setValue(option);
//       }
//     };
//
//     if (React.isValidElement(sx.$selectable)) {
//       return React.cloneElement(sx.$selectable, selectableProps, option.label);
//     } else if (typeof sx.$selectable === "function") {
//       return sx.$selectable(selectableProps);
//     }
//   });
//
//   const optionsContainer = createElement(
//     getElementSpec(
//       customSx.$optionsContainer,
//       defaults.optionsContainer,
//       {
//         ...state,
//         children: selectables
//       },
//       {
//         role: "group"
//       }
//     )
//   );
//
//   return (
//     <Box as={"fieldset"} sx={{ $css: css }}>
//       {labelElem}
//       {optionsContainer}
//     </Box>
//   );
// }

// TODO: accessibility

export default SelectInline;
