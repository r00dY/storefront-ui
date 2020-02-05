/** @jsx jsx */
import React, { useState, useRef, useLayoutEffect } from "react";
import { getElementSpec, jsx, createElement, splitSx } from "..";
import { useSelect } from "../Select";

function findProductVariantBySelectedOptions(product, options) {
  RootLoop: for (let i = 0; i < product.variants.length; i++) {
    const productVariant = product.variants[i];
    const selectedOptions = productVariant.selectedOptions;

    for (let name in selectedOptions) {
      if (options[name] !== selectedOptions[name]) {
        continue RootLoop;
      }
    }

    return productVariant;
  }
}

function useOptionPicker(props = {}) {
  const { product } = props;

  const initOptions = {};
  product.options.forEach(({ name, values }) => {
    initOptions[name] = values[0].name;
  });

  const [selectedOptions, setSelectedOptions] = useState(initOptions);

  const productVariant = findProductVariantBySelectedOptions(
    product,
    selectedOptions
  );

  const options = [];

  product.options.forEach(option => {
    const id = `${product.handle}-${option.name}`;

    const values2 = option.values.map(value => ({
      value: value.name,
      label: value.name,
      ...value,
      productVariant: findProductVariantBySelectedOptions(product, {
        ...selectedOptions,
        [option.name]: value.name
      })
    }));

    options.push({
      ...option,
      selectProps: {
        options: option.values.map(value => ({
          value: value.name,
          label: value.name
        })),
        placeholder: option.name,
        value: selectedOptions[option.name],
        onChange: val => {
          setSelectedOptions({ ...selectedOptions, [option.name]: val });
        },
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
          selected: selectedOptions[option.name] === value.name,
          disabled: false,
          label: `${option.name} ${value.name}`
        },
        selectableRadioProps: {
          as: "radio",
          id: `${id}-${value.name}`,
          label: `${value.name}`,
          name: id,
          selected: selectedOptions[option.name] === value.name,
          onSelect: () => {
            setSelectedOptions({
              ...selectedOptions,
              [option.name]: value.name
            });
          },
          disabled: false
        }
      })),
      select2Props: {
        options: values2,
        value: values2.find(v => v.value === selectedOptions[option.name]),
        onChange: val => {
          setSelectedOptions({ ...selectedOptions, [option.name]: val.value });
        }
      }
    });
  });

  return {
    options,
    productVariant
  };
}

export { useOptionPicker };
