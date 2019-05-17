import React, { useState } from "react";
import { Checkbox } from "storefront-ui/Checkbox";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <p>Standard</p>
      <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
        click me
      </Checkbox>
    </div>
  );
};
