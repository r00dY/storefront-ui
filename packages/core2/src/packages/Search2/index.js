import React, { useState, useRef, useEffect } from "react";
import Box from "../Box";

function useSearch(props) {
  let {
    defaultValue = "",
    onChange,
    debounceTime = 300,
    closeOnSubmit = true,
    blurOnSubmit = true,
    onSubmit
  } = props;

  const [inputValue, setInputValue] = useState(defaultValue);
  const inputRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const debounceTimeout = useRef(null);

  const changeValue = val => {
    clearTimeout(debounceTimeout.current);

    if (val === "") {
      // no debounce for empty
      if (onChange) {
        onChange(val);
      }
    } else {
      debounceTimeout.current = setTimeout(() => {
        if (onChange) {
          onChange(val);
        }
      }, debounceTime);
    }

    setOpen(true);
  };

  const inputProps = {
    value: inputValue,
    onChange: val => {
      setInputValue(val);
      changeValue(val);
    },
    label: "Search",
    controlRef: inputRef,
    type: "search",
    onFocus: () => {
      setOpen(true);
    }
  };

  const close = () => {
    setOpen(false);
  };

  const formProps = {
    as: "form",
    action: "",
    onSubmit: e => {
      if (closeOnSubmit) {
        close();
      }
      if (blurOnSubmit) {
        inputRef.current.blur();
      }
      e.preventDefault();

      if (onSubmit) {
        onSubmit(inputValue);
      }
    }
  };

  const resultsProps = {
    "aria-hidden": true
  };

  const submitButtonProps = {
    type: "submit"
  };

  return {
    inputProps,
    value: inputValue === "" ? null : inputValue,
    close,
    formProps,
    resultsProps,
    submitButtonProps,
    isOpen
  };
}

function Search(props) {
  let { form, layer, children, hideOnLinkClick = true } = props;

  const { inputProps, close, formProps, isOpen, submitButtonProps } = useSearch(
    props
  );

  const anchorRef = useRef(null);

  if (layer) {
    children = typeof children === "function" ? children({ close }) : children;

    layer = React.cloneElement(layer, {
      isOpen: children && isOpen,
      anchoredTo: anchorRef,
      onClose: params => {
        if (params && params.type === "esc") {
          // esc by default comes from "input type=search".
        } else {
          close();
        }
      },
      children
    });
  }

  return (
    <div
      onClick={e => {
        if (hideOnLinkClick && e.target && e.target.tagName === "A") {
          close();
        }
      }}
    >
      <div {...formProps}>
        {form({
          inputProps: { ...inputProps, _ref: anchorRef },
          submitButtonProps
        })}
      </div>
      {layer}
    </div>
  );
}

export function SearchInline(props) {
  let { form } = props;

  const {
    inputProps,
    submitButtonProps,
    resultsProps,
    close,
    formProps,
    isOpen,
    value
  } = useSearch({
    ...props,
    closeOnSubmit: false,
    blurOnSubmit: false
  }); // inline search doesn't have to blur because it's always fullscreen

  return <Box {...formProps}>{form({ inputProps, submitButtonProps })}</Box>;
}

/**8
 * TODO:
 * - tab sequence should go to the dialog and then to the input.
 * - SearchDialog (feature: automatic hiding of dialog when link inside is clicked -> actually this should be a feature of all dialogs).
 */

export default Search;
