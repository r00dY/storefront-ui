/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import Color from "../../Color";
import Font from "../../Color";
import { RangeSet, RangeMap, ResponsiveSize } from "responsive-helpers";

export default function deepMerge(
  target?: ?{},
  ...sources: Array<null | ?{}>
): {} {
  target = target || {};
  const len = sources.length;
  let obj;
  let value;
  for (let i = 0; i < len; i++) {
    obj = sources[i] || {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        value = obj[key];
        if (isCloneable(value)) {
          target[key] = deepMerge(target[key] || {}, value);
        } else {
          target[key] = value;
        }
      }
    }
  }
  return target;
}

/* eslint-disable-next-line flowtype/no-weak-types */
function isCloneable(obj: mixed) {
  if (
    obj instanceof Color ||
    obj instanceof Font ||
    obj instanceof RangeMap ||
    obj instanceof RangeSet ||
    obj instanceof ResponsiveSize
  ) {
    return false;
  }
  return Array.isArray(obj) || {}.toString.call(obj) == "[object Object]";
}
