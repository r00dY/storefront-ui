import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";

import useFilters from "@commerce-ui/core/useFilters";

import { filters as filtersData } from "./data";

import { useRangePicker } from "@commerce-ui/core/RangePicker";

import Input from "./Input";

export const basic = () => {
  const rangePicker = useRangePicker({
    min: 0,
    max: 100
  });

  const rangePickerAllowEmpty = useRangePicker({
    min: 0,
    max: 100,
    allowEmpty: true
  });

  return (
    <Box sx={{ p: 50 }}>
      <Box sx={{ display: "flex" }}>
        <Input placeholder={"From"} {...rangePicker.inputFromProps} />
        <Input placeholder={"To"} {...rangePicker.inputToProps} />
      </Box>

      <Box sx={{ display: "flex" }}>
        <Input placeholder={"From"} {...rangePickerAllowEmpty.inputFromProps} />
        <Input placeholder={"To"} {...rangePickerAllowEmpty.inputToProps} />
      </Box>
    </Box>
  );
};

export default {
  title: "RangePicker"
};
