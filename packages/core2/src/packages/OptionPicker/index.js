/** @jsx jsx */
import React, { useState, useRef, useLayoutEffect } from "react";
import { getElementSpec, jsx, createElement, splitSx } from "..";
//
// function findProductVariantBySelectedOptions(product, options) {
//   RootLoop: for (let i = 0; i < product.variants.length; i++) {
//     const productVariant = product.variants[i];
//     const selectedOptions = productVariant.selectedOptions;
//
//     for (let name in selectedOptions) {
//       if (options[name] !== selectedOptions[name]) {
//         continue RootLoop;
//       }
//     }
//
//     return productVariant;
//   }
// }
//
// function useOptionPickerOld(props = {}) {
//   const { product } = props;
//
//   const initOptions = {};
//   product.options.forEach(({ name, values }) => {
//     initOptions[name] = values[0].name;
//   });
//
//   const [selectedOptions, setSelectedOptions] = useState(initOptions);
//
//   const productVariant = findProductVariantBySelectedOptions(
//     product,
//     selectedOptions
//   );
//
//   const options = [];
//
//   product.options.forEach(option => {
//     const id = `${product.handle}-${option.name}`;
//
//     const values2 = option.values.map(value => ({
//       value: value.name,
//       label: value.name,
//       ...value,
//       productVariant: findProductVariantBySelectedOptions(product, {
//         ...selectedOptions,
//         [option.name]: value.name
//       })
//     }));
//
//     options.push({
//       ...option,
//       selectProps: {
//         options: option.values.map(value => ({
//           value: value.name,
//           label: value.name
//         })),
//         placeholder: option.name,
//         value: selectedOptions[option.name],
//         onChange: val => {
//           setSelectedOptions({ ...selectedOptions, [option.name]: val });
//         },
//         id
//       },
//       labelProps: {
//         htmlFor: id
//       },
//       values: option.values.map(value => ({
//         ...value,
//         selectableLinkProps: {
//           as: "link",
//           href: "#",
//           selected: selectedOptions[option.name] === value.name,
//           disabled: false,
//           label: `${option.name} ${value.name}`
//         },
//         selectableRadioProps: {
//           as: "radio",
//           id: `${id}-${value.name}`,
//           label: `${value.name}`,
//           name: id,
//           selected: selectedOptions[option.name] === value.name,
//           onSelect: () => {
//             setSelectedOptions({
//               ...selectedOptions,
//               [option.name]: value.name
//             });
//           },
//           disabled: false
//         }
//       })),
//       select2Props: {
//         options: values2,
//         value: values2.find(v => v.value === selectedOptions[option.name]),
//         onChange: val => {
//           setSelectedOptions({ ...selectedOptions, [option.name]: val.value });
//         }
//       }
//     });
//   });
//
//   return {
//     options,
//     productVariant
//   };
// }
//
// function useDupa(initVal) {
//   const [val, setVal] = useState(initVal);
//
//   const increment = () => {
//     setVal(val + 1);
//   };
//
//   return {
//     val,
//     increment
//   };
// }

function getMatcherFromOption(option) {
  return (
    option.matcher || ((p, valId) => p.selectedOptions[option.id] === valId)
  );
}

function getValuesFromProduct(product, options) {
  const ret = {};

  options.forEach(option => {
    const matcher = getMatcherFromOption(option);
    ret[option.id] = option.values.find(v => matcher(product, v.id));
  });

  return ret;
}

function getProductFromValues(values, options, products) {
  root: for (let i = 0; i < products.length; i++) {
    const product = products[i];

    for (let j = 0; j < options.length; j++) {
      const option = options[j];
      const matcher = getMatcherFromOption(option);

      if (!matcher(product, values[option.id].id)) {
        continue root;
      }
    }

    return product;
  }
}

function useOptionPicker(config = {}) {
  const { products = [], initialProduct, options = [] } = config;

  const [product, selectProduct] = useState(initialProduct);

  // TODO: calculate options

  const selectedValues = getValuesFromProduct(product, options);

  const stateForValue = (o, v) => {
    const optionId = typeof o === "object" ? o.id : o;
    const option = options.find(opt => opt.id === optionId);

    const valueId = typeof v === "object" ? v.id : v;
    const value = option.values.find(val => val.id === valueId);

    const strategy = option.missingProductStrategy || "hidden";

    const newProduct = getProductFromValues(
      {
        ...selectedValues,
        [optionId]: value
      },
      options,
      products
    );

    if (newProduct) {
      return newProduct;
    }

    if (strategy === "disabled") {
      return "disabled";
    }
    if (strategy === "alternative") {
    }

    return "hidden"; // default
  };

  const selectValue = (o, v) => {
    const newProduct = stateForValue(o, v);

    if (typeof newProduct !== "object") {
      console.warn(
        `[useOptionPicker] you can't set option "${o}" to value "${v}" because this combination doesn't exist`
      );
      return;
    }

    selectProduct(newProduct);
  };

  const retOptions = [];

  options.forEach(option => {
    const currentValue = selectedValues[option.id];

    // const uniqueId = `${product.handle}-${option.name}`;

    const selectOptions = option.values.map(value => {
      const state = stateForValue(option, currentValue);

      return {
        ...value,
        id: value.id,
        product: state.product
      };
    });

    const selectProps = {
      options: selectOptions,
      value: selectedValues[option.id],
      placeholder: option.name,
      onChange: val => {
        selectValue(option, val);
      }
    };

    retOptions.push({
      ...option,
      selectProps
    });

    // console.log(selectProps);

    // selectProps: {
    //     options: option.values.map(value => ({
    //         value: value.name,
    //         label: value.name
    //     })),
    //         placeholder: option.name,
    //         value: selectedValues[option.name],
    //         onChange: val => {
    //         setSelectedOptions({...selectedOptions, [option.name]: val});
    //     },
    //         id
    // },
    // labelProps: {
    //     htmlFor: id
    // },
  });

  return {
    options: retOptions,
    selectedValues,
    selectValue,
    product,
    selectProduct,
    stateForValue
  };
}

export { useOptionPicker };
