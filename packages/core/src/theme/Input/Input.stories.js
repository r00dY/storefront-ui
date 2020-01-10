/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import Input from ".";
import Button from "../Button/Button";

export const unstyled = () => (
  <>
    <form action={"/action"} method={"post"}>
      <p>Type = text</p>
      <Input type={"text"} />

      <p>Type = password</p>
      <Input type={"password"} />

      <p>Type = email</p>
      <Input type={"email"} name={"email"} required />

      <p>Type = search</p>
      <Input type={"search"} />

      <br />
      {/*<Button type={"submit"}>submit</Button>*/}
    </form>
  </>
);

export default {
  title: "Input"
};
