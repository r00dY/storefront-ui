import { useState } from "react";
import { Select } from "../../theme/Select";
import React from "react";

const useGetVariantPicker = (product, selectedOptions) => {
  const [sizePickerOpen, setSizePickerOpen] = useState(false);
  const [pickedVariantIndex, setPickedVariantIndex] = useState(
    initiallyPickedVariant
  );

  // return
  return [
    <Select
      fitContainer={true}
      value={
        product.options.find(x => x.name === "Size").values[pickedVariantIndex]
      }
      options={product.options.find(x => x.name === "Size").values}
      onChange={val => {
        setPickedVariantIndex(
          product.options
            .find(x => x.name === "Size")
            .values.findIndex(el => el === val)
        );
        setSizePickerOpen(false);
      }}
      open={sizePickerOpen}
      onRequestClose={() => {
        setSizePickerOpen(false);
      }}
      onClick={() => {
        setSizePickerOpen(!sizePickerOpen);
      }}
    />,
    product.variants[pickedVariantIndex].node
  ];
};

export default useGetVariantPicker;
