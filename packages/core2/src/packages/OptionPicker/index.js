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

/**
 * TODO: this is very inefficient, fix later.
 */
function allPossibleCases(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    let result = [];
    let allCasesOfRest = allPossibleCases(arr.slice(1)); // recur with the rest of array
    for (let i = 0; i < allCasesOfRest.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        result.push({ ...arr[0][j], ...allCasesOfRest[i] });
      }
    }
    return result;
  }
}

function cartesianProductForValues(options) {
  const arr = options.map(o => o.values.map(v => ({ [o.id]: v })));
  return allPossibleCases(arr);
}

function findAlternativeBasicStrategy(
  values,
  mainOption /* it can't change */,
  options,
  products
) {
  const allCombinations = cartesianProductForValues([...options].reverse());

  for (let i = 0; i < allCombinations.length; i++) {
    const iteratorValues = allCombinations[i];

    if (iteratorValues[mainOption.id].id !== values[mainOption.id].id) {
      // main option MUST be selected
      continue;
    }

    const product = getProductFromValues(iteratorValues, options, products);
    if (product) {
      return product;
    }
  }
}

function useOptionPicker(config = {}) {
  let { products = [], initialProduct, options = [] } = config;

  const [product, selectProduct] = useState(initialProduct);

  // calculate options

  options = options.map(option => {
    let newValues = Array.isArray(option.values) ? [...option.values] : [];

    if (option.value) {
      products.forEach(product => {
        const ret = option.value(product);

        if (typeof ret === "string") {
          if (!newValues.find(x => x.id === ret)) {
            newValues.push({
              id: ret,
              name: ret
            });
          }
        } else if (typeof ret === "object") {
          if (!newValues.find(x => x.id === ret.id)) {
            newValues.push(ret);
          }
        } else {
          throw new Error("option.value must return string or object");
        }
      });
    }

    return {
      ...option,
      values: newValues
    };
  });

  const selectedValues = getValuesFromProduct(product, options);

  const stateForValue = (o, v) => {
    const optionId = typeof o === "object" ? o.id : o;
    const option = options.find(opt => opt.id === optionId);

    const valueId = typeof v === "object" ? v.id : v;
    const value = option.values.find(val => val.id === valueId);

    const strategy = option.missingProductStrategy || "hidden";

    const newValues = {
      ...selectedValues,
      [optionId]: value
    };

    const newProduct = getProductFromValues(newValues, options, products);

    if (newProduct) {
      return newProduct;
    }

    if (strategy === "disabled") {
      return "disabled";
    }
    if (strategy === "alternative") {
      const alternative = findAlternativeBasicStrategy(
        newValues,
        option,
        options,
        products
      );
      if (alternative) {
        return alternative;
      }
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

    const selectOptions = [];

    option.values.forEach(value => {
      const state = stateForValue(option, value);

      // console.log(option, currentValue);

      if (state === "hidden") {
        return;
      }

      selectOptions.push({
        ...value,
        id: value.id,
        product: typeof state === "object" && state,
        disabled: state === "disabled"
      });
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
