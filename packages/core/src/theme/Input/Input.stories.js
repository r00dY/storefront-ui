/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import Input from ".";
import Button from "../Button/Button";

export const unstyled = () => (
  <>
    <form action={"/action"} method={"post"}>
      <p>Type = text</p>
      <Input type={"text"} placeholder={"Placeholder..."} />

      <p>Type = password</p>
      <Input type={"password"} placeholder={"Placeholder..."} />

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

      <br />
      <Button type={"submit"}>submit</Button>
    </form>
  </>
);

export default {
  title: "Input"
};
