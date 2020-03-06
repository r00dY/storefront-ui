/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import SelectScrollableStack$ from "@commerce-ui/core/SelectScrollableStack";
import Grid from "@commerce-ui/core/Grid";
import React, { useRef, useState } from "react";

import ItemRow from "./Selectables/ItemRow";

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

const SelectScrollableStack = props => (
  <SelectScrollableStack$
    {...props}
    sx={{
      $label: {
        font: "label",
        pb: "12px"
      },
      $selectable: <ItemRow />,
      $scrollableStack: {
        $itemSize: 300,
        $gap: 50
      }
    }}
  />
);

export const basic = () => {
  const [val, setVal] = useState(null);
  const [val2, setVal2] = useState(options[2]);

  return (
    <>
      <form action={"/action"} method={"post"}>
        <h2>Uncontrolled</h2>

        <p>Standard</p>
        <SelectScrollableStack
          options={options}
          onChange={val => console.log}
          label={"Pick a value"}
        />

        <p>Standard (default value)</p>
        <SelectScrollableStack
          options={options}
          defaultValue={"london"}
          onChange={val => console.log}
        />

        <p>Standard (allowEmpty=false)</p>
        <SelectScrollableStack
          options={options}
          onChange={val => console.log}
          allowEmpty={false}
        />

        <p>Standard (default value, allowEmpty=false)</p>
        <SelectScrollableStack
          options={options}
          defaultValue={"london"}
          onChange={val => console.log}
          allowEmpty={false}
        />

        <h2>Controlled</h2>

        <p>Standard</p>
        <SelectScrollableStack
          options={options}
          value={val}
          onChange={setVal}
        />

        <p>Standard (default value)</p>
        <SelectScrollableStack
          options={options}
          value={val2}
          onChange={setVal2}
        />

        <p>Standard (allowEmpty=false)</p>
        <SelectScrollableStack
          options={options}
          value={val}
          onChange={setVal}
          allowEmpty={false}
        />

        <p>Standard (default value, allowEmpty=false)</p>
        <SelectScrollableStack
          options={options}
          value={val2}
          onChange={setVal2}
          allowEmpty={false}
        />

        <h2>Disabled states</h2>

        <p>Entire control disabled</p>
        <SelectScrollableStack
          options={options}
          onChange={val => console.log}
          disabled
          allowEmpty={false}
        />

        <p>Items disabled</p>
        <SelectScrollableStack
          options={optionsWithDisabled}
          onChange={val => console.log}
        />
      </form>
    </>
  );
};

export default {
  title: "SelectScrollableStack"
};
