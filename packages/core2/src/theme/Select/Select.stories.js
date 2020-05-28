/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";

import Select from "./index";
import SelectNative from "../SelectNative/SelectNative.stories";
import Button from "../Button/Button";

import Select2 from "@commerce-ui/core/Select2";
import ItemRow from "../Selectables/ItemRow";

const options = [
  {
    id: "new-york",
    label: "New York"
  },
  {
    id: "washington",
    label: "Washington"
  },
  {
    id: "london",
    label: "London"
  },
  {
    id: "warsaw",
    label: "Warsaw"
  }
];
const optionsWithDisabled = [
  {
    id: "new-york",
    label: "New York",
    disabled: true
  },
  {
    id: "washington",
    label: "Washington"
  },
  {
    id: "london",
    label: "London",
    disabled: true
  },
  {
    id: "warsaw",
    label: "Warsaw"
  }
];

export const newSelect = () => {
  const [val, setVal] = useState(null);
  const [val2, setVal2] = useState(options[2]);

  return (
    <Box>
      <h2>Uncontrolled</h2>

      <p>Standard</p>
      <Select options={options} onChange={val => console.log} />

      <p>Standard (default value)</p>
      <Select
        options={options}
        defaultValue={"london"}
        onChange={val => console.log}
      />

      <p>Standard (allowEmpty=false)</p>
      <Select
        options={options}
        onChange={val => console.log}
        allowEmpty={false}
      />

      <p>Standard (default value, allowEmpty=false)</p>
      <Select
        options={options}
        defaultValue={"london"}
        onChange={val => console.log}
        allowEmpty={false}
      />

      <h2>Controlled</h2>

      <p>Standard</p>
      <Select options={options} value={val} onChange={setVal} />

      <p>Standard (default value)</p>
      <Select options={options} value={val2} onChange={setVal2} />

      <p>Standard (allowEmpty=false)</p>
      <Select
        options={options}
        value={val}
        onChange={setVal}
        allowEmpty={false}
      />

      <p>Standard (default value, allowEmpty=false)</p>
      <Select
        options={options}
        value={val2}
        onChange={setVal2}
        allowEmpty={false}
      />

      <h2>Disabled states</h2>

      <p>Entire control disabled</p>
      <Select
        options={options}
        onChange={val => console.log}
        disabled
        allowEmpty={false}
      />

      <p>Items disabled</p>
      <Select options={optionsWithDisabled} onChange={val => console.log} />
    </Box>
  );
};

export const newSelect2 = () => {
  return (
    <Box>
      <h2>Uncontrolled</h2>

      <p>Standard</p>
      <Select2
        options={options}
        onChange={val => console.log}
        button={({ value }) => (
          <Button>{value === null ? "Select" : value.label}</Button>
        )}
        width={400}
        root={{
          border: "1px solid black",
          bg: "white"
        }}
      >
        <ItemRow />
      </Select2>
    </Box>
  );
};

export default {
  title: "Select"
};
