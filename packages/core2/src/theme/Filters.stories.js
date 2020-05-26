import React from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";

import useFilters from "@commerce-ui/core/useFilters";

import { filters as filtersData } from "./data";

import SelectInline from "@commerce-ui/core/SelectInline";
import MultiSelectInline from "@commerce-ui/core/MultiSelectInline";
import RangePicker from "@commerce-ui/core/RangePicker";

import ItemRow from "./Selectables/ItemRow";
import Input from "./Input";
import SelectNative from "./SelectNative";

import Dialog from "./Dialog";
import Button from "./Button/Button";

export const basic = () => {
  const { filters } = useFilters({
    data: filtersData,
    onChange: () => {
      console.log("changed!");
    }
  });

  return (
    <Box sx={{ p: 50 }}>
      {filters.map(filter => (
        <Box sx={{ mb: 20 }} key={filter.id}>
          {filter.label}
          <br />
          {filter.type === "select" && (
            <Box>
              <SelectInline {...filter.selectProps}>
                <ItemRow />
              </SelectInline>

              <br />

              <Dialog
                button={
                  <Button>
                    {filter.label}
                    {filter.value ? `: ${filter.value.label}` : ""}
                  </Button>
                }
              >
                <Box sx={{ border: "1px solid black" }}>
                  <SelectInline {...filter.selectProps}>
                    <ItemRow />
                  </SelectInline>
                </Box>
              </Dialog>
            </Box>
          )}
          {filter.type === "multiselect" && (
            <Box>
              <MultiSelectInline {...filter.selectProps}>
                <ItemRow />
              </MultiSelectInline>

              <br />

              <Dialog
                button={
                  <Button>
                    {filter.label}
                    {filter.value.length > 0 ? ": values" : ""}
                  </Button>
                }
              >
                <Box sx={{ border: "1px solid black" }}>
                  <MultiSelectInline {...filter.selectProps}>
                    <ItemRow />
                  </MultiSelectInline>
                </Box>
              </Dialog>
            </Box>
          )}
          {filter.type === "range" && (
            <RangePicker
              {...filter.rangePickerProps}
              inputFrom={<Input />}
              inputTo={<Input />}
              separator={<Box sx={{ width: 20 }} />}
            />
          )}
          <button {...filter.clearButtonProps}>Clear</button>
        </Box>
      ))}

      {/*<SelectNative {...filters.selectProps} />*/}

      {/*<button*/}
      {/*onClick={() => {*/}
      {/*filters.clear();*/}
      {/*}}*/}
      {/*>*/}
      {/*Clear*/}
      {/*</button>*/}
    </Box>
  );
};

export default {
  title: "Filters"
};
