/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import { styled } from "../styles/index.js";
import { ADJOINED, SIZE, ENHANCER_POSITION } from "./constants.js";
import type { SharedPropsT } from "./types.js";

export function getInputPadding(size, sizing) {
  return {
    [SIZE.default]: {
      paddingTop: sizing.scale400,
      paddingRight: sizing.scale500,
      paddingBottom: sizing.scale400,
      paddingLeft: sizing.scale500
    },
    [SIZE.compact]: {
      paddingTop: sizing.scale200,
      paddingRight: sizing.scale500,
      paddingBottom: sizing.scale200,
      paddingLeft: sizing.scale500
    }
  }[size];
}

function getBorderRadius(adjoined, radius) {
  return {
    [ADJOINED.none]: radius,
    [ADJOINED.left]: `0 ${radius} ${radius} 0`,
    [ADJOINED.right]: `${radius} 0 0 ${radius}`,
    [ADJOINED.both]: "0"
  }[adjoined];
}

function getDecoratorBorderRadius(position, radius) {
  return {
    [ENHANCER_POSITION.start]: `${radius} 0 0 ${radius}`,
    [ENHANCER_POSITION.end]: `0 ${radius} ${radius} 0`
  }[position];
}

function getFont(size, fonts) {
  return {
    font: {
      [SIZE.default]: fonts.body1,
      [SIZE.compact]: fonts.body2
    }[size]
  };
}

export const Root = styled("div", props => {
  const {
    $size,
    $theme: { colors, fonts }
  } = props;
  return {
    ...getFont($size, fonts),
    color: colors.foreground,
    display: "flex",
    width: "100%"
  };
});

export const InputEnhancer = styled("div", props => {
  const {
    $position,
    $size,
    $theme: { colors, sizing, fonts }
  } = props;
  return {
    ...getFont($size, fonts),
    color: colors.foreground,
    display: "flex",
    ...getInputPadding($size, sizing),
    backgroundColor: colors.inputFillEnhancer,
    borderRadius: getDecoratorBorderRadius($position, sizing.scale100)
  };
});

export const getInputStyle = (style, props) => {
  const {
    $isFocused,
    $error,
    $disabled,
    $theme: { forms }
  } = props;

  let value = forms["input" + style];

  if ($isFocused) {
    value = forms["input" + style + "Focused"] || value;
  }

  if ($error) {
    value = forms["input" + style + "Error"] || value;
  }

  if ($error && $isFocused) {
    value = forms["input" + style + "ErrorFocused"] || value;
  }

  if ($disabled) {
    value = forms["input" + style + "Disabled"] || value;
  }

  return value;
};

export const getInputContainerStyles = (props: SharedPropsT) => {
  const {
    $isFocused,
    $adjoined,
    $error,
    $disabled,
    $size,
    $theme: { colors, sizing, fonts, animation, borders }
  } = props;

  return {
    ...getFont($size, fonts),
    color: getInputStyle("TextColor", props),
    boxSizing: "border-box",
    display: "flex",
    width: "100%",
    backgroundColor: getInputStyle("FillColor", props),
    borderWidth: getInputStyle("BorderWidth", props),
    borderStyle: "solid",
    borderColor: getInputStyle("BorderColor", props),
    borderRadius: getInputStyle("BorderRadius", props),
    boxShadow: getInputStyle("BoxShadow", props),
    transitionProperty: "border, boxShadow, backgroundColor",
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve
  };
};

export const InputContainer = styled("div", getInputContainerStyles);

const getHideSpinButtonProps = (shouldHide, isNumber) => {
  if (!shouldHide || !isNumber) {
    return {};
  }

  return {
    "::-webkit-outer-spin-button, ::-webkit-inner-spin-button": {
      WebkitAppearance: "none"
    },
    MozAppearance: "textfield"
  };
};

export const getInputStyles = (props: SharedPropsT) => {
  const {
    $disabled,
    $error,
    $size,
    $hideSpinButtons,
    $type,
    $theme: { sizing, fonts }
  } = props;
  return {
    ...getFont($size, fonts),
    color: getInputStyle("TextColor", props),
    caretColor: getInputStyle("CaretColor", props),
    boxSizing: "border-box",
    backgroundColor: getInputStyle("FillColor", props),
    borderWidth: 0,
    borderStyle: "none",
    outline: "none",
    ...getInputPadding($size, sizing),
    width: "100%",
    maxWidth: "100%",
    cursor: $disabled ? "not-allowed" : "text",
    "::placeholder": {
      color: getInputStyle("PlaceholderColor", props)
    },
    ...getHideSpinButtonProps($hideSpinButtons, $type === "number")
  };
};

export const Input = styled("input", getInputStyles);

export const clearButtonContainerStyles = ({ $theme }) => `
    position: relative;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    svg {
      display: block;
    }
    margin-right: 6px;
`;

export const ClearButtonContainerStyled = styled(
  "div",
  clearButtonContainerStyles
);
