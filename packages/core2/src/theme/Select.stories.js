import React, { useState, useEffect, useRef } from "react";

import Box from "@commerce-ui/core/Box";

import Button from "./Button/Button";

import Select2 from "@commerce-ui/core/Select2";
import ItemRow from "./Selectables/ItemRow";
import ColorRow from "./Selectables/ColorRow";
import Color from "./Selectables/Color";

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

const optionsAsStrings = ["New York", "Washington", "London", "Warsaw"];

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

function MySelect(props) {
  return (
    <Select2
      onChange={val => console.log("changed", val)}
      width={["100vw", null, 400]}
      anchoredTo={["window", null, "button"]}
      placement={["bottom", null, "bottomLeft"]}
      root={{
        boxShadow: "0 0px 14px rgba(0, 0, 0, 0.15)",
        bg: "white"
      }}
      {...props}
    />
  );
}

export const uncontrolled = () => {
  return (
    <Box sx={{ p: "s9" }}>
      <Box as={"p"} sx={{ mb: "s9" }}>
        Standard select anchored to the button on desktop and becoming drawer on
        mobile
      </Box>

      <MySelect
        options={options}
        button={({ value }) => (
          <Button>{value === null ? "Select" : value.label}</Button>
        )}
        selectable={<ItemRow />}
      />

      <Box as={"p"} sx={{ my: "s9" }}>
        allowEmpty = false
      </Box>

      <MySelect
        options={options}
        button={({ value }) => (
          <Button>{value === null ? "Select" : value.label}</Button>
        )}
        allowEmpty={false}
        selectable={<ItemRow />}
      />

      <Box as={"p"} sx={{ my: "s9" }}>
        defaultValue
      </Box>

      <MySelect
        options={options}
        button={({ value }) => (
          <Button>{value === null ? "Select" : value.label}</Button>
        )}
        defaultValue={options[2]}
        selectable={<ItemRow />}
      />

      <Box as={"p"} sx={{ my: "s9" }}>
        values as strings
      </Box>

      <MySelect
        options={optionsAsStrings}
        button={({ value }) => (
          <Button>{value === null ? "Select" : value}</Button>
        )}
        selectable={<ItemRow />}
      />

      <Box as={"p"} sx={{ my: "s9" }}>
        disabled (disabled value as defaultValue), allowEmpty = false
      </Box>

      <MySelect
        options={optionsWithDisabled}
        defaultValue={optionsWithDisabled[0]}
        button={({ value }) => (
          <Button>{value === null ? "Select" : value.label}</Button>
        )}
        selectable={<ItemRow />}
      />
    </Box>
  );
};

export const controlled = () => {
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(options[2]);
  const [value3, setValue3] = useState(null);

  return (
    <Box sx={{ p: "s9" }}>
      <Box as={"p"} sx={{ mb: "s9" }}>
        Standard select anchored to the button on desktop and becoming drawer on
        mobile
      </Box>

      <MySelect
        options={options}
        button={({ value }) => (
          <Button>{value === null ? "Select" : value.label}</Button>
        )}
        value={value}
        onChange={setValue}
        selectable={<ItemRow />}
      />

      <Box as={"p"} sx={{ my: "s9" }}>
        preselected value
      </Box>

      <MySelect
        options={options}
        button={({ value }) => (
          <Button>{value === null ? "Select" : value.label}</Button>
        )}
        value={value2}
        onChange={setValue2}
        selectable={<ItemRow />}
      />

      <Box as={"p"} sx={{ my: "s9" }}>
        values as strings
      </Box>

      <MySelect
        options={optionsAsStrings}
        button={({ value }) => (
          <Button>{value === null ? "Select" : value}</Button>
        )}
        value={value3}
        onChange={setValue3}
        selectable={<ItemRow />}
      />
    </Box>
  );
};

const colorOptions = [
  {
    id: "red",
    label: "Red",
    css: "red"
  },
  {
    id: "indianred",
    label: "Indian Red",
    css: "indianred"
  },
  {
    id: "lightsalmon",
    label: "Light salmon",
    css: "lightsalmon"
  },
  {
    id: "yellowgreen",
    label: "Yellow green",
    css: "yellowgreen"
  },
  {
    id: "olive",
    label: "Olive",
    css: "olive"
  },
  {
    id: "aquamarine",
    label: "Aquamarine",
    css: "aquamarine"
  },
  {
    id: "royalblue",
    label: "Royal blue",
    css: "royalblue"
  }
];

export const differentStylingColorPicker = () => {
  return (
    <Box sx={{ p: "s9" }}>
      <MySelect
        options={colorOptions}
        button={({ value }) => (
          <Button>
            {value && (
              <Box sx={{ width: 24, mr: 8 }} fitW>
                <Color color={value.css} />
              </Box>
            )}
            {value === null ? "Pick color" : value.label}
          </Button>
        )}
        selectable={({ option }) => <ColorRow color={option.css} />}
      />
    </Box>
  );
};

export default {
  title: "approved.Select"
};
