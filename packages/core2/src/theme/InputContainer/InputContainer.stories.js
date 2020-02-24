/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import HorizontalStack from "@commerce-ui/core/HorizontalStack";
import InputContainer from ".";
import Button from "../Button/Button";
import React, { useRef } from "react";
import Box from "@commerce-ui/core/Box";

const InputContainerTest = props => (
  <InputContainer {...props}>
    <Box sx={{}} tabIndex={0}>
      Test
    </Box>
  </InputContainer>
);

export const unstyled = () => {
  const inputRef = useRef(null);

  return (
    <>
      <p>Nothin</p>
      <InputContainerTest />

      <p>Enhancers</p>
      <InputContainerTest
        leftEnhancer={[<Box>$</Box>, <Box>X</Box>]}
        rightEnhancer={[<Box>$</Box>, <Box>X</Box>]}
      />

      <p>Non empty</p>
      <InputContainerTest empty={false} label={"Lorem ipsum"} />

      <p>Non empty with enhancers</p>

      <InputContainerTest
        leftEnhancer={[<Box>$</Box>, <Box>X</Box>]}
        rightEnhancer={[<Box>$</Box>, <Box>X</Box>]}
        label={"Lorem ipsum"}
        empty={false}
      />

      {/*<form action={"/action"} method={"post"}>*/}
      {/*<h2>General</h2>*/}

      {/*<p>Type = text</p>*/}
      {/*<InputContainer type={"text"} placeholder={"First name"} />*/}

      {/*<p>Type = password</p>*/}
      {/*<InputContainer type={"password"} placeholder={"Placeholder..."} />*/}

      {/*<p>Type = number</p>*/}
      {/*<InputContainer type={"number"} placeholder={"Placeholder..."} />*/}

      {/*<p>Type = email</p>*/}
      {/*<InputContainer type={"email"} name={"email"} placeholder={"E-mail"} required />*/}

      {/*<p>Type = search</p>*/}
      {/*<InputContainer type={"search"} placeholder={"Placeholder..."} />*/}

      {/*<p>Disabled</p>*/}
      {/*<InputContainer type={"text"} disabled={true} placeholder={"Placeholder..."} />*/}

      {/*<p>Error</p>*/}
      {/*<InputContainer type={"text"} invalid={true} placeholder={"Placeholder..."} />*/}

      {/*<p>Placeholder</p>*/}
      {/*<InputContainer type={"text"} placeholder={"Placeholder..."} />*/}

      {/*<p>ref</p>*/}

      {/*<HorizontalStack sx={{ $gutter: "8px" }}>*/}
      {/*<InputContainer*/}
      {/*type={"text"}*/}
      {/*placeholder={"Placeholder..."}*/}
      {/*inputRef={inputRef}*/}
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
      {/*<InputContainer*/}
      {/*sx={{*/}
      {/*width: "320px",*/}
      {/*height: "150px"*/}
      {/*}}*/}
      {/*type={"text"}*/}
      {/*placeholder={"Placeholder..."}*/}
      {/*/>*/}

      {/*<h2>Enhancers</h2>*/}
      {/*<p>Left enhancer</p>*/}
      {/*<InputContainer*/}
      {/*type={"text"}*/}
      {/*placeholder={"Placeholder..."}*/}
      {/*leftEnhancer={"$"}*/}
      {/*/>*/}

      {/*<p>Left enhancer double</p>*/}
      {/*<InputContainer*/}
      {/*type={"text"}*/}
      {/*placeholder={"Placeholder..."}*/}
      {/*leftEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}*/}
      {/*/>*/}

      {/*<p>Right enhancer</p>*/}
      {/*<InputContainer*/}
      {/*type={"text"}*/}
      {/*placeholder={"Placeholder..."}*/}
      {/*rightEnhancer={"$"}*/}
      {/*/>*/}

      {/*<p>Right enhancer double</p>*/}
      {/*<InputContainer*/}
      {/*type={"text"}*/}
      {/*placeholder={"Placeholder..."}*/}
      {/*rightEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}*/}
      {/*/>*/}

      {/*<p>Both enhancers</p>*/}
      {/*<InputContainer*/}
      {/*type={"text"}*/}
      {/*placeholder={"Placeholder..."}*/}
      {/*rightEnhancer={"$"}*/}
      {/*leftEnhancer={"$"}*/}
      {/*/>*/}

      {/*<p>Both enhancers double (change of color on focus)</p>*/}
      {/*<InputContainer*/}
      {/*type={"text"}*/}
      {/*placeholder={"Placeholder..."}*/}
      {/*rightEnhancer={({ focused }) => [*/}
      {/*<div sx={{ color: focused ? "red" : "inherit" }} key={1}>*/}
      {/*$*/}
      {/*</div>,*/}
      {/*<div key={2}>€</div>*/}
      {/*]}*/}
      {/*leftEnhancer={[<div key={1}>$</div>, <div key={2}>€</div>]}*/}
      {/*/>*/}

      {/*<p>Number with enhancers</p>*/}
      {/*<InputContainer*/}
      {/*type={"number"}*/}
      {/*placeholder={"Placeholder..."}*/}
      {/*rightEnhancer={"$"}*/}
      {/*leftEnhancer={"$"}*/}
      {/*/>*/}

      {/*<p>Search with enhancers</p>*/}
      {/*<InputContainer*/}
      {/*type={"search"}*/}
      {/*placeholder={"Placeholder..."}*/}
      {/*rightEnhancer={"$"}*/}
      {/*leftEnhancer={"$"}*/}
      {/*/>*/}

      {/*<br />*/}
      {/*<br />*/}

      {/*<Button type={"submit"}>submit</Button>*/}
      {/*</form>*/}
    </>
  );
};

export default {
  title: "InputContainer"
};
