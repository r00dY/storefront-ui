/** @jsx jsx */
import React, { useState, useRef, useLayoutEffect } from "react";
import { getElementSpec, jsx, createElement, splitSx } from "../index";

function useOptionPicker(props = {}) {
  const { product } = props;

  const options = [];

  product.options.forEach(option => {
    const id = `${product.handle}-${option.name}`;

    options.push({
      ...option,
      selectProps: {
        options: option.values.map(value => ({
          key: `${option.name}-${value.name}`,
          label: value.name
        })),
        placeholder: option.name,
        id
      },
      labelProps: {
        for: id
      }
    });
  });

  return {
    options
  };
}

export { useOptionPicker };
