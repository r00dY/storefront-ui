/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import SelectInline, { useSelectInline } from "@commerce-ui/core/SelectInline";
import MultiSelectInline, {
  useMultiSelectInline
} from "@commerce-ui/core/MultiSelectInline";
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

export const basic = () => {
  const [val, setVal] = useState(null);
  const [val2, setVal2] = useState(options[2]);

  const { selectableProps } = useSelectInline({
    options,
    onChange: console.log
  });

  return (
    <>
      <h2>Controlled by hook</h2>

      <Grid minItemWidth={300}>
        {selectableProps.map(props => (
          <ItemRow {...props} />
        ))}
      </Grid>

      <h2>String options</h2>

      <Grid minItemWidth={300}>
        <SelectInline
          options={options.map(o => o.label)}
          onChange={val => console.log}
        >
          <ItemRow />
        </SelectInline>
      </Grid>

      <h2>Invalid</h2>

      <Grid minItemWidth={300}>
        <SelectInline
          options={options.map(o => o.label)}
          allowEmpty={false}
          onChange={val => console.log}
          invalid
        >
          <ItemRow />
        </SelectInline>
      </Grid>

      <form action={"/action"} method={"post"}>
        <h2>Uncontrolled</h2>

        <p>Standard</p>

        <Grid minItemWidth={300}>
          <SelectInline options={options} onChange={val => console.log}>
            <ItemRow />
          </SelectInline>
        </Grid>

        <p>Standard (default value)</p>
        <Grid minItemWidth={300}>
          <SelectInline
            options={options}
            defaultValue={"london"}
            onChange={val => console.log}
          >
            <ItemRow />
          </SelectInline>
        </Grid>

        <p>Standard (allowEmpty=false)</p>

        <Grid minItemWidth={300}>
          <SelectInline
            options={options}
            onChange={val => console.log}
            allowEmpty={false}
          >
            <ItemRow />
          </SelectInline>
        </Grid>

        <p>Standard (default value, allowEmpty=false)</p>

        <Grid minItemWidth={300}>
          <SelectInline
            options={options}
            defaultValue={"london"}
            onChange={val => console.log}
            allowEmpty={false}
          >
            <ItemRow />
          </SelectInline>
        </Grid>

        <h2>Controlled</h2>

        <p>Standard</p>
        <Grid minItemWidth={300}>
          <SelectInline
            options={options}
            value={val}
            onChange={setVal}
            as={Grid}
            minItemWidth={300}
          >
            <ItemRow />
          </SelectInline>
        </Grid>

        <p>Standard (default value)</p>
        <Grid minItemWidth={300}>
          <SelectInline
            options={options}
            value={val2}
            onChange={setVal2}
            as={Grid}
            minItemWidth={300}
          >
            <ItemRow />
          </SelectInline>
        </Grid>

        <p>Standard (allowEmpty=false)</p>
        <Grid minItemWidth={300}>
          <SelectInline
            options={options}
            value={val}
            onChange={setVal}
            allowEmpty={false}
          >
            <ItemRow />
          </SelectInline>
        </Grid>

        <p>Standard (default value, allowEmpty=false)</p>
        <Grid minItemWidth={300}>
          <SelectInline
            options={options}
            value={val2}
            onChange={setVal2}
            allowEmpty={false}
          >
            <ItemRow />
          </SelectInline>
        </Grid>

        <h2>Disabled states</h2>

        <p>Entire control disabled</p>
        <Grid minItemWidth={300}>
          <SelectInline
            options={options}
            onChange={val => console.log}
            disabled
            allowEmpty={false}
          >
            <ItemRow />
          </SelectInline>
        </Grid>

        <p>Items disabled</p>

        <Grid minItemWidth={300}>
          <SelectInline
            options={optionsWithDisabled}
            onChange={val => console.log}
          >
            <ItemRow />
          </SelectInline>
        </Grid>
      </form>
    </>
  );
};

export const multi = () => {
  const [val, setVal] = useState(null);
  const [val2, setVal2] = useState(options[2]);

  const { selectableProps } = useMultiSelectInline({
    options,
    onChange: console.log
  });

  return (
    <>
      <h2>Controlled by hook</h2>

      <Grid minItemWidth={300}>
        {selectableProps.map(props => (
          <ItemRow {...props} />
        ))}
      </Grid>

      <h2>String options</h2>

      <Grid minItemWidth={300}>
        <MultiSelectInline
          options={options.map(o => o.label)}
          onChange={val => console.log}
        >
          <ItemRow />
        </MultiSelectInline>
      </Grid>

      <h2>Invalid</h2>

      <Grid minItemWidth={300}>
        <MultiSelectInline
          options={options.map(o => o.label)}
          onChange={val => console.log}
          invalid
        >
          <ItemRow />
        </MultiSelectInline>
      </Grid>

      <form action={"/action"} method={"post"}>
        <h2>Uncontrolled</h2>

        <p>Standard</p>

        <Grid minItemWidth={300}>
          <MultiSelectInline options={options} onChange={val => console.log}>
            <ItemRow />
          </MultiSelectInline>
        </Grid>

        <p>Standard (default value)</p>
        <Grid minItemWidth={300}>
          <MultiSelectInline
            options={options}
            defaultValue={["london", "warsaw"]}
            onChange={val => console.log}
          >
            <ItemRow />
          </MultiSelectInline>
        </Grid>

        <h2>Controlled</h2>

        <p>Standard</p>
        <Grid minItemWidth={300}>
          <MultiSelectInline
            options={options}
            value={val}
            onChange={setVal}
            as={Grid}
            minItemWidth={300}
          >
            <ItemRow />
          </MultiSelectInline>
        </Grid>

        <p>Standard (default value)</p>
        <Grid minItemWidth={300}>
          <MultiSelectInline
            options={options}
            value={val2}
            onChange={setVal2}
            as={Grid}
            minItemWidth={300}
          >
            <ItemRow />
          </MultiSelectInline>
        </Grid>

        <h2>Disabled states</h2>

        <p>Entire control disabled</p>
        <Grid minItemWidth={300}>
          <MultiSelectInline
            options={options}
            onChange={val => console.log}
            disabled
          >
            <ItemRow />
          </MultiSelectInline>
        </Grid>

        <p>Items disabled</p>

        <Grid minItemWidth={300}>
          <MultiSelectInline
            options={optionsWithDisabled}
            onChange={val => console.log}
          >
            <ItemRow />
          </MultiSelectInline>
        </Grid>
      </form>
    </>
  );
};

export default {
  title: "SelectInline"
};
