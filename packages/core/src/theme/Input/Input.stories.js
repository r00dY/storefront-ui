/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import Input from ".";
import Button from "../Button/Button";

export const unstyled = () => (
  <>
    <form action={"/action"} method={"post"}>
      <h2>General</h2>

      <p>Type = text</p>
      <Input type={"text"} placeholder={"Placeholder..."} />

      <p>Type = password</p>
      <Input type={"password"} placeholder={"Placeholder..."} />

      <p>Type = number</p>
      <Input type={"number"} placeholder={"Placeholder..."} />

      <p>Type = email</p>
      <Input
        type={"email"}
        name={"email"}
        placeholder={"Placeholder..."}
        required
      />

      <p>Type = search</p>
      <Input type={"search"} placeholder={"Placeholder..."} />

      <p>Disabled</p>
      <Input type={"text"} disabled={true} placeholder={"Placeholder..."} />

      <p>Error</p>
      <Input type={"text"} invalid={true} placeholder={"Placeholder..."} />

      <p>Placeholder</p>
      <Input type={"text"} placeholder={"Placeholder..."} />

      <h2>Enhancers</h2>
      <p>Left enhancer</p>
      <Input type={"text"} placeholder={"Placeholder..."} leftEnhancer={"$"} />

      <p>Left enhancer double</p>
      <Input
        type={"text"}
        placeholder={"Placeholder..."}
        leftEnhancer={[<div>$</div>, <div>€</div>]}
      />

      <p>Right enhancer</p>
      <Input type={"text"} placeholder={"Placeholder..."} rightEnhancer={"$"} />

      <p>Right enhancer double</p>
      <Input
        type={"text"}
        placeholder={"Placeholder..."}
        rightEnhancer={[<div>$</div>, <div>€</div>]}
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
          <div sx={{ color: focused ? "red" : "inherit" }}>$</div>,
          <div>€</div>
        ]}
        leftEnhancer={[<div>$</div>, <div>€</div>]}
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

export default {
  title: "Input"
};
