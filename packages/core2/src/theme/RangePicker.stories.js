import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";

import useFilters from "@commerce-ui/core/useFilters";

import { filters as filtersData } from "./data";

import RangePicker, { useRangePicker } from "@commerce-ui/core/RangePicker";

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

  const rangePickerAllowEmpty2 = useRangePicker({
    allowEmpty: true
  });

  return (
    <Box sx={{ p: 50, maxWidth: 800 }}>
      <p>basic</p>
      <Box sx={{ display: "flex" }}>
        <Input placeholder={"From"} {...rangePicker.inputFromProps} />
        <Input placeholder={"To"} {...rangePicker.inputToProps} />
        <br />
        {rangePicker.value.from} - {rangePicker.value.to}
      </Box>

      <p>allowEmpty=true</p>
      <Box sx={{ display: "flex" }}>
        <Input placeholder={"From"} {...rangePickerAllowEmpty.inputFromProps} />
        <Input placeholder={"To"} {...rangePickerAllowEmpty.inputToProps} />
        {rangePickerAllowEmpty.value.from} - {rangePickerAllowEmpty.value.to}
      </Box>

      <p>allowEmpty=true, no min/max</p>
      <Box sx={{ display: "flex" }}>
        <Input
          placeholder={"From"}
          {...rangePickerAllowEmpty2.inputFromProps}
        />
        <Input placeholder={"To"} {...rangePickerAllowEmpty2.inputToProps} />
        {rangePickerAllowEmpty2.value.from} - {rangePickerAllowEmpty2.value.to}
      </Box>

      <p>Component</p>
      <RangePicker
        min={0}
        max={100}
        inputFrom={<Input placeholder={"From"} />}
        inputTo={<Input placeholder={"To"} />}
        onChange={console.log}
      />

      <p>Component with separator sx</p>
      <RangePicker
        min={0}
        max={100}
        inputFrom={<Input placeholder={"From"} />}
        inputTo={<Input placeholder={"To"} />}
        separator={{ width: 20 }}
        onChange={console.log}
      />

      <p>Component with separator component</p>
      <RangePicker
        min={0}
        max={100}
        inputFrom={<Input placeholder={"From"} />}
        inputTo={<Input placeholder={"To"} />}
        separator={<Box sx={{ width: 40, textAlign: "center" }}> - </Box>}
        onChange={console.log}
      />
    </Box>
  );
};

export default {
  title: "RangePicker"
};
