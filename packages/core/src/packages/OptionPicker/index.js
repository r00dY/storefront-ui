/** @jsx jsx */
import React, { useState, useRef, useLayoutEffect } from "react";
import { getElementSpec, jsx, createElement, splitSx } from "../index";

function useOptionPicker(props = {}) {
  const { product } = props;

  const options = [];

  // button + dialog
  const [isOpen, setOpen] = useState(false);
  const buttonRef = useRef(null);

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
        htmlFor: id
      },
      values: option.values.map(value => ({
        ...value,
        selectableLinkProps: {
          as: "link",
          href: "#",
          selected: true,
          disabled: false,
          label: `${option.name} ${value.name}`
        }
      })),
      menuButtonProps: {
        options: option.values.map(value => ({
          value: value.name,
          label: value.name,
          ...value
        })),
        onClick: () => {}
      }
    });
  });

  return {
    options
  };
}

export { useOptionPicker };
