/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import SelectNative from "./index";
import React, { useRef, useState } from "react";

import storyOfSelectNative from "@commerce-ui/core/SelectNative/story";

export const selectNative = storyOfSelectNative(<SelectNative />);

const stringOptions = [
  "New York",
  "Washington",
  "London",
  "Warsaw",
  "City with a very long name"
];

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

const vals = ["a", "b", "c"];

export const unstyled = () => {
  const inputRef = useRef(null);

  const [val, setVal] = useState(null);
  const [val2, setVal2] = useState(options[2]);

  const [val3, setVal3] = useState("c");

  return (
    <>
      <form action={"/action"} method={"post"}>
        <h2>Uncontrolled</h2>

        <p>Standard</p>
        <SelectNative options={options} onChange={val => console.log} />

        <p>Standard (default value)</p>
        <SelectNative
          options={options}
          defaultValue={"london"}
          onChange={val => console.log}
        />

        <p>Standard (allowEmpty=false)</p>
        <SelectNative
          options={options}
          onChange={val => console.log}
          allowEmpty={false}
        />

        <p>Standard (default value, allowEmpty=false)</p>
        <SelectNative
          options={options}
          defaultValue={"london"}
          onChange={val => console.log}
          allowEmpty={false}
        />

        <h2>Controlled</h2>

        <p>Standard</p>
        <SelectNative options={options} value={val} onChange={setVal} />

        <p>Standard (default value)</p>
        <SelectNative options={options} value={val2} onChange={setVal2} />

        <p>Standard (allowEmpty=false)</p>
        <SelectNative
          options={options}
          value={val}
          onChange={setVal}
          allowEmpty={false}
        />

        <p>Standard (default value, allowEmpty=false)</p>
        <SelectNative
          options={options}
          value={val2}
          onChange={setVal2}
          allowEmpty={false}
        />

        <h2>Disabled states</h2>

        <p>Entire control disabled</p>
        <SelectNative
          options={options}
          onChange={val => console.log}
          disabled
          allowEmpty={false}
        />

        <p>Items disabled</p>
        <SelectNative
          options={optionsWithDisabled}
          onChange={val => console.log}
        />
      </form>
    </>
  );
};

export default {
  title: "SelectNative"
};
