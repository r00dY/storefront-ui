/** @jsx jsx */
import React, { useState, useRef, useLayoutEffect } from "react";
import { getElementSpec, jsx, createElement, splitSx } from "..";

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

function getMatcherFromOption(matcher) {
  return (
    option.matcher ||
    (p => p.selectedOptions.find(o => o.id === option.id).value)
  );
}

function getValuesFromProduct(product, options) {
  const ret = {};

  options.forEach(option => {
    const matcher = getMatcherFromOption(option);
    ret[option.id] = values.find(v => matcher(p) === v);
  });

  return ret;
}

function getProductFromValues(values, products) {}

function useOptionPicker2(config = {}) {
  const { products = [], initialProduct, options = [] } = config;

  const product = useState(initialProduct);

  // TODO: calculate options

  const currentValues = getValuesFromProduct(product, options);

  const retOptions = [];

  options.forEach(option => {
    const matcher =
      option.matcher ||
      (p => p.selectedOptions.find(o => o.id === option.id).value);

    const currentValue = currentValues[option.id];

    // const uniqueId = `${product.handle}-${option.name}`;

    const selectOptions = option.values.map(value => ({
      ...value,
      product: getProductFromValues({
        ...currentValues,
        [option.id]: currentValue
      }) // TODO: add product
    }));

    retOptions.push({
      ...option,
      selectProps: {
        options: selectOptions,
        value: values.find(v => v.id === currentValue), // TODO: find active option
        placeholder: option.name,
        onChange: val => {}
      }
    });

    // selectProps: {
    //     options: option.values.map(value => ({
    //         value: value.name,
    //         label: value.name
    //     })),
    //         placeholder: option.name,
    //         value: selectedOptions[option.name],
    //         onChange: val => {
    //         setSelectedOptions({...selectedOptions, [option.name]: val});
    //     },
    //         id
    // },
    // labelProps: {
    //     htmlFor: id
    // },
  });
}

function useDupa(initVal) {
  const [val, setVal] = useState(initVal);

  const increment = () => {
    setVal(val + 1);
  };

  return {
    val,
    increment
  };
}

export { useOptionPicker, useDupa };
