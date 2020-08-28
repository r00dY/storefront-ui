import React, { useState, useRef, useEffect } from "react";
import Box from "../Box";

function useSearchControlled(props) {
  let {
    value = "",
    onChange,
    debounceTime = 300,
    closeOnSubmit = true,
    blurOnSubmit = true,
    onSubmit
    // controller
  } = props;

  // if (!controller) {
  //   controller = useSearch(props);
  // }

  const [inputValue, setInputValue] = useState(value); // internal temporary state

  const inputRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const debounceTimeout = useRef(null);

  // On value change (from external)
  useEffect(
    () => {
      setInputValue(value);
    },
    [value]
  );

  const changeValue = (val, immediately = false) => {
    clearTimeout(debounceTimeout.current);

    if (val === "" || immediately) {
      // no debounce for empty
      if (onChange) {
        // setInputValue(value); // set input back to the value from props
        onChange(val);
      }
    } else {
      debounceTimeout.current = setTimeout(() => {
        if (onChange) {
          // setInputValue(value); // set input back to the value from props
          onChange(val);
        }
      }, debounceTime);
    }

    // When value changed, we want to open
    if (inputRef.current === document.activeElement) {
      setOpen(true);
    }
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

  useEffect(() => {
    const onDocumentKeyPress = evt => {
      if (evt.key !== "Escape") {
        return;
      }

      // Don't propagate ESC event (to prevent closing modals etc)
      // Do not prevent default! Default action is to close search
      evt.stopPropagation();

      // Ignore events that have been `event.preventDefault()` marked.
      // if (event.defaultPrevented) {
      //   return;
      // }
      //
      // setOpen(false);
      //
      // if (onClose) {
      //   onClose({ type: "esc" });
      // }
    };

    if (inputRef.current) {
      inputRef.current.addEventListener("keyup", onDocumentKeyPress);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener("keyup", onDocumentKeyPress);
      }
    };
  });

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
    isOpen,
    setValue: val => {
      setInputValue(val);
      changeValue(val, true);
    }
  };
}

function useSearch(props) {
  const { defaultValue, value, onChange } = props;

  let isControlled = typeof value !== "undefined";

  const [internalValue, setInternalValue] = useState(defaultValue);

  return useSearchControlled({
    ...props,
    value: isControlled ? value : internalValue,
    onChange: newVal => {
      if (isControlled) {
        if (onChange) {
          onChange(newVal);
        }
      } else {
        setInternalValue(newVal);
        if (onChange(newVal)) {
          onChange(newVal);
        }
      }
    }
  });
}

function Search(props) {
  let { form, layer, children, hideOnLinkClick = true } = props;

  const controller = useSearch(props);

  const {
    inputProps,
    close,
    formProps,
    isOpen,
    submitButtonProps
  } = controller;

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
      <form {...formProps}>
        {form({
          inputProps: { ...inputProps, _ref: anchorRef },
          submitButtonProps
        })}
      </form>
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
export { useSearch };
