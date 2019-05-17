import React, { useState, useEffect } from "react";
import { C, F } from "../../Config";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const InputRaw = props => {
  let {
    autoComplete,
    disabled,
    error,
    id,
    inputRef,
    name,
    onChange,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onBlur,
    onFocus,
    placeholder,
    required,
    type,
    value,

    appearance,
    styles,

    ...appearanceProps
  } = props;

  delete appearanceProps["aria-label"];
  delete appearanceProps["aria-labelledby"];
  delete appearanceProps["aria-describedby"];

  const [isFocused, setIsFocused] = useState(props.autoFocus || false);

  useEffect(() => {
    const { autoFocus, inputRef } = props;
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Input props
  const inputProps = {
    ref: inputRef,
    "aria-label": props["aria-label"],
    "aria-labelledby": props["aria-labelledby"],
    "aria-describedby": props["aria-describedby"],
    "aria-invalid": !!error,
    "aria-required": required,
    autoComplete,
    disabled,
    id,
    name,
    onBlur: e => {
      setIsFocused(false);
      onBlur(e);
    },
    onChange,
    onFocus: e => {
      setIsFocused(true);
      onFocus(e);
    },
    onKeyDown,
    onKeyPress,
    onKeyUp,
    placeholder,
    type,
    value
  };

  // Params
  const params = {
    ...appearanceProps,
    disabled,
    error,
    placeholder,
    type,
    required
  };

  styles = styles || {};
  let { Input, Root } = styles;

  // input styling
  Input = Input || {};

  if (typeof Input.props === "function") {
    Input.props = Input.props(params);
  } else if (!Input.props) {
    Input.props = {};
  }

  if (typeof Input.styles === "function") {
    Input.styles = Input.styles(params);
  } else if (!Input.styles) {
    Input.styles = css``;
  }
  // background-color: ${ disabled ? C.grey200.css : isFocused ? C.white.css : error ? C.error50.css : C.grey100.css };

  Input.styles = css`
    ${F.body2.css}
    color: ${disabled ? C.grey600.css : C.grey900.css};
    box-sizing: border-box;
    background-color: transparent;
    border-width: 0;
    border-style: none;
    outline: none;
    padding: 10px 12px;
    width: 100%;
    max-width: 100%;
    cursor: ${disabled ? "not-allowed" : "text"};
    ::placeholder {
        color: ${disabled ? C.grey400.css : C.grey500.css};
    }
  `;

  const rootStyles = css`
    background-color: ${disabled ? C.grey100.css : "transparent"};
    border-width: 1px;
    border-style: solid;
    border-color: ${error
      ? C.error500.css
      : disabled
      ? C.grey300.css
      : isFocused
      ? C.primary.css
      : C.grey300.css};
    border-radius: 4px;
    transition-property: border, boxShadow, backgroundColor;
    transition-duration: 100ms;
  `;

  const input = <input {...inputProps} {...Input.props} css={Input.styles} />;

  // root styling
  Root = Root || {};
  // if (typeof Root === 'undefined') {
  //     Root = {
  //         component: (input) => <>{ input }</>
  //     }
  // }

  let RootComponent;

  if (Root.component) {
    RootComponent = Root.component(params, input);
  } else {
    if (typeof Root.props === "function") {
      Root.props = Root.props(params);
    } else if (!Root.props) {
      Root.props = {};
    }

    if (typeof Root.styles === "function") {
      Root.styles = Root.styles(params);
    } else if (!Root.styles) {
      Root.styles = {};
    }

    // Root.styles = css`
    //   ${F.body2.css}
    //   box-sizing: border-box;
    //   display: flex;
    //   background-color: ${ disabled ? C.grey300.css : isFocused ? C.grey100.css : error ? C.error200.css : C.white.css };
    //   border-width: 1px;
    //   border-style: solid;
    //   border-color: ${ disabled ? C.grey300.css : isFocused ? C.grey100.css : error ? C.error200.css : C.white.css };
    //   border-radius: 2px;
    // `;

    RootComponent = (
      <div css={rootStyles} {...Root.props}>
        {input}
      </div>
    );
  }

  return RootComponent;
};

InputRaw.defaultProps = {
  "aria-label": null,
  "aria-labelledby": null,
  "aria-describedby": null,
  autoComplete: "on",
  autoFocus: false,
  disabled: false,
  error: false,
  name: "",
  inputRef: undefined,
  onBlur: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  onKeyPress: () => {},
  onKeyUp: () => {},
  onFocus: () => {},
  placeholder: "",
  required: false,
  type: "text"
};

InputRaw.propTypes = {};

export default InputRaw;
