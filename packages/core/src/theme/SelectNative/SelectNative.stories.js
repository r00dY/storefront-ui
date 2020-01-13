/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import HorizontalStack from "@commerce-ui/core/HorizontalStack";
import SelectNative from ".";
import Button from "../Button/Button";
import React, { useRef } from "react";

const stringOptions = [
  "New York",
  "Washington",
  "London",
  "Warsaw",
  "City with a very long name"
];

const options = [
  {
    value: "new-york",
    label: "New York"
  },
  {
    value: "washington",
    label: "Washington"
  },
  {
    value: "london",
    label: "London"
  },
  {
    value: "warsaw",
    label: "Warsaw"
  }
];

export const unstyled = () => {
  const inputRef = useRef(null);

  return (
    <>
      <form action={"/action"} method={"post"}>
        <h2>General</h2>

        <p>Type = text</p>
        <SelectNative placeholder={"City"} options={stringOptions} />

        <p>Disabled</p>
        <SelectNative
          type={"text"}
          disabled={true}
          placeholder={"City"}
          options={stringOptions}
        />

        <p>Error</p>
        <SelectNative
          type={"text"}
          invalid={true}
          placeholder={"City"}
          options={stringOptions}
        />

        <p>No placeholder</p>
        <SelectNative label={"City"} type={"text"} options={stringOptions} />

        <p>ref</p>

        <HorizontalStack sx={{ $gutter: "8px" }}>
          <SelectNative
            inputRef={inputRef}
            placeholder={"City"}
            options={stringOptions}
          />

          <Button
            onClick={() => {
              inputRef.current.focus();
            }}
            type={"button"}
          >
            Focus
          </Button>
        </HorizontalStack>

        <p>Size</p>
        <SelectNative
          sx={{
            width: "320px",
            height: "150px"
          }}
          placeholder={"City"}
          options={stringOptions}
        />

        <h2>Enhancers</h2>
        <p>Left enhancer</p>
        <SelectNative
          placeholder={"City"}
          options={stringOptions}
          leftEnhancer={"$"}
        />

        <p>Left enhancer double</p>
        <SelectNative
          placeholder={"City"}
          options={stringOptions}
          leftEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}
        />

        <p>Right enhancer</p>
        <SelectNative
          placeholder={"City"}
          options={stringOptions}
          rightEnhancer={"$"}
        />

        <p>Right enhancer double</p>
        <SelectNative
          placeholder={"City"}
          options={stringOptions}
          rightEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}
        />

        <p>Both enhancers</p>
        <SelectNative
          placeholder={"City"}
          options={stringOptions}
          rightEnhancer={"$"}
          leftEnhancer={"$"}
        />

        <p>Both enhancers double (change of color on focus)</p>
        <SelectNative
          placeholder={"City"}
          options={stringOptions}
          rightEnhancer={({ focused }) => [
            <div sx={{ color: focused ? "red" : "inherit" }} key={1}>
              $
            </div>,
            <div key={2}>€</div>
          ]}
          leftEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}
        />

        <br />
        <br />

        <Button type={"submit"}>submit</Button>
      </form>
    </>
  );
};

export default {
  title: "SelectNative"
};
