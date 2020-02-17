/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import { styled } from "../styles/index.js";
import { ADJOINED, SIZE, ENHANCER_POSITION } from "./constants.js";
import type { SharedPropsT } from "./types.js";

function getInputPadding(size, sizing) {
  return {
    [SIZE.default]: `${sizing.scale400} ${sizing.scale500}`,
    [SIZE.compact]: `${sizing.scale200} ${sizing.scale500}`
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
    [SIZE.default]: fonts.body1,
    [SIZE.compact]: fonts.body2
  }[size];
}

export const Root = styled("div", props => {
  const {
    $size,
    $theme: { colors, fonts }
  } = props;

  return `
    ${getFont($size, fonts).css}
    color: ${colors.foreground};
    display: flex;
    width: 100%;
  `;
});

export const InputEnhancer = styled("div", props => {
  const {
    $position,
    $size,
    $theme: { colors, sizing, fonts }
  } = props;

  return `
    ${getFont($size, fonts).css}
    color: ${colors.foreground};
    display: flex;
    padding: ${getInputPadding($size, sizing)};
    backgroundColor: ${colors.inputFillEnhancer};
    borderRadius: ${getDecoratorBorderRadius($position, sizing.scale100)};
  `;
});

export const getInputContainerStyles = (props: SharedPropsT) => {
  const {
    $isFocused,
    $adjoined,
    $error,
    $disabled,
    $size,
    $theme: { colors, sizing, fonts, animation, borders }
  } = props;

  return `
    ${getFont($size, fonts).css}
    color: ${$disabled ? colors.inputTextDisabled : colors.foreground};
    box-sizing: border-box;
    display: flex;
    width: 100%;
    background-color: ${$disabled ? colors.inputFillDisabled : "transparent"};
    
    border: 1px solid ${
      $error
        ? colors.negative400
        : $isFocused
        ? colors.primary400
        : colors.mono500
    };
    
    border-radius: ${
      borders.useRoundedCorners
        ? getBorderRadius($adjoined, sizing.scale100)
        : "0px"
    };
      
      transition-property: border, boxShadow, backgroundColor;
      transition-duration: ${animation.timing100};
  `;
};

export const InputContainer = styled("div", getInputContainerStyles);

export const getInputStyles = (props: SharedPropsT) => {
  const {
    $disabled,
    $error,
    $size,
    $theme: { colors, sizing, fonts }
  } = props;

  return `
    ${getFont($size, fonts).css}
    color: ${$disabled ? colors.foregroundAlt : colors.foreground};
    box-sizing: border-box;
    background-color: transparent;
    border-width: 0;
    border-style: none;
    outline: none;
    padding: ${getInputPadding($size, sizing)};
    width: 100%;
    height: 100%;
    max-width: 100%;
    cursor: ${$disabled ? "not-allowed" : "text"};
    ::placeholder {
      color: ${$disabled ? colors.inputTextDisabled : colors.foregroundAlt}
    }
  `;
  // return {
  //   ...getFont($size, fonts),
  //   color: $disabled ? colors.foregroundAlt : colors.foreground,
  //   // caretColor: $error ? colors.negative400 : colors.primary,
  //   boxSizing: "border-box",
  //   backgroundColor: "transparent",
  //   borderWidth: "0",
  //   borderStyle: "none",
  //   outline: "none",
  //   ...getInputPadding($size, sizing),
  //   width: "100%",
  //   maxWidth: "100%",
  //   cursor: $disabled ? "not-allowed" : "text",
  //   "::placeholder": {
  //     color: $disabled ? colors.inputTextDisabled : colors.foregroundAlt
  //   }
  // };
};

export const Input = styled("input", getInputStyles);
