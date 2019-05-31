import React from "react";
import { Button } from "./index";

export default () => {
  const enhancer = (
    <div
      style={{ width: "24px", height: "24px", backgroundColor: "currentColor" }}
    />
  );

  return (
    <div>
      <p>Primary button</p>
      <Button>Primary</Button>

      <p>Secondary button</p>
      <Button kind={"secondary"}>Secondary</Button>

      <p>Minimal button</p>
      <Button kind={"minimal"}>Minimal</Button>

      <p>Loading button</p>
      <Button isLoading>Loading</Button>

      <p>Disabled button</p>
      <Button disabled>Disabled</Button>

      <p>Start enhancer</p>
      <Button startEnhancer={enhancer}>Label</Button>

      <p>End enhancer</p>
      <Button endEnhancer={enhancer}>Label</Button>

      <p>Start+end enhancer</p>
      <Button startEnhancer={enhancer} endEnhancer={enhancer}>
        Label
      </Button>
    </div>
  );
};
