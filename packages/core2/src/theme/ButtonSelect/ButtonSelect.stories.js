/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import HorizontalStack from "@commerce-ui/core/HorizontalStack";
import ButtonSelect from ".";
import Button from "../Button/Button";
import React, { useRef } from "react";

export const unstyled = () => {
  const inputRef = useRef(null);

  return (
    <>
      <h2>General</h2>

      <p>Standard</p>
      <ButtonSelect
        onClick={() => {
          alert("click!");
        }}
      />

      <p>Show label</p>
      <ButtonSelect
        onClick={() => {
          alert("click!");
        }}
        showLabel={true}
        placeholder={"Test"}
      />

      <p>Disabled</p>
      <ButtonSelect
        type={"text"}
        disabled={true}
        placeholder={"Placeholder..."}
      />

      <p>Error</p>
      <ButtonSelect
        type={"text"}
        invalid={true}
        placeholder={"Placeholder..."}
      />

      <p>Placeholder</p>
      <ButtonSelect type={"text"} placeholder={"Placeholder..."} />

      <p>ref</p>

      <HorizontalStack sx={{ $gutter: "8px" }}>
        <ButtonSelect
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
      <ButtonSelect
        sx={{
          width: "320px",
          height: "150px"
        }}
        type={"text"}
        placeholder={"Placeholder..."}
      />

      <h2>Enhancers</h2>
      <p>Left enhancer</p>
      <ButtonSelect
        type={"text"}
        placeholder={"Placeholder..."}
        leftEnhancer={"$"}
      />

      <p>Left enhancer double</p>
      <ButtonSelect
        type={"text"}
        placeholder={"Placeholder..."}
        leftEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}
      />

      <p>Right enhancer</p>
      <ButtonSelect
        type={"text"}
        placeholder={"Placeholder..."}
        rightEnhancer={"$"}
      />

      <p>Right enhancer double</p>
      <ButtonSelect
        type={"text"}
        placeholder={"Placeholder..."}
        rightEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}
      />

      <p>Both enhancers</p>
      <ButtonSelect
        type={"text"}
        placeholder={"Placeholder..."}
        rightEnhancer={"$"}
        leftEnhancer={"$"}
      />

      <p>Both enhancers double (change of color on focus)</p>
      <ButtonSelect
        type={"text"}
        placeholder={"Placeholder..."}
        onClick={() => alert("test")}
        rightEnhancer={({ focused }) => [
          <div sx={{ color: focused ? "red" : "inherit" }} key={1}>
            $
          </div>,
          <div key={2}>€</div>
        ]}
        leftEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}
      />

      <p>Number with enhancers</p>
      <ButtonSelect
        type={"number"}
        placeholder={"Placeholder..."}
        rightEnhancer={"$"}
        leftEnhancer={"$"}
      />

      <p>Search with enhancers</p>
      <ButtonSelect
        type={"search"}
        placeholder={"Placeholder..."}
        rightEnhancer={"$"}
        leftEnhancer={"$"}
      />

      <br />
      <br />

      <Button type={"submit"}>submit</Button>
    </>
  );
};

export default {
  title: "ButtonSelect"
};
