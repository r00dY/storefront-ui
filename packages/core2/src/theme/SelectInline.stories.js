/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import SelectInline$ from "@commerce-ui/core/SelectInline";
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

const SelectInline = props => (
  <SelectInline$
    {...props}
    sx={{
      $label: {
        font: "heading",
        pb: "16px"
      },
      $selectable: <ItemRow />,
      $optionsContainer: {
        __type: Grid,
        __props: {
          minItemWidth: 300
        }
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
        <SelectInline
          options={options}
          onChange={val => console.log}
          label={"Label"}
        />

        <p>Standard (default value)</p>
        <SelectInline
          options={options}
          defaultValue={"london"}
          onChange={val => console.log}
        />

        <p>Standard (allowEmpty=false)</p>
        <SelectInline
          options={options}
          onChange={val => console.log}
          allowEmpty={false}
        />

        <p>Standard (default value, allowEmpty=false)</p>
        <SelectInline
          options={options}
          defaultValue={"london"}
          onChange={val => console.log}
          allowEmpty={false}
        />

        <h2>Controlled</h2>

        <p>Standard</p>
        <SelectInline options={options} value={val} onChange={setVal} />

        <p>Standard (default value)</p>
        <SelectInline options={options} value={val2} onChange={setVal2} />

        <p>Standard (allowEmpty=false)</p>
        <SelectInline
          options={options}
          value={val}
          onChange={setVal}
          allowEmpty={false}
        />

        <p>Standard (default value, allowEmpty=false)</p>
        <SelectInline
          options={options}
          value={val2}
          onChange={setVal2}
          allowEmpty={false}
        />

        <h2>Disabled states</h2>

        <p>Entire control disabled</p>
        <SelectInline
          options={options}
          onChange={val => console.log}
          disabled
          allowEmpty={false}
        />

        <p>Items disabled</p>
        <SelectInline
          options={optionsWithDisabled}
          onChange={val => console.log}
        />
      </form>
    </>
  );
};

export default {
  title: "SelectInline"
};
