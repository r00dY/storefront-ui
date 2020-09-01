/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import HorizontalStack from "@commerce-ui/core/HorizontalStack";
import Input from ".";
import Button from "../Button/Button";
import React, { useRef } from "react";

export const unstyled = () => {
  const inputRef = useRef(null);

  return (
    <>
      <form action={"/action"} method={"post"}>
        <h2>General</h2>

        <p>Type = text</p>
        <Input
          type={"text"}
          placeholder={"First name"}
          onChange={console.log}
        />

        <p>Type = password</p>
        <Input type={"password"} placeholder={"Placeholder..."} />

        <p>Type = number</p>
        <Input type={"number"} placeholder={"Placeholder..."} step={"any"} />

        <p>Type = email</p>
        <Input type={"email"} name={"email"} placeholder={"E-mail"} required />

        <p>Type = search</p>
        <Input type={"search"} placeholder={"Placeholder..."} />

        <p>Disabled</p>
        <Input type={"text"} disabled={true} placeholder={"Placeholder..."} />

        <p>Error</p>
        <Input type={"text"} invalid={true} placeholder={"Placeholder..."} />

        <p>Placeholder</p>
        <Input type={"text"} placeholder={"Placeholder..."} />

        <p>Clearable</p>
        <Input
          type={"text"}
          placeholder={"First name"}
          onChange={console.log}
          clearable={true}
        />

        <p>Clearable search (with right enhancer)</p>
        <Input
          type={"search"}
          placeholder={"Search phrase"}
          onChange={console.log}
          clearable={true}
          rightEnhancer={"[sth]"}
        />

        <p>ref</p>

        <HorizontalStack sx={{ $gutter: "8px" }}>
          <Input
            type={"text"}
            placeholder={"Placeholder..."}
            inputRef={inputRef}
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
        <Input
          sx={{
            width: "320px",
            height: "150px"
          }}
          type={"text"}
          placeholder={"Placeholder..."}
        />

        <h2>Enhancers</h2>
        <p>Left enhancer</p>
        <Input
          type={"text"}
          placeholder={"Placeholder..."}
          leftEnhancer={"$"}
        />

        <p>Left enhancer double</p>
        <Input
          type={"text"}
          placeholder={"Placeholder..."}
          leftEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}
        />

        <p>Right enhancer</p>
        <Input
          type={"text"}
          placeholder={"Placeholder..."}
          rightEnhancer={"$"}
        />

        <p>Right enhancer double</p>
        <Input
          type={"text"}
          placeholder={"Placeholder..."}
          rightEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}
        />

        <p>Both enhancers</p>
        <Input
          type={"text"}
          placeholder={"Placeholder..."}
          rightEnhancer={"$"}
          leftEnhancer={"$"}
        />

        <p>Both enhancers double (change of color on focus)</p>
        <Input
          type={"text"}
          placeholder={"Placeholder..."}
          rightEnhancer={({ focused }) => [
            <div sx={{ color: focused ? "red" : "inherit" }} key={1}>
              $
            </div>,
            <div key={2}>€</div>
          ]}
          leftEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}
        />

        <p>Number with enhancers</p>
        <Input
          type={"number"}
          placeholder={"Placeholder..."}
          rightEnhancer={"$"}
          leftEnhancer={"$"}
        />

        <p>Search with enhancers</p>
        <Input
          type={"search"}
          placeholder={"Placeholder..."}
          rightEnhancer={"$"}
          leftEnhancer={"$"}
        />

        <br />
        <br />

        <Button type={"submit"}>submit</Button>
      </form>
    </>
  );
};

export default {
  title: "Input"
};
