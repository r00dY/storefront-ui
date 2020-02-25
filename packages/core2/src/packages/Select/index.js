import React, { useEffect, useRef, useState } from "react";
import Layer from "../Layer";
import Box from "../Box";
import ButtonRaw from "../ButtonRaw";

import { useSelect as useSelectDownshift } from "downshift";

import { jsx, responsiveValueMap } from "../index";
import InputContainer from "../InputContainer";

function useSelect(props) {
  const {
    options,
    value,
    onChange,
    initialValue,
    // placeholder = "Select",
    ...restProps
  } = props;

  /**
   * we keep a bit different naming:
   * - options
   * - value
   * - onChange
   */

  // Stateful / Stateless
  const downshiftSelect = useSelectDownshift({
    ...restProps,
    items: options,
    selectedItem: value,
    initialSelectedItem: initialValue,
    onSelectedItemChange: item => {
      if (onChange) {
        onChange(item.selectedItem);
      }
    }
  });

  const buttonPropsDownshift = downshiftSelect.getToggleButtonProps();

  const anchorRef = useRef(null);

  const buttonRef = element => {
    buttonPropsDownshift.ref(element);
    anchorRef.current = element;
  };

  const buttonProps = {
    ...buttonPropsDownshift,
    buttonRef: buttonRef
    // ref: undefined,
    // ref: buttonRef,
    // children: downshiftSelect.selectedItem
    //   ? downshiftSelect.selectedItem.value
    //   : placeholder
  };

  delete buttonProps.ref;

  const newOptions = options.map((option, index) => {
    const itemDownshiftProps = downshiftSelect.getItemProps({
      index,
      item: option
    });
    itemDownshiftProps.forwardedRef = itemDownshiftProps.ref;
    delete itemDownshiftProps.ref;

    return {
      ...option,
      selectableProps: {
        selected:
          downshiftSelect.selectedItem &&
          option.value === downshiftSelect.selectedItem.value,
        highlighted: downshiftSelect.highlightedIndex === index,
        option: option,
        value: option.value,
        key: option.value,
        ...itemDownshiftProps
      }
    };
  });

  const layerProps = {
    isOpen: downshiftSelect.isOpen
  };

  const selectProps = {
    options: newOptions,
    menuProps: downshiftSelect.getMenuProps(),
    layerProps
  };

  return {
    buttonProps,
    selectProps,
    menuProps: downshiftSelect.getMenuProps(),
    layerProps,
    anchorRef,
    options: newOptions,
    ...downshiftSelect
  };
}

// This is the list which is inline (without button and Layer etc).
// todo: make Root styleable, make list tabbable (tabIndex from downshift is -1) etc.
function SelectInline$(props) {
  let { children, options, sx = {}, menuProps, ...restProps } = props;

  children = typeof children === "function" ? children({ options }) : children;

  // Default children
  children = children || options.map(o => <>{o.value}</>);

  const items = children.map((selectable, i) => (
    <Box {...options[i].itemProps}>
      {React.cloneElement(selectable, { ...options[i].selectableProps })}
    </Box>
  ));

  return (
    <Box {...menuProps} sx={sx.$root}>
      {items}
    </Box>
  );
}

// todo: Select$ is "Stateful", in future this should change into more consistent architecture
function Select$(props) {
  let { children, wrapper, config, sx, button, ...restProps } = props;
  const { selectProps, buttonProps, layerProps, ...rest } = useSelect(
    restProps
  );

  button = typeof button === "function" ? button(rest) : button;

  return (
    <>
      {React.cloneElement(button, { ...buttonProps })}
      <Layer {...layerProps} config={config}>
        {params => {
          const select = (
            <SelectInline$ {...selectProps} sx={sx}>
              {children}
            </SelectInline$>
          );

          let content = select;

          if (wrapper) {
            content = wrapper({ ...params, content: select });
          }

          return content;
        }}
      </Layer>
    </>
  );
}

// function ButtonSelect$(props) {
//   let { onChange, ...restProps } = props;
//
//   let [empty, setEmpty] = useState(true);
//
//   if (props.value) {
//     empty = props.value === "";
//   }
//
//   return (
//       <InputContainer
//           {...props}
//           empty={empty}
//           label={props.label || props.placeholder}
//       >
//         <ButtonRaw
//             sx={{ width: "100%", height: "100%" }}
//         >
//           Test
//         </ButtonRaw>
//       </InputContainer>
//   );
// }

function Select2(props) {
  let { sx = {}, label, placeholder = "Select value", ...restProps } = props;

  const {
    $layer,
    $button,
    $separator,
    $selectable,
    $wrapper,
    $value,
    endEnhancer,
    ...restSx
  } = sx;

  const {
    buttonProps,
    layerProps,
    menuProps,
    options,
    anchorRef,
    isOpen,
    selectedItem
  } = useSelect(restProps);

  // TODO: should be possible to make it a function
  // TODO: pass "selected", "disabled", "error", "placehoder", "selectedOption", "selectedValue"
  // const button = React.cloneElement($button, {
  //   ...buttonProps,
  //   sx: { ...$button.props.sx, ...restSx }
  // });

  const rootRef = useRef(null);

  // Calculate button content
  let value = selectedItem ? selectedItem.value : placeholder;

  if ($value) {
    value = $value({ selectedItem, placeholder });
  }

  // children: downshiftSelect.selectedItem
  //   ? downshiftSelect.selectedItem.value
  //   : placeholder

  // const value = $value || value;

  const button = (
    <InputContainer
      sx={restSx}
      forceFocused={isOpen}
      rootRef={rootRef}
      empty={selectedItem === null}
      label={label || placeholder}
      showArrow={"enhancer"}
    >
      <ButtonRaw {...buttonProps}>{value}</ButtonRaw>
    </InputContainer>
  );

  // console.log(buttonProps.ref);

  const layer = React.cloneElement(
    $layer,
    {
      ...layerProps,
      anchoredTo: responsiveValueMap($layer.props.anchoredTo || "trigger", x =>
        x === "trigger" ? rootRef : x
      )
    },
    params => {
      const children = [];
      options.forEach((option, i) => {
        children.push(React.cloneElement($selectable, option.selectableProps));
        if ($separator) {
          children.push(React.cloneElement($separator, { role: "separator" }));
        }
      });

      return React.cloneElement($wrapper, menuProps, children);
    }
  );

  return (
    <>
      {button}
      {layer}
    </>
  );
}

export { useSelect, SelectInline$, Select$, Select2 };
