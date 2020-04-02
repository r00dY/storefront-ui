/** @jsx jsx */
import { jsx } from "@commerce-ui/core";
import { useToggle } from "@commerce-ui/core/Toggle";
import React, { useRef, useState } from "react";

import ItemRow from "./Selectables/ItemRow";
import Checkbox from "@commerce-ui/core/Checkbox";
import CheckboxSelectable from "./Selectables/Checkbox";

export const basic = () => {
  const [val, setVal] = useState(false);

  const [isToggled, setToggled] = useState(false);

  return (
    <>
      <h2>Checkbox uncontrolled</h2>

      <Checkbox onChange={console.log} defaultValue={true}>
        <ItemRow label={"Test"} />
      </Checkbox>

      <h2>Checkbox controlled</h2>

      <Checkbox value={isToggled} onChange={setToggled}>
        <ItemRow label={"Test"} />
      </Checkbox>

      <h2>Checkbox checkbox</h2>

      <Checkbox>
        <CheckboxSelectable
          label={"Test"}
          description={"Lorem ipsum dolor sit amet"}
        />
      </Checkbox>
    </>
  );
};

export default {
  title: "Checkbox"
};
