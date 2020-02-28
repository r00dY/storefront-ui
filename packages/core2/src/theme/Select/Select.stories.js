/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";

import Box from "@commerce-ui/core/Box";

import Select from "./index";
import SelectNative from "../SelectNative/SelectNative.stories";

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

      {/*<Button>Test</Button>*/}
      {/*<Button>Test2</Button>*/}

      {/*<Select*/}
      {/*sx={{*/}
      {/*$layer: <Layer anchoredTo={["window", null, "trigger"]} />,*/}
      {/*// $button: <Button />,*/}
      {/*$selectable: <Color />,*/}
      {/*$wrapper: <Box sx={{ p: 6 }} />,*/}
      {/*$separator: <Box sx={{ height: 4 }} />,*/}
      {/*...formStyles,*/}
      {/*width: "400px"*/}
      {/*}}*/}
      {/*label={"Test select"}*/}
      {/*options={colors}*/}
      {/*value={value}*/}
      {/*onChange={value => setValue(value)}*/}
      {/*/>*/}

      {/*<Button>Test</Button>*/}
      {/*<Button>Test2</Button>*/}

      {/*<Select*/}
      {/*sx={{*/}
      {/*$layer: <Layer anchoredTo={["window", null, "trigger"]} />,*/}
      {/*// $button: <Button />,*/}
      {/*$selectable: <Color />,*/}
      {/*$wrapper: <Box sx={{ p: 6 }} />,*/}
      {/*$separator: <Box sx={{ height: 4 }} />,*/}
      {/*$value: ({ selectedItem, placeholder }) => (*/}
      {/*<Box*/}
      {/*sx={{*/}
      {/*display: "flex",*/}
      {/*flexDirection: "row",*/}
      {/*alignItems: "center"*/}
      {/*}}*/}
      {/*>*/}
      {/*{selectedItem && (*/}
      {/*<Box*/}
      {/*sx={{*/}
      {/*width: "14px",*/}
      {/*height: "14px",*/}
      {/*borderRadius: "7px",*/}
      {/*mr: "4px",*/}
      {/*bg: selectedItem.color*/}
      {/*}}*/}
      {/*/>*/}
      {/*)}*/}
      {/*{selectedItem ? selectedItem.value : placeholder}*/}
      {/*</Box>*/}
      {/*),*/}
      {/*...formStyles,*/}
      {/*width: "400px"*/}
      {/*}}*/}
      {/*label={"Color"}*/}
      {/*placeholder={"Pick a color"}*/}
      {/*options={colors}*/}
      {/*value={value}*/}
      {/*onChange={value => setValue(value)}*/}
      {/*/>*/}
    </Box>
  );
};
//
// export const unstyled = () => {
//   const [value, setValue] = useState(colors[2]);
//
//   return (
//     <Box>
//       <Button>Test</Button>
//       <Button>Test2</Button>
//
//       <Select$
//         config={{
//           xs: {
//             mode: "slide-from-bottom",
//             height: "auto"
//           },
//           md: {
//             anchored: true
//           }
//         }}
//         button={({ selectedItem }) => (
//           <Button>{selectedItem ? selectedItem.value : "Pick a color"}</Button>
//         )}
//         options={colors}
//         value={value}
//         onChange={value => setValue(value)}
//       >
//         {({ options }) =>
//           options.map(option => (
//             <Color color={option.color} label={option.color} />
//           ))
//         }
//       </Select$>
//
//       <Button>Test</Button>
//       <Button>Test2</Button>
//     </Box>
//   );
// };
//
// export const inline = () => {
//   const { selectProps } = useSelect({ options: colors });
//
//   return (
//     <Box>
//       <Button>Test</Button>
//       <Button>Test2</Button>
//
//       <br />
//       <br />
//
//       <SelectInline$ {...selectProps}>
//         {({ options }) =>
//           options.map(option => (
//             <Color color={option.color} label={option.color} />
//           ))
//         }
//       </SelectInline$>
//
//       <br />
//       <br />
//
//       <Button>Test</Button>
//       <Button>Test2</Button>
//     </Box>
//   );
// };

export default {
  title: "Select"
};
