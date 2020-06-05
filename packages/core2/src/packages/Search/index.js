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

  return {
    inputProps,
    close,
    formProps,
    isOpen
  };
}

function Search(props) {
  let { input, layer, children, hideOnLinkClick = true } = props;

  const { inputProps, close, formProps, isOpen } = useSearch(props);

  const anchorRef = useRef(null);

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

  return (
    <Box
      onClick={e => {
        if (hideOnLinkClick && e.target && e.target.tagName === "A") {
          close();
        }
      }}
    >
      <Box {...formProps}>
        {React.cloneElement(input, { ...inputProps, _ref: anchorRef })}
      </Box>
      {layer}
    </Box>
  );
}

// function SearchDialog(props) {
//     let {
//         input,
//         layer,
//         children,
//         hideOnLinkClick = true
//     } = props;
//
//     const {inputProps, close, formProps, isOpen} = useSearch(props);
//
//     children = typeof children === "function" ? children({close}) : children;
//
//     layer = React.cloneElement(layer, {
//         isOpen: children && isOpen,
//         anchoredTo: inputProps.controlRef,
//         onClose: (params) => {
//             if (params && params.type === "esc") { // esc by default comes from "input type=search".
//
//             } else {
//                 close();
//             }
//         },
//         children
//     });
//
//     return (
//         <Box
//             onClick={e => {
//                 if (hideOnLinkClick && e.target && e.target.tagName === "A") {
//                     close();
//                 }
//             }}
//         >
//             <Box
//                 {...formProps}
//             >
//                 {React.cloneElement(input, inputProps)}
//             </Box>
//             {layer}
//         </Box>
//     );
// }

export function SearchInline(props) {
  let {
    input,
    inputContainer,
    children,
    mode = "static" // static / absolute / fixed,
  } = props;

  const { inputProps, close, formProps, isOpen } = useSearch({
    ...props,
    closeOnSubmit: false,
    blurOnSubmit: false
  }); // inline search doesn't have to blur because it's always fullscreen
  children = typeof children === "function" ? children({ close }) : children;

  const inputContainerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (mode !== "static") {
      setOffset(inputContainerRef.current.getBoundingClientRect().height);
    }
  }, []);

  input = React.cloneElement(input, inputProps);

  let content;

  if (typeof inputContainer === "function") {
    content = inputContainer({ input });
  } else {
    content = <Box sx={inputContainer}>{input}</Box>;
  }

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        minHeight: "inherit",
        maxHeight: "inherit",
        minWidth: "inherit",
        maxWidth: "inherit"
      }}
    >
      <Box
        sx={{
          position:
            mode === "absolute"
              ? "absolute"
              : mode === "fixed"
              ? "fixed"
              : "relative",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1
        }}
        {...formProps}
        ref={inputContainerRef}
      >
        {content}
      </Box>

      {children && isOpen && (
        <Box
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
            minHeight: "inherit",
            maxHeight: "inherit",
            minWidth: "inherit",
            maxWidth: "inherit",
            paddingTop: offset,
            overflowY: "auto"
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
}

/**8
 * TODO:
 * - tab sequence should go to the dialog and then to the input.
 * - SearchDialog (feature: automatic hiding of dialog when link inside is clicked -> actually this should be a feature of all dialogs).
 */

export default Search;
