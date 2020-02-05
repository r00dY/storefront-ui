/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from "react";
import { styled } from "../../../packages/base/styles/index.js";

import { getOverrides } from "../../../packages/base/helpers/overrides";

import {
  RadioMarkInner as StyledRadioMarkInner,
  RadioMarkOuter as StyledRadioMarkOuter
} from "./styled-components";

/**
 * Radio must have following properties "defined"
 *
 * - checked
 * - active
 * - hover
 * - isError
 * - disabled
 * - ...custom
 *
 */

// checked, isActive, isHovered, isError, isFocused, disabled
function RadioMark(props) {
  const { overrides } = props;

  const [RadioMarkInner, radioMarkInnerProps] = getOverrides(
    overrides.RadioMarkInner,
    StyledRadioMarkInner
  );
  const [RadioMarkOuter, radioMarkOuterProps] = getOverrides(
    overrides.RadioMarkOuter,
    StyledRadioMarkOuter
  );

  return (
    <RadioMarkOuter {...props} {...radioMarkOuterProps}>
      <RadioMarkInner {...props} {...radioMarkInnerProps} />
    </RadioMarkOuter>
  );
}

RadioMark.defaultProps = {
  overrides: {}
};

export default RadioMark;
