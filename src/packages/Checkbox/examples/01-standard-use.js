import React, { useState } from "react";
import { Checkbox$ } from "storefront-ui/Checkbox";
import { Checkbox } from "../../../../demo/theme/Checkbox";

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

      <p>Themed</p>

      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        overrides={{
          Checkmark: {
            style: ({ $theme }) => `
                                   background-color: ${
                                     $theme.colors.mono800.css
                                   };
                                `
          }
        }}
      >
        themed default (background)
      </Checkbox>
    </div>
  );
};
