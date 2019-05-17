import React, { useState } from "react";
import { Radio, RadioGroup } from "storefront-ui/Radio";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  const [value, setValue] = useState("1");

  return (
    <div>
      <p>Standard</p>
      <RadioGroup
        name="radio group"
        onChange={e => setValue(e.target.value)}
        value={value}
      >
        <Radio value="1">First</Radio>
        <Radio
          value="2"
          description="This is a radio description, it gives a little more in-yo-face context about what this is."
        >
          Second
        </Radio>
        <Radio value="3">Third</Radio>
      </RadioGroup>
    </div>
  );
};
