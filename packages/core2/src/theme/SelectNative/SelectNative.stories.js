/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import HorizontalStack from "@commerce-ui/core/HorizontalStack";
import SelectNative from "./index";
import Button from "../Button/Button";
import React, { useRef, useState } from "react";

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

        <p>Standard (uncontrolled, no placeholder)</p>
        <SelectNative options={options} onChange={val => console.log} />

        <p>Standard (uncontrolled, no placeholder, default value)</p>
        <SelectNative
          options={options}
          defaultValue={"london"}
          onChange={val => console.log}
        />

        <p>Standard (uncontrolled, placeholder)</p>
        <SelectNative
          options={options}
          onChange={val => console.log}
          placeholder={"City"}
        />

        <p>Standard (uncontrolled, placeholder, default value)</p>
        <SelectNative
          options={options}
          defaultValue={"london"}
          onChange={val => console.log}
          placeholder={"City"}
        />

        <h2>Controlled</h2>

        <p>Standard (controlled)</p>
        <SelectNative
          options={options}
          value={val}
          onChange={setVal}
          placeholder={"City"}
        />

        <p>Standard (controlled, default value)</p>
        <SelectNative options={options} value={val2} onChange={setVal2} />

        <br />

        {/*<p>Standard (controlled, placeholder)</p>*/}
        {/*<SelectNative options={options} onChange={val => console.log} placeholder={"City"}/>*/}

        {/*<p>Standard (controlled, placeholder, default value)</p>*/}
        {/*<SelectNative options={options} defaultValue={"london"} onChange={val => console.log} placeholder={"City"}/>*/}

        {/*<h2>States</h2>*/}

        {/*<p>Disabled</p>*/}
        {/*<SelectNative disabled={true} placeholder={"City"} options={stringOptions} />*/}

        {/*<p>Error</p>*/}
        {/*<SelectNative invalid={true} placeholder={"City"} options={stringOptions} />*/}

        {/*<p>No placeholder</p>*/}
        {/*<SelectNative label={"City"} type={"text"} options={stringOptions} />*/}

        {/*<p>ref</p>*/}

        {/*<HorizontalStack sx={{ $gutter: "8px" }}>*/}
        {/*<SelectNative*/}
        {/*inputRef={inputRef}*/}
        {/*placeholder={"City"}*/}
        {/*options={stringOptions}*/}
        {/*/>*/}

        {/*<Button*/}
        {/*onClick={() => {*/}
        {/*inputRef.current.focus();*/}
        {/*}}*/}
        {/*type={"button"}*/}
        {/*>*/}
        {/*Focus*/}
        {/*</Button>*/}
        {/*</HorizontalStack>*/}

        {/*<p>Size</p>*/}
        {/*<SelectNative*/}
        {/*sx={{*/}
        {/*width: "320px",*/}
        {/*height: "150px"*/}
        {/*}}*/}
        {/*placeholder={"City"}*/}
        {/*options={stringOptions}*/}
        {/*/>*/}

        {/*<h2>Enhancers</h2>*/}
        {/*<p>Left enhancer</p>*/}
        {/*<SelectNative*/}
        {/*placeholder={"City"}*/}
        {/*options={stringOptions}*/}
        {/*leftEnhancer={"$"}*/}
        {/*/>*/}

        {/*<p>Left enhancer double</p>*/}
        {/*<SelectNative*/}
        {/*placeholder={"City"}*/}
        {/*options={stringOptions}*/}
        {/*leftEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}*/}
        {/*/>*/}

        {/*<p>Right enhancer</p>*/}
        {/*<SelectNative*/}
        {/*placeholder={"City"}*/}
        {/*options={stringOptions}*/}
        {/*rightEnhancer={"$"}*/}
        {/*/>*/}

        {/*<p>Right enhancer double</p>*/}
        {/*<SelectNative*/}
        {/*placeholder={"City"}*/}
        {/*options={stringOptions}*/}
        {/*rightEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}*/}
        {/*/>*/}

        {/*<p>Both enhancers</p>*/}
        {/*<SelectNative*/}
        {/*placeholder={"City"}*/}
        {/*options={stringOptions}*/}
        {/*rightEnhancer={"$"}*/}
        {/*leftEnhancer={"$"}*/}
        {/*/>*/}

        {/*<p>Both enhancers double (change of color on focus)</p>*/}
        {/*<SelectNative*/}
        {/*placeholder={"City"}*/}
        {/*options={stringOptions}*/}
        {/*rightEnhancer={({ focused }) => [*/}
        {/*<div sx={{ color: focused ? "red" : "inherit" }} key={1}>*/}
        {/*$*/}
        {/*</div>,*/}
        {/*<div key={2}>€</div>*/}
        {/*]}*/}
        {/*leftEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}*/}
        {/*/>*/}

        {/*<br />*/}
        {/*<br />*/}

        {/*<Button type={"submit"}>submit</Button>*/}
      </form>
    </>
  );
};

export default {
  title: "SelectNative"
};
