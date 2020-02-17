/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import { styled } from "../../../packages/base/styles/index.js";
import React from "react";

import Color from "../../Color";

const DEFAULT = 0;
const HOVERED = 1;
const ACTIVE = 2;
type State = typeof DEFAULT | typeof HOVERED | typeof ACTIVE;
function getState(props): State {
  if (props.isActive) return ACTIVE;
  if (props.isHovered) return HOVERED;
  return DEFAULT;
}

function getOuterColor(props) {
  const { colors } = props.$theme;

  if (!props.checked) {
    if (props.disabled) return colors.tickMarkFillDisabled;
    if (props.isError) return colors.tickBorderError;
    return colors.tickBorder;
  } else {
    if (props.isError) {
      switch (getState(props)) {
        case DEFAULT:
          return colors.tickFillErrorSelected;
        case HOVERED:
          return colors.tickFillErrorSelectedHover;
        case ACTIVE:
          return colors.tickFillErrorSelectedHoverActive;
      }
    } else {
      if (props.disabled) return colors.tickFillDisabled;
      switch (getState(props)) {
        case DEFAULT:
          return colors.tickFillSelected;
        case HOVERED:
          return colors.tickFillSelectedHover;
        case ACTIVE:
          return colors.tickFillSelectedHoverActive;
      }
    }
  }

  return null;
}

function getInnerColor(props) {
  const { colors } = props.$theme;

  if (props.disabled) {
    return colors.tickMarkFillDisabled;
  }

  if (!props.checked) {
    if (props.isError) {
      switch (getState(props)) {
        case DEFAULT:
          return colors.tickFillError;
        case HOVERED:
          return colors.tickFillErrorHover;
        case ACTIVE:
          return colors.tickFillErrorHoverActive;
      }
    } else {
      switch (getState(props)) {
        case DEFAULT:
          return colors.tickFill;
        case HOVERED:
          return colors.tickFillHover;
        case ACTIVE:
          return colors.tickFillActive;
      }
    }
  } else {
    return colors.tickMarkFill;
  }
}

export const RadioMarkInner = styled("div", props => {
  const { animation, sizing } = props.$theme;

  return {
    backgroundColor: getInnerColor(props),
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
    height: props.checked ? sizing.scale200 : sizing.scale600,
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve,
    width: props.checked ? sizing.scale200 : sizing.scale600
  };
});

export const RadioMarkOuter = styled("div", props => {
  const { sizing } = props.$theme;

  return {
    alignItems: "center",
    backgroundColor: getOuterColor(props),
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
    display: "flex",
    height: sizing.scale700,
    justifyContent: "center",
    marginTop: sizing.scale0,
    marginRight: sizing.scale0,
    marginBottom: sizing.scale0,
    marginLeft: sizing.scale0,
    verticalAlign: "middle",
    width: sizing.scale700,
    flexShrink: 0
    // outline: props.focused && props.checked ? "1px solid red" : "none" TODO: Outline for focus!
  };
});
