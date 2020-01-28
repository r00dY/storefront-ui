/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import HorizontalStack from "@commerce-ui/core/HorizontalStack";
import Index from "./index";
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

        <p>Standard</p>
        <Index placeholder={"City"} options={stringOptions} />

        <p>Disabled</p>
        <Index disabled={true} placeholder={"City"} options={stringOptions} />

        <p>Error</p>
        <Index invalid={true} placeholder={"City"} options={stringOptions} />

        <p>No placeholder</p>
        <Index label={"City"} type={"text"} options={stringOptions} />

        <p>ref</p>

        <HorizontalStack sx={{ $gutter: "8px" }}>
          <Index
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
        <Index
          sx={{
            width: "320px",
            height: "150px"
          }}
          placeholder={"City"}
          options={stringOptions}
        />

        <h2>Enhancers</h2>
        <p>Left enhancer</p>
        <Index
          placeholder={"City"}
          options={stringOptions}
          leftEnhancer={"$"}
        />

        <p>Left enhancer double</p>
        <Index
          placeholder={"City"}
          options={stringOptions}
          leftEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}
        />

        <p>Right enhancer</p>
        <Index
          placeholder={"City"}
          options={stringOptions}
          rightEnhancer={"$"}
        />

        <p>Right enhancer double</p>
        <Index
          placeholder={"City"}
          options={stringOptions}
          rightEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}
        />

        <p>Both enhancers</p>
        <Index
          placeholder={"City"}
          options={stringOptions}
          rightEnhancer={"$"}
          leftEnhancer={"$"}
        />

        <p>Both enhancers double (change of color on focus)</p>
        <Index
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
