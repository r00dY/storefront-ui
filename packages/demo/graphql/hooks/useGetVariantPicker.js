import { useState } from "react";
// import { Select } from "../../theme/Select";
import React from "react";

const useGetVariantPicker = (product, selectedOptions) => {
  const [sizePickerOpen, setSizePickerOpen] = useState(false);
  const [pickedVariantIndex, setPickedVariantIndex] = useState(0);

  // return
  return [[], product.variants[pickedVariantIndex].node];
};

export default useGetVariantPicker;
