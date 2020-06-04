import React, { useState, useRef, useEffect } from "react";
import Box from "../Box";

function Search(props) {
  let {
    input,
    layer,
    children,
    root,
    options,
    defaultValue = "",
    onChange,
    debounceTime = 300,
    hideOnLinkClick = true
  } = props;

  const [inputValue, setInputValue] = useState(defaultValue);
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const debounceTimeout = useRef(null);

  input = React.cloneElement(input, {
    value: inputValue,
    onChange: val => {
      setInputValue(val);

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

      setOpen(true); // If was closed by ESC or anything else we should open it again
    },
    label: "Search",
    controlRef: inputRef,
    onFocus: () => {
      setFocused(true);
      setOpen(true);
    },
    onBlur: () => {
      setFocused(false);
    }
  });

  const state = {
    close: () => {
      setOpen(false);
    }
  };

  children = typeof children === "function" ? children(state) : children;

  layer = React.cloneElement(layer, {
    isOpen: children && isOpen,
    anchoredTo: inputRef,
    onClose: () => {
      setOpen(false);
    },
    children
  });

  return (
    <Box
      onClick={e => {
        if (hideOnLinkClick && e.target && e.target.tagName === "A") {
          setOpen(false);
        }
      }}
    >
      <Box
        as={"form"}
        onSubmit={e => {
          console.log("submit!");
          e.preventDefault();
        }}
      >
        {input}
      </Box>
      {layer}
    </Box>
  );
}

/**8
 * TODO:
 * - form
 * - submit action goes to search page
 * - tab sequence should go to the dialog and then to the input.
 * - we don't have to worry about blind users, they will see only form and get to the /search
 */

export default Search;
